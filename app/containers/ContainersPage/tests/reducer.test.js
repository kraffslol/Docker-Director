import expect from 'expect';
import containersPageReducer from '../reducer';
import { fromJS } from 'immutable';

describe('containersPageReducer', () => {
  it('returns the initial state', () => {
    expect(containersPageReducer(undefined, {})).toEqual(fromJS({}));
  });
});
