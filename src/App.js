import React from 'react';
import logo from './logo.svg';
import './App.css';
import Dashboard from './components/dashboard/dashboard';
import { Header } from './components/layout/layout';
import "bootstrap/dist/css/bootstrap.min.css"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {AddProject} from './components/Project/AddProject'
function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Dashboard path='/dashboard' component={Dashboard}/>  
      <Route exact path='./components/Project/AddProject' component={AddProject} />
    </div>
    </Router>
  );
}

export default App;
