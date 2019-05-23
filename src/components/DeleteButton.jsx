import React from "react";

export const DeleteButton = props => {
  if (props.author === props.loggedInUser)
    return (
      <button
        id="button-dark"
        onClick={() => props.deleteButton(props.comment_id)}
      >
        Delete
      </button>
    );
  return null;
};
