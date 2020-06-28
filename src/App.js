import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/index";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Test from "./pages/Test";
import "./App.css";

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
        <Route exact path="/test">
          <Test />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
