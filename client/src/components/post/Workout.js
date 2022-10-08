import React, {useState, useEffect} from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import Layout  from '../layout/Layout';


const Workout = ({workouts}) => {

    const [workout, setWorkout] = useState({ 
        workoutname: "",
        difficulty: "",
        exercises: [],
    },[]);
    const [exercise, setExercise] = useState({})
    const [exercisename, setExercisename] = useState("")
    const [description, setDescription] = useState("")
    const [repetitions, setRepetitions] = useState("")
 

    // console.log("workout is ")
    // console.log(JSON.stringify(workout))

    let {workoutId} = useParams();

    useEffect(() => {
        const match = workouts.find(workout => workout.id == workoutId)
        setWorkout(match)
        
    }, [workout])
    
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
            "repetitions": repetitions
        }),

    })
        .then((r) => r.json())
        .then(()=>{
        
        setExercisename("");
        setRepetitions("");
        setDescription("");
        });
    
}
    // useEffect(() => {
    //     fetch('http://localhost:9292/exercises')
    //     .then (res => res.json())
    //     .then (data => setExercise(data))
    // }, [])

    // console.log("workout is")
    // console.log(JSON.stringify(workout))
   
    if (workout !== undefined ) {
        const exercises =  workout.exercises.map((exercise)=> (
        
        <div>
            <p> 💪 <b>Exercise: </b> {exercise.exercisename}</p>
            <p> <b>Description: </b> {exercise.description}</p>
            <p> <b>Repetitions: </b> {exercise.repetitions}</p>
            <button onClick={()=>handleDeleteExercise(exercise.id)}>killed it!</button> 
            <br/>
            <br/>
        </div>
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