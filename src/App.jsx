import React, { useState, useEffect } from "react";
import List from "./components/list/List";
import Details from "./components/details/Details";
import Chat from "./components/chat/Chat";
import { ThemeContext } from "./context/ThemeContext";
import { SizeContext } from "./context/SizeContext";

function App() {
  const [theme, setTheme] = useState("dark");
  const [size, setSize] = useState("small");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    if (size === "small") {
      document.documentElement.classList.add("small");
    } else {
      document.documentElement.classList.remove("small");
    }
  }, [theme, size]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <SizeContext.Provider value={{ size, setSize }}>
        <div
          className={`flex items-center justify-center ${
            size === "small"
              ? "h-[90vh] w-[85vw] rounded-xl border-2 border-black"
              : "h-screen w-screen"
          } ${
            theme === "dark"
              ? "bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800"
              : "backdrop-blur-xl"
          }`}
        >
          <div className="w-full flex">
            <div className={`flex-1 ${size === "small" ? "h-[90vh]" : "h-[100vh]"}`}>
              <List />
            </div>
            <div className={`flex-1 ${size === "small" ? "h-[90vh]" : "h-[100vh]"} border-transparent border-r-2 border-l-2`}>
              <Chat size={size} />
            </div>
            <div className={`flex-1 ${size === "small" ? "h-[90vh]" : "h-[100vh]"}`}>
              <Details />
            </div>
          </div>
        </div>
      </SizeContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
