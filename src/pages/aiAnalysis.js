import { GoogleGenerativeAI } from '@google/generative-ai';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // use REACT_APP_ prefix if using CRA

const genAI = new GoogleGenerativeAI(API_KEY);

export const generateGeminiResponse = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

    const prompt = `Identify the food in this ${text} and provide the estimated macronutrients (calories, protein, carbs, fats). Format the response  with fields: foodName, calories, protein, carbs, fats.`

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    return summary;
  } catch (err) {
    console.error("Gemini Error:", err);
    return "Failed to fetch response from Gemini.";
  }
};