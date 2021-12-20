import React, { Component } from 'react';
import moment from 'moment';

const time = (moment().format('LLLL'));

export default class Home extends Component {
    render() {
        return (
            <div className="App-header">
                {time}
            </div>
        )
    }
}