import Navbar from "../Navbar/navbar";
import "./default-recipes.scss";
import CreateRecipe from "../create-recipe/create-recipe";
import "../homepage/homepage.scss"
import React from "react";
import { useEffect, useState } from 'react';
import {useCookies} from "react-cookie"
import RecipesGrid from "../recipes-grid-component/recipes-grid-component";
import axios from "axios";
const DefaultRecipes = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
      const fetchRecipes = async () => {
        try {
          const response = await axios.get('http://localhost:3000/recipes');
          setRecipes(response.data);
          console.log(response.data)
        } catch (error) {
          console.error('Error fetching recipes:', error);
        }
      };
  
      fetchRecipes();
    }, []);
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

        </div>
        {displayToggleRecipe==false&&
        <div class="recipes-grid">
            {recipes!=undefined &&
            <RecipesGrid recipies={recipes}/>
}
        </div>
}
    </body>
)}
export default DefaultRecipes;