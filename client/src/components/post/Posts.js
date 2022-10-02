import React, { useEffect, useState } from 'react';
import Layout  from '../layout/Layout';
import Post from "./Post";
import Workouts from "./workouts"


const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [workouts, setWorkouts] = useState([]);
    

    useEffect(() => {
         //fetch("http://localhost:9292/workouts")
         fetch("http://localhost:9292/exercises")
         .then (res => res.json())
         .then (data => setPosts(data))
       },[])

    // posts.map((post) => {
    //   post.exercises.map((exercise) => {
    //     console.log(exercise)
    //   })
    // })

    

    function handleDeletePost(id) {
        const updatedPosts = posts.filter((post) => post.id !== id);
        setPosts(updatedPosts);
    }

    function handleUpdateMessage(updatedMessageObj) {
        const updatedPosts = posts.map((post) => {
          if (post.id === updatedMessageObj.id) {
            return updatedMessageObj;
          } else {
            return post;
          }
        });
        setPosts(updatedPosts);
      }

    return (
        <Layout>
            <main style={{ padding: "1rem 0"}}>
                <h2>Exercise Plan 💪 </h2>
                

                {posts.map((post) => (
                  <div>
                  
                        <Post 
                         key={post.id}
                         id={post.id} 
                         //exercises={post.exercises}
    
                         exercisename={post.exercisename} 
                         description={post.description}  
                         repetitions={post.repetitions}
                         onPostDelete={handleDeletePost}
                         onUpdateMessage={handleUpdateMessage}
                         
                         /> 

                       
                        
                         </div>
                    ))}
            </main>
        </Layout>
      );
}

export default Posts;