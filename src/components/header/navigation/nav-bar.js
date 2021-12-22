import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class NavBar extends Component {
    constructor() {
        super();

        this.handleChangeToNight = this.handleChangeToNight.bind(this)
        this.handleChangeToLight = this.handleChangeToLight.bind(this)

    }
    
    handleChangeToNight() {
        this.props.handleDayToNightChange()
    }

    handleChangeToLight() {
        this.props.handleNightToDayChange()
    }
    render() {
        return (
            <div>
                <div className="nav-wrapper">
                    <div className="left-side">
                        <div className='nav-link-wrapper'>
                            <NavLink to="/" activeclassname="nav-link-active">
                                Home
                            </NavLink>
                        </div>

                        <div className='nav-link-wrapper'>
                            <NavLink to="/trying" activeclassname="nav-link-active">
                                Try Yourself
                            </NavLink>
                        </div>

                        <div className='nav-link-wrapper'>
                            <NavLink to="/example" activeclassname="nav-link-active">
                                Examples
                            </NavLink>
                        </div>

                        <div className='nav-link-wrapper'>
                            <NavLink to="/contact" activeclassname="nav-link-active">
                                Contact
                            </NavLink>
                        </div>
                    </div>

                    <div className="right-side">
                        {this.props.colorPalette === "LIGHT_MODE" ? (
                            <button className='light' onClick={this.handleChangeToNight}>Night-Mode</button>
                        ) : 
                            <button className='night' onClick={this.handleChangeToLight}>Light-Mode</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}