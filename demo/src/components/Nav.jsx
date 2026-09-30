import Navbar from "./component/Nav";
function Navbar() {
    return (
        <nav className="flex justify-center gap-8 p-4 bg-gray-200">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
        </nav>
    );
}

export default Navbar;