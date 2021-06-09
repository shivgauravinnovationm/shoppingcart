
import React from 'react';
import "./login.css"

function Login() {
    return (
        <div className="login-container m-auto">
            <div className=" justify-content-sm-center text-center">
                <h1 className="align-center">Login</h1>
            </div>
            <form className="px-3 pb-2 ">
                <div class="mb-1">
                    <label for="exampleInputEmail1" class="login-label pb-2">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="login-label pb-2">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" />
                </div>
                <div className="justify-content-sm-center  text-center" >
                    <button className="Login-btn">Login</button>
                </div>
                <div className=" justify-content-sm-center mt-2 text-center">
                    <label htmlFor="">New Member? <a href="#" className="signup">Signup now</a> </label>
                </div>

            </form>
        </div>
    )
}

export default Login
