import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import UserContext from "../context/UserContext";
import { FaEye, FaClock, FaLink, FaDumbbell } from "react-icons/fa";
import { GiMuscleUp } from "react-icons/gi";

function MuscleSpecific() {
  const { speciality } = useParams();
  const { exercise } = useContext(UserContext);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500 capitalize mb-3 flex items-center justify-center gap-2">
          <GiMuscleUp className="text-purple-500" />
          {speciality} Exercises
          <FaDumbbell className="text-purple-600" />
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Discover the best exercises to target your {speciality} muscles
          effectively.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {Object.entries(exercise.exercises).map(
          ([muscleg, exerciseArray]) =>
            muscleg === speciality &&
            exerciseArray.map((item, index) => (
              <div
                key={`${item.name}-${index}`}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
              >
                <div className="relative overflow-hidden h-56">
                  <img
                    src={item.gif_url}
                    alt={`Demonstration of ${item.name}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <span className="inline-flex items-center bg-purple-600 text-white text-xs px-3 py-1 rounded-full">
                      <GiMuscleUp className="mr-1" />
                      {item.muscle}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="text-xl font-bold text-gray-800 capitalize line-clamp-1">
                      {item.name}
                    </h3>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-gray-500">
                      <FaClock className="w-4 h-4 mr-2 text-purple-500" />
                      <span>
                        Muscle Group:{" "}
                        <span className="font-medium text-gray-700">
                          {muscleg}
                        </span>
                      </span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500">
                      <FaLink className="w-4 h-4 mr-2 text-purple-500" />
                      <span>
                        Target:{" "}
                        <span className="font-medium text-gray-700">
                          {item.muscle}
                        </span>
                      </span>
                    </div>

                    <div className="pt-3 border-t border-gray-100">
                      <p className="text-gray-600 line-clamp-2 mb-2">
                        {item.description1}
                      </p>
                      {item.description2 && (
                        <p className="text-gray-600 line-clamp-2">
                          {item.description2}
                        </p>
                      )}
                    </div>

                    <button className="mt-4 w-full flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white font-medium py-2 px-4 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
                      <FaEye />
                      View Exercise Details
                    </button>
                  </div>
                </div>
              </div>
            ))
        )}
      </div>
    </div>
  );
}

export default MuscleSpecific;
