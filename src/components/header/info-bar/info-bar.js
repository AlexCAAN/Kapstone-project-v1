import React, { Component } from 'react';
import Duck from "../../../assets/images/info-bar-images/duck.jpg"

export default class InfoBar extends Component {
    render() {
        return (
            <div className='info-bar'>
                <div className='info-bar-container'>
                    <p>This Website Is To Get To Know What I Can Do As A Video-Editor And As A Developer</p>
                </div>

                <div className='info-bar-container'
                    style={{
                    background: "url(" + Duck + ") no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "80px"
                    }}
                />
                
                <div className='info-bar-container'>
                    Carlos Leany
                </div>
            </div>
        )
    }
}