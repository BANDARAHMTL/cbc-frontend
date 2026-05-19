import { useState } from "react"
//import "./testing.css"

export default function Testing() {
  // const [count, setCount] = useState(0)
   const [count_1,setCount_1]  = useState(0)
   const [name,setName] = useState("Tharindu")
   
  /* function increment() {
    if(count < 10) {
        setCount(count + 1)
        console.log(count + 1)
    }
   }


    function decrement() {
     if(count > 0) {
         setCount(count - 1)
         console.log(count - 1)
     }   
}
*/

   function increment() {
    if(count_1 <100 ){   
       setCount_1(count_1 + 10)
       console.log(count_1 + 10)
   }
  }

    function decrement() {
       if(count_1 >0 ){
       setCount_1(count_1 - 10)
       console.log(count_1 - 10)
   }
  }
 
 


   function changeName(value) {
     setName(value)
   }

  return (
    <div className="background">
      <h1>{name}</h1>

      <button className="val" onClick={decrement}> - </button>
      <span> {count_1}</span>
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