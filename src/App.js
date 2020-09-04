import React from 'react';

import './App.css';
import Recommendations from './components/Recommendations/Recommendations'


import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';


function App() {
  return (
    <div className="App">

    <Recommendations/>

     <DashBoard/>
     {/* <Route to="/recommendation" component={DashBoard}/> */}

    </div>

import './App.css';
import SideBar from './sideBar';

function App() {
  return (
    <SideBar/>

  );
}

export default App;
