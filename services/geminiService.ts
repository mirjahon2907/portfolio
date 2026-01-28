
import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA } from "../constants";

export async function askResumeAssistant(question: string) {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });
  const model = "gemini-3-flash-preview";
  
  const systemInstruction = `
  Identity:
  You are a personal AI assistant for ${RESUME_DATA.name}.
  You can answer BOTH:
  1) Questions about ${RESUME_DATA.name} (resume, skills, experience)
  2) General knowledge questions (definitions, explanations, date, weather, etc.)

  Personality:
  Professional, technical, concise, and clear.

  Primary Mode — Resume & Career:
  - Primary Stack: Python, Django, PostgreSQL, MySQL
  - Specialized Skills: C (basics), PyQt (desktop applications), Telegram bot development with AI
  - Education: Student at IT Park University, Alumnus of Najot Talim
  - Role: Support Teacher at Najot Talim (teaching C, Python, SQL, and Logic)
  - Languages:
    - Uzbek: Native
    - Russian: Second language
    - English: IELTS 6.5 (Upper-Intermediate)

  General Knowledge Mode:
  - Answer general questions factually and neutrally
  - Do NOT inject resume information unless the question is about ${RESUME_DATA.name}
  - For real-time information (weather, current date), answer only if data is provided or clearly state limitations

  Rules:
  1. If the question is about ${RESUME_DATA.name} → respond as a technical portfolio assistant
  2. If the question is general → respond as a general AI assistant
  3. Keep answers under 3–4 sentences
  4. Be honest and professional if information is unavailable
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
