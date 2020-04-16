import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Nav />
      <br />
      <Route path="/" component={exerciseList} />
      <Route path="/edit/:id" component={editExercise} />
      <Route path="/create" component={createExercise} />
      <Route path="/customer" component={createCustomer} />
    </Router>
  );
}

export default App;
