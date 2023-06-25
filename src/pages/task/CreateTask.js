import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function CreateTask() {
    const navigate = useNavigate()
    const [taskData, setTaskData] = useState({
        date: "",
        projectTitle: "",
        projectDescription: "",
        uiTechnology: "",
        backendtechnology: "",
        libraryUsed: []
    })

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

    const addTask = () => {
        const stringifyTaskData = localStorage.getItem('taskInfo')
        let parsedTaskData = JSON.parse(stringifyTaskData)

        if (stringifyTaskData) {
            console.log('if condition')
        }
        else {
            parsedTaskData = []
        }

        parsedTaskData.push(taskData)

        const newStringifyTaskData = JSON.stringify(parsedTaskData)
        localStorage.setItem('taskInfo', newStringifyTaskData)

        setTaskData({
            date: "",
            projectTitle: "",
            projectDescription: "",
            uiTechnology: "",
            backendtechnology: "",
            libraryUsed: []
        })

        navigate("/ShowTask")
    }

return (
    <div>
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

                <button type='button' onClick={() => addTask()}>AddTask</button>
                <button type='button'>Reset</button>
                <button type='button'>Cancel</button>

            </div>
        </form>


    </div>

)
}
export default CreateTask