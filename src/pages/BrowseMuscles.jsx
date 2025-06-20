import React, { useState } from 'react';
import { muscles } from '../assets/muscles';
import { useNavigate } from 'react-router';
function BrowseMuscles() {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Target Your <span className="text-purple-600">Muscle Groups</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a muscle group to discover targeted exercises and build your perfect workout routine
          </p>
        </div>

        {/* Muscle Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
          {Object.entries(muscles).map(([key, exerciseData]) => (
            <div
              key={key}
              className={`relative bg-white rounded-2xl shadow-xl overflow-hidden transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl ${
                hoveredCard === key ? 'ring-4 ring-purple-400' : ''
              }`}
              onMouseEnter={() => setHoveredCard(key)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Muscle Image with Gradient Overlay */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={exerciseData.image}
                  alt={`${key} muscle group`}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h2 className="absolute bottom-4 left-4 text-2xl font-bold text-white capitalize">
                  {key}
                </h2>
              </div>

              {/* Muscle Details */}
              <div className="p-6">
                <div className="flex items-center mb-3">
                  <span className="inline-block px-3 py-1 rounded-full bg-purple-100 text-purple-800 text-sm font-medium">
                    {exerciseData.level}
                  </span>
                </div>

                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Strength Focus</h3>
                    <p className="text-lg font-semibold text-gray-900">{exerciseData.strength}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Recommended Exercises</h3>
                    <p className="text-gray-700">{exerciseData.exercises}</p>
                  </div>
                </div>

                <button onClick={()=>navigate(`/browsemuscles/${key}`)}  className="mt-6 w-full py-2 px-4 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors duration-300">
                  View Exercises
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BrowseMuscles;