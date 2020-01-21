import React, { useState, useEffect } from 'react';
import MessageBox from './MessageBox';
import { FaTrash, FaRegFlag, FaCaretDown } from "react-icons/fa";

export default function List(props) {
   const messages = props.messages;
   const [currentId , setCurrentMessage ] = useState(messages[0].mId);
   const [filter , setFilterShow ] = useState(false);
   const [markedIDs , markedMessages ] = useState([]);

   function pushToArray(arr, obj) {
   
    // const index = arr.findIndex((e) => e.id === obj.id);

    // if (index === -1) {
    //     arr.push(obj);
    // } else {
    //     arr[index] = obj;
    // }
    // markedMessages(arr);
 }

   function getMessageComponent(currentId) {
   const activeMessage =  messages.filter( function (message) {
    return message.mId == currentId
      });
    return <div className="col-md-7"><MessageBox message={activeMessage} /></div>
  }
    return(
        <div>
           <div className="col-md-3">
            <div className="msg-box">
              <div className="msg-box-title">{props.activeFolder}</div>
              <div className="msg-box-filter">
              <div onClick={() => setFilterShow(!filter)}  className="filter">Filter <FaCaretDown /> </div>
               <ul className='filter-box' className={ filter ? 'active':'inactive'} >
                 <li>All</li>
                 <li>Flagged</li>
               </ul>
              </div>
            </div>
          <ul className='message-list'>
          {messages.map((v,k) => 
            <li key={k}
            onClick={() => { setCurrentMessage(v.mId) }} 
            className={currentId == v.mId ? "active" : "inactive"}
            style={{borderLeft: v.unread == true? "2px solid " : "" }}
           >
            <div className='subject'>{v.subject} <span className='trash'><FaTrash /></span><span  onClick={()=>
              markedMessages(...markedIDs,v.mId)
              }  className='flag'><FaRegFlag /></span></div>
            <div className='small-summery'>{v.content.replace( /(<([^>]+)>)/ig, ' ')} </div>
            </li>) }
          </ul>
          </div>
          {currentId ? getMessageComponent(currentId) : ''}
            </div>
    )
}