import React, { useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import CreatePlan from "./CreatePlan";
function AddExercise({ addedexercise , closeModal }) {
  const { exercise } = useContext(UserContext);
  const [allexercise, addexercise] = useState([]);
  const selectedexercise = (eachexercise) => {
    addexercise((prev) => {
      const alreadyExists = prev.some((ex) => ex.id === eachexercise.id);
      if (!alreadyExists) {
        return [...prev, eachexercise];
      }
      return prev;
    });
  };
  //console.log(allexercise);
  useEffect(() => {
    addedexercise(allexercise);
  }, [allexercise]);
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-6xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Add Exercises</h2>
          <button onClick={()=>closeModal(false)} className="text-gray-500 hover:text-gray-700">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {Object.entries(exercise.exercises).map(
            ([muscleGroup, exercisearray]) => (
              <div key={muscleGroup} className="col-span-full">
                <h3 className="text-xl font-semibold text-purple-500 mb-4">
                  {muscleGroup}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {exercisearray.map((eachexercise, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                    >
                      <div className="relative">
                        <img
                          src={eachexercise.gif_url}
                          alt={eachexercise.name}
                          className="w-full h-40 object-cover"
                        />
                        <div className="absolute top-0 right-0 bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-3 py-1 rounded-bl-lg text-sm font-medium">
                          {muscleGroup}
                        </div>
                      </div>
                      <div className="p-4">
                        <h4 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-1">
                          {eachexercise.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                          {eachexercise.description1}
                        </p>
                        <button
                          onClick={() => selectedexercise(eachexercise)}
                          className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-md font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                          <span>Add Exercise</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

export default AddExercise;
