import { NavLink } from "react-router-dom";

function Nav() {
return (
<div>
<NavLink to="/"
className={({ isActive})=>isActive ? "active" :""}
>Home.</NavLink>
<NavLink to="/about"
className={({ isActive})=>isActive ? "active" :""}
>About.</NavLink>
<NavLink to="/login"
className={({ isActive})=>isActive ? "active" :""}
>Login.</NavLink>
</div>
);
}
export default Nav;