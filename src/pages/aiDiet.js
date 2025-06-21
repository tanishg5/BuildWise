

export const generateGeminiResponse = async (text) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });

   // const prompt = Summarize the following text:\n\n${text};

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const summary = response.text();

    return summary;
  } catch (err) {
    console.error("Gemini Error:", err);
    return "Failed to fetch response from Gemini.";
  }
};