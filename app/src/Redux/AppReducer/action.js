import {
  FETCH_DATA_REQUEST,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  FETCH_MYDATA_REQUEST,
  FETCH_MYDATA_SUCCESS,
  FETCH_MYDATA_FAILURE,
} from "./action.type";
import axios from "axios";

const fetchDataRequest = (payload) => {
  return {
    type: FETCH_DATA_REQUEST,
    payload,
  };
};

const fetchDataSuccess = (payload) => {
  //  console.log(payload)
  return {
    type: FETCH_DATA_SUCCESS,
    payload,
  };
};

const fetchDataFailure = (payload) => {
  return {
    type: FETCH_DATA_FAILURE,
    payload,
  };
};

const fetchData = (payload) => {
  return (dispatch) => {
    dispatch(fetchDataRequest(payload));

    axios
      .get("https://bluemercury-data.onrender.com/abel")

      .then((res) => dispatch(fetchDataSuccess(res.data)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };
};

const fetchDatab = (Baby) => {
  return (dispatch) => {
    dispatch(fetchDataRequest(Baby));

    axios
      .get("https://bluemercury-data.onrender.com/babyfoot", {
        params: { category: Baby },
      })
      .then((res) => dispatch(fetchDataSuccess(res.data)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };
};



const fetchDataC = (caudalie) => {
  return (dispatch) => {
    dispatch(fetchDataRequest(caudalie));

    axios
      .get("https://bluemercury-data.onrender.com/caudalie", {
        params: { category: caudalie },
      })
      .then((res) => dispatch(fetchDataSuccess(res.data)))
      .catch((err) => dispatch(fetchDataFailure(err.data)));
  };
};



export const fetchmyDataRequest = (payload) => {
  return {
    type: FETCH_MYDATA_REQUEST,
    payload,
  };
};

export const fetchmyDataSuccess = (payload) => {
  console.log(payload, "axios");
  return {
    type: FETCH_MYDATA_SUCCESS,
    payload,
  };
};

export const fetchmyDataFailure = (payload) => {
  return {
    type: FETCH_MYDATA_FAILURE,
    payload,
  };
};

export const fetchmyData = (payload) => {
  return (dispatch) => {
    dispatch(fetchmyDataRequest(payload));

    axios
      .get("https://bluemercury-data.onrender.com/new")

      .then((res) => dispatch(fetchmyDataSuccess(res.data)))
      .catch((err) => dispatch(fetchmyDataFailure(err.data)));
  };
};

//sorting algorithm only

export const addCityReducer = (payload) => (dispatch) => {
  axios
    .get("https://bluemercury-data.onrender.com/new")
    .then((res) => {
      let data;
      if (payload === 1) {
        data = res.data.sort((a, b) => {
          return a.price - b.price;
        });
      } else if (payload === -1) {
        data = res.data.sort((a, b) => {
          return b.price - a.price;
        });
      }
      dispatch(fetchmyDataSuccess(data));
    })
    .catch((error) => {
      console.log(error, "axios");
    });
};

export { fetchData, fetchDatab, fetchDataC };
