import { useState } from "react";

const Counter=()=>{
    const [count,setCount] = useState(0);
    const [value,setValue] = useState("demo");

    function onTextChange (event){
        setValue(event.target.value)
    }
    return(<>
    <input type="text" value={value} onChange={event=>onTextChange(event)}/>
        Your input {value}<br/>
    
    {count}
    <button onClick={()=>setCount(count+1)}>Youclick </button>
    <button onClick={()=>setCount(0)}>reset</button>
    
        </>)
}

export default Counter;