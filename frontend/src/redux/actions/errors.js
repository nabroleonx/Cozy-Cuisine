import { CLEAR_ERROR, GET_ERRORS } from "./types";

export const getErrors = (msg, status) => {
  return {
    type: GET_ERRORS,
    payload: { msg, status },
  };
};

export const clearErrors = (msg) => {
  return {
    type: CLEAR_ERROR,
    payload: msg,
  };
};
