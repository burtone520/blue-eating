const Navbar = ({currPage,isLoggedIn}) =>{
    const getUsersName = ()=>{
        return "E"
    }
return(
    <div className="container navbar">
        <img src="" alt="" />
        {isLoggedIn!=""?
        <ul className="navbar-list">
            <li>Home</li>
            <li>Life Style</li>
            <li>Sign Up</li>
        </ul>
        :
    <ul className="navbar-list">
        <li>Login</li>
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