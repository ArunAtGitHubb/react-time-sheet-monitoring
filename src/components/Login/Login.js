import React, { useRef, useState } from 'react'
import Error from '../Error'
import Spinner from "../Spinner/Spinner"

import './Login.css'

const Login = (props) => {

    let userNameRef = useRef()
    let passwordRef = useRef()
    const [error, setError] = useState({ msg: "No Error", color: "danger", isError: false })
    const [loading, setLoading] = useState(false)
    const onLogin = () => {
        let username = userNameRef.current.value
        let password = passwordRef.current.value

        setLoading(true)
        setError({
            msg: "",
            color: "warning",
            isError: false
        })
        let data = { username, password }

        if (username && password) {
            props.loginHandler(data).then(res => {
                if (!res.auth) {
                    setError({
                        msg: res.msg,
                        color: "warning",
                        isError: true
                    })
                    setLoading(false)
                }
            })
        } else {
            setLoading(false)
            setError({
                msg: "All fields are required!",
                color: "danger",
                isError: true
            })
        }
    }

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-4 offset-md-4 form d-grid'>
                    {loading === true ? <Spinner /> : null}
                    {error.isError ? <Error {...error} /> : null}
                    <h2 className='p-3' style={{ justifySelf: "center" }}>Login</h2>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="basic-addon1">@</span>
                        <input type="text" required className="form-control" placeholder="Username"
                            ref={userNameRef} />
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text bi bi-key" id="basic-addon1"></span>
                        <input type="password" required className="form-control" placeholder="Password" ref={passwordRef} />
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