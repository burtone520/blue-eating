import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faLock, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import logo from "../blue eating logo.svg";
import axios from "axios";
import { CookiesProvider, useCookies } from 'react-cookie'
import "./login.scss"
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook

const Login = ({toggleDisplay}) => {
    const [cookies, setCookie] = useCookies(['user'])
    const [userInitialCookies, userInitialSetCookie] = useCookies(['initial'])
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isSignUp, setSignUp] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {username:username,password:password}
        console.log(formData)
        if(isSignUp){

        try {
            const response = await axios.post('http://localhost:3000/register', formData);
            console.log(await response.data); // Handle the response data here
            setPassword("")
            setUsername("")
            closeDisplay()
        } catch (error) {
            console.error('Error:', error);
        }}
        else{
            try {
                const response = await axios.post('http://localhost:3000/login', formData);
                console.log(await response.data); // Handle the response data here
                setCookie('user',await response.data.userID)
                userInitialSetCookie("initial", await response.data.userInitial)
                setPassword("")
                setUsername("")
                navigate('/'); // Example new path: '/dashboard'
                closeDisplay()
            } catch (error) {
                console.error('Error:', error);
            }}
        }
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
                <input type="text"  value={username} onChange={(e) => setUsername(e.target.value) && console.log(e.target.value)} placeholder="Username" />
            </div>
            <div className="input-box">
                <FontAwesomeIcon icon={faLock} className="icon"/>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
            </div>
            {isSignUp ? 
                <p className="btm-txt">Already have an account?<button onClick={toggleSignUp} id="secondary-btn">Login</button></p> :
                <p className="btm-txt">Don’t have an account?<button onClick={toggleSignUp} id="secondary-btn">Sign Up</button></p>
            }
            {isSignUp?
           <button className="primary-btn" onClick={handleSubmit}>Sign up</button>:
           <button className="primary-btn" onClick={handleSubmit}>Login</button>
        }
        </div>
    );
};

export default Login;
