import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [user, setUser] = useState({
        userName: '',
        passWord: ''
    });
    const onChange = event => {
        event.preventDefault();
        setUser({ ...user, [event.target.name]: event.target.value });
    }

    const loginHandler = event => {
        event.preventDefault();
        axios.post('http://localhost:5000/user/user-login', user,
            {
                withCredentials: true,
            })
            .then((res) => {
                alert(`${res.data.msg}, ${res.data.firstname}(${res.data.username})`);
                setUser({
                    userName: '',
                    passWord: ''
                });
                navigate('/');
            }).catch((err) => {
                alert('Something wrong');
            })
    }

    return (
        <div className="new-place-form">
            <form className="form-add-new" onSubmit={loginHandler}>
                <label>Username: </label>
                <input name="userName" value={user.userName} type="text" required placeholder="Input your username here" onChange={onChange} /><br />

                <label>Password: </label>
                <input name="passWord" value={user.passWord} type="password" required placeholder="Input your password here" onChange={onChange} /><br />

                <input type="submit" value="ENTER" />
            </form>
        </div>
    );
}

export default Login;