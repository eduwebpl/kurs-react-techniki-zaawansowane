import React, { useRef } from "react";

const style = {
  transition: "transform 1s ease-in",
  width: "100px",
  transformOrigin: "0% 50%",
  display: "block",
};

const Components = () => {
  const myInputRef = useRef(null);

  const handleClick = () => {
    myInputRef.current.focus();
    myInputRef.current.style.transform = "scaleX(2)";
  };

  return (
    <div>
      <h2 className="title is-3">Components</h2>
      <input style={style} ref={myInputRef} />
      <button onClick={handleClick}>focus input</button>
    </div>
  );
};

export default Components;
