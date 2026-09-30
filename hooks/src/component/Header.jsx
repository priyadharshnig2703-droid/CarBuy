
import {useState} from "react";
function Header()
{ return(
<header className = "p-4 flex justify-between">
<div className = "flex gap-4"> 
<p className = "font-bold">MYNTRA</p>
<div className= "flex gap-4">
<p>MEN</p>
<p>WOMEN</p>
<p>KIDS</p>
<p>HOME</p>
<p>BEAUTY</p>
<p>GENZ</p>
<p>STUDIO</p>
</div>
</div>
<div className="flex gap-4 cursor-pointer">
<input className= "w-64 px-4 border rounded" placeholder="Search for products, brands and more"/>
<p className = " text-sm">Profile</p>
<p className = "text-sm">Wishlist</p>
<p className = "text-sm">Bag</p>
</div>
</header>  
);
}
export default Header;