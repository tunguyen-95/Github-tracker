import {
  SEARCH_USERS,
  SET_LOADING,
  CLEAR_USERS,
  GET_USER,
  GET_REPOS
} from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_USERS:
      return {
        ...state,
        users: action.payload // all the users from github api
      };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
