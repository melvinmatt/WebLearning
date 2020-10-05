import axios from "axios";

import {
  ADD_POST,
  DELETE_POST,
  GET_ERRORS,
  GET_POSTS,
  GET_POST,
  POST_LOADING,
} from "./types";

// Add post
export const addPost = (postData) => (dispatch) => {
  axios
    .post("/api/post", postData)
    .then((res) =>
      dispatch({
        type: ADD_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Get posts
export const getPosts = () => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get("/api/post")
    .then((res) =>
      dispatch({
        type: GET_POSTS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POSTS,
        payload: null,
      })
    );
};

// Get post
export const getPost = (id) => (dispatch) => {
  dispatch(setPostLoading());
  axios
    .get(`/api/post/${id}`)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_POST,
        payload: null,
      })
    );
};

// Delete Post
export const deletePost = (id) => (dispatch) => {
  axios
    .delete(`/api/post/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_POST,
        payload: id,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add like
export const addLike = (id) => (dispatch) => {
  axios
    .post(`/api/post/like/${id}`)
    .then((res) => dispatch(getPosts()))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Remove like
export const removeLike = (id) => (dispatch) => {
  axios
    .post(`/api/post/unlike/${id}`)
    .then((res) => dispatch(getPosts()))
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Add comment
export const addComment = (postId, commentData) => (dispatch) => {
  axios
    .post(`/api/post/comment/${postId}`, commentData)
    .then((res) =>
      dispatch({
        type: GET_POST,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      })
    );
};

// Set loading state
export const setPostLoading = () => {
  return {
    type: POST_LOADING,
  };
};
