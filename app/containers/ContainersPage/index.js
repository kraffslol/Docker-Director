/*
 *
 * ContainersPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import ContainersTable from 'components/ContainersTable';
import { selectContainers, selectLoading } from './selectors';
import styles from './styles.css';
import { getContainers } from './actions';
import { Spinner } from 'elemental';

export class ContainersPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    //!this.props.containers ? this.props.dispatch(getContainers()) : null
    console.log('Hi');
    this.props.dispatch(getContainers())
  }

  render() {
    let content = null;

    if (this.props.loading || !this.props.containers) {
      content = (<Spinner size="lg" />);
    } else {
      content = (<ContainersTable containers={this.props.containers} />);
    }

    return (
      <div className={ styles.containersPage }>
        <h1 className={ styles.heading }>Containers</h1>
        {content}
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  selectContainers(),
  selectLoading(),
  (containers, loading) => ({ containers, loading })
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainersPage);
