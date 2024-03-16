import { Link } from "react-router-dom";
import {UseState, UseEffect} from 'react';
import './homepage.scss';

const Homepage = () => {
    return (
        <body> 
            <div class="main-text">
                <div class="header">From blue zones to your home</div>
                <div class="subheader">Eat better. Feel better.</div>
                <button class="start">Get Started!</button>
            </div>

        </body>
    )
}
export default Homepage;
