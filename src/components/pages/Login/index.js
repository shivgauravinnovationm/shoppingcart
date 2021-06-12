
import React, { useState } from 'react';
import "./login.css"

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        console.log(email, password)
    }

    return (
        <div className="login-container m-auto">
            <div className=" justify-content-sm-center text-center">
                <h1 className="align-center login-heading">Login</h1>
            </div>
            <form className="px-3 pb-2 " onSubmit={handleLoginSubmit}>
                <div class="mb-1">
                    <label for="exampleInputEmail1" class="login-label pb-2">Email </label>
                    <input type="text" class="form-control" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="login-label pb-2">Password</label>
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
