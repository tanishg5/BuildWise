import React from 'react'
import { useContext } from 'react'
import UserContext from '../context/UserContext'
import { Navigate } from 'react-router';
import { useNavigate } from 'react-router';

function Exercises() {
  const {exercise} = useContext(UserContext);
  const navigate = useNavigate();
  
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800 bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
        Exercise Library
      </h1>

      {Object.entries(exercise.exercises).map(([muscleGroup, exercisearray]) => (
        <div key={muscleGroup} className="mb-8">
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exercisearray.flatMap((ex) => (
              <li key={ex.id} className="bg-white shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-100 flex flex-col">
                <div className="relative">
                  <img 
                    src={ex.gif_url} 
                    alt={ex.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-gradient-to-r from-purple-600 to-purple-600 text-white px-4 py-1 rounded-bl-lg text-sm font-medium">
                    {muscleGroup}
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold mb-2 text-gray-800">{ex.name}</h3>
                  <div className="space-y-2 mb-4 flex-grow">
                    <p className="text-gray-600 text-sm">{ex.description1}</p>
                    <p className="text-gray-600 text-sm">{ex.description2}</p>
                  </div>
                  <button 
                    onClick={() => navigate("/createplan")}
                    className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-2 px-4 rounded-md font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg mt-auto"
                  >
                    <span>Add To Custom Plan</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

export default Exercises