import React, { createContext, useState } from 'react';

export const SizeContext = createContext();

export const ScreenProvider = ({ children }) => {
  const [size, setSize] = useState(localStorage.getItem("size") || "small");

  return (
    <SizeContext.Provider >
      {children}
    </SizeContext.Provider>
  );
};
