import { Link } from "react-router-dom";
import {UseState, UseEffect} from 'react';
import './homepage.scss';
import Navbar from "../Navbar/navbar";
const Homepage = () => {
    return (
        <body> 
            <Navbar isLoggedIn={true} currPage={"home"}/>
            <div class="main-text">
                <div class="header">From blue zones to your home</div>
                <div class="subheader">Eat better. Feel better.</div>
                <button class="start">Get Started!</button>
            </div>

        </body>
    )
}
export default Homepage;
