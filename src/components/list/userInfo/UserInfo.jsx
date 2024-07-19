import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsis,
  faVideo,
  faPenToSquare,
  faExpand,
  faSun,
  faMoon,
  faMinimize,
} from "@fortawesome/free-solid-svg-icons";
import { ThemeContext } from "../../../context/ThemeContext";
import { SizeContext } from "../../../context/SizeContext";

function UserInfo() {
  const { theme, setTheme } = useContext(ThemeContext);
  const { size, setSize } = useContext(SizeContext);

  useEffect(() => {
    console.log("theme", theme);
    console.log("size", size);
  }, []);
  return (
    <>
      <div className="p-4 flex items-center justify-between">
        <div className="user flex items-center gap-5 ">
          <img
            src="./avatar.png"
            alt=""
            className=" w-14 h-14 rounded-[50%] object-cover "
          />
          <h2>Boss</h2>
        </div>
        <div className="icons flex gap-5">
          <FontAwesomeIcon
            icon={faEllipsis}
            className="w-5 h-6 cursor-pointer"
          />
          <FontAwesomeIcon icon={faVideo} className="w-5 h-6 cursor-pointer" />
          <FontAwesomeIcon
            icon={faPenToSquare}
            className="w-5 h-6 cursor-pointer"
          />
          <div>
            {size == "small" ? (
              <FontAwesomeIcon
                icon={faExpand}
                className="w-5 h-6 cursor-pointer"
                onClick={() => {
                  setSize("full");
                  localStorage.setItem("size", "full");
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faMinimize}
                className="w-5 h-6 cursor-pointer"
                onClick={() => {
                  setSize("small");
                }}
              />
            )}
          </div>
          <div>
            {theme == "dark" ? (
              <FontAwesomeIcon
                icon={faSun}
                className=" w-5 h-5  bg-gray-100 text-black cursor-pointer rounded-full p-1"
                onClick={() => {
                  setTheme("light");
                  localStorage.setItem("theme", "light");
                }}
              />
            ) : (
              <FontAwesomeIcon
                icon={faMoon}
                className=" w-5 h-5  bg-gray-100 text-black rounded-full p-1 cursor-pointer "
                onClick={() => {
                  setTheme("dark");
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default UserInfo;
