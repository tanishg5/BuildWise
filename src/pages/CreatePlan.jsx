import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate } from "react-router";
import AddExercise from "./AddExercise";
import { exercise } from "../assets/assets";

function CreatePlan() {
  const [dayPlans, setDayPlans] = useState([
    { day: "Day 1", exercises: [] }
  ]);
  const addDays = () => {
    const size = dayPlans.length;
    setDayPlans((prev) => {
      const newPlans = [...prev, { day: `Day ${size + 1}`, exercises: [] }];
      return newPlans;
    });
    setSelectedDayIndex(size);
  };
  const [selectedDayIndex, setSelectedDayIndex] = useState(0);
  const [showexer, addExer] = useState(false);
  const [selectedExercises, setSelectedExercises] = useState([]);
  const [planName, setPlanName] = useState("");
  const [description, setDescription] = useState("");

  const removeExercise = (exerciseId) => {
    setDayPlans((prev) => prev.map((day, index) => {
      if (index === selectedDayIndex) {
        return {
          ...day,
          exercises: day.exercises.filter(ex => ex.id !== exerciseId)
        };
      }
      return day;
    }));
  };

  const extractAddExercises = (addedexercise) => {
    setSelectedExercises((prev) => {
      setDayPlans((prev) => prev.map((eachday, index) => {
        if(index!=selectedDayIndex) return eachday;
        const uniqueNew = addedexercise.filter(
          (ex) => !eachday.exercises.some((e) => e.id === ex.id)
        );
        return {
          ...eachday, exercises: [...eachday.exercises, ...uniqueNew]
        }
      }))
    });
  };
  

  // console.log(selectedExercises);
  // You need to flatten the array when updating selectedExercises.
  //  This will merge all exercises into a flat array instead of nested arrays.

  const handleSavePlan = () => {
    if (!planName.trim()) {
      alert("Please enter a plan name");
      return;
    }
    
    if (dayPlans.some(day => day.exercises.length === 0)) {
      alert("Please add exercises to all days");
      return;
    }
  };
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Create Custom Workout Plan</h1>
        <p className="text-gray-600">Design your own workout routine with exercises from our library</p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Plan name</label>
            <input 
              type="text" 
              name="planname" 
              id="planname"
              onChange={(e) => setPlanName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
            <input 
              type="text" 
              name="description" 
              id="description"
               onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
            />
          </div>
        </form>
      </div>

      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Workout days</h2>
          <button
            onClick={addDays}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2"
          >
            <span>Add Day</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-3 mb-6">
          {dayPlans.map((eachday, index) => (
            <button
              key={index}
              onClick={() => setSelectedDayIndex(index)}
              className={`px-4 py-2 rounded-md border transition-colors ${
                index === selectedDayIndex 
                  ? "bg-purple-600 text-white border-purple-600" 
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {eachday.day}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <button 
            onClick={() => addExer(true)}
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
          >
            Add exercise
          </button>
        </div>

        {showexer && (
          <AddExercise
            addedexercise={extractAddExercises}
            closeModal={addExer}
          />
        )}

        <div className="mt-6">
          {dayPlans[selectedDayIndex].exercises.length === 0 ? (
            <div className="text-center py-8 bg-gray-50 rounded-lg">
              <p className="text-gray-500">No exercises added to this day yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {dayPlans[selectedDayIndex].exercises.map((ex, index) => (
                <div key={index} className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden relative group">
                  <button 
                    onClick={() => removeExercise(ex.id)}
                    className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <img 
                    src={ex.gif_url} 
                    alt={ex.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{ex.name}</h3>
                    <p className="text-sm text-gray-600">{ex.chest}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="mt-8 flex justify-end">
        <button 
          onClick={handleSavePlan}
          className="bg-purple-600 text-white px-6 py-2.5 rounded-md hover:bg-purple-700 transition-colors flex items-center gap-2 font-medium shadow-sm"
        >
          <span>Save Plan</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default CreatePlan;
