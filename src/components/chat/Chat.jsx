import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faVideo,
  faCircleInfo,
  faFaceSmileBeam,
  faImage,
  faCamera,
  faMicrophone,
} from "@fortawesome/free-solid-svg-icons";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

function Chat() {
  const [emoji, setEmoji] = useState(false);
  const [text, setText] = useState("");

  const handleEmoji = (e) => {
    // setText((prev) => prev + e.emoji); // ya bhi sahi hai
    setText(text + e.emoji);
    setEmoji(false);
  };
  return (
    <>
      <div className=" h-full border-[#dddddd35] border-2 border-r-2 border-l-2 flex flex-col">
        <div className="top p-5 flex items-center justify-between border-[#dddddd35] border-2 border-b-2 ">
          <div className="user flex items-center gap-5">
            <img
              src="./avatar.png"
              alt="avatar"
              className="h-10 w-10 rounded-full mr-3"
            />
            <div className="texts flex flex-col gap-2">
              <span className="text-white font-bold text-lg">Yash</span>
              <p className="text-gray-400 font-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quibusdam, eius?
              </p>
            </div>
          </div>
          <div className="icons flex gap-5 ">
            <FontAwesomeIcon
              icon={faPhone}
              className="w-5 h-6 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faVideo}
              className="w-5 h-6 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faCircleInfo}
              className="w-5 h-6 cursor-pointer"
            />
          </div>
        </div>
        <div className="center p-5 flex flex-col gap-5 mt-auto overflow-auto">
          {/* Message from others */}
          <div className="message flex justify-start gap-5 items-start max-w-[70%]">
            <img
              src="./avatar.png"  
              alt=""
              className="h-10 w-10 rounded-full mr-3"
            />
            <div className="texts dark:bg-gray-800 bg-green-800 p-3 rounded-lg ">
              
              <p className=" dark:text-white small:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolor quam asperiores laborum vel voluptate illo pariatur
                quibusdam possimus? Aliquam, nesciunt fugiat. Laboriosam,
                quisquam repellat.
              </p>
              <span className="text-gray-400 text-sm">1 min ago</span>
            </div>
          </div>

          {/* Own message */}
          <div className="message own flex justify-end gap-5 max-w-[70%] ml-auto">
            <div className="texts bg-blue-500 text-white p-3 rounded-lg">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolor quam asperiores laborum vel voluptate illo pariatur
                quibusdam possimus? Aliquam, nesciunt fugiat. Laboriosam,
                quisquam repellat.
              </p>
              <span className="text-white text-sm">1 min ago</span>
            </div>
          </div>

          {/* Repeat for more messages */}
          <div className="message flex justify-start gap-5 items-start max-w-[70%]">
            <img
              src="./avatar.png"
              alt=""
              className="h-10 w-10 rounded-full mr-3"
            />
            <div className="texts bg-green-800 dark:bg-gray-800 p-3 rounded-lg ">
              
              <p className="  dark:text-white small:text-4xl">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolor quam asperiores laborum vel voluptate illo pariatur
                quibusdam possimus? Aliquam, nesciunt fugiat. Laboriosam,
                quisquam repellat.
              </p>
              <span className="text-gray-500 text-sm">1 min ago</span>
            </div>
          </div>

          <div className="message own flex justify-end gap-5 max-w-[70%] ml-auto">
            <div className="texts bg-blue-500 text-white p-3 rounded-lg">
              <img src="./bjp.jpg" alt="" className=" w-full h-[300px] rounded-md object-cover"/>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
                dolor quam asperiores laborum vel voluptate illo pariatur
                quibusdam possimus? Aliquam, nesciunt fugiat. Laboriosam,
                quisquam repellat.
              </p>
              <span className="text-white text-sm">1 min ago</span>
            </div>
          </div>
        </div>

        <div className="bottom p-5 flex items-center justify-between border-[#dddddd35] border-2 border-t-2 ">
          <div className="icons flex gap-5">
            <FontAwesomeIcon
              icon={faImage}
              className="w-5 h-6 cursor-pointer mt-2"
            />
            <FontAwesomeIcon
              icon={faCamera}
              className="w-5 h-6 cursor-pointer mt-2"
            />
            <FontAwesomeIcon
              icon={faMicrophone}
              className="w-5 h-6 cursor-pointer mt-2"
            />
            <div className="messageBar  flex-1 bg-[#11192880] rounded-md cursor-pointer items-center p-1 justify-center">
              <input
                type="text"
                placeholder="type a message..."
                className="border-none w-[25vw] text-xl rounded-md ml-2 bg-transparent text-white outline-none"
                value={text}
                onChange={(e) => setText(e.target.value)}
              />
            </div>
            <div className="emoji relative ">
              <FontAwesomeIcon
                icon={faFaceSmileBeam}
                className="w-6 h-8 cursor-pointer mt-2"
                onClick={() => setEmoji((prev) => !prev)}
              />
              <div className="picker absolute bottom-14 left-0">
                <EmojiPicker open={emoji} onEmojiClick={handleEmoji} />
              </div>
            </div>
          </div>
          <button className="send bg-[#5183fe] text-white py-2.5 px-5 rounded-md hover:opacity-85 ml-2">
            Send
          </button>
        </div>
      </div>
    </>
  );
}

export default Chat;
