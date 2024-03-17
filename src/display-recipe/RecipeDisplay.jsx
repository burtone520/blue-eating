import "./RecipeDisplay.scss"
import { useParams } from "react-router-dom";
const RecipeDisplay = () =>{
    const { id } = useParams(); // Access the "id" parameter from the URL

    const demoRecipe ={
        "Title":"Shrimp Scampi",
        "ingredientList":["Shimp","Scampi"],
        "Creator":"Brilynd",
        "image":"https://www.allrecipes.com/thmb/jiV_4f8vXFle1RdFLgd8-_31J3M=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/229960-shrimp-scampi-with-pasta-DDMFS-4x3-e065ddef4e6d44479d37b4523808cc23.jpg",
        "instructions":"Place rice in a fine sieve. Rinse under cold water until water is nearly clear, about 1 minute. Drain well then set aside.Melt 1 Tbsp butter in a pot over medium heat. Add onion and saute 4 minutes. Add garlic and saute 30 seconds longer.Pour in chicken broth, lemon zest and season with salt and pepper to taste. Bring to a boil, then pour in rice and give it a quick stir. Cover and reduce heat to low. Let simmer 13 minutes (meanwhile peel the shrimp to make the most of the time). After 13 minutes quickly add the shrimp to the rice in an even layer, drizzle with lemon juice, dot with remaining 4 Tbsp butter. Cover and continue to cook 2 to 3 minutes longer until shrimp are about halfway cooked. Remove from heat. Toss in parmesan and parsley. Let rest for a few minutes, covered until shrimp are fully cooked through from the residual heat."
    }
return(
    <div className="Container">
        <div className="Image-Container">
    <img src={demoRecipe.image} alt="" />
        </div>
        <div className="Recipe-details">
            <h1>{demoRecipe.Title}</h1>
            <p>Cooking time: {randomNumber}</p>
            <p>Creator:{demoRecipe.Creator}</p>
        </div>
        <div className="Recipe-Ingredients">
            <p>Ingredients:</p>
            {demoRecipe.ingredientList!=undefined&& demoRecipe.ingredientList.map(item=>{
                return(
                    <p className="ingredientItem">
                        {item}
                    </p>
                )
            })}
        </div>
        <div className="Recipe-Directions">
            <h1>Directions:How to Make {recipeName}</h1>
            <p className="Directions-txt">
            {demoRecipe.instructions}
            </p>
        </div>
    </div>
)
}
export default RecipeDisplay;