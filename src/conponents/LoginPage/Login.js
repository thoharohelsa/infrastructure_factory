import React, { useState } from 'react';
import '../LoginPage/Login.css'
import Logo from '../../img/login_logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faEye, faEyeSlash, faUserLock } from '@fortawesome/free-regular-svg-icons'
function Login(props) {
    const [showpwd, setshowpwd] = useState(false)
    const [start, setStart] = useState(true)
    return (
        <>
        <div className="login__body">

            <div className="signin-signup">
                <form className="sign-in-form">
                <img src={Logo} alt="logo" className='w-75 pb-5 px-5' />
                    {/* <h2 className="title">Sign in</h2> */}
                    <div className="input-field">
                    <FontAwesomeIcon icon={faEnvelope} className="fas" />
                        <input type="text" placeholder="Email" className='login__input' controlid="username" />
                    </div>
                    <div className="input-field">
                    {start ? 
                        <div id="login__password__icon" className='fas'></div> : 
                        (showpwd ? <FontAwesomeIcon icon={faEye} className="eyeicon fas" onClick={() => (setshowpwd(!showpwd))} /> : <FontAwesomeIcon className="eyeicon fas" icon={faEyeSlash} onClick={() => (setshowpwd(!showpwd))} />)
                        }
                        <input controlid="formBasicPassword" type={showpwd ? "text" : "password"} placeholder="Password" onChange={() => setStart(false)} />
                    </div>
                    <input type="submit" onClick={props.loginfnc} value="Sign In" className="btn solid login__input login__btn" />
                </form>
            </div>
            </div>

        </>
    );
}

export default Login;