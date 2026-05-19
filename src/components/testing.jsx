import { useState } from "react"
//import "./testing.css"

export default function Testing() {
  
   const [count,setCount]  = useState(0)
   const [name,setName] = useState("Student")
   
 

    function increment() {
    if(count <100 ){   
       setCount(count + 10)
       
   }
  }

    function decrement() {
       if(count >0 ){
       setCount(count - 10)
       
   }
  }
 
 
    function changeName(value) {
     setName(value)
   }

  return (
    <div className="background">
      <h1>{name}</h1>

      <button className="val" onClick={decrement}> - </button>
      <span> {count}</span>
      <button className="val" onClick={increment}> + </button>
    
      <div className="button-panel">
            <button onClick={()=>changeName("Students")}> Student</button>
            <button onClick={()=>changeName("Teacher")}> Teacher</button>   
            <button onClick={()=>changeName("Admins")}> Admin</button>
            <button onClick={()=>changeName("Tharindu")}> Tharindu</button>

        </div>

    </div>
  )
}