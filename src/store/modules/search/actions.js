import * as types from '../types';

export function searchChange(payload) {
  return {
    type: types.SEARCH_CHANGE,
    payload,
  };
}
