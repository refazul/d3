import React, { Component, useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ReactDOM from "react-dom";

const About = (props) => {
    return (
        <div>About</div>
    );
}
const Contact = (props) => {
    return (
        <div>Contact</div>
    );
}
const Home = (props) => {
    return (
        <div>Home</div>
    );
}
const App = (props) => {
    return (
        <Router>
            <div className="wrapper">
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact</Link></li>
                    </ul>
                </nav>
                <section className="content-wrapper">
                    <section className="content">
                        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/contact">
                                <Contact />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </section>
                </section>
            </div>
        </Router>
    );
}
ReactDOM.render(<App />, document.querySelector("#main"))