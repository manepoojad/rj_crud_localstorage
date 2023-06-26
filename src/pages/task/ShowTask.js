import { Table } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'


function ShowTask() {
    const navigate = useNavigate()
    const [taskList, setTaskList] = useState([])

    useEffect(() => {
        const getStringifyTaskData = localStorage.getItem('taskInfo')
        const getParsedTaskData = JSON.parse(getStringifyTaskData)
        console.log(getParsedTaskData)
        setTaskList(getParsedTaskData)
    }, [])

    const handleDeleteTaskData = (clickItemIndex) => {
        const getStringifyTaskData = localStorage.getItem('taskInfo')
        const getParesdTaskData = JSON.parse(getStringifyTaskData)
        const newArr = getParesdTaskData.filter((item, index) => {
            if (index == clickItemIndex) {
                return false
            }
            else {
                return true
            }

        })

        setTaskList(newArr)
        const newArrStringifyData = JSON.stringify(newArr)
        localStorage.setItem('taskInfo', newArrStringifyData)

    }
    const handleEditTaskData = (item, clickItemIndex) => {
        navigate(`/editTask/${clickItemIndex}`, {
            state: {
                taskData: { ...item }

            }
        })
    }

   const handleTaskDetailData=(item,clickItemIndex)=>{
    navigate(`/detailOfTask/${clickItemIndex}`,{
        state:{
            task:{...item}
        }
    })

    }

    return (
        <div>

            <Table variant='dark' striped>
                <thead>
                    <tr>
                        <th>S.N</th>
                        <th>Date</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>UI Technology</th>
                        <th>Back End Technology</th>
                        <th>Library Used</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        taskList && taskList.map((item, index) => {
                            {
                                return (
                                    <tr key={index}>
                                        <td>{index + 1}</td>
                                        <td>{item.date}</td>
                                        <td>{item.projectTitle}</td>
                                        <td>{item.projectDescription}</td>
                                        <td>{item.uiTechnology}</td>
                                        <td>{item.backendtechnology}</td>
                                        <td>{item.libraryUsed}</td>
                                        <td>
                                            <button type="button" onClick={() => handleDeleteTaskData(index)} >Delete</button>
                                            <button type="button" onClick={() => handleEditTaskData(item, index)}>Edit</button>
                                            <button type='button' onClick={()=>handleTaskDetailData(item,index)}>TaskDetails</button>
                                        </td>

                                    </tr>
                                )
                            }
                        })
                    }
                </tbody>
            </Table>

        </div>
    )
}
export default ShowTask