
import { GoogleGenAI } from "@google/genai";

export const getGeminiResponse = async (userPrompt: string) => {
  // process.env байхгүй үед алдаа заахаас сэргийлэх
  const apiKey = typeof process !== 'undefined' ? process.env.API_KEY : (window as any).process?.env?.API_KEY;
  
  if (!apiKey) {
    console.error("Gemini API Key is missing. Check your environment configuration.");
    return "Уучлаарай, систем тохиргооны алдаа гарлаа. Та утсаар холбогдоно уу.";
  }

  const ai = new GoogleGenAI({ apiKey });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: `You are a technical consultant for "Bat Standart" (Бат Стандарт ХХК), a leading Mongolian company specializing in reinforced concrete product manufacturing for high-voltage electrical infrastructure (35/110/220kV). 
      Your task is to answer user queries about anchor tower foundations, substation equipment bases, and cable tray systems in Mongolian. 
      The company's tagline is "Төмөр бетон эдлэл үйлдвэрлэл" (Reinforced Concrete Product Manufacturing).
      Be professional, technical, and emphasize durability, quality, and compliance with MNS standards.
      User query: ${userPrompt}`,
      config: {
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Уучлаарай, хариулт авахад алдаа гарлаа. Та утсаар холбогдоно уу.";
  }
};
