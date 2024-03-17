import "./navbar.scss"
import logo from "../blue eating logo.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBoxesAlt, faCaretDown, faCarrot } from '@fortawesome/free-solid-svg-icons'
import { Link } from "react-router-dom";
import { useState } from "react"
const Navbar = ({currPage,isLoggedIn,toggleLogin}) =>{
    const [displayLogin,setDisplayLogin] = useState(false)
    const getUsersName = ()=>{
        return "E"
    }
return(
    <div className="container-navbar">
        <img src={logo} alt="" className="logo"/>
        {isLoggedIn === true?
        <ul className="navbar-list">
            <li id={currPage=="home"?"curr":""}><Link to="/" style={{ textDecoration: 'none', color:"inherit"}}>Home</Link></li>
            <li id={currPage=="lifeStyle"?"curr":""}>Life Style</li>
            <li onClick={()=>toggleLogin()}>Sign Up</li>
        </ul>
        :
    <ul className="navbar-list">
        <li><Link to="recipies" style={{ textDecoration: 'none', color:"inherit"}}>Explore</Link></li>
        <li>Search Recipes</li>
        <li>Create Recipe</li>
        <li>Life Style</li>
    
        <div className="user-Dropdown">
        <p className="userIcon">J</p>
        <FontAwesomeIcon icon={faCaretDown} className="carretIcon" />
        <ul>
            <li>Saved Recipes</li>
            <li>Created Recipes</li>
            <li>Sign Out</li>
        </ul>
  
        </div>
    </ul>
}
    </div>
)
}
export default Navbar;