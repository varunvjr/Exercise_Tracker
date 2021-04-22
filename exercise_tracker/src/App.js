import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router,Route} from "react-router-dom"
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateUser from "./components/CreateUser";
import Navbar from "./components/Navbar";
function App() {
  return (
    <Router>
    <Navbar/>
    <br/>
    <Route path="/" exact component={ExerciseList}/>
    <Route path="/edit/:id" exact component={EditExercise}/>
    <Route path="/create" exact component={CreateExercise}/>
    <Route path="/user" exact component={CreateUser}/>
    </Router>
  );
}

export default App;
