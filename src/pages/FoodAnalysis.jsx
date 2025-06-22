import React, { useState } from 'react';
import { FiUploadCloud } from 'react-icons/fi';
import { ImSpinner8 } from 'react-icons/im';

function FoodAnalyzer() {
  const [file, setFile] = useState(null);
  const [nutrition, setNutrition] = useState(null);
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState(null);

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64 = reader.result.split(',')[1];
        resolve(base64);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setPreview(URL.createObjectURL(selectedFile));
      setNutrition(null);
    }
  };

  const analyzeFoodImage = async () => {
    if (!file) return;
    setLoading(true);

    try {
      const base64 = await fileToBase64(file);

      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1/models/gemini-1.5-flash:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            contents: [
              {
                parts: [
                  {
                    inlineData: {
                      mimeType: 'image/jpeg',
                      data: base64,
                    },
                  },
                  {
                    text: `This is a food image. Identify the food and return approximate nutrition details in this JSON format:
{
  "food": "...",
  "calories": "...",
  "carbohydrates": "...",
  "protein": "...",
  "fat": "..."
}`,
                  },
                ],
              },
            ],
          }),
        }
      );

      const data = await response.json();
      const text = data.candidates?.[0]?.content?.parts?.[0]?.text || '{}';
      const json = JSON.parse(text.match(/{[\s\S]*}/)?.[0]);
      setNutrition(json);
    } catch (error) {
      console.error(error);
      alert('Error analyzing food');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            🍎 AI Food Nutrition Analyzer
          </h1>
          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Upload a food image
            </label>
            <div className="flex items-center justify-center w-full">
              <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition">
                {preview ? (
                  <img src={preview} alt="Preview" className="h-full w-full object-cover rounded-lg" />
                ) : (
                  <div className="flex flex-col items-center justify-center pt-5 pb-6">
                    <FiUploadCloud className="w-8 h-8 mb-3 text-gray-500" />
                    <p className="mb-2 text-sm text-gray-500"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                    <p className="text-xs text-gray-500">JPG, PNG, etc.</p>
                  </div>
                )}
                <input 
                  type="file" 
                  accept="image/*" 
                  onChange={handleFileChange} 
                  className="hidden" 
                />
              </label>
            </div>
          </div>

          <button
            onClick={analyzeFoodImage}
            disabled={loading || !file}
            className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-colors ${
              loading || !file ? 'bg-gray-400 cursor-not-allowed' : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <ImSpinner8 className="animate-spin h-5 w-5 text-white mr-3" />
                Analyzing...
              </span>
            ) : (
              'Analyze Nutrition'
            )}
          </button>

          {nutrition && (
            <div className="mt-6 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-4">{nutrition.food}</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500">Calories</div>
                  <div className="text-lg font-semibold text-green-600">{nutrition.calories}</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500">Carbs</div>
                  <div className="text-lg font-semibold text-blue-600">{nutrition.carbohydrates}</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500">Protein</div>
                  <div className="text-lg font-semibold text-red-600">{nutrition.protein}</div>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <div className="text-sm text-gray-500">Fat</div>
                  <div className="text-lg font-semibold text-yellow-600">{nutrition.fat}</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FoodAnalyzer;