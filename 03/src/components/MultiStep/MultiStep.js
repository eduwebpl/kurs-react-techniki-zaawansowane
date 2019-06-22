import React, { useState, useContext, useEffect } from "react";

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
  pageIndexes: [],
  updatePageIndexes: () => {},
});

const ProgressBar = () => {
  const { currentPage, pageIndexes } = useContext(WizardContext);

  const outerWrapperStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: "lightgrey",
    borderRadius: "10px",
  };

  const innerBarStyle = {
    width: "100%",
    height: "10px",
    backgroundColor: "blue",
    borderRadius: "10px",
    transition: "transform .5s ease-out",
    transform: `scaleX(${currentPage / pageIndexes.length})`,
    transformOrigin: "0% 50%",
  };

  return (
    <div style={outerWrapperStyle}>
      <div style={innerBarStyle} />
    </div>
  );
};

const Page = ({ children, pageIndex }) => {
  const { currentPage, updatePageIndexes } = useContext(WizardContext);

  useEffect(() => {
    updatePageIndexes(pageIndex);
  });

  return currentPage === pageIndex ? children : null;
};

const Controls = props => {
  const { changePage, currentPage, pageIndexes } = useContext(WizardContext);

  return (
    <div {...props}>
      <button
        disabled={currentPage === 1}
        className="button is-primary is-small"
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        disabled={currentPage === pageIndexes.length}
        className="button is-warning is-small"
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
      {currentPage === pageIndexes.length ? (
        <button className="button is-info is-small">Submit</button>
      ) : null}
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageIndexes, setPageIndexes] = useState([]);

  const updatePageIndexes = pageIndex => {
    if (pageIndexes.includes(pageIndex)) {
      return;
    }

    setPageIndexes([...pageIndexes, pageIndex]);
  };

  const changePage = newPageIndex => {
    setCurrentPage(newPageIndex);
  };

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage,
        pageIndexes,
        updatePageIndexes,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export { ProgressBar, Page, Controls, Wizard };
