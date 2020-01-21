import React from 'react';

export default function MessageBox(props) {

    function isEmpty(obj) {
        for(var key in obj) {
            if(obj.hasOwnProperty(key))
                return false;
        }
        return true;
    }

    if(isEmpty(props.message)) {
        return (<div className='message-box'>Please  Select the Mail</div>)
    }
    else
    {
        const message = props.message[0];
        return(
            <div className='message-box'>
            <h3>{message.subject}</h3>
            <p>{message.content}</p>
        </div>
        )
     
    }

    
}
