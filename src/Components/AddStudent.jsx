import { useState } from "react";

function AddStudent({students,setStudents}){
    const [newStudent,setNewStudent] = useState({
        id:"",
        name:"",
        score:""

    })
    const handleScoreChange=(value)=>{
        setNewStudent(s=>({
            ...s,
            score:value
        }))
    }
    const handleNameChange=(value,index)=>{
        setNewStudent(s=>({
            ...s,id:index+1,
            name:value
        }))
    }
    const submitStudent = ()=>{
        setStudents((prev)=>[...prev,newStudent])
        setNewStudent({
        id:"",
        name:"",
        score:""
        })
    }
    return(
        <div>
            <div className="w-200 flex flex-col">
                <div className="flex justify-between items-center text-[#256594] border-1 border-[#256594] border-b-0 py-3 px-4"></div>
                
                <div className="text-[#256594] flex border-0">
                    <input type="text" name="" placeholder="STUDENT NAME" id="" className="flex-1 p-5  border-1 outline-0" value={newStudent.name} onChange={(e)=>handleNameChange(e.target.value)}/>
                    <input type="text" name="" placeholder="SCORE (0-100)" id="" className="flex-1 p-5  border-1 outline-0" value={newStudent.score} onChange={(e)=>handleScoreChange(e.target.value)}/>
                    <button className="px-6 bg-cyan-400/10 hover:bg-cyan-400 hover:text-black transition-all duration-300 font-semibold" onClick={submitStudent}>+ ADD</button>
                </div>
            </div>
        </div>
    )
}

export default AddStudent;