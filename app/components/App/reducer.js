import produce from 'immer';
import { SET_COLLECTION } from './constants';

/**
 * state example:
 *
{
  collections: [
    {
      name: '',
      variables: [],
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
      name: 'SGD',
      variables: [],
      preScript: '',
      items: [
        {
          name: 'Users',
          items: [
            {
              name: 'Get all',
              verb: 'GET',
              url: '/users',
              queryParams: [],
              headers: [],
              body: {},
            },
            {
              name: 'Atualizar',
              verb: 'POST',
              url: '/users/1',
              queryParams: [],
              headers: [],
              body: {},
            },
          ],
        },
      ],
    },
  ],
  tabs: [],
};

const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_COLLECTION:
        draft.collections.push({
          name: action.payload.name,
          variables: action.payload.variables,
          preScript: action.payload.preScript,
        });
        break;
      default:
        break;
    }
  });
export default appReducer;
