import React from "react";

const PageChanger = props => {
  const { p } = props;
  const numButs = [];
  for (let i = 1; i <= Math.ceil(props.total / 10); i++) {
    numButs.push(i);
  }
  console.log(numButs, props.total);

  return (
    <div>
      <button disabled={p === 1} onClick={() => props.changePage(-1)}>
        back
      </button>
      {numButs.map(numBut => {
        return (
          <button
            key={numBut}
            onClick={() => props.changePage(numBut, "replace")}
          >
            {numBut}
          </button>
        );
      })}

      <button onClick={() => props.changePage(1)}>next</button>
    </div>
  );
};

export default PageChanger;
