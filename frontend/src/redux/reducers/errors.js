/* eslint-disable import/no-anonymous-default-export*/
import { CLEAR_ERROR, GET_ERRORS } from "../actions/types";

const initialState = {
  msg: {},
  status: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_ERRORS:
      return {
        msg: action.payload.data,
        status: action.payload.status,
      };
    case CLEAR_ERROR:
      return {
        msg: {},
        status: null,
      };
    default:
      return state;
  }
}
