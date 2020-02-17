import { CALL_DIALOG, CLOSE_DIALOG } from './constants';

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
