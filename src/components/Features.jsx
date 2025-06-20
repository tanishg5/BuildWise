import React from 'react'
import { Link } from 'react-router'

function Features() {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-white py-16 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Find Your Perfect Fit
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-purple-600 mb-6">
          Start Your Fitness Journey Today
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Discover personalized workout plans, targeted exercises, and convenient locations to achieve your fitness goals.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Muscle Groups Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Muscle Groups" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Muscle Groups</h3>
            <Link to="/browsemuscles" className="block">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                Explore By Muscles
              </button>
            </Link>
          </div>
        </div>

        {/* Exercises Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1593079831268-3381b0db4a77?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGd5bXxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Exercises" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Exercises</h3>
            <Link to="/exercises" className="block">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                Explore By Exercises
              </button>
            </Link>
          </div>
        </div>

        {/* Workout Plans Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d29ya291dHxlbnwwfHwwfHx8MA%3D%3D" 
              alt="Workout Plans" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">My Workout Plans</h3>
            <Link to="/myplan" className="block">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                Explore My Workout Plans
              </button>
            </Link>
          </div>
        </div>

        {/* Create own plan Create Custom Plans */}

        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1643369283064-f9146f94c6c2?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNyZWF0ZSUyMGN1c3RvbSUyMHdvcmtvdXQlMjBwbGFufGVufDB8fDB8fHww" 
              alt="Workout Plans" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Create Workout Plans</h3>
            <Link to="/createplan" className="block">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                Explore Create Workout Plans
              </button>
            </Link>
          </div>
        </div>
         
        {/* AI Diet Plans Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGlldHxlbnwwfHwwfHx8MA%3D%3D" 
              alt="AI Diet Plans" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Diet Plans</h3>
            <Link to="/dietplan" className="block">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                Explore AI Diet Plans
              </button>
            </Link>
          </div>
        </div>

        {/* AI Food Analysis Card */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl">
          <div className="relative h-48">
            <img 
              src="https://images.unsplash.com/photo-1749250395965-e52b1f6e5aca?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZvb2QlMjBhbmFseXNpc3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="AI Food Analysis" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className="p-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">AI Food Analysis</h3>
            <Link to="/foodanalysis" className="block">
              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover:from-indigo-700 hover:to-purple-700 transition-all duration-300 transform hover:-translate-y-1">
                Explore AI Food Analysis
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features