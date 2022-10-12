import React, { useState } from "react";

function EditPost({ id, repetitions, onUpdateMessage, exercisename, description }) {
  const [messageBody, setMessageBody] = useState(repetitions);
  

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:9292/exercises/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        "exercisename": exercisename, 
        "description": description,
        repetitions: messageBody


      }),
    })
      .then((r) => r.json())
      
      .then((updatedMessage) => { console.log(updatedMessage); onUpdateMessage(updatedMessage)})
      
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      toggle is true? edit : not edit
      <input
        type="text"
        name="repetitions"
        autoComplete="off"
        value={messageBody}
        onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="submit" value="Save my new goal!" />
    </form>
  );
}

export default EditPost;
