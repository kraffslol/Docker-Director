/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a neccessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import io from 'socket.io-client';
var Terminal = require('term.js/src/term.js');
var ansi_up = require('ansi_up');

/* eslint-disable react/prefer-stateless-function */
export default class HomePage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      lines: []
    }
  }

  componentDidMount() {
    console.log(this.state);
    const socket = io.connect('http://localhost:3000');
    socket.on('test', (data) => {
      const arr = Object.values(data.buffer);
      arr.splice(0, 8);
      console.log(arr);
      //console.log(String.fromCharCode.apply(null, arr));
      const line = String.fromCharCode.apply(null, arr);
      console.log(line)
      this.setState({
        lines: this.state.lines.concat(line)
      })
    })
  }

  render() {
    return (
      <div>
      <h1>This is the Homepage!</h1>
      {this.state.lines.map((line) => {return (
        <div>{line}</div>
      )})}
      </div>
    );
  }
}
