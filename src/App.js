import './App.css';
import React from 'react';
import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import MvinetHeader from './MvinetHeader';
import Signup from './Signup';


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/mvinet" element={<MvinetHeader />} />
                <Route path="/signup" element={<Signup />} />
                
                {/* Add more routes as needed */}
            </Routes>
        </Router>
       
    );
}

export default App;
