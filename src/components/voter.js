import React from "react";

export const Voter = props => {
  return (
    <span>
      {" "}
      <button disabled={props.votes === 1} onClick={() => props.handleVote(1)}>
        like
      </button>
      <p>votes : {props.stateVotes + props.votes}</p>
      <button
        disabled={props.votes === -1}
        onClick={() => props.handleVote(-1)}
      >
        dislike
      </button>
    </span>
  );
};
