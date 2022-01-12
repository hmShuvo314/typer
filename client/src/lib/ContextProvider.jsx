import React, { createContext, useRef, useState } from "react";

const appContext = createContext();
const Provider = appContext.Provider;

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [users, setUsers] = useState([]);
  const [socket, setSocket] = useState(null);
  const [letterRef, setLetterRef] = useState(null);
  const [isExcess, setIsExcess] = useState(false);

  return (
    <Provider
      value={{
        input,
        setInput,
        users,
        setUsers,
        socket,
        setSocket,
        letterRef,
        setLetterRef,
        isExcess,
        setIsExcess,
      }}
    >
      {children}
    </Provider>
  );
};

export { ContextProvider, appContext };
