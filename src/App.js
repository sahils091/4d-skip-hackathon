import React from 'react';
import {Route, BrowserRouter} from "react-router-dom";
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';

function App() {
  return (
    <div className="App">
     <DashBoard/>
     {/* <Route to="/recommendation" component={DashBoard}/> */}
    </div>
  );
}

export default App;
