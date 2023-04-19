import React, { useState } from 'react'
import { db, auth } from "../firebase.js";
import firebase from "firebase/compat/app";
import { Input } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';

function SendMessage() {

    const [message, setMessage] = useState();
    // eを引数にする（ブロック内でsubmit時のデフォルトのロードを制限するため）
    function sendMessage(e) {
        e.preventDefault();

        // auth.currentUser 現在ログインしているユーザー情報
        const {uid, photoURL} = auth.currentUser;

        // "messages"はfirebasedbのコレクション名
        db.collection("messages").add({
            text: message,
            photoURL,
            uid,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        });

        setMessage("");
    }

  return (
    <div>
        <form onSubmit={sendMessage}>
            <div className='sendMsg'>
                <Input 
                    style={{
                        width: "78%",
                        fontSize: "15px",
                        fontWeight: "550",
                        marginLeft: "5px",
                        marginBottom: "-3px",
                    }}
                    placeholder='メッセージを入力してください' 
                    type="text" 
                    onChange={(e) => setMessage(e.target.value)} 
                    value={message}/>
                <SendIcon style={{ color: "#7AC2FF", marginLeft: "20px" }}/>
            </div>
            
        </form>
    </div>
  )
}

export default SendMessage