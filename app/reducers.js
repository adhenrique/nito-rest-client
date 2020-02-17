import { combineReducers } from 'redux';
import appReducer from './components/App/reducer';
import dialogsReducer from './components/Dialogs/reducer';

export default function createReducer(injectedReducers = {}) {
  return combineReducers({
    app: appReducer,
    dialogs: dialogsReducer,
    ...injectedReducers,
  });
}
