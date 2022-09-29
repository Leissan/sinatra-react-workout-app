import React, { useState } from 'react';
import Layout from '../layout/Layout';

const NewPost = () => {
  const [exercise, setExercise] = useState("")
  const [description, setDescription] = useState("")
  const [repetitions, setRepetitions] = useState("")
 
  

  function handleSubmit(e) {
    e.preventDefault();

  fetch("http://localhost:9292/exercises", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "exercise": exercise, 
        "description": description,
        "repetitions": repetitions
    }),

  })
    .then((r) => r.json())
    .then(()=>{
    
    setExercise("");
    setRepetitions("");
    setDescription("");
    });
  
}

  return (
    <Layout>
            <main style={{ padding: "1rem 0" }}>
                <h2>New Workout</h2>
                <div>
                    <span>Type of exercise </span>
                        <input
                            placeholder="type of exercise"
                            value={exercise}
                            onChange={(event) => setExercise(event.target.value)}
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
                        <button onClick={handleSubmit}>Add my workout!</button>
                        
                        
                    </div>
            </main>
        </Layout>
  )
}

export default NewPost;