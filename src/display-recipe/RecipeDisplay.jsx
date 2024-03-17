import "./RecipeDisplay.scss"
import { useParams } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import React from "react";
import { useEffect, useState } from 'react';
import {useCookies} from "react-cookie"
const RecipeDisplay = () =>{
    const [cookies, setCookie] = useCookies(['user'])
    const [displayLogin,setDisplayLogin] = useState(false)
    const [userSignedIn,setUserSignIn] = useState(cookies.user)
    useEffect(()=>{
        setUserSignIn(cookies.user)
    },[cookies.user])
    const toggleDisplay = () =>{
        setDisplayLogin(!displayLogin)
    }
    const { id } = useParams(); // Access the "id" parameter from the URL
    const randomNumber = Math.floor(Math.random() * (20 - 10 + 1)) + 10;
    const demoRecipe ={
        "Title":"Shrimp Scampi",
        "ingredientList":["Shimp","Scampi"],
        "Creator":"Brilynd",
        "image":"https://www.allrecipes.com/thmb/jiV_4f8vXFle1RdFLgd8-_31J3M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229960-shrimp-scampi-with-pasta-DDMFS-4x3-e065ddef4e6d44479d37b4523808cc23.jpg",
        "instructions":"Place rice in a fine sieve. Rinse under cold water until water is nearly clear, about 1 minute. Drain well then set aside.Melt 1 Tbsp butter in a pot over medium heat. Add onion and saute 4 minutes. Add garlic and saute 30 seconds longer.Pour in chicken broth, lemon zest and season with salt and pepper to taste. Bring to a boil, then pour in rice and give it a quick stir. Cover and reduce heat to low. Let simmer 13 minutes (meanwhile peel the shrimp to make the most of the time). After 13 minutes quickly add the shrimp to the rice in an even layer, drizzle with lemon juice, dot with remaining 4 Tbsp butter. Cover and continue to cook 2 to 3 minutes longer until shrimp are about halfway cooked. Remove from heat. Toss in parmesan and parsley. Let rest for a few minutes, covered until shrimp are fully cooked through from the residual heat."
    }
return(
    <React.Fragment>
        <Navbar isLoggedIn={cookies.user} currPage={"explore"} toggleLogin={toggleDisplay} />
    <div className="Container">
        <div className="Image-Container">
    <img src={demoRecipe.image} alt="" />
        </div>
        <div className="Recipe-details">
            <h1 className="Recipe-Title">{demoRecipe.Title}</h1>
            <p className="cookingTime">Cooking time: {randomNumber}</p>
            <p className="creator">Creator:{demoRecipe.Creator}</p>
        </div>
        <div className="Recipe-Ingredients">
            <p className="IngredientsHeader">Ingredients:</p>
            {demoRecipe.ingredientList!=undefined&& demoRecipe.ingredientList.map(item=>{
                return(
                    <p className="ingredientItem">
                        {item}
                    </p>
                )
            })}
        </div>
        </div>
        <div className="Recipe-Directions">
            <h1>Directions: How to Make {demoRecipe.Title}</h1>
            <p className="Directions-txt">
            {demoRecipe.instructions}
            </p>
        </div>
    
    </React.Fragment>
)
}
export default RecipeDisplay;