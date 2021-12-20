import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./navigation/nav-bar";
import Home from './pages/home';
import TryYourself from './pages/try-yourself';
import Example from "./pages/example";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import '../styles/main.scss';


export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <NavBar />
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/trying' element={<TryYourself/>} />
              <Route path='/example' element={<Example/>} />
              <Route path='/contact' element={<Contact/>} />
              <Route path="*" element={<NoMatch />} />
            </Routes>
          </div>
        </Router>
      </div>
    );
  }
}