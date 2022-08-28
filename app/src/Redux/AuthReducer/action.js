import * as types from "./actionTypes";
import axios from "axios";

const register = (payload) => (dispatch) => {
  //console.log(payload)
  dispatch({ type: types.REGISTER_REQUEST });
  return axios
    .post("https://blueproduct.herokuapp.com/register", payload)
    .then((r) => {
      dispatch({ type: types.REGISTER_SUCCESS, payload: r.data });
      return types.REGISTER_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.REGISTER_FAILURE, payload: e });
      return types.REGISTER_FAILURE;
    });
};

const login = (params) => (dispatch) => {
  dispatch({ type: types.LOGIN_REQUEST });
  return axios
    .get("https://blueproduct.herokuapp.com/register", params)
    .then((r) => {
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data.token });
      return types.LOGIN_SUCCESS;
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
      return types.LOGIN_FAILURE;
    });
};

export { register, login };
