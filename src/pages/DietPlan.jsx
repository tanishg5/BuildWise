import React from "react";
import { useState } from "react";
import { GoogleGenerativeAI } from '@google/generative-ai';
import ReactMarkdown from 'react-markdown'
function DietPlan() {  

  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; // use REACT_APP_ prefix if using CRA
  const genAI = new GoogleGenerativeAI(API_KEY);
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("Male");
  const [activitylevel, setActivityLevel] = useState("Sedentary");
  const [goal, setGoal] = useState("Lose Weight");
  const [diet, setDiet] = useState("Non Vegetarian");
  const [plan , getDietPlan] = useState("");
  

  const generateDietPlan = async ({ height, weight, age, gender, goal, activitylevel, diet }) => {
    const prompt = `Generate a detailed  diet plan based on:
    
  Height: ${height}cm  
  Weight: ${weight}kg  
  Age: ${age}  
  Gender: ${gender}  
  Goal: ${goal} weight  
  Activity Level: ${activitylevel}  
  Diet Preference: ${diet}
  
  Format the response with these sections using markdown:
  
  # Daily Meal Schedule
  - List meal timings and portion suggestions
  
  # Food Recommendations
  ## Proteins
  - List protein sources
  ## Carbohydrates
  - List carb sources
  ## Healthy Fats
  - List fat sources
  
  # Foods to Avoid
  - List foods to avoid
  
  # Quick Meal Ideas
  ## Breakfast Options
  - List 2-3 quick breakfast ideas
  ## Lunch Options
  - List 2-3 quick lunch ideas
  ## Dinner Options
  - List 2-3 quick dinner ideas
  ## Healthy Snacks
  - List 2-3 snack ideas
  
  Keep suggestions practical and easy to follow.  
  Use - for bullet points.`;
  
    try {
      const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
      const result = await model.generateContent(prompt);
      const response = result.response;
      const dietPlan = response.text();
      getDietPlan(dietPlan);
      return dietPlan;
    } catch (err) {
      console.error("Gemini Error:", err);
      return "Failed to fetch diet plan.";
    }
  };
    
    const handleSubmit = async (e) => {
      e.preventDefault();
      const dietResponse = await generateDietPlan({ height, weight, age, gender, goal, activitylevel, diet });
      getDietPlan(dietResponse);
    }
    
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-purple-800 mb-4">
            Personalized AI Diet Planner
          </h1>
          <h2 className="text-xl text-gray-600">
            Get a customized nutrition plan tailored to your goals, preferences,
            and lifestyle
          </h2>
        </div>

        {/* Form Section */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <h1 className="text-2xl font-bold text-gray-800 mb-6">
              Enter Your Details
            </h1>
            
            <form onSubmit={handleSubmit} >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Weight */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Weight (kg)
                  </label>
                  <input
                    onChange={(e) => setWeight(e.target.value)}
                    type="number"
                    value={weight}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter Your Weight"
                    required
                  />
                </div>

                {/* Height */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Height (cm)
                  </label>
                  <input
                    onChange={(e) => setHeight(e.target.value)}
                    type="number"
                    value={height}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter Your Height"
                    required
                  />
                </div>

                {/* Age */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Age
                  </label>
                  <input
                    onChange={(e) => setAge(e.target.value)}
                    type="number"
                    value={age}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                    placeholder="Enter Your Age"
                    required
                  />
                </div>

                {/* Gender */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
                </div>

                {/* Activity Level */}
                <div className="md:col-span-2">
                  <label className="block text-gray-700 font-medium mb-2">
                    Activity Level
                  </label>
                  <select
                    name="activity-level"
                    value={activitylevel}
                    onChange={(e) => setActivityLevel(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="Sedentary">Sedentary (Little/No Exercise)</option>
                    <option value="lightly">Light Active (1-3 days/week)</option>
                    <option value="moderate">Moderate (3-5 days/week)</option>
                    <option value="active">Active (6-7 days/week)</option>
                    <option value="veryactive">Very Active (Athletic/Physical Job)</option>
                  </select>
                </div>

                {/* Goal */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Goal
                  </label>
                  <select
                    name="weight"
                    value={goal}
                    onChange={(e) => setGoal(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="lose">Lose Weight</option>
                    <option value="gain">Gain Weight</option>
                    <option value="maintain">Maintain Weight</option>
                  </select>
                </div>

                {/* Diet Preference */}
                <div>
                  <label className="block text-gray-700 font-medium mb-2">
                    Diet Preference
                  </label>
                  <select
                    name="diet"
                    value={diet}
                    onChange={(e) => setDiet(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  >
                    <option value="non-veg">Non Vegetarian</option>
                    <option value="veg">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                  </select>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-4 rounded-lg transition duration-200 transform hover:scale-105"
                >
                  Calculate Your Plan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
        { plan && (
          <>
          <div>Generate Diet Plan For You</div>
           {plan}
          </>
        )
        }
    </div>
  );
}

export default DietPlan;