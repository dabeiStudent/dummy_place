import React, { useEffect, useState } from "react";
import axios from "axios";
import io from 'socket.io-client';


import './Chatplace.css';
const ENDPOINT = 'http://localhost:5000';
var socket, selectedChatCompare;

const Chatplace = () => {
    const [text, setText] = useState('');
    const [message, setMessage] = useState('Hello');
    // const [socket, setSocket] = useState(null);

    useEffect(() => {
        socket = io.connect(ENDPOINT);
        socket.on('user-chat', (content) => {
            setMessage(content.message);
        })
    }, []);

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
        socket.emit('sendmessage', { message: data.message });

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
                <div className="messages">
                    <h2>{message}</h2>
                </div>
                <div className="chat-element">
                    <input type="text" className="text-area" id="text-input" value={text} name="text-area" onChange={onChange} placeholder="say something..." />
                    <button type="submit" >send</button>
                </div>
            </form>
        </div>
    )
};

export default Chatplace;