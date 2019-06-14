import React, { useState } from "react";

const Tips = () => {
  const [isTooltipOpen, setTooltipVisibility] = useState(false);

  return (
    <div>
      <h2 className="title is-3">Tips</h2>
      <button
        className="button is-large is-primary"
        onClick={() => setTooltipVisibility(!isTooltipOpen)}
      >
        Open tooltip
      </button>
      {isTooltipOpen && (
        <div class="notification is-primary">
          Primar lorem ipsum dolor sit amet, consectetur adipiscing elit lorem
          ipsum dolor. <strong>Pellentesque risus mi</strong>, tempus quis
          placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet
          fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a>{" "}
          efficitur. Sit amet, consectetur adipiscing elit
        </div>
      )}
    </div>
  );
};

export default Tips;
