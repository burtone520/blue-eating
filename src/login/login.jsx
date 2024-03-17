import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faLock, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import logo from "../blue eating logo.svg";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setSignUp] = useState(false);

    const toggleSignUp = () => {
        setPassword("");
        setUsername("");
        setSignUp(!isSignUp);
    };

    return (
        <div className="signin-container"> 
            <img src={logo} alt="" className="logo"/>
            <FontAwesomeIcon icon={faCircleXmark} className="closeIcon"/>
            <div className="input-box">
                <FontAwesomeIcon icon={faCircleUser} />
                <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
            </div>
            <div className="input-box">
                <FontAwesomeIcon icon={faLock} />
                <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            {isSignUp ? 
                <p>Already have an account?<button onClick={toggleSignUp}>Login</button></p> :
                <p>Don’t have an account?<button onClick={toggleSignUp}>Sign Up</button></p>
            }
        </div>
    );
};

export default Login;
