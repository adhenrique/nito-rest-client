import { generateFakeID } from 'helpers';
import {
  REMOVE_COLLECTION,
  SET_COLLECTION,
  UPDATE_COLLECTION,
} from './constants';

export function setCollection(data) {
  const id = generateFakeID();
  return {
    type: SET_COLLECTION,
    payload: {
      id,
      ...data,
    },
  };
}

export function updateCollection(data, id) {
  return {
    type: UPDATE_COLLECTION,
    payload: {
      id,
      ...data,
    },
  };
}

export function removeCollection(id) {
  return {
    type: REMOVE_COLLECTION,
    payload: {
      id,
    },
  };
}
