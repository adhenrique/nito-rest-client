import { generateFakeID } from 'helpers';
import {
  REMOVE_COLLECTION,
  SET_COLLECTION,
  UPDATE_COLLECTION,
  SET_COLLECTION_ITEM,
  UPDATE_COLLECTION_ITEM,
  REMOVE_COLLECTION_ITEM,
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

export function setCollectionItem(data) {
  return {
    type: SET_COLLECTION_ITEM,
    payload: {
      ...data,
    },
  };
}

export function updateCollectionItem(id, index, data) {
  return {
    type: UPDATE_COLLECTION_ITEM,
    payload: {
      id,
      index,
      data,
    },
  };
}

export function removeFolder(id, index) {
  return {
    type: REMOVE_COLLECTION_ITEM,
    payload: {
      id,
      index,
    },
  };
}
