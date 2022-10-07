import React, {useState, useEffect} from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Layout  from '../layout/Layout';


const Workout = ({workouts}) => {

    const [workout, setWorkout] = useState({ 
        workoutname: "",
        difficulty: "",
        exercises: []
    },[]);


    let {workoutId} = useParams();

    useEffect(() => {
        const match = workouts.find(workout => workout.id == workoutId)
        //console.log(match.exercises)
        setWorkout(match)
    }, [workouts])
    
    function handleDeleteExercise(id) {
        fetch(`http://localhost:9292/exercises/${id}`, {
          method: "DELETE",
        });
    
        onDelete(id);
     }

    function onDelete(id) {
        const updatedExercises = workout.exercises.filter((exercise) => exercise.id !== id);
        //very importnat to update state this way
        setWorkout({...workout, exercises: updatedExercises})
    }

    const exercises =  workout.exercises.map((exercise)=>
        
        <div>
            <p> 💪 <b>Exercise: </b> {exercise.exercisename}</p>
            <p> <b>Description: </b> {exercise.description}</p>
            <p> <b>Repetitions: </b> {exercise.repetitions}</p>
            <button onClick={()=>handleDeleteExercise(exercise.id)}>killed it!</button> 
            <br/>
            <br/>
        </div>
    )
    return (
        <Layout>
            <div>
                <h2>Exercise Plan for {workout.workoutname} 💪 </h2>
                {exercises}
                
            </div>
        </Layout>
         )
 }

export default Workout