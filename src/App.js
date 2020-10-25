import React, { Component } from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./components/navbar/NabarRx";
import Footer from "./components/footer/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from "./components/home/home";
import DiffieHellmanForm from "./components/algoriphms/Hellman/DiffieHellmanForm";
import ShamirForm from "./components/algoriphms/Shamir/ShamirForm";
import MentalPokerForm from "./components/algoriphms/MentalPoker/MentalPoker";
import ElGamalForm from "./components/algoriphms/ElGamal/ElGamal";
import RSAForm from "./components/algoriphms/RSA/RSAForm";
import RSADigitalSignatureForm from "./components/algoriphms/DisgitalSignature/rsaDigitalSignature/RSADigitalSignatureForm";
import ElGamalDigitalSignatureForm
    from "./components/algoriphms/DisgitalSignature/elGamalDigitalSignature/ElGamalDigitalSignatureForm";
import BabyStepGiantStepForm from "./components/algoriphms/BabyStepGiantStep/BabyStepGiantStepForm";


class App extends Component {
    render() {
        return (
            <div className={"common"}>
                <Router>
                    <NavBar />
                    <Switch>
                        <div className={"algo mt-5"}>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/diffiHellman" component={DiffieHellmanForm} />
                            <Route exact path="/shamir" component={ShamirForm} />
                            <Route exact path="/elGamal" component={ElGamalForm} />
                            <Route exact path="/mentalPoker" component={MentalPokerForm} />
                            <Route exact path="/rsa" component={RSAForm}/>
                            <Route exact path="/digitalSignatureRsa" component={RSADigitalSignatureForm}/>
                            <Route exact path="/digitalSignatureElGamal" component={ElGamalDigitalSignatureForm}/>
                            <Route exact path="/babyStepGiantStepAlgorithm" component={BabyStepGiantStepForm}/>
                        </div>
                    </Switch>
                    <Footer />
                </Router>
            </div>

        );
    };
};
export default App;
