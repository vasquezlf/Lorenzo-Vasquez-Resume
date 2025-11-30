import React, { useState, useRef, useEffect } from 'react';
import { Message } from '../types';
import { sendMessageToGemini } from '../services/geminiService';
import { INITIAL_GREETING } from '../constants';

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'init-1',
      role: 'model',
      text: INITIAL_GREETING,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const responseText = await sendMessageToGemini(messages, userMessage.text);

    const botMessage: Message = {
      id: (Date.now() + 1).toString(),
      role: 'model',
      text: responseText,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, botMessage]);
    setIsLoading(false);
  };

  const renderMessageContent = (text: string) => {
    return text.split('\n').map((line, i) => {
      const trimmed = line.trim();
      if (!trimmed) return <div key={i} className="h-3" />;

      const isList = /^[*-]\s/.test(trimmed);
      const isOrdered = /^\d+\.\s/.test(trimmed);
      
      let contentStr = trimmed;
      if (isList) contentStr = trimmed.replace(/^[*-]\s/, '');
      if (isOrdered) contentStr = trimmed.replace(/^\d+\.\s/, '');

      const parts = contentStr.split(/(\*\*.*?\*\*)/g).map((part, j) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={j} className="font-bold text-cyan-200">{part.slice(2, -2)}</strong>;
        }
        return part;
      });

      if (isList) {
        return (
          <div key={i} className="flex items-start gap-2 ml-1 mb-1">
            <span className="mt-2 w-1 h-1 rounded-full bg-cyan-400 shrink-0 opacity-80" />
            <span className="flex-1">{parts}</span>
          </div>
        );
      }

      if (isOrdered) {
         const num = trimmed.match(/^\d+/)?.[0] || '1';
         return (
          <div key={i} className="flex items-start gap-2 ml-1 mb-1">
             <span className="font-mono text-xs text-cyan-400/80 mt-1 shrink-0">{num}.</span>
             <span className="flex-1">{parts}</span>
          </div>
         )
      }

      return <p key={i} className="mb-1.5 last:mb-0 leading-relaxed">{parts}</p>;
    });
  };

  return (
    <div className="w-full max-w-3xl mx-auto transform hover:scale-[1.01] transition-transform duration-500">
      {/* Glassmorphic Container */}
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur-xl shadow-2xl ring-1 ring-white/5">
        
        {/* Terminal Header */}
        <div className="bg-white/5 border-b border-white/5 px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
            </div>
          </div>
          <div className="text-xs font-mono text-slate-400 opacity-60">gemini-2.5-flash-session</div>
        </div>

        {/* Chat Window */}
        <div className="h-[500px] overflow-y-auto p-6 space-y-6 scroll-smooth">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              <div
                className={`max-w-[85%] rounded-2xl px-5 py-4 text-sm shadow-md backdrop-blur-sm transition-all ${
                  msg.role === 'user'
                    ? 'bg-gradient-to-br from-blue-600 to-cyan-600 text-white rounded-br-sm border border-cyan-500/20'
                    : 'bg-white/5 text-slate-200 rounded-bl-sm border border-white/5'
                }`}
              >
                {renderMessageContent(msg.text)}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/5 rounded-2xl rounded-bl-sm px-5 py-4 border border-white/5 flex items-center gap-1.5 w-16 h-12">
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-bounce delay-200"></span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white/5 border-t border-white/5">
          <form onSubmit={handleSendMessage} className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
            <div className="relative flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about my AI projects, data skills, or experience..."
                className="flex-1 bg-slate-900/90 border border-white/10 rounded-xl px-5 py-4 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-0 focus:border-cyan-500/50 transition-all shadow-inner"
              />
              <button
                type="submit"
                disabled={isLoading || !input.trim()}
                className="bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white p-4 rounded-xl shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed transform active:scale-95"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;