import { Table } from "react-bootstrap"
import { useNavigate,useLocation,useParams} from "react-router-dom"
import { useState,useEffect } from "react"




function DetailOfTask() {
    const navigate = useNavigate()
    const location=useLocation()
    const params=useParams()
    console.log(params)
    
   

    const [taskData,setTaskData]=useState({
        date:"",
        projectTitle: "",
        projectDescription: "",
        uiTechnology: "",
        backendtechnology: "",
        libraryUsed: []

    })

    useEffect(()=>{
        console.log(location)
        const newTaskData=location.state.task
        console.log(newTaskData)
        setTaskData({
            ...newTaskData
        })

    },[])

    console.log(taskData)


    const handleRetriveTaskData=()=>{
        navigate("/ShowTask")

    }

    const handleDeleteTaskDetail=()=>{
        /**
         * get data from localstorage and parse that data
         * use filter to that parsed data 
         * set that filter list to localstorage 
         * navigate to showtask
         */
        const getStringifyTaskListdata=localStorage.getItem('taskInfo')
        const getParsedTaskListData=JSON.parse(getStringifyTaskListdata)
        console.log(getParsedTaskListData)

        const newArr=getParsedTaskListData.filter((item,index,array)=>{
         if(index ==params.index){
             return false

         }
         else{
            return true
         }
        })

      const stringifyTaskData=JSON.stringify(newArr)
      localStorage.setItem('taskInfo',stringifyTaskData)

      navigate("/ShowTask")

    }




    const handleEditTaskData = () => {
        navigate(`/editTask/${params.index}`,{
          state:{
            taskData:taskData
          }  
        })
    }

    return (
        <div>
            <button type="button" onClick={()=>handleRetriveTaskData()} >Retrieve</button>
            <button type="button" onClick={() => handleEditTaskData()} >Edit</button>
            <button type="button" onClick={()=>handleDeleteTaskDetail()}>Delete</button>

            <Table variant="dark">
                <tbody>
                    <tr >
                        <th>Index:</th>
                        <td>{params.index}</td>
                    </tr>
                    <tr>
                        <th>Date:</th>
                        <td>{taskData.date}</td>
                    </tr>
                    <tr>
                        <th>Title:</th>
                        <td>{taskData.projectTitle}</td>
                    </tr>
                    <tr>
                        <th>Description:</th>
                        <td>{taskData.projectDescription}</td>
                    </tr>
                    <tr>
                        <th>UI Technology:</th>
                        <td>{taskData.uiTechnology}</td>
                    </tr>
                    <tr>
                        <th>Back End Technology:</th>
                        <td>{taskData.backendtechnology}</td>
                    </tr>
                    <tr>
                        <th>Library Used:</th>
                        <td>{taskData.libraryUsed}</td>
                    </tr>
                </tbody>
            </Table>

        </div>
    )
}
export default DetailOfTask