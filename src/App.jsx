import React, { useState } from 'react'
import Heading from './components/Heading';
import AddStudent from './components/AddStudent';
import StudentSummary from './components/StudentSummary';
import AllDetais from './components/AllDetails';
function App(){
  const initialStudents = [
    {id:1,name:"Aman",score:78},
    {id:2,name:"Alex",score:38},
    {id:3,name:"Kai",score:55}
  ]
  const[students,setStudents] = useState(initialStudents)
  const updateScore = (index,newScore)=>{
    const updated = students.map((s,i) => i === index ? {...s,score:Number(newScore)}:s)
    setStudents(updated)
  }

  return(
    <div className="min-h-screen w-full flex flex-col items-center gap-10 py-10 px-4 bg-gradient-to-br from-gray-900 via-[#0a192f] to-black">
      <Heading/>
      <AddStudent students={students} setStudents={setStudents}/>
      <StudentSummary students={students}/>
      <AllDetais students={students} updateScore={updateScore}/>
    </div>

  )
}
export default App;