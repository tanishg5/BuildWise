import React from "react";
import UserContext from "./UserContext";
import { exercise } from "../assets/assets";

const UserContextProvider = ({ children }) => {
  const value = { exercise };

  return (
    <UserContext.Provider value={value}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
