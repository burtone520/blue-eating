import Navbar from "../Navbar/navbar";
import "./default-recipes.scss";
import CreateRecipe from "../create-recipe/create-recipe";
import "../homepage/homepage.scss"
import React from "react";
import { useEffect, useState } from 'react';
import {useCookies} from "react-cookie"
import RecipesGrid from "../recipes-grid-component/recipes-grid-component";

const DefaultRecipes = () => {
    const [cookies, setCookie] = useCookies(['user'])
    const [displayLogin,setDisplayLogin] = useState(false)
    const [userSignedIn,setUserSignIn] = useState(cookies.user)
    useEffect(()=>{
        setUserSignIn(cookies.user)
    },[cookies.user])
    const toggleDisplay = () =>{
        setDisplayLogin(!displayLogin)
    }
    const [displayToggleRecipe, setDisplayRecipe] = useState(false)
    const toggleRecipeDisplay = () =>{
        setDisplayRecipe(!displayToggleRecipe)
    }
    return (
    <body>
        {
            displayToggleRecipe == true?
            <div className='overlay' >
                <CreateRecipe toggleRecipeDisplay={()=>toggleRecipeDisplay()}/>
            </div>:""
        }       
        <Navbar isLoggedIn={false} currPage={"home"} handleCreateRecipe={()=>toggleRecipeDisplay()} toggleLogin={toggleDisplay}/>
        <div className={displayToggleRecipe?"disabledContent":""}>
        {displayToggleRecipe==false&&
        <div class="recipes-grid">
            <RecipesGrid/>
        </div>
}
        </div>
    </body>
)}
export default DefaultRecipes;