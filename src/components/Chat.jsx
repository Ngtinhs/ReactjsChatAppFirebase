import React from 'react'
import Cam from "../img/cam.png"
import Add from "../img/add.png"
import More from "../img/more.png"
import Messages from './Messages';
import Input from "./Input"

const chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Tinhs</span>
        <div className="chatIcons">
          <img src={Cam} alt="Cam" />
          <img src={Add} alt="add nè" />
          <img src={More} alt="More nè" />
        </div>
      </div>
        <Messages />
        <Input />
    </div>
  )
}

export default chat