import React, { useState } from "react";
import EditPost from "./EditPost";

const Exercise = ({handleUpdateMessage, exercise, handleDeleteExercise}) => {
const [isEditing, setIsEditing]= useState(false)
// const [repetitions, setRepetitions] = useState("")


return(

    
    <div>
        <p> 💪 <b>Exercise: </b> {exercise.exercisename}</p>
        <p> <b>Description: </b> {exercise.description}</p>
        {isEditing? (
                <EditPost
                    
                    setIsEditing = {setIsEditing}
                    id = {exercise.id}
                    exercisename={exercise.exercisename}
                    description = {exercise.description}
                    repetitions={exercise.repetitions}
                    onUpdateMessage = {handleUpdateMessage}
                />
        ) : ( 
            <p> <b> Repetitions: </b> {exercise.repetitions}</p>    

        )} 
        <button onClick ={() => setIsEditing ((isEditing) => !isEditing)}>edit exercise!</button>   
        <button onClick={()=>handleDeleteExercise(exercise.id)}>killed it!</button> 
        <br/>
        <br/>
    </div>


)}

export default Exercise