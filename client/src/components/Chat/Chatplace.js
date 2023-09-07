import React, { useState } from "react";
import axios from "axios";

import './Chatplace.css';
const Chatplace = () => {
    const [text, setText] = useState('');
    const onChange = event => {
        event.preventDefault();
        setText(event.target.value);
    }
    const submitHandler = event => {
        event.preventDefault();
        const time = new Date();
        const date = time.getDate();
        const month = time.getMonth();
        const year = time.getFullYear();
        const data = {
            uid: "test",
            message: text,
            time: date + "/" + (month + 1) + "/" + year
        }
        if (data.message) {
            axios.post(`http://localhost:5000/chat/send-chat`, data)
                .then((res) => {
                    console.log('Sent to database', data);
                    setText('');
                }).catch((err) => {
                    console.log("Can't send");
                });
        }
    }
    return (
        <div className="chat-box">
            <form className="chat-form" onSubmit={submitHandler}>
                <div className="chat-element">
                    <input type="text" className="text-area" id="text-input" value={text} name="text-area" onChange={onChange} placeholder="say something..." />
                    <button type="submit" >send</button>
                </div>
            </form>
        </div>
    )
};

export default Chatplace;