import Bg from"./component/Bg"


import { useState } from "react"
function State() {
 const[object,setobject]=useState({
  name:"semon",
  city:"bhopal",
  age:"26 ",
  collage:"nri"
 })
const[array,setArray]=useState(
  ["ashfaq","delhi","56","manoj"]
)
  return (
    <>
    <div>
    <h1>my name is: {object.name}</h1>
    <h1>my city is: {object.city}</h1>
    <h1>my age is: {object.age}</h1>
    <h1>my collage is: {object.collage}</h1>
</div>
<div>
  <h1>{array[0]}</h1>
</div>

  <Bg/>
    </>
  )
}

export default State;
