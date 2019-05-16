import React from "react";

export const DeleteButton = props => {
  if (props.author === props.loggedInUser)
    return (
      <button onClick={() => props.deleteButton(props.comment_id)}>
        Delete your comment
      </button>
    );
  return null;
};
