import React, { createContext, useState } from "react";

const VisibleContext = createContext({
  visible: "",
  projectDes: {},
  showProject: () => {},
  hideProject: () => {},
  setProject: (item) => {},
});

export const ContextProvider = (props) => {
  const [isVisible, setIsVisible] = useState(false);
  const [item, setItem] = useState("");
  const showProjectHandler = () => {
    setIsVisible((state) => !state);
  };
  const hideProjectHandler = () => {
    setIsVisible((state) => !state);
  };
  const addProjectDesc = (data) => {
    setItem(data);
  };

  const contextValue = {
    visible: isVisible,
    showProject: showProjectHandler,
    hideProject: hideProjectHandler,
    setProject: addProjectDesc,
    projectDes: item,
  };
  return (
    <VisibleContext.Provider value={contextValue}>
      {props.children}
    </VisibleContext.Provider>
  );
};

export default VisibleContext;
