import produce from 'immer';
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
} from './constants';

/**
 * state example:
 *
{
  collections: [
    {
      name: '',
      variables: [],
      authorization: {
        mode: '',
        params: {}
      },
      preScript: '',
      items: [
        name: '',
        items: [
          {
            name: '',
            verb: '',
            url: '',
            queryParams: [
              {
                key: '',
                value: '',
              }
            ],
            headers: [
              {
                key: '',
                value: '',
              }
            ],
            body: {
              mode: '',
              raw: '',
            }
          }
        ],
      ],
    }
  ],
  tabs: [
    {
      name: '',
      verb: '',
      url: '',
      queryParams: [
        {
          key: 'value',
        }
      ],
      headers: [
        {
          key: 'value',
        }
      ],
      body: {
        mode: '',
        raw: '',
      }
    }
  ],
}
 * */

export const initialState = {
  collections: [
    {
      id: 123456,
      name: 'ASDASD',
      variables: [],
      authorization: {
        mode: '',
        params: {},
      },
      preScript: '',
      items: [
        {
          id: 2222,
          name: 'xxx',
          items: [
            {
              id: 3333,
              name: 'bbbb',
              description: 'ccc',
              verb: 'GET',
              url: '/users',
              queryParams: [],
              headers: [],
              body: {
                mode: '',
                raw: '',
              },
            },
          ],
        },
      ],
    },
  ],
  tabs: [],
};

function removeCollectionItem(draft, payload) {
  const collection = draft.collections.find(
    item => item.id === payload.collectionId,
  );
  collection.items = collection.items.filter(
    item => item.id !== payload.itemId,
  );
}

function removeRequestItem(draft, payload) {
  const items = draft.collections
    .find(item => item.id === payload.collectionId)
    .items.find(item => item.id === payload.itemId);

  items.items = items.items.filter(item => item.id !== payload.requestId);
}

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_COLLECTION:
        draft.collections.push({
          id: action.payload.id,
          name: action.payload.name,
          variables: action.payload.variables,
          authorization: action.payload.authorization,
          preScript: action.payload.preScript,
          items: [],
        });
        break;
      case UPDATE_COLLECTION:
        Object.entries(action.payload).forEach(([k, v]) => {
          draft.collections.find(
            collection => collection.id === action.payload.id,
          )[k] = v;
        });
        break;
      case REMOVE_COLLECTION:
        draft.collections = draft.collections.filter(
          collection => collection.id !== action.payload.id,
        );
        break;
      case SET_COLLECTION_ITEM:
        draft.collections
          .find(collection => collection.id === action.payload.collectionId)
          .items.push({
            id: action.payload.id,
            name: action.payload.item.name,
            items: [],
          });
        break;
      case UPDATE_COLLECTION_ITEM:
        Object.entries(action.payload.data).forEach(([k, v]) => {
          draft.collections
            .find(collection => collection.id === action.payload.collectionId)
            .items.find(item => item.id === action.payload.data.id)[k] = v;
        });
        break;
      case REMOVE_COLLECTION_ITEM:
        removeCollectionItem(draft, action.payload);
        break;
      case SET_ITEM_REQUEST:
        draft.collections
          .find(collection => collection.id === action.payload.collectionId)
          .items.find(item => item.id === action.payload.item.id)
          .items.push({
            id: action.payload.id,
            name: action.payload.request.name,
            description: action.payload.request.description,
            verb: 'GET',
            url: '',
            queryParams: [],
            headers: [],
            body: {
              mode: '',
              raw: '',
            },
          });
        break;
      case UPDATE_ITEM_REQUEST:
        Object.entries(action.payload.data).forEach(([k, v]) => {
          draft.collections
            .find(collection => collection.id === action.payload.collectionId)
            .items.find(item => item.id === action.payload.itemId)
            .items.find(item => item.id === action.payload.data.id)[k] = v;
        });
        break;
      case REMOVE_ITEM_REQUEST:
        removeRequestItem(draft, action.payload);
        break;
      default:
        break;
    }
  });
export default appReducer;
