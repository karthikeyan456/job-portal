import React from "react";
import './App.css';

import Home from "./pages/Home.js";
import Jobs from "./pages/Jobs.js";
import About from "./pages/About.js";
import Login from "./components/Login.js";
import Registration from './components/Registration.js';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JobApplicationForm from "./pages/JobApplicationForm.js";
import student  from "./components/Student.js";
import employer from "./components/Employer.js";
import AddJobs from "./pages/AddJobs.js";
import EmpAbout from "./pages/EmpAbout.js";
import EmpJobs from "./pages/EmpJobs.js";
import StuAbout from "./pages/StuAbout.js";
import EmployerUpdate from "./components/EmployerUpdate.js";
import StuJobs from "./pages/StuJobs.js";
import StuApp from "./pages/StuApp.js";
import StudentUpdate from "./components/StudentUpdate.js";
import EmpApp from "./pages/EmpApp.js";
import Filter from "./pages/Filter.js";


function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Jobs" exact component={Jobs}/>
          <Route path="/addjobs" exact component={AddJobs}/>
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={Registration}/>
          <Route path="/jobapplicationform" exact component={JobApplicationForm}/>
          <Route path="/student" exact component={student}/>
          <Route path="/StuAbout" exact component={StuAbout}/>
          <Route path="/employer" exact component={employer}/>
          <Route path="/EmpAbout" exact component={EmpAbout}/>
          <Route path="/empjobs" exact component={EmpJobs}/>
          <Route path="/empup" exact component={EmployerUpdate}/>
          <Route path="/stujobs" exact component={StuJobs}/>
          <Route path="/stuapp" exact component={StuApp}/>
          <Route path="/stuup" exact component={StudentUpdate}/>
          <Route path="/empapp" exact component={EmpApp}/>
          <Route path="/filter" exact component={Filter}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
