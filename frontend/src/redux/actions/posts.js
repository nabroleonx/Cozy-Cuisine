import axiosInstance from "../../utils/axios";
import { tokenConfig } from "./auth";

import {
  GET_ERRORS,
  GET_POSTS,
  GET_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  GET_BODY,
  REDIRECT,
} from "./types";

export const get_body = (body) => (dispatch) => {
  dispatch({
    type: GET_BODY,
    payload: body,
  });
};

export const redirect = () => (dispatch) => {
  dispatch({
    type: REDIRECT,
    payload: null,
  });
};

export const createPost =
  ({ instructorId, coverImage, title, body, tag, author }) =>
  (dispatch, getState) => {
    const data = JSON.stringify({
      instructorId: instructorId,
      coverImage: coverImage,
      title: title,
      tag: tag,
      body: body,
      author: author,
    });

    axiosInstance
      .post("/", data, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: CREATE_POST,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };

export const updatePost =
  ({ id, instructorId, title, body, tag }) =>
  (dispatch, getState) => {
    const data = JSON.stringify({
      instructorId: instructorId,
      title: title,
      tag: tag,
      body: body,
    });

    axiosInstance
      .patch(`/${id}/`, data, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: UPDATE_POST,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };

export const getPost =
  ({ id }) =>
  (dispatch, getState) => {
    axiosInstance
      .get(`/${id}/`, tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_POST,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };

export const getPosts =
  ({}) =>
  (dispatch, getState) => {
    axiosInstance
      .get("/", tokenConfig(getState))
      .then((res) => {
        dispatch({
          type: GET_POSTS,
          payload: res.data,
        });
      })
      .catch((err) => {
        dispatch({
          type: GET_ERRORS,
          payload: err.response,
        });
      });
  };

export const deletePost = (id) => (dispatch, getState) => {
  axiosInstance
    .delete(`/${id}`, tokenConfig(getState))
    .then((res) => {
      dispatch({
        type: DELETE_POST,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response,
      });
    });
};
