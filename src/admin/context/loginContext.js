import { createContext, useContext, useState, useEffect } from "react";

const loginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedValue = localStorage.getItem("isLoggedIn");
    return storedValue ? JSON.parse(storedValue) : false;
  });

  const [customSession, setCustomSession] = useState(() => {
    const storedSession = localStorage.getItem("customSession");
    return storedSession ? JSON.parse(storedSession) : null;
  });

  useEffect(() => {
    const storedSession = localStorage.getItem("customSession");
    if (storedSession) {
      setCustomSession(JSON.parse(storedSession));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const isSessionExpired = () => {
    if (!customSession) {
      return true;
    }

    const expirationTime = new Date(customSession);
    expirationTime.setHours(expirationTime.getHours() + 1);
    expirationTime.setMinutes(expirationTime.getMinutes() + 30);

    const currentTime = new Date();
    return currentTime > expirationTime;
  };

  const values = {
    isLoggedIn,
    setIsLoggedIn,
    customSession,
    setCustomSession,
    isSessionExpired,
  };

  return (
    <loginContext.Provider value={values}>{children}</loginContext.Provider>
  );
};

export const useLoginContext = () => useContext(loginContext);
