import React from "react";

const Page = ({ children }) => <div>{children}</div>;

const Controls = () => (
  <div>
    <button>Previous</button>
    <button>Next</button>
    {/* <buton>Submit</buton> */}
  </div>
);

const Wizard = ({ children }) => {
  return <div>{children}</div>;
};

export { Page, Controls, Wizard };
