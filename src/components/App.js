import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import InfoBar from "./header/info-bar/info-bar";
import NavBar from "./header/navigation/nav-bar";
import Home from './pages/home';
import TryYourself from './pages/try-yourself';
import Example from "./pages/example";
import Contact from "./pages/contact";
import NoMatch from "./pages/no-match";
import '../styles/main.scss';
import Icons from "../helpers/icons";


export default class App extends Component {
  constructor(props) {
    super(props)

    Icons()

    this.state = {
      colorPalette: "LIGHT_MODE"
    }

    this.handleDayToNightChange = this.handleDayToNightChange.bind(this)
    this.handleNightToDayChange = this.handleNightToDayChange.bind(this)
  }

  handleDayToNightChange() {
    this.setState({
      colorPalette: "NIGHT_MODE"
    })
  }

  handleNightToDayChange() {
    this.setState({
      colorPalette: "LIGHT_MODE"
    })
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <InfoBar />
            <NavBar
              colorPalette={this.state.colorPalette}
              handleDayToNightChange={this.handleDayToNightChange}
              handleNightToDayChange={this.handleNightToDayChange}
            />
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