import React, { Component } from 'react';
import LeftSide from './left-side';

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
                {this.props.colorPalette === "LIGHT_MODE" ? (
                    <div className="nav-wrapper-light">
                        <LeftSide />

                        <div className="right-side">
                            <button className='light' onClick={this.handleChangeToNight}>Night-Mode</button>
                        </div>
                    </div>
                ) : 
                    <div className="nav-wrapper-dark">
                        <LeftSide />

                        <div className="right-side">
                            <button className='night' onClick={this.handleChangeToLight}>Light-Mode</button>
                        </div>
                    </div>
                }
            </div>
        )
    }
}


