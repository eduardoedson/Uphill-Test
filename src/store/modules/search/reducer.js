import * as types from '../types';

const initialState = {
  searchText: '',
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.SEARCH_CHANGE: {
      const newState = { ...state };
      newState.searchText = action.payload.searchText;
      return newState;
    }

    default: {
      return state;
    }
  }
}
