import React, { useEffect, useState } from 'react'
import SingOut from './SignOut'
import {db} from "../firebase.js";

function Line() {
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        db.collection("messages")
        .orderBy("createdAt")
        .limit(50)
        .onSnapshot((snapshot) => {
            setMessages(snapshot.docs.map((doc) => doc.data()));
        })
    }, []);

  return (
    <div>
        {console.log(messages)}
        <SingOut />
        <div className='msgs'>
            {messages.map(({id, text, photoURL, uid}) => (
                <div key={id}>
                    <img src={photoURL} alt=""/>
                    <p>{text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Line