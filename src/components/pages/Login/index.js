
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';


import { userAuthentication } from "../../../store/auth/auth"
import Loading from "../../Loading/Loading"
import "./login.css"


function Login() {
    const dispatch = useDispatch();
    const isLoading = useSelector(state => state.authReducer.isLoading)
    const isError = useSelector(state => state.authReducer.isError)

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false)

    const handleLoginSubmit = (e) => {
        e.preventDefault();
        if (username && password) {
            dispatch(userAuthentication({ username, password }));
        } else {
            setError(true)
        }


    }

    return (

        <div className="login-container m-auto">
            {isLoading && <Loading text={"Loading..."} />}

            <div className=" justify-content-sm-center text-center">
                <h1 className="align-center login-heading">Login</h1>
                {isError && <div className="alert alert-danger" role="alert">
                    {isError}
                </div>}

            </div>
            <form className="px-3 pb-2 " onSubmit={handleLoginSubmit}>
                <div className="mb-1">
                    <label className="login-label pb-2">Email </label>
                    <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} />
                    {
                        error && username === "" && < span className="error">Required</span>
                    }
                </div>
                <div className="mb-3">
                    <label className="login-label pb-2">Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} />
                    {
                        error && password === "" && < span className="error">Required</span>
                    }
                </div>
                <div className="justify-content-sm-center  text-center" >
                    <button type="submit" className="Login-btn">Login</button>
                </div>
                <div className=" justify-content-sm-center mt-2 text-center">
                    <label htmlFor="">New Member? <a href="#" className="signup">Signup now</a> </label>
                </div>

            </form>
        </div >
    )
}

export default Login
