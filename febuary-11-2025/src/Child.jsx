import  Child2 from './Child2'


const Child=(props)=>{

//  let{name,age}=props;


return( 
    <>

    <h1>Answer Child  {props.name} </h1>
        <br /> 
       <h1>Age if child  {props.age}</h1>
         { props.employid}
        {props.designation}

        <Child2 />
       
        
         
    
    </>
)
}
export default Child;