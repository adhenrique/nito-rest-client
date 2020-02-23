import produce from 'immer';
import {
  REMOVE_COLLECTION,
  SET_COLLECTION,
  UPDATE_COLLECTION,
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
  collections: [],
  tabs: [],
};

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
      default:
        break;
    }
  });
export default appReducer;
