function About() {
  return <h1>THIS IS ABOUT</h1>;
}
export default About;



const About =() =>{
    const {id} = userParams()
    return(
        <div>
            <Navbar/>
            <h1>YOUR ID {id}</h1>
        </div>

}