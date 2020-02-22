import { CALL_DIALOG, CLOSE_DIALOG, UPDATE_PARAMETERS } from './constants';

export function callDialog(id, parameters) {
  return {
    type: CALL_DIALOG,
    payload: {
      id,
      parameters: parameters || {},
    },
  };
}

export function closeDialog() {
  return {
    type: CLOSE_DIALOG,
  };
}

export function updateParameters(parameters) {
  return {
    type: UPDATE_PARAMETERS,
    payload: {
      ...parameters,
    },
  };
}
