import React from 'react';
import './App.css';
import Recommendations from './components/Recommendations/Recommendations'
import {Route, BrowserRouter, Switch} from "react-router-dom";
import DashBoard from './components/DashBoard/DashBoard';
import SideBar from './sideBar';
import Analysis from './Analysis';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/" component={DashBoard} exact/>
          <Route path="/recommendation" component={Analysis} exact/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}
export default App
