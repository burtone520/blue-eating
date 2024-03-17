import "./navbar.scss"
import logo from "../blue eating logo.svg"
const Navbar = ({currPage,isLoggedIn}) =>{
    const getUsersName = ()=>{
        return "E"
    }
    //create a 
return(
    <div className="container-navbar">
        <img src={logo} alt="" className="logo"/>
        {isLoggedIn === "false"?
        <ul className="navbar-list">
            <li id={currPage=="home"?"curr":""}>Home</li>
            <li id={currPage=="lifeStyle"?"curr":""}>Life Style</li>
            <li id={currPage=="signUp"?"curr":""}>Sign Up</li>
        </ul>
        :
    <ul className="navbar-list">
        <li>Explore</li>
        <li>Search Recipes</li>
        <li>Create Recipe</li>
        <li>Life Style</li>
        <div>
        <p>{getUsersName}</p>
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