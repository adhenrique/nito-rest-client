import { generateFakeID } from 'helpers';
import { SET_COLLECTION } from './constants';

export function setCollection(name, variables, preScript) {
  const id = generateFakeID();
  return {
    type: SET_COLLECTION,
    payload: {
      id,
      name,
      variables,
      preScript,
    },
  };
}
