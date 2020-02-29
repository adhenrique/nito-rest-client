import { generateFakeID } from 'helpers';
import {
  REMOVE_COLLECTION,
  SET_COLLECTION,
  UPDATE_COLLECTION,
  SET_COLLECTION_ITEM,
  UPDATE_COLLECTION_ITEM,
  REMOVE_COLLECTION_ITEM,
  SET_ITEM_REQUEST,
  UPDATE_ITEM_REQUEST,
  REMOVE_ITEM_REQUEST,
  SET_TAB,
  REMOVE_TAB_BY_REQUEST_ID,
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

export function updateCollection(id, data) {
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
  const id = generateFakeID();
  return {
    type: SET_COLLECTION_ITEM,
    payload: {
      id,
      ...data,
    },
  };
}

export function updateCollectionItem(collectionId, data) {
  return {
    type: UPDATE_COLLECTION_ITEM,
    payload: {
      collectionId,
      data,
    },
  };
}

export function removeCollectionItem(collectionId, itemId) {
  return {
    type: REMOVE_COLLECTION_ITEM,
    payload: {
      collectionId,
      itemId,
    },
  };
}

export function setItemRequest(data) {
  const id = generateFakeID();
  return {
    type: SET_ITEM_REQUEST,
    payload: {
      id,
      ...data,
    },
  };
}

export function updateItemRequest(collectionId, itemId, data) {
  return {
    type: UPDATE_ITEM_REQUEST,
    payload: {
      collectionId,
      itemId,
      data,
    },
  };
}

export function removeItemRequest(collectionId, itemId, requestId) {
  return {
    type: REMOVE_ITEM_REQUEST,
    payload: {
      collectionId,
      itemId,
      requestId,
    },
  };
}

// abrir tab
export function setTab(data) {
  return {
    type: SET_TAB,
    payload: {
      data,
    },
  };
}

// fechar tab
export function removeTabByRequestId(requestId) {
  return {
    type: REMOVE_TAB_BY_REQUEST_ID,
    payload: {
      requestId,
    },
  };
}
