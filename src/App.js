import React from "react";
import "./App.css";
import NavBar from "./layout/NavBar";
import Header from "./layout/Header";
import Landing from "./layout/Landing";
import Portfolio from "./layout/Portfolio";
import Footer from "./layout/Footer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Header />
        <Route exact path="/" component={Landing} />
        <section className="container">
          <Switch>
            <Route exact path="/portfolio" component={Portfolio} />
          </Switch>
        </section>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
