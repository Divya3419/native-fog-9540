import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE} from "./action.type";
import axios from "axios"
const fetchDataRequest= (payload) => {
    return {
        type: FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess=(payload) => {
   console.log(payload)
    return {
        type: FETCH_DATA_SUCCESS,
        payload
    }
}

const fetchDataFailure=(payload) => {
    return {
        type: FETCH_DATA_FAILURE,
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
    const fetchDatab=(Baby)=> {
        return (dispatch) => {
            dispatch (fetchDataRequest(Baby))
        
        
        axios.get("http://localhost:8080/products",
       {params:{category:Baby}
        })
        .then(res=> dispatch(fetchDataSuccess(res.data)))
        .catch (err => dispatch(fetchDataFailure(err.data)))
    }}



    const fetchDataC=(pencil)=>{
        return(dispatch)=>{
            dispatch(fetchDataRequest(pencil))

            axios.get("http://localhost:8080/products",
            {params:{category:pencil}}
            )
            .then(res=>dispatch(fetchDataSuccess(res.data)))
            .catch(err=> dispatch(fetchDataFailure(err.data)))


        }
    }
    export { fetchDatab,fetchDataC}
