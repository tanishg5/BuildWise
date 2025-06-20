import React from 'react'
import { useParams } from 'react-router';
function MuscleSpecific() {
    const {params} = useParams();
    console.log(params);
  return (
    <div>MuscleSpecific</div>
  )
}

export default MuscleSpecific