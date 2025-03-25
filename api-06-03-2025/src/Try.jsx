// import axios from "axios";
import { useEffect } from "react";



function Try(){
useEffect(()=>{
    axios.get("http://localhost:3000/student")
    .then(res=>{
        console.log(res.data)
    })
},[])
}
export default Try;
