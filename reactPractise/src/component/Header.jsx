function Header(){
    const name = "priya";
    return(<>
    <header className="flex justify-between p-4 items-center flex-col md:flex-row w-full" >
        <h1 className="text-red-500 text-2xl p-4 font-bold">My Website</h1>
<button className ="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700
 cursor-pointer transition">Login</button>
  </header>
<p> Welcome {name}</p>

<h1> Hello </h1>
    </>
    
    

);
}
export default Header;
                                                                                                                                                                                                                                                                                                                                                                                                                                                