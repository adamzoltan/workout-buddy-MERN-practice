import React, {useEffect, useState} from 'react'
import { useWorkoutContext } from '../hooks/useWorkoutsContext'

//components
import WorkoutDetails from '../components/WorkoutDetails'
import WorkoutForm from '../components/WorkoutForm'

const Home = () => {
  const {workouts, dispatch} = useWorkoutContext()
  
  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await fetch('/api/workouts')
      const data = await response.json()

      if (response.ok) {
        dispatch({type: 'SET_WORKOUTS', payload: data})
      }
    }
    fetchWorkouts()
  }, [])
  return (
    <div className='home'>
      <div className='workouts'>
        {workouts && workouts.map((workout)=>(
          <WorkoutDetails key={workout._id} workout={workout}></WorkoutDetails>
        ))}
      </div>
      <WorkoutForm></WorkoutForm>
    </div>
  )
}

export default Home