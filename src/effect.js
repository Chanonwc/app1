import React,{useState,useEffect } from 'react';


function Effect(){
    const [count, setCount]= useState(0)
    const [name , setName]= useState("John Wick")

        useEffect(()=>{
            document.title = `You Cliked ${count} times`
        },[count])

        return(
            <center>
                <h1>{name}</h1>
                <h3>{count}</h3>
            
                <button onClick={()=> setCount(count + 1)}>increase</button>
                <button onClick={()=> setCount(count - 1)}>Decrease</button>
                <button onClick={()=> setName("John Wick")}>Change Name</button>
            </center>    
        )
}
export default Effect