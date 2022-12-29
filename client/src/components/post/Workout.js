import React, {useState, useEffect} from 'react';
import {useParams } from 'react-router-dom';
import Layout  from '../layout/Layout';
import EditPost from "./EditPost";
import Exercise from './Exercise'


const Workout = ({workouts, setWorkouts}) => {
    
    const [workout, setWorkout] = useState({ 
        workoutname: "",
        difficulty: "",
        exercises: [],
    },[]);
    const [isEditing, setIsEditing] = useState(false);
    const [exercisename, setExercisename] = useState("")
    const [description, setDescription] = useState("")
    const [repetitions, setRepetitions] = useState("")
 

    // console.log("workout is ")
    // console.log(JSON.stringify(workout))

    let {workoutId} = useParams();

    useEffect(() => {
        const match = workouts.find(workout => workout.id == workoutId)
        setWorkout(match)
    },[workouts, workoutId])
    
    function handleDeleteExercise(id) {
        fetch(`http://localhost:9292/exercises/${id}`, {
          method: "DELETE",
        });
    
        onDelete(id);
     }

    function onDelete(id) {
        const updatedExercises = workout.exercises.filter((exercise) => exercise.id !== id);
        //very importnat to update state this way
        console.log(JSON.stringify(updatedExercises))
        setWorkout({...workout, exercises: updatedExercises})
    }
//add if statement if workout lenght >0 

    function handleSubmit(e) {
        e.preventDefault();

    fetch('http://localhost:9292/exercises', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "exercisename": exercisename, 
            "description": description,
            "repetitions": repetitions,
            "workout_id": workoutId
        }),

    })
        .then((r) => r.json())
        .then((res)=>{
        const exercises = workout.exercises
        
        // add response to workout.exercises
        setExercisename("");
        setRepetitions("");
        setDescription("");
        setWorkout({...workout, exercises: [...exercises, res]})

        });
    
}
    function onUpdateMessage(updatedMessageObj) {
        const updatedExercises = workout.exercises.map((exercise) => {
          if (exercise.id === updatedMessageObj.id) {
            return updatedMessageObj;
          } else {
            return exercise;
          }
        });
        setWorkout({...workout, exercises: updatedExercises})
      }

    function handleUpdateMessage(updatedMessage) {
        onUpdateMessage(updatedMessage);
    }

    if (workout !== undefined ) {
    
        const exercises =  workout.exercises.map((exercise)=> (
            //create new comp and move the map and isEditing as a state variablez
        //instead of div make that a new componenet Exercise
        <Exercise handleUpdateMessage={handleUpdateMessage}
        handleDeleteExercise={handleDeleteExercise}
        exercise = {exercise}
        />
    ))
    return (
        <Layout>
            <div>
                <h2>Exercise Plan for {workout.workoutname} 💪 </h2> 
                {exercises} 
                <h2>Create new exercise for {workout.workoutname}!</h2>
                <div>
                    <span>Type of exercise </span>
                        <input
                            placeholder="type of exercise"
                            value={exercisename}
                            onChange={(event) => setExercisename(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Description </span>
                            <input 
                            placeholder="description " 
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Repetitions </span>
                            <input
                                placeholder="number of repetions"
                                value={repetitions}
                                onChange={(event) => setRepetitions(event.target.value)}
                            />
                    </div>
                    <div>
                        <button onClick={handleSubmit}>Add My Exercise!</button>
                        
                        
                    </div>
                    
            </div>
        </Layout>
         )}
 }

export default Workout