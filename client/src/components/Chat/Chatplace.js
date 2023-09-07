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
    // const textInput = document.getElementById('text-input');
    // if (textInput) {
    //     textInput.addEventListener('keydown', (event) => {
    //         if (event.key === 'Enter') {
    //             event.preventDefault();
    //             submitHandler();
    //         }
    //     })
    // }
    return (
        <div className="chat-box">
            <div className="chat-form">
                <div className="chat-element">
                    <input type="text" className="text-area" id="text-input" value={text} name="text-area" onChange={onChange} placeholder="say something..." />
                    <input type="submit" onClick={submitHandler} value="send" />
                </div>
            </div>
        </div>
    )
};

export default Chatplace;