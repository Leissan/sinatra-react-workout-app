import React, { useState } from "react";
import EditPost from "./EditPost";

export const Post = ({id, exercisename, workouts, exercises, description, repetitions, onPostDelete, onUpdateMessage}) => {
    
    const [isEditing, setIsEditing] = useState(false);

    function handleDeletePost() {
        fetch(`http://localhost:9292/exercises/${id}`, {
          method: "DELETE",
        });
    
        onPostDelete(id);
      }
    function handleUpdateMessage(updatedMessage) {
        setIsEditing(false);
        onUpdateMessage(updatedMessage);
    }
      

    return (
        
        
            <div style={{margin: 20}}>
    
                <h3> ⭐️ {exercisename} </h3>
                <p> {description} </p>
                {isEditing? (
                    <EditPost
                        id = {id}
                        repetitions={repetitions}
                        onUpdateMessage = {handleUpdateMessage}
                    />
                ) : ( 
                    <p>{repetitions}</p>    

                )} 
                
                <button onClick ={() => setIsEditing ((isEditing) => !isEditing)}>edit workout!</button>
                <button onClick={handleDeletePost}>killed it!</button> 
                <br/>
            </div>
       
    )
}

export default Post;