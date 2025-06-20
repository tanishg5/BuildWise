import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Home from './pages/Home'
import Exercises from './pages/Exercises'
import BrowseMuscles from './pages/BrowseMuscles'
import MyPlan from './pages/MyPlan'
import DietPlan from './pages/DietPlan'
import { Route , Routes } from 'react-router'
import NavBar from './components/NavBar'
import CreatePlan from './pages/CreatePlan'
import AddExercise from './pages/AddExercise'
import FoodAnalysis from './pages/FoodAnalysis'
import MuscleSpecific from './pages/MuscleSpecific'
function App() {
  

  return (
    <>
    <NavBar/>
      <Routes>
       <Route path = '/' element={<Home/>}></Route>
       <Route path = '/exercises' element={<Exercises/>}></Route>
       <Route path = '/browsemuscles' element={<BrowseMuscles/>}> </Route>
       <Route path=  '/browsemuscles/:speciality' element={<MuscleSpecific/>}></Route>
       <Route path = '/myplan' element={<MyPlan/>}></Route>
       <Route path = '/dietplan' element={<DietPlan/>}></Route>
       <Route path = '/foodanalysis' element={<FoodAnalysis/>}></Route>
       <Route path = '/createplan' element={<CreatePlan/>}></Route>
       <Route path = '/addexercise' element={<AddExercise/>}></Route>
      </Routes>
    </>
  )
}

export default App
