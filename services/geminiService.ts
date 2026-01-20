
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

export async function askResumeAssistant(question: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
    Identity: Technical Portfolio Assistant for ${RESUME_DATA.name}.
    Personality: Technical, concise, and professional.
    
    Technical Profile:
    - Primary Stack: Python, Django, PostgreSQL, MySQL.
    - Specialized Skills: C (basics), PyQt (desktop apps), Telegram Bot development with AI.
    - Education: Student at IT Park University, Alumnus of Najot Talim.
    - Role: Support Teacher at Najot Talim (teaching C, Python, SQL, and Logic).
    
    Guidelines:
    1. Focus on backend engineering and automation.
    2. Highlight his ability to teach complex concepts like logic and PyQt.
    3. Keep answers under 3-4 sentences.
    4. If asked about his experience, mention both his engineering work and his teaching mentorship.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: question,
      config: {
        systemInstruction,
        temperature: 0.4,
      },
    });

    return response.text || "Connection failed. Please retry.";
  } catch (error) {
    return "The server is currently unreachable. Please try again later.";
  }
}
