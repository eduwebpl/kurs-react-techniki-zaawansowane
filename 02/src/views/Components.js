import React, { useState } from "react";

const Components = () => {
  const [inputContent, setInputContent] = useState("Hello World");

  const handleInputChange = e => {
    setInputContent(e.target.value);
  };

  return (
    <div>
      <h2 className="title is-3">Components</h2>
      <p>Hi there, {inputContent}</p>
      <input name="name" onChange={handleInputChange} />
    </div>
  );
};

export default Components;
