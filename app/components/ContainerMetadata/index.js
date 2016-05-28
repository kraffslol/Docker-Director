import React from 'react';

/* eslint-disable react/prefer-stateless-function */
export default class ContainerMetadata extends React.Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <ul>
          <li>Created: {this.props.Created}</li>
          <li>Path: {this.props.Path}</li>
          <li>
            Exposed ports:
            <ul>
              {Object.keys(this.props.Config.ExposedPorts)[0]}
            </ul>
          </li>
          <li>Path: {this.props.Path}</li>
          <li>Path: {this.props.Path}</li>
          <li>Path: {this.props.Path}</li>
        </ul>
      </div>
    );
  }
}
