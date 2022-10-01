import React, {useState, useEffect} from 'react';
import Layout  from '../layout/Layout';

const Workouts = () => {

    const [workouts, setWorkouts] = useState ([]);

    useEffect(() => {
        fetch('http://localhost:9292/workouts')
        .then (res => res.json())
        .then (data => setWorkouts(data))
    }, [])

//console.log(workouts)

return (
    <Layout>
        <main style={{ padding: "1rem 0"}}>
            <h2>List of workouts 💪 </h2>
            
            { workouts.map((workout) => (
            <div style={{margin: 20}}>
            
            <h3>💪{workout.workoutname}</h3>
            <p>{workout.difficulty}</p>
            <p>{workout.exercises.map((exercise)=> (
                <div>
                    <p> ⭐️ Exercise name: {exercise.exercisename}</p>
                    <p>Description: {exercise.description}</p>
                    <p>Repetitions: {exercise.repetitions}</p>
                </div>
            ))}</p>
            </div>     
            ))}
        
        </main>
    </Layout>
)}
export default Workouts