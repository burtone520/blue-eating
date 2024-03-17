import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faLock, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import logo from "../blue eating logo.svg";
import "./login.scss"
const Login = ({toggleDisplay}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setSignUp] = useState(false);

    const toggleSignUp = () => {
        setPassword("");
        setUsername("");
        setSignUp(!isSignUp);
    };
    const closeDisplay = () =>{
        toggleDisplay()
    }

    return (
        <div className="signin-container"> 
            <img src={logo} alt="" className="logo"/>
            <FontAwesomeIcon icon={faCircleXmark} className="closeIcon" onClick={closeDisplay}/>
            <div className="input-box">
                <FontAwesomeIcon icon={faCircleUser} className="icon" />
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className="input-box">
                <FontAwesomeIcon icon={faLock} className="icon"/>
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            {isSignUp ? 
                <p className="btm-txt">Already have an account?<button onClick={toggleSignUp} id="secondary-btn">Login</button></p> :
                <p className="btm-txt">Don’t have an account?<button onClick={toggleSignUp} id="secondary-btn">Sign Up</button></p>
            }
            {isSignUp?
           <button className="primary-btn">Sign up</button>:
           <button className="primary-btn">Login</button>
        }
        </div>
    );
};

export default Login;
