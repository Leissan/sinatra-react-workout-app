import React, { useState } from "react";

function EditPost({ id, repetitions, onUpdateMessage }) {
  const [messageBody, setMessageBody] = useState(repetitions);

  function handleFormSubmit(e) {
    e.preventDefault();

    fetch(`http://localhost:3000/posts/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        repetitions: messageBody,
      }),
    })
      .then((r) => r.json())
      .then((updatedMessage) => onUpdateMessage(updatedMessage));
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
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
