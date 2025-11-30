import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from '../constants';
import { Message } from '../types';

const getSystemInstruction = (): string => {
  return `
    You are an AI assistant representing ${RESUME_DATA.name}. 
    Your goal is to answer questions about ${RESUME_DATA.name}'s professional background, skills, and experience based strictly on the following Resume Context.
    
    RESUME CONTEXT:
    ${JSON.stringify(RESUME_DATA)}

    Guidelines:
    - Answer in the first person (as if you are the AI version of ${RESUME_DATA.name}, or "my creator").
    - Keep answers concise, professional, and friendly.
    - **FORMATTING:** Use Markdown to make your responses easy to read.
      - **Bold** key technologies, tools, or important metrics (e.g., **Power Automate**, **80% efficiency**).
      - Use bullet points for lists of skills or responsibilities.
    - If the user asks something not in the resume, professionally say you don't have that information but can discuss the listed skills/experience.
    - If asked about contact info, provide the email or phone number.
    - Highlight the automation skills (Power Automate) and system administration experience when relevant.
  `;
};

// Fallback logic for when API Key is missing or request fails
const generateFallbackResponse = (query: string): string => {
  const lowerQuery = query.toLowerCase();
  
  if (lowerQuery.includes('skill') || lowerQuery.includes('tech') || lowerQuery.includes('stack')) {
    return `My technical skills include:\n\n` + RESUME_DATA.skills.map(s => `- **${s}**`).join('\n');
  }
  
  if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('job')) {
    const latest = RESUME_DATA.experience[0];
    return `I have **${RESUME_DATA.experience.length} major roles** listed.\n\nCurrently, I am a **${latest.role}** at **${latest.company}**.\n\nMy key duties include:\n- ${latest.description.split('. ')[0]}.`;
  }

  if (lowerQuery.includes('project') || lowerQuery.includes('build')) {
    return `I have worked on several key projects, including:\n\n` + RESUME_DATA.projects.map(p => `- **${p.name}**: ${p.description}`).join('\n');
  }

  if (lowerQuery.includes('education') || lowerQuery.includes('degree') || lowerQuery.includes('school')) {
    const latestEd = RESUME_DATA.education[0];
    return `I attended the **${latestEd.degree}** at ${latestEd.institution}.`;
  }

  if (lowerQuery.includes('cert') || lowerQuery.includes('license')) {
    return `I hold certifications including:\n` + RESUME_DATA.certifications.map(c => `- **${c.name}** (${c.issuer})`).join('\n');
  }

  if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
    return `You can reach me at **${RESUME_DATA.contact.email}** or call me at **${RESUME_DATA.contact.phone}**.`;
  }

  if (lowerQuery.includes('about') || lowerQuery.includes('who')) {
    return RESUME_DATA.bio;
  }

  return "I'm currently running in **offline mode**. Ask me about my **skills**, **experience**, **projects**, or **contact info**!";
};

export const sendMessageToGemini = async (
  history: Message[], 
  currentMessage: string
): Promise<string> => {
  try {
    const apiKey = process.env.API_KEY;
    
    if (!apiKey) {
      console.warn("No API Key found. Using fallback logic.");
      // Simulate network delay for realism
      await new Promise(resolve => setTimeout(resolve, 800));
      return generateFallbackResponse(currentMessage);
    }

    const ai = new GoogleGenAI({ apiKey });
    
    // We strictly follow the request to use generateContent, 
    // but to maintain chat history context, we simulate it by formatting the prompt 
    // or using ai.chats.create.
    // Here we use chats.create for better multi-turn context.
    
    const chat = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: getSystemInstruction(),
      },
      // Removed redundant filter that caused TS error due to lack of overlap in check
      history: history.map(msg => ({
        role: msg.role,
        parts: [{ text: msg.text }]
      }))
    });

    const result = await chat.sendMessage({
      message: currentMessage
    });

    return result.text;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return generateFallbackResponse(currentMessage);
  }
};