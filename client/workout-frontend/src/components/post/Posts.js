import React, { useEffect, useState } from 'react';
import Layout  from '../layout/Layout';
import Post from "./Post"


const Posts = () => {
    const [posts, setPosts] = useState([]);
    

    useEffect(() => {
         fetch ('http://localhost:3000/posts')
         .then (res => res.json())
         .then (data => setPosts(data))
       },[])

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
                <h2>Workout Plan 💪 </h2>
                { posts.length > 0 && posts.map((post) => (
                        <Post 
                         key={post.id}
                         id={post.id} 
                         workout={post.workout} 
                         description={post.description}  
                         repetitions={post.repetitions}
                         onPostDelete={handleDeletePost}
                         onUpdateMessage={handleUpdateMessage}
                         
                         /> 
                    ))}
            </main>
        </Layout>
      );
}

export default Posts;