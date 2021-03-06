import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./componentes/layout/Header";
import HomePage from './componentes/home/HomePage';
import AboutPage from './componentes/about/AboutPage';
import ContactPage from './componentes/contact/ContactPage';
import NestedRouted from './componentes/nested-route/NestedRouted';
import NestedContent from "./componentes/nested-content/NestedContent";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />

            <div className="container">
              <Route exact path="/" component={HomePage}></Route>
              <Route path="/about" component={AboutPage}></Route>
              <Route path="/contact" component={ContactPage}></Route>
              <Route path="/nestedroutes" component={NestedRouted}></Route>
              <Route path="/nestedroutes/:contentName" component={NestedContent} />
            </div>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
