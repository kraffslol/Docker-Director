/*
 *
 * ContainerPage
 *
 */

import React from 'react';
import { connect } from 'react-redux';
import { createSelector } from 'reselect';
import styles from './styles.css';
import { Spinner } from 'elemental';
import { getContainer } from './actions';
import { selectContainer, selectLoading } from './selectors';
import ContainerActions from 'components/ContainerActions';
import ContainerMetadata from 'components/ContainerMetadata';

export class ContainerPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  componentDidMount() {
    this.props.dispatch(getContainer(this.props.params.id));
  }

  render() {
    let content = null;

    if (this.props.loading || !this.props.container) {
      content = (<Spinner size="lg" />);
    } else {
      content = (
        <div>
          <h1 className={ styles.heading }>{this.props.container.Name.substring(1)}</h1>
          <ContainerActions id={this.props.params.id} />
          <ContainerMetadata {...this.props.container} />
        </div>
      );
    }

    return (
      <div className={ styles.containersPage }>
        {content}
      </div>
    );
  }
}

const mapStateToProps = createSelector(
  selectContainer(),
  selectLoading(),
  (container, loading) => ({ container, loading })
);

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerPage);
