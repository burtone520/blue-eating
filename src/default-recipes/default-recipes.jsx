import Navbar from "../Navbar/navbar";
const DefaultRecipes = () => {
    return (
    <body>
        <Navbar isLoggedIn={false} currPage={"home"}/>
        <div class="recipes">
            <div id="item1"></div>
            <div id="item2"></div>
            <div id="item3"></div>
            <div id="item4"></div>
            <div id="item5"></div>
            <div id="item6"></div>
            <div id="item7"></div>
            <div id="item8"></div>
            <div id="item9"></div>
            <div id="item10"></div>
            <div id="item11"></div>
            <div id="item12"></div>
        </div>
    </body>
)}
export default DefaultRecipes;