import { generateFakeID } from 'helpers';
import { SET_COLLECTION } from './constants';

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
