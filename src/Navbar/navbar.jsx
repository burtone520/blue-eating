import "./navbar.scss"
import logo from "../blue eating logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoxesAlt, faCaretDown, faCarrot } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useState } from "react"
import { CookiesProvider, useCookies } from 'react-cookie'
const Navbar = ({currPage,isLoggedIn,toggleLogin, handleCreateRecipe}) =>{
    const [displayLogin,setDisplayLogin] = useState(false)
    const [displayRecipe,setDisplayRecipe] = useState(false)
    const [cookies, setCookie,removeCookie] = useCookies(['user'])
    const [userInitialCookie, userInitialSetCookie,userInitialRemoveCookie] = useCookies(['initial'])

    const logout = () =>{
        if (cookies.user!=undefined){
            removeCookie(['user'])
            removeCookie(["userInitial"])
        }
     
    }
return(
    <div className="container-navbar">
        <img src={logo} alt="" className="logo"/>
        {cookies.user==undefined?
        <ul className="navbar-list">
            <li id={currPage=="home"?"curr":""}><Link to="/" style={{ textDecoration: 'none', color:"inherit"}}>Home</Link></li>
            {/* <li id={currPage=="lifeStyle"?"curr":""}>Life Style</li> */}
            <li >Life Style</li>
            <li onClick={()=>toggleLogin()}>Sign Up</li>
        </ul>
        :
    <ul className="navbar-list">
        <li><Link to="recipies" style={{ textDecoration: 'none', color:"inherit"}}>Explore</Link></li>
        <li>Search Recipes</li>
        <li onClick={()=>handleCreateRecipe()}>Create Recipe</li>
        <li><Link to="create-recipe" style={{textDecoration: 'none', color: "inherit"}}>Life Style</Link></li>
    
        <div className="user-Dropdown">
        <p className="userIcon">{userInitialCookie.initial[0]}</p>
        <FontAwesomeIcon icon={faCaretDown} className="carretIcon" />
        <ul>
            <li>Saved Recipes</li>
            <li>Created Recipes</li>
            <li onClick={logout}>Sign Out</li>
        </ul>
  
        </div>
    </ul>
}
    </div>
)
}
export default Navbar;