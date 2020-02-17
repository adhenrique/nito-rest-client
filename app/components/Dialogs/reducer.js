import produce from 'immer';
import { CALL_DIALOG, CLOSE_DIALOG } from './constants';

export const initialState = {
  id: '',
  parameters: {},
};

const dialogsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CALL_DIALOG:
        draft.id = action.payload.id;
        draft.parameters = action.payload.parameters;
        break;
      case CLOSE_DIALOG:
        draft.id = '';
        draft.parameters = {};
        break;
      default:
        break;
    }
  });
export default dialogsReducer;
