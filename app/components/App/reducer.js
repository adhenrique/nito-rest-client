import produce from 'immer';
import {
  TEST
} from './constants';

export const initialState = {};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      default:
          break;
    }
  });
export default appReducer;
