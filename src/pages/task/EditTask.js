import { useEffect, useState } from "react"
import { useLocation, useParams, useNavigate, Navigate } from "react-router-dom"


function EditTask() {
    const navigate = useNavigate()
    const location = useLocation()
    const params = useParams()
    console.log(params)

    const [taskData, setTaskData] = useState({
        date: "",
        projectTitle: "",
        projectDescription: "",
        uiTechnology: "",
        backendtechnology: "",
        libraryUsed: []
    })

    useEffect(() => {
        console.log(location)
        const newTaskData = location.state.taskData
        console.log(newTaskData)
        setTaskData({
            ...newTaskData
        })
    }, [])
    console.log(taskData)

    const handleInputChange = (e) => {
        const name = e.target.name
        const type = e.target.type
        const value = e.target.value

        if (type == "checkbox") {
            const checked = e.target.checked
            let newValue = [...taskData.libraryUsed]
            if (checked) {
                newValue.push(value)

            }
            else {
                newValue = newValue.filter(item => item !== value)

            }
            setTaskData({
                ...taskData,
                libraryUsed: newValue
            })
        }
        else {
            setTaskData({
                ...taskData,
                [name]: e.target.value,
            })
        }

    }

    const updateTaskData = () => {
        const getStringifyTaskData = localStorage.getItem('taskInfo')
        const getParesdTaskData = JSON.parse(getStringifyTaskData)
        const newArr = getParesdTaskData.map((item, index) => {
            if (index == params.index) {
                return taskData
            }
            else {
                return item
            }

        })
        console.log(newArr)

        const newArrStringifyTaskData = JSON.stringify(newArr)
        localStorage.setItem('taskInfo', newArrStringifyTaskData)

        navigate("/ShowTask")


    }

    return (
        <div>
            <h1>This is EditTask Page</h1>
            <form>
                <div>
                    <label>Date:</label>
                    <input
                        type="date"
                        name="date"
                        value={taskData.date}
                        placeholder="yyyy-mm-dd"
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <label>Project Title:</label>
                    <input
                        type="text"
                        name="projectTitle"
                        value={taskData.projectTitle}
                        placeholder="Enter Project Title"
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <label>Project Description:</label>
                    <textarea
                        name="projectDescription"
                        value={taskData.projectDescription}
                        placeholder="Enter description"
                        onChange={e => handleInputChange(e)}
                    >
                    </textarea><br /><br />
                </div>
                <div>
                    <label>UI Technology:</label>
                    <select
                        name="uiTechnology"
                        value={taskData.uiTechnology}
                        onChange={e => handleInputChange(e)}>
                        <option value="select">Select</option>
                        <option value="react">React</option>
                        <option value="angular">Angular</option>
                        <option value="flutter">Flutter</option>
                        <option value="vue.Js">Vue.js</option>
                    </select><br /><br />
                </div>
                <div>
                    <label>Back-End Technology:</label>
                    <label>Python</label>
                    <input
                        type="radio"
                        name="backendtechnology"
                        value="python"
                        checked={taskData.backendtechnology === "python"}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>.NET</label>
                    <input
                        type="radio"
                        name="backendtechnology"
                        value="net"
                        checked={taskData.backendtechnology === "net"}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>PHP</label>
                    <input
                        type="radio"
                        name="backendtechnology"
                        value="php"
                        checked={taskData.backendtechnology === "php"}
                        onChange={e => handleInputChange(e)}
                    /><br /><br />
                </div>
                <div>
                    <label>Library Used:</label>
                    <label>Redux</label>
                    <input
                        type="checkbox"
                        name="libraryUsed"
                        value="redux"
                        checked={taskData.libraryUsed && taskData.libraryUsed.includes("redux")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Saga</label>
                    <input
                        type="checkbox"
                        name="libraryUsed"
                        value="saga"
                        checked={taskData.libraryUsed && taskData.libraryUsed.includes("saga")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Numpy</label>
                    <input
                        type="checkbox"
                        name="libraryUsed"
                        value="numpy"
                        checked={taskData.libraryUsed && taskData.libraryUsed.includes("numpy")}
                        onChange={e => handleInputChange(e)}
                    />
                    <label>Pandas</label>
                    <input
                        type="checkbox"
                        name="libraryUsed"
                        value="pandas"
                        checked={taskData.libraryUsed && taskData.libraryUsed.includes("pandas")}
                        onChange={e => handleInputChange(e)}
                    /><br /><br />

                </div>
                <div>

                    <button type='button' onClick={() => updateTaskData()}>Update Task</button>
                    <button type='button'>Cancel</button>

                </div>
            </form>
        </div>
    )
}
export default EditTask