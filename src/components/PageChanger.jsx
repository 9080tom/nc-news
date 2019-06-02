import React from "react";

const PageChanger = props => {
  const { p } = props;
  const numButs = [];
  let pageTotal;

  if (props.total === 0 || props.total === "0") {
    pageTotal = 1;
  } else pageTotal = Math.ceil(props.total / 10);
  for (let i = 1; i <= pageTotal; i++) {
    numButs.push(i);
  }

  return (
    <div className="PageChanger">
      {p !== 1 && <button onClick={() => props.changePage(-1)}>back</button>}
      {pageTotal !== 1 &&
        numButs.map(numBut => {
          return (
            <button
              key={numBut}
              onClick={() => props.changePage(numBut, "replace")}
            >
              {numBut}
            </button>
          );
        })}
      {p !== pageTotal && (
        <button onClick={() => props.changePage(1)}>next</button>
      )}
    </div>
  );
};

export default PageChanger;
