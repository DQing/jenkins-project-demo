import React, {Component} from 'react';
import {render} from "react-dom";

var jquery = require('jquery');
var superagent = require('superagent');

class HelloMessage extends React.Component {

    componentWillMount() {

        console.log('eee');
        jquery.ajax({
            type: 'get',
            url: "/hello",
            // dateType: 'json'
        }).then(function (data) {
            console.log('data', data);
            this.setState({info: data[0].testcol});
        }.bind(this));

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