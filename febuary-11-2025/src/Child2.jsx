import Child3 from './Child3'

function Child2(props){
    return(
        <>
        
   
          {props.employid}
        {props.designation}
        <Child3 />
        </>
    )
}
export default Child2;
// props parent to child data flow karta hai