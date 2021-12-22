import React, { Component } from 'react';
import { NavLink } from "react-router-dom";

export default class LeftSide extends Component {
    render() {
        return (
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
        )
    }
}