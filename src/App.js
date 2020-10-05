import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NabarRx";
import Footer from "./components/footer/Footer";
import DiffieHellman from "./components/algoriphms/hellman/DiffieHellman";
import Shamir from "./components/algoriphms/shamir/Shamir";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/home/home";


class App extends Component {
    render() {
        return (
            <div className={"common"}>
                <Router>
                    <NavBar />
                    <Switch>
                        <div className={"algo mt-5"}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/diffiHellman" component={DiffieHellman} />
                            <Route exact path="/shamir" component={Shamir} />
                        </div>
                    </Switch>
                    <Footer />
                </Router>
            </div>

        );
    };
};
export default App;
