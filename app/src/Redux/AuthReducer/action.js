import * as types from "./actionTypes";
import axios from "axios";

const register = (payload) => (dispatch) => {
  
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
      dispatch({ type: types.LOGIN_SUCCESS, payload: r.data });
// return ({type:LOGIN_SUCCESS})
return types.LOGIN_SUCCESS;
      // for(let i=0;i<r.length;i++){
      //  if(r[i].email==params.email && r.data[i].password && params.password){
      //   
      //  }
      // }
      
    })
    .catch((e) => {
      dispatch({ type: types.LOGIN_FAILURE, payload: e });
      return types.LOGIN_FAILURE;
    });
};

export { register, login };
