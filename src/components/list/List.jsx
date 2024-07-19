import React, { useContext } from "react";
import UserInfo from "./userInfo/UserInfo";
import ChatList from "./chatList/ChatList";
import { SizeContext } from "../../context/SizeContext";

function List() {
  const { size } = useContext(SizeContext);

  return (
    <>
      <UserInfo />
      <ChatList />
      {/* <div>{size}</div> */}
    </>
  );
}

export default List;
