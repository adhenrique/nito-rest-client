import produce from 'immer';
import { TEST } from './constants';

export const initialState = {
  dialogs: [],
};

const dialogsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TEST:
        draft.dialogs = 1;
        break;
      default:
        break;
    }
  });
export default dialogsReducer;
