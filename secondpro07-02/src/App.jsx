import Nav from "./Navbar";



function App(){

  let para={
    color:"red",
    backgroundColor:"black",
    fontFamily:"cursive",
    fontSize:"20px"

  }

  return(
    <>
    <Nav/>
    
    <h1 style={{color:"aqua", fontFamily:"fantasy", textShadow:"20px "}}>Welcome</h1>
    <p style={{ color:"black",backgroundColor:"yellow", fontFamily:"monospace"}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore explicabo saepe blanditiis pariatur repellat? Debitis tenetur aperiam quidem voluptates temporibus corrupti quia amet voluptas atque possimus! Facilis ipsa quod sequi quae eum reiciendis eos enim culpa perspiciatis at tempore autem, quidem illum aliquid dolorem nam, aliquam soluta pariatur est sunt.</p>


    <p style={para}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita asperiores itaque nisi blanditiis est obcaecati omnis rerum possimus sapiente odio deserunt veritatis eos, voluptatibus recusandae id, quidem, fuga aliquam laudantium?</p>

    </>
  )
}
export default App;