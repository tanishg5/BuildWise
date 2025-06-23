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
// import { app } from './Firebase/Firebase'
// import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'

// import { getDatabase , ref , set } from "firebase/database"
// import Signup from './signup/signup'
// import Signin from './signup/Signin'
// const auth = getAuth(app);

// const db = getDatabase(app); // gives instance now can interact with the database

function App() {
  // const putData = () => {
  //   set(ref(db , "users/piyush") , {
  //     id : 1 , 
  //     name : "piyush" , 
  //     age : 21,
  //   }) // created reference in which pass database we made and set it
  // }

  // const signupuser = () => {
  //   createUserWithEmailAndPassword(auth , "55tanishqgupta@gmail.com" , "tanish@123").
  //   then((value)=>console.log(value));
  // }


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
       <Route path = '/food' element={<FoodAnalysis/>}></Route>
      </Routes>
      {/* <button onClick={signupuser}>click</button> */}
      {/* <Signup/>
      <Signin/> */}
    </>
  )
}
export default App
