import React, { useState } from "react"; 
import List from '../components/List';
import { FaCaretDown, FaCaretRight, FaInbox, FaPencilAlt, FaTrash, FaPaperPlane } from "react-icons/fa";
import spamMessages from '../spam.json';
import deletedMessages from '../deleted.json';
import inboxMessage from '../inbox.json';
import draftMessages from '../draft.json';

export function SideBar(props) {

  const inboxCount =  inboxMessage.length;
  const deletedCount =  deletedMessages.length;
  const spamCount =  spamMessages.length;
  const draftCount =  draftMessages.length;

    const folders = [
      {'name': 'Inbox', 'icon': <FaInbox /> ,'count': inboxCount},
      {'name': 'Spam', 'icon': <FaPaperPlane />, 'count': spamCount},
      {'name':'Deleted', 'icon': <FaTrash />, 'count': deletedCount},
      {'name':'Draft', 'icon': <FaPencilAlt />, 'count': draftCount}
    ];

    const [showText, setShowText] = useState(true);

    const [activeFolder, setActive] = useState('Inbox');

    function getListComponent(activeFolder) {
      switch (activeFolder) {
        case 'Spam':
          return <List messages={spamMessages} activeFolder={activeFolder} />
        case 'Deleted':
            return <List messages={deletedMessages} activeFolder={activeFolder} />
        case 'Draft':
              return <List messages={draftMessages} activeFolder={activeFolder} />
        default:
          return <List messages={inboxMessage} activeFolder={activeFolder} />
      }

      }


	return (
    <div>
           <div className="col-md-2">
            <ul className="navigation-list">
            <li>
            <div className="nav-title" onClick={() => setShowText(!showText)}>
            {showText? <FaCaretDown /> : <FaCaretRight />} <span className='title'><b>Folders</b></span></div>
            {showText && <ul className="nav-inner-side-bar">
            {folders.map((k,v) => 
            <li key={v}
            onClick={() => { setActive(k.name) }} 
            className={'navlist', activeFolder === k.name ? "active" : "inactive"}
             >
            <span className='icon'>{k.icon}</span><span className='list-name'>{k.name}</span> 
            <span className='count'> ({k.count}) </span>    
            </li>) }
            </ul>}
            </li>
            </ul>
            </div>   
            {getListComponent(activeFolder)}
            </div>
	);
}


