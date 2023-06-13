import React, { useContext, createContext, useState } from "react";

export const CreateGameContext = createContext();

function CreateGameProvider({ children }) {
  const [row, setRow] = useState("");
  const [column, setColumn] = useState("");
  const [bomb, setBomb] = useState("");

  const context = {
    row,
    setRow,
    column,
    setColumn,
    bomb,
    setBomb,
  };

  return (
    <CreateGameContext.Provider value={context}>
      {children}
    </CreateGameContext.Provider>
  );
}

export default CreateGameProvider;
