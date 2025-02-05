import React, { createContext, useState, useContext } from "react";

const SavedContext = createContext();

export const SavedProvider = ({ children }) => {
  const [savedItems, setSavedItems] = useState([]);

  const toggleSave = (news) => {
    setSavedItems((prev) =>
      prev.some((item) => item.id === news.id)
        ? prev.filter((item) => item.id !== news.id) // Remove if already saved
        : [...prev, news] // Add if not saved
    );
  };

  return (
    <SavedContext.Provider value={{ savedItems, toggleSave }}>
      {children}
    </SavedContext.Provider>
  );
};

export const useSaved = () => useContext(SavedContext);
