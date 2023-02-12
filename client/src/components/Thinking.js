import React from 'react'
import { MdComputer } from 'react-icons/md'

const Thinking = () => {
  return (
    <div className='message'>
      <div className='message__wrapper flex'>
        <div className="message__pic">
          <img src="https://i.postimg.cc/Xv1PJJnF/00289-2276255384-design-a-logo-bot-0-2-happy-lovely-panda-0-3-4k-high-resolution-attractive-beaut.png"/>
        </div>
        <div className='text-left message__createdAt'>
          <div className="message__thinking">
            思考中...
          </div>
        </div>
      </div>
    </div>
  )
}

export default Thinking