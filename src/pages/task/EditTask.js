import { useEffect, useState } from "react"
import { useLocation ,useParams} from "react-router-dom"


function EditTask(){
    const location=useLocation()
    const params=useParams()
    console.log(params)
    
    const [taskData,setTaskData]=useState({
        date: "",
        projectTitle: "",
        projectDescription: "",
        uiTechnology: "",
        backendtechnology: "",
        libraryUsed: []
    })

     useEffect(()=>{
        console.log(location)
        const newTaskData=location.state.taskData
        console.log(newTaskData)
        setTaskData({
            ...newTaskData
        })
     },[])
          console.log(taskData)
     return(
        <div>
             <h1>This is EditTask Page</h1>
        </div>
    )
}
export default EditTask