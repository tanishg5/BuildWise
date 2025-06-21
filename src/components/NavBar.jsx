import { NavLink, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png"; // Adjust as per your folder structure
import { useState } from "react";

function NavBar() {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-white to-purple-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          {/* <div className="flex-shrink-0">
            <img
              onClick={() => navigate("/")}
              className="h-16 md:h-24 w-auto cursor-pointer transition-all duration-300 hover:scale-105 hover:drop-shadow-lg"
              src={logo}
              alt="Logo"
            />
          </div> */}

          {/* Logo */}
<div className="flex-shrink-0 flex items-center">
  <button
    onClick={() => navigate("/")}
    className="focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded-lg transition-all duration-300 hover:scale-105 active:scale-95"
    aria-label="Go to homepage"
  >
    <img
      className="h-14 md:h-20 w-auto cursor-pointer drop-shadow-sm hover:drop-shadow-md"
      src={logo}
      alt="Company Logo"
    />
  </button>
  {/* Optional: Add text logo alongside the image */}
  <span 
    className="ml-3 text-xl md:text-2xl font-bold bg-gradient-to-r from-purple-700 to-indigo-400 bg-clip-text text-transparent hidden sm:block"
  >
    BuildWise
  </span>
</div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-lg text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none transition-colors duration-200"
            >
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:block flex-1">
            <ul className="flex items-center justify-center space-x-8">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200
                    ${
                      isActive
                        ? "text-purple-600 bg-purple-50 shadow-md"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow-sm"
                    }`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/exercises"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200
                    ${
                      isActive
                        ? "text-purple-600 bg-purple-50 shadow-md"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow-sm"
                    }`
                  }
                >
                  Exercises
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/myplan"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200
                    ${
                      isActive
                        ? "text-purple-600 bg-purple-50 shadow-md"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow-sm"
                    }`
                  }
                >
                  My Plans
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dietplan"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200
                    ${
                      isActive
                        ? "text-purple-600 bg-purple-50 shadow-md"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow-sm"
                    }`
                  }
                >
                  AI Diet Plans
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/foodanalysis"
                  className={({ isActive }) =>
                    `px-4 py-2 rounded-lg text-lg font-semibold transition-all duration-200
                    ${
                      isActive
                        ? "text-purple-600 bg-purple-50 shadow-md"
                        : "text-gray-700 hover:text-purple-600 hover:bg-purple-50 hover:shadow-sm"
                    }`
                  }
                >
                  AI Food Analysis
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Navigation Links */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"}`}>
          <div className="px-2 pt-2 pb-3 space-y-2 sm:px-3 bg-white rounded-lg shadow-lg mt-2">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200
                ${
                  isActive
                    ? "text-purple-600 bg-purple-50 shadow-sm"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/exercises"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200
                ${
                  isActive
                    ? "text-purple-600 bg-purple-50 shadow-sm"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`
              }
            >
              Exercises
            </NavLink>
            <NavLink
              to="/myplan"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200
                ${
                  isActive
                    ? "text-purple-600 bg-purple-50 shadow-sm"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`
              }
            >
              My Plans
            </NavLink>
            <NavLink
              to="/dietplan"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200
                ${
                  isActive
                    ? "text-purple-600 bg-purple-50 shadow-sm"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`
              }
            >
              AI Diet Plans
            </NavLink>
            <NavLink
              to="/foodanalysis"
              className={({ isActive }) =>
                `block px-4 py-3 rounded-lg text-lg font-semibold transition-all duration-200
                ${
                  isActive
                    ? "text-purple-600 bg-purple-50 shadow-sm"
                    : "text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                }`
              }
            >
              AI Food Analysis
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
