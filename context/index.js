import React, { useState, createContext } from "react";

export const Context = createContext();

export const ContextProvider = (props) => {
  const [username, setUsername] = useState("");
  const [secret, setSecret] = useState("");
  const themes = ["light", "dark", "synthwave", "cyberpunk"];
  const [theme, setTheme] = useState("synthwave");

  const value = {
    username,
    setUsername,
    secret,
    setSecret,
    theme,
    setTheme,
    themes,
  };

  return <Context.Provider value={value}>{props.children}</Context.Provider>;
};
