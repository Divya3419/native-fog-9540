import { FETCH_MYDATA_REQUEST, FETCH_MYDATA_SUCCESS, FETCH_MYDATA_FAILURE} from "./actionTypes";
import axios from "axios"
const fetchDataRequest= (payload) => {
    return {
        type: FETCH_MYDATA_REQUEST,

        payload
    }
}

const fetchDataSuccess=(payload) => {
   console.log(payload)
    return {
        type: FETCH_MYDATA_SUCCESS,
        payload
    }
}

const fetchDataFailure=(payload) => {
    return {
        type: FETCH_MYDATA_FAILURE,
        payload

    }
}

const fetchData=(payload)=> {
    return (dispatch) => {
        dispatch (fetchDataRequest(payload))
    
   
    axios.get("http://localhost:8080/products")

    .then(res=> dispatch(fetchDataSuccess(res.data)))
    .catch (err => dispatch(fetchDataFailure(err.data)))
    }}


    export {fetchData}