import React from 'react';
import {Table, Pill} from 'elemental';
import {Link} from 'react-router';
import moment from 'moment';
require('./styles.css')

/* eslint-disable react/prefer-stateless-function */
export default class ContainersTable extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    console.log(this.props.containers)
  }

  renderRows() {
    return this.props.containers.map((container, index) => (
      <tr key={index}>
        <td>
          <label>
            <input type="checkbox" />
          </label>
        </td>
        <td>
          <Link to={{ pathname: '/container/' + container.Id }}>{container.Names[0].substring(1)}</Link>
        </td>
        <td>
          {container.Image}
        </td>
        <td>
          {moment.unix(container.Created).format('ddd MMM DD YYYY')}
        </td>
        <td>
          {container.Status}
        </td>
      </tr>
    ))
  }

  render() {
    return (
      <Table>
        <colgroup>
          <col width="" />
          <col width="" />
          <col width="" />
          <col width="" />
        </colgroup>
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Image</th>
            <th>Created</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </Table>
    );
  }
}
