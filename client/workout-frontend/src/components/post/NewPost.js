import React, { useState } from 'react';
import Layout from '../layout/Layout';

const NewPost = () => {
  const [workout, setWorkout] = useState("")
  const [description, setDescription] = useState("")
  const [repetitions, setRepetitions] = useState("")
 
  

  function handleSubmit(e) {
    e.preventDefault();

  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({
        "workout": workout, 
        "description": description,
        "repetitions": repetitions
    }),

  })
    .then((r) => r.json())
    .then(()=>{
    
    setWorkout("");
    setRepetitions("");
    setDescription("");
    });
  
}

  return (
    <Layout>
            <main style={{ padding: "1rem 0" }}>
                <h2>New Workout</h2>
                <div>
                    <span>Type of workout </span>
                        <input
                            placeholder="type of workout"
                            value={workout}
                            onChange={(event) => setWorkout(event.target.value)}
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