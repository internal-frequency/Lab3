import React from 'react'
import './myStyle.css'


/*  
Ali I tried to figure out how to get the colors to change with CSS but I couldn't get it to work propley
So i resorted to using the style to have the colors changed based on the status
*/




function Instructor({instructor}) {
  return (
    <div class = 'instructor' style = {{color:instructor.status === "true" ? 'green' : 'red'}}>
      
         <h2> 
         <li>Name:{instructor.name} <br></br></li>
          Age: {instructor.age} <br></br>
          City: {instructor.city} <br></br>
          Status of teaching in spring? {instructor.status} 
          </h2>
    </div>

  

    
  )

}

export default Instructor