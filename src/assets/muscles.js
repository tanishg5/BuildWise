import Chest from './Chest.avif'
import Back from './Back.avif'
import Core from './Core.avif'
import legs from './legs.avif'
import shoulders from './shoulders.avif'
import arms from './arms.avif'
export const muscles = {
       "chest" : {
         "image" : Chest,
         "strength" : "Upper body Strength",
         "level" : "Intermediate", 
         "exercises": "15"
       },
       "back" : {
         "image" : Back,
         "strength" : "Posture & Spine Support",
         "level" : "Intermediate", 
         "exercises": "12"
       },
       "legs" : {
         "image" : legs,
         "strength" : "Power & Lower-Body Balance",
         "level" : "Advanced", 
         "exercises": "20"
       },
       "shoulders" : {
         "image" : shoulders,
         "strength" : "Broad & Rounded Shoulders",
         "level" : "Intermediate", 
         "exercises": "15"
       },
       "arms" : {
         "image" : arms,
         "strength" : "Arm Strength",
         "level" : "Advanced", 
         "exercises": "20"
       },
       "core" : {
         "image" : Core,
         "strength" : " Core Strength & Stability",
         "level" : "All Levels", 
         "exercises": "15"
       }
}