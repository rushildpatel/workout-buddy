import { createContext, useReducer } from "react";

export const AuthContext = createContext();

export const userReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, {
    user: null,
  });

  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};
