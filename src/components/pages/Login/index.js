
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { userAuthentication } from "../../../store/auth/auth"
import "./login.css"

function Login() {
    const dispatch = useDispatch();

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(username, password)
        dispatch(userAuthentication({ username, password }));

    }

    return (
        <div className="login-container m-auto">
            <div className=" justify-content-sm-center text-center">
                <h1 className="align-center login-heading">Login</h1>
            </div>
            <form className="px-3 pb-2 " onSubmit={handleLoginSubmit}>
                <div class="mb-1">
                    <label class="login-label pb-2">Email </label>
                    <input type="text" class="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label class="login-label pb-2">Password</label>
                    <input type="password" class="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                </div>
                <div className="justify-content-sm-center  text-center" >
                    <button type="submit" className="Login-btn">Login</button>
                </div>
                <div className=" justify-content-sm-center mt-2 text-center">
                    <label htmlFor="">New Member? <a href="#" className="signup">Signup now</a> </label>
                </div>

            </form>
        </div>
    )
}

export default Login
