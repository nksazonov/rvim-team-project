import React, { useState } from "react";
import '../assets/styles/button-group.css'

const ButtonGroup = ({ buttons, doSomethingAfterClick }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
    doSomethingAfterClick(event);
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={i === clickedId ? "button active" : "button"}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;