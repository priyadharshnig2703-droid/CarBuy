import heroImg from '../assets/hero.png';
function Main(){

    return (
    <main>
    <div className = " flex flex-col md:flex-row">
<div className = "flex-1 bg-gray-200 h-64">
<img className = "w-full h-full object-cover" src = {heroImg}/>
</div>
<div className = "flex-1 p-6">
    <h2 className = " text-2xl font-bold"> Welcome</h2>
<p> This is my first React Website
</p>
<button className = " bg-blue-500 text-white px-4 py-2 rounded">Learn More</button>
</div>
</div>
    <div className = "bg-gray-200 h-32">
    <h2 className =" text-2xl
font-bold
text-center">About Us</h2>
</div>
    </main>
    );
}
export default Main;