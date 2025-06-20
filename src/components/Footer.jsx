import React from 'react'
import logo from '../assets/logo.png'
import { FaInstagram, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa'

function Footer() {
  return (
    <footer className="relative px-4 py-12 text-white bg-gradient-to-b from-gray-900 to-gray-800 sm:px-8 lg:px-16">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>

      <div className="container relative mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex gap-3 items-center">
              <div className="p-2 bg-gradient-to-br from-purple-600 to-indigo-500 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                <img src={logo} alt="BuildWise Logo" className="w-10 h-10" />
              </div>
              <h2 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
                BuildWise
              </h2>
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Your personal guide to fitness excellence. Transform your body, transform your life.
            </p>
            <p className="text-sm text-gray-400 italic">
              Created by Tanish Gupta
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h2 className="mb-4 text-lg font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {['Home', 'Exercises', 'Workout Plans', 'Diet Plans', 'Find Gyms'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h2 className="mb-4 text-lg font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Connect
            </h2>
            <ul className="space-y-2">
              {[
                { icon: FaInstagram, name: 'Instagram' },
                { icon: FaLinkedin, name: 'LinkedIn' },
                { icon: FaTwitter, name: 'Twitter' },
                { icon: FaFacebook, name: 'Facebook' },
                { icon: FaYoutube, name: 'YouTube' }
              ].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 group"
                  >
                    <item.icon className="w-4 h-4 mr-2 text-purple-400 group-hover:text-purple-300 transition-colors duration-300" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Section */}
          <div>
            <h2 className="mb-4 text-lg font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
              Legal
            </h2>
            <ul className="space-y-2">
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'GDPR'].map((item, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="flex items-center text-sm text-gray-300 hover:text-white transition-all duration-300 hover:translate-x-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-500 rounded-full mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="pt-6 mt-8 text-center border-t border-gray-700">
          <p className="text-sm text-gray-400">
            © 2024 BuildWise. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer