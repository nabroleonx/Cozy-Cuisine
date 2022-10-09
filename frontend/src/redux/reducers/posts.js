/* eslint-disable import/no-anonymous-default-export*/
import {
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_BODY,
  REDIRECT,
} from "../actions/types";

const initialState = {
  isLoading: true,
  postBody: null,
  posts: [],
  post: null,
};
export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_POST:
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };
    case GET_BODY:
      return {
        ...state,
        postBody: action.payload,
      };
    case UPDATE_POST:
      return {
        ...state,
        isLoading: false,
        post: action.payload,
      };
    case GET_POSTS:
      return {
        ...state,
        posts: action.payload,
      };
    case GET_POST:
      return {
        ...state,
        post: action.payload,
      };
    case DELETE_POST:
      return {
        ...state,
        isLoading: false,
      };
    case REDIRECT:
      return {
        ...state,
        isLoading: true,
      };
    default:
      return state;
  }
}
