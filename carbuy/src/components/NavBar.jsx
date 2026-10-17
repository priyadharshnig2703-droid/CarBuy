import {Link} from "react-router-dom";

function NavBar(){
    return(
        <nav>
            <div className ="logo">
                <h1> CarBuy</h1>
                </div> 
            <div className = "nav-links">
                <Link to ="/">Home</Link>
                <Link to="/browse-cars">Browse Cars</Link>

             <Link to="/my-purchases">My Purchases</Link>
                <a href="/my-loans">My Loans</a>     
               <a href="/favorites">Favorites</a>
                
            </div>
        </nav>
    )
}

export default NavBar;