import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faLock, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import axios from "axios";
import "../login/login.scss"
import "./create-recipe.scss"
import { CookiesProvider, useCookies } from 'react-cookie'
const CreateRecipe = ({toggleRecipeDisplay}) => {
    const [cookies, setCookie,removeCookie] = useCookies(['user'])
    const [recipeName, setRecipeName] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [instructions, setInstructions] = useState("");
    const [image, setImage] = useState(null);
    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };
    
    const handleCreateRecipe = async (e) => {
        const formData = new FormData();
        console.log(recipeName,ingredients,instructions,image)
        formData.append('imageOfProduct',image);
        formData.append('recipeName',recipeName);
        formData.append('ingredients',["Kill Me","Please"]);
        formData.append('directions',instructions);
        formData.append("userID",cookies.user)
        console.log(formData)

        try {
            const response = await axios.post('http://localhost:3000/recipe', formData);
            console.log('Recipe created successfully:', await response.data);
            setRecipeName("")
            setIngredients("")
            setInstructions("")
            closeRecipeDisplay()
        } catch (error) {
            console.error('Error:', error);
        }
    }

    const closeRecipeDisplay = () =>{
        toggleRecipeDisplay()
    }

    return (
        <div className="signin-container"> 
            <h2 className="createRecipeHeader">Create New Recipe</h2>
            <FontAwesomeIcon icon={faCircleXmark} className="closeIcon" onClick={()=>toggleRecipeDisplay()}/>
            <div className="input-box input-box-name">
                <input type="text" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} placeholder="Recipe Name" />
            </div>
            <div className="input-box input-box-ingredients">
                <textarea class="ingredients-text-box" type="text" value={ingredients} onChange={(e) => setIngredients(e.target.value)} placeholder="Ingredients..." />
            </div>
            <div className="input-box input-box-instructions">
                <textarea class="instructions-text-box" type="text" value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Instructions..." />
            </div>
            <div className="input-box">
                <input type="file" id="imageInput" accept="image/" onChange={handleImageChange}></input>
            </div>
           <button className="primary-btn" onClick={handleCreateRecipe}>Create</button>
        </div>
    );
};

export default CreateRecipe;
