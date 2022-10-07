import React, {useState, useEffect} from 'react';
import Layout  from '../layout/Layout';
import {Link} from 'react-router-dom'
import Workout from "./Workout"

const Workouts = () => {

    const [workouts, setWorkouts] = useState ([]);
    const [workoutname, setWorkoutname] = useState("");
    const [difficulty, setDifficulty] = useState("");
    const [exercisename, setExercisename] = useState("");

   
    function handleSubmit(e) {
        e.preventDefault();
    
      fetch("http://localhost:9292/workouts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            "workoutname": workoutname, 
            "difficulty": difficulty
        }),
    
      })
        .then((r) => r.json())
        .then(()=>{
        
        setWorkoutname("");
        setDifficulty("");
        setExercisename("")
        });
      
    }

    useEffect(() => {
        fetch('http://localhost:9292/workouts')
        .then (res => res.json())
        .then (data => setWorkouts(data))
    }, [workouts])

//console.log(workouts)
function toggleComplete (id) {
   const updatedWorkouts = workouts.map((workout) => {
    if (workout.id ==id) {
        workout.completed =! workout.completed
    }
    return workout 
   })
   setWorkouts(updatedWorkouts)
}


return (
    <Layout>
        <main style={{ padding: "1rem 0"}}>
            <h2>List of workouts 💪 </h2>
            
            {workouts.map((workout) => (
            <div style={{margin: 20}}>
            <h3>💪{workout.workoutname}</h3>
            <p>{workout.difficulty}</p> 
            <Link to = {`/all_workouts/${workout.id}`}>Click here for exercises!
            </Link>
          
        
            <input type = "checkbox" 
            onChange = {()=> toggleComplete (workout.id)}
            checked = {workout.completed}
            />
            
            </div>     
            ))}
            <div>
                <h2>Add new workout!</h2>
                <div>
                    <span>Workout name </span>
                        <input
                            placeholder="name of workout"
                            value={workoutname}
                            onChange={(event) => setWorkoutname(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Difficulty </span>
                            <input 
                            placeholder="difficulty " 
                            value={difficulty}
                            onChange={(event) => setDifficulty(event.target.value)}
                        />
                    </div>
                    <div>
                        <span>Exercise name </span>
                            <input 
                            placeholder="name of exercise " 
                            value={exercisename}
                            onChange={(event) => setExercisename(event.target.value)}
                        />
                    </div>

                <button onClick={handleSubmit}>Add Workout!</button>
            </div>
            
        </main>
    </Layout>
)}
export default Workouts