import './App.css';
import React from 'react';
import Signup from './components/Signup';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import NewClub from  './components/NewClub';

const App=()=> {

return(
  <Router>
    <Routes>
    <Route path='/' element={<Signup/>}/>
    <Route path='/dashboard'  element = {<Dashboard/>}/>
    <Route path='/new-club' element = {<NewClub/>}/>
       </Routes>
  </Router>

)};





export default App;
