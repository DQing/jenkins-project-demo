import React, {Component} from 'react';
import {render} from "react-dom";

var jquery = require('jquery');
class HelloMessage extends React.Component {

    componentWillMount() {

        jquery.ajax({
            type: 'get',
            url: "/hello"
        }).then(function (data) {
            console.log('data', data);
            this.setState({info: data});
        }.bind(this))


    }

    constructor() {
        super();
        this.state = {info: 'hello'};
    }

    render() {
        return <div>{this.state.info}</div>;
    }
}
module.exports = HelloMessage;