import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus, faSearch } from '@fortawesome/free-solid-svg-icons';
import { SizeContext } from "../../../context/SizeContext";

function ChatList() {
  const [addMode, setAddMode] = useState(false);
  const { size } = useContext(SizeContext);

  return (
    <div className={`chatList flex flex-col ${size === "small" ? "h-[75vh]" : "h-[85vh]"}`}>
      <div className="search flex gap-5 p-5 items-center">
        <div className="searchBar flex flex-1 bg-[#11192880] rounded-md cursor-pointer items-center p-2">
          <FontAwesomeIcon icon={faSearch} className="h-5 text-white ml-2" />
          <input
            type="text"
            placeholder="Search"
            className="w-full rounded-md ml-2 bg-transparent text-white outline-none"
          />
        </div>
        <div
          className="add text-2xl cursor-pointer hover:scale-90 transition-colors duration-200"
          onClick={() => setAddMode((prevMode) => !prevMode)}
        >
          <FontAwesomeIcon
            icon={addMode ? faMinus : faPlus}
            className={`h-8 transition-transform duration-300 ${addMode ? 'rotate-180' : ''}`}
          />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto p-5">
        {['Yash', 'Yash', 'Yash','Yash','Yash','Yash', 'Yash', 'Yash', 'Yash'].map((name, index) => (
          <div key={index} className="item flex items-center py-4 border-[#dddddd35] border-b-2 w-full">
            <img src="./avatar.png" alt="avatar" className="h-10 w-10 rounded-full mr-3" />
            <div className="texts flex flex-col gap-2">
              <span className="text-white font-bold">{name}</span>
              <p className="dark:text-white text-gray-400">hello</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;
