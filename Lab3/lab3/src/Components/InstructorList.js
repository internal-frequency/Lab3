import React from 'react'
import Instructor from './Instructor'

function InstructorList() {
  
    const instructors = [
        {
           id: 147852,
            name: 'Mike' ,
            age: 40,
            city: 'Calgary',
            status: false.toString() ,
            
           
        },
        {
            id: 456321,
            name: 'Mary' ,
            age: 38 ,
            city: 'Edmonton' ,
            status: true.toString()  
            
        },
        {
            id: 156234,
            name: 'John' ,
            age: 35 ,
            city: 'Calgary',
            status: false.toString() 
            
        },
        {
            id: 784512,
            name: 'David' ,
            age: 44 ,
            city: 'Calgary' ,
            status: false.toString() 
           
        },
        {
            id: 351246,
            name: 'Jack',
            age: 37,
            city: 'Edmonton' ,
            status: true.toString() 
            
        },
    ]

    const instructorList = instructors.map(instructor => <Instructor instructor= {instructor}/>)
    return <div><ol>{instructorList}</ol> </div>
}

export default InstructorList