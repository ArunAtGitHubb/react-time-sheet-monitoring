import React, { useRef, useState } from 'react'
import Error from '../Error'

import './Login.css'

const Login = (props) => {

    let userNameRef = useRef()
    let passwordRef = useRef()
    const [error, setError] = useState({ msg: "No Error", color: "danger", isError: false })

    const onLogin = () => {

        let data = {
            username: userNameRef.current.value,
            password: passwordRef.current.value
        }

        if (!props.loginHandler(data)) {
            setError({
                msg: "Authentication failed. Try again..! 👍",
                color: "warning",
                isError: true
            })
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 offset-md-4 form'>
                    {error.isError ? <Error {...error} /> : null}
                    <p className='h2 p-3'>Login</p>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" className="form-control" placeholder="Username"
                            ref={userNameRef} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text bi bi-key" id="basic-addon1"></span>
                        <input type="password" className="form-control" placeholder="password" ref={passwordRef} />
                    </div>
                    <div className="offset-md-5">
                        <button className="btn btn-primary bi bi-send"
                            onClick={onLogin}
                            type="submit"> Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login