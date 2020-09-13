import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NabarRx";
import Footer from "./components/footer/Footer";
import DiffieHellman from "./components/algoriphms/hellman/DiffieHellman";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/home/home";


class App extends Component {
    render() {
        return (

            <Router>
                <NavBar />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route exact path="/diffiHellman" component={DiffieHellman} />
                </Switch>
                <Footer />
            </Router>

        );
    };
};
export default App;
