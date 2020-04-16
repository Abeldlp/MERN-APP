import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/Nav";
import ExerciseList from "./components/ExerciseList";
import EditExercise from "./components/EditExercise";
import CreateExercise from "./components/CreateExercise";
import CreateCustomer from "./components/CreateCustomer";

function App() {
  return (
    <Router>
      <Nav />
      <br />
      <Route path="/" component={ExerciseList} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/customer" component={CreateCustomer} />
    </Router>
  );
}

export default App;
