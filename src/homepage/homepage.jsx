import { Link } from "react-router-dom";
import './homepage.scss';
import Navbar from "../Navbar/navbar";
import salad from "./salad.mp4"
const Homepage = () => {
    return (
        <body> 
            <Navbar isLoggedIn={true} currPage={"home"}/>
            <div class="main-text">
                <div class="header">From blue zones to your home</div>
                <div class="subheader">Eat better. Feel better.</div>
                <button class="start">Get Started!</button>
            </div>
            <div>
                <video class="main-vid" autoPlay loop>
                    <source src={salad} type='video/mp4'/>
                </video>
            </div>

        </body>
    )
}
export default Homepage;
