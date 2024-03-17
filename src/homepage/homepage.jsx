import './homepage.scss';
import Navbar from "../Navbar/navbar";
import salad from "./salad.mp4"
import { useEffect, useState } from 'react';
import Login from '../login/login';
import {useCookies} from "react-cookie"
import CreateRecipe from "../create-recipe/create-recipe";
const Homepage = () => {
    const [cookies, setCookie] = useCookies(['user'])
    const [displayLogin,setDisplayLogin] = useState(false)
    const [userSignedIn,setUserSignIn] = useState(cookies.user)
    

    const [displayToggleRecipe, setDisplayRecipe] = useState(false)
    const toggleRecipeDisplay = () =>{
        setDisplayRecipe(!displayToggleRecipe)
    }
    
    useEffect(()=>{
        setUserSignIn(cookies.user)
    },[cookies.user])
    const toggleDisplay = () =>{
        setDisplayLogin(!displayLogin)
    }
    return (
        <body> 
                  {
            displayToggleRecipe == true?
            <div className='overlay' >
                <CreateRecipe toggleRecipeDisplay={()=>toggleRecipeDisplay()}/>
            </div>:""
        }       
                                   {displayLogin==true?
            <div className='overlay' >
                <Login toggleDisplay={toggleDisplay}/>
            </div>:""
}           
            <div className={displayLogin?"disabledContent":""}>
            <Navbar isLoggedIn={cookies.user} currPage={"home"} toggleLogin={toggleDisplay} handleCreateRecipe={()=>toggleRecipeDisplay()}/>

            <div class="main-text">
                <div class="header">From blue zones to your home</div>
                <div class="subheader">Eat better. Feel better.</div>
                <button class="start" onClick={toggleDisplay}>Get Started!</button>
            </div>
            <div>
                <video class="main-vid" autoPlay loop>
                    <source src={salad} type='video/mp4'/>
                </video>
            </div>
            </div>
        </body>
    )
}
export default Homepage;
