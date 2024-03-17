import Navbar from "../Navbar/navbar";
import Recipes from "../recipe-photos/recipes";
import recipe2 from "../recipe-photos/recipe2.jpeg";
import "./default-recipes.scss";
import { useEffect, useState } from 'react';
import CreateRecipe from "../create-recipe/create-recipe";
import "../homepage/homepage.scss"

const DefaultRecipes = () => {
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
        <Navbar isLoggedIn={false} currPage={"home"} handleCreateRecipe={()=>toggleRecipeDisplay()}/>
        <div className={displayToggleRecipe?"disabledContent":""}>
        {displayToggleRecipe==false&&
        <div class="recipes">
            <Recipes 
                time={20}
                image ={recipe2}
                recipeName="Mediterranean Chickpea Salad"
            />
        </div>
}
        </div>
    </body>
)}
export default DefaultRecipes;