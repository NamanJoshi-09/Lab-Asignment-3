import React, { useState } from 'react'
import Heading from './components/Heading'
import AddStudent from './components/AddStudent'
import StudentsSummary from './components/StudentsSummary'
import AllDetails from './components/AllDetails'

function App() {

  const initialStudents = [
    {id:1,name:"Naman",score:78},
    {id:2,name:"Addi",score:58},
    {id:3,name:"Dhruv",score:39}
  ]

  const [students,setStudents] = useState(initialStudents)

  const updateScore = (index,newScore)=>{
    const updated = students.map(s=>s.id === index+1 ? {...s,score:Number(newScore)}:s)

    setStudents(updated)
  }


 


  return (
    <div className='w-full flex flex-col items-center gap-10 p-20 h-full bg-gray-900'>
    <Heading/>
    <AddStudent students={students} setStudents={setStudents}/>
    <StudentsSummary/>
    <AllDetails students={students} updateScore={updateScore}/>
    </div>
  )
}

export default App