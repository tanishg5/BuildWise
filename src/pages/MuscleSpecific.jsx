import React from 'react'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import UserContext from '../context/UserContext';
function MuscleSpecific() {
    const { speciality } = useParams();
    const {exercise} = useContext(UserContext);
  return (
     <>
       <div>
        {
            Object.entries(exercise.exercises).map(([muscleg , exerciseArray])=>(
               <div>
                { muscleg === speciality && (
                      <div>
                         {
                            exerciseArray.map((item  , index)=>(
                                 <div key = {index}>
                                    <img src={item.gif_url} alt="" />
                                    <p>{item.muscle}</p>
                                    <p>{item.name}</p>
                                    <p>{item.description1}</p>
                                    <p>{item.description2}</p>
                                 </div>
                            ))
                         }
                      </div>
                )
                }
            </div>
            ))
        }
       </div>
     </>
  )
}

export default MuscleSpecific