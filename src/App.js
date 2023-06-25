import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import './App.css'
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import CrudRouting from './pages/Crudrouting';

function App() {


    return (
        <div className="App">
            {/* <Routing/> */}
            {/* <Practice/> */}
            <CrudRouting />
            {/* <Apifetch/> */}
            {/* <FormAndTable/> */}
            {/* <FormAndTableLocalStorage/> */}
            {/* <FormAndTableAPI/> */}
        </div>


    


  );
}

export default App;
