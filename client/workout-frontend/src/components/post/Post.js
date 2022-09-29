import React, { useState } from "react";
import EditPost from "./EditPost";

export const Post = ({id, workout, description, repetitions, onPostDelete, onUpdateMessage}) => {
    
    const [isEditing, setIsEditing] = useState(false);

    function handleDeletePost() {
        fetch(`http://localhost:3000/posts/${id}`, {
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
  
            <h3> {workout} </h3>
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