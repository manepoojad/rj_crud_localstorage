import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import About from './about/About'
import Home from './home/Home'
import Navbar from '../component/navigation/Navbar';
import CreateTask from './task/CreateTask';
import ShowTask from './task/ShowTask';
import EditTask from './task/EditTask';




function CrudRouting() {
    return (
        <div>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    {/* <Route path="/*" element={<Page404/>}/> */}
                    <Route path="/*" element={<Navigate to="/" />} />
                    <Route path="/CreateTask" element={<CreateTask />} />
                    <Route path="/ShowTask" element={<ShowTask />} />
                    <Route path="/editTask/:index" element={<EditTask />} />
                    



                </Routes>
            </BrowserRouter>
        </div>
    )
}
export default CrudRouting