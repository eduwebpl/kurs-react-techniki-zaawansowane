import React, { useState, useContext } from "react";

const WizardContext = React.createContext({
  currentPage: 1,
  changePage: () => {},
});

const Page = ({ children, pageIndex }) => {
  const { currentPage } = useContext(WizardContext);

  return currentPage === pageIndex ? children : null;
};

const Controls = props => {
  const { changePage, currentPage } = useContext(WizardContext);

  return (
    <div {...props}>
      <button
        className="button is-primary is-small"
        onClick={() => changePage(currentPage - 1)}
      >
        Previous
      </button>
      <button
        className="button is-warning is-small"
        onClick={() => changePage(currentPage + 1)}
      >
        Next
      </button>
      {/* <buton>Submit</buton> */}
    </div>
  );
};

const Wizard = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const changePage = newPageIndex => {
    setCurrentPage(newPageIndex);
  };

  return (
    <WizardContext.Provider
      value={{
        currentPage,
        changePage,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
};

export { Page, Controls, Wizard };
