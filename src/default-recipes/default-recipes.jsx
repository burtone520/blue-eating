import Navbar from "../Navbar/navbar";
import Recipes from "../recipe-photos/recipes";
import recipe2 from "../recipe-photos/recipe2.jpeg";
import "./default-recipes.scss";

const DefaultRecipes = () => {
    return (
    <body>
        <Navbar isLoggedIn={false} currPage={"home"}/>
        <div class="recipes">
            <Recipes 
                time={20}
                image ={recipe2}
                recipeName="Mediterranean Chickpea Salad"
            />
        </div>
    </body>
)}
export default DefaultRecipes;