import React, { useEffect, useState } from 'react';
import "./recipes.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faSearch,faCircleXmark} from "@fortawesome/free-solid-svg-icons"
import RecipesGrid from "../recipes-grid-component/recipes-grid-component.jsx"
const Recipes = ({ id, time, image, recipeName }) => {
    const [isFocused, setIsFocused] = useState(false);
    const [inputValRecipe, setRecipeValue] = useState("");
    const [inputValIngredient, setIngredientValue] = useState("");
    const [ingredientValsDrop, setIngredientValuesDrop] = useState([]);
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
    useEffect(()=>{
        searchByParameter()
    },[inputValIngredient,inputValRecipe])
    const searchByParameter = async() =>{
        try {
            const response = await axios.post('http://localhost:3000/recipes/search',{recipeName:inputValRecipe, ingredients:ingredientValsDrop});
            setRecipes(response.data);
            console.log(response.data)
          } catch (error) {
            console.error('Error fetching recipes:', error);
          }
    }
    const handleFocus = () => {
    setIsFocused(true);
    };
    
    const handleEnterPress = (e) => {
    if (e.key === 'Enter') {
        setIngredientValuesDrop(prevIngValues => [...prevIngValues, e.target.value]);
        setRecipeValue("");
        }
        
    };

    const handleDelete = (valueToDelete) => {
        setIngredientValuesDrop(prevIngValues => prevIngValues.filter(valueIng => valueIng !== valueToDelete));
    };

  return (
  <React.Fragment>
        <div class={ingredientValsDrop.length == 0 ? "ingredient-wrapper" : "dropdown-ingredient-wrapper"}>
            <div className="input">
                    <FontAwesomeIcon icon={faSearch} class="search"/>
                    <input id="recipe"
                        type="text"
                        value={inputValRecipe}
                         onChange={(e)=>{setRecipeValue(e.target.value)}}
                        onKeyUp={(e)=>{handleEnterPress(e)}}
                        class={isFocused ? "input-with-no-border focused input-text placeholder" : "input-with-no-border input-text placeholder"}
                        onFocus={handleFocus}
                        placeholder="Filter by ingredients"/>
                   { ingredientValsDrop.length!=0&&<div class="ingredient-dropdown">
                        <ul>
                            {ingredientValsDrop.map((value, index) => {
                                console.log(value)
                                return(
                            <li key={index}>
                                <p>
                                {value}
                                </p>
                                <FontAwesomeIcon icon={faCircleXmark} class="deleteIcon" onClick={()=>handleDelete(value)}/>
                            </li>)})}
                        </ul>
                     </div>}
            </div>
            </div>
            <div className="input secondary">
                    <FontAwesomeIcon icon={faSearch} class="search"/>
                    <input
                        id="ingredient"
                        type="text"
                        value={inputValIngredient}
                        onChange={(e)=>{setIngredientValue(e.target.value)}}
                        class={isFocused ? "input-with-no-border focused input-text placeholder" : "input-with-no-border input-text placeholder"}
                        onFocus={handleFocus}
                        placeholder="Filter by recipe"/>
            </div>
            <RecipesGrid recipies={recipes}/>
   </React.Fragment>
  );
};

export default Recipes;