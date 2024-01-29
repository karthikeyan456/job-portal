import "./App.css";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import About from "./pages/About";
import Login from "./components/Login";
import Registration from './components/Registration';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import JobApplicationForm from "./pages/JobApplicationForm";
import student  from "./components/Student";
import employer from "./components/Employer";
import AddJobs from "./pages/AddJobs";
import EmpAbout from "./pages/EmpAbout";
import StuAbout from "./pages/StuAbout";


function App() {
  return (
    <div className="App" >
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Jobs" exact component={Jobs}/>
          <Route path="/AddJobs" exact component={AddJobs}/>
          <Route path="/about" exact component={About} />
          <Route path="/login" exact component={Login} />
          <Route path="/registration" exact component={Registration}/>
          <Route path="/jobapplicationform" exact component={JobApplicationForm}/>
          <Route path="/student" exact component={student}/>
          <Route path="/StuAbout" exact component={StuAbout}/>
          <Route path="/employer" exact component={employer}/>
          <Route path="/EmpAbout" exact component={EmpAbout}/>

          


        </Switch>
      </Router>
    </div>
  );
}

export default App;
