




//rasheed's

import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_MYDATA_REQUEST, FETCH_MYDATA_SUCCESS, FETCH_MYDATA_FAILURE} from "./action.type";
import axios from "axios"

const fetchDataRequest= (payload) => {
    return {
        type: FETCH_DATA_REQUEST,
        payload
    }
}

const fetchDataSuccess=(payload) => {
 //  console.log(payload)
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
    
   
    axios.get("http://localhost:8082/prod")

    .then(res=> dispatch(fetchDataSuccess(res.data)))
    .catch (err => dispatch(fetchDataFailure(err.data)))
    }}


    
//baby data
    const fetchDatab=(Baby)=> {
        return (dispatch) => {
            dispatch (fetchDataRequest(Baby))
        
        
        axios.get("http://localhost:8082/prod",
       {params:{category:Baby}
        })
        .then(res=> dispatch(fetchDataSuccess(res.data)))
        .catch (err => dispatch(fetchDataFailure(err.data)))
    }}

// pencildata

    const fetchDataC=(pencil)=>{
        return(dispatch)=>{
            dispatch(fetchDataRequest(pencil))

            axios.get("http://localhost:8082/prod",
            {params:{category:pencil}}
            )
            .then(res=>dispatch(fetchDataSuccess(res.data)))
            .catch(err=> dispatch(fetchDataFailure(err.data)))


        }
    }
   



   
   
    //abhishek newProducts


export const fetchmyDataRequest= (payload) => {
    return {
        type: FETCH_MYDATA_REQUEST,
        payload
    }
}

export const fetchmyDataSuccess=(payload) => {
   console.log(payload,"axios")
    return {
        type: FETCH_MYDATA_SUCCESS,
        payload
    }
}

export const fetchmyDataFailure=(payload) => {
    return {
        type: FETCH_MYDATA_FAILURE,
        payload

    }
}

export const fetchmyData=(payload)=> {
    return (dispatch) => {
        dispatch (fetchmyDataRequest(payload))
    
   
    axios.get("http://localhost:8082/products")

    .then(res=> dispatch(fetchmyDataSuccess(res.data)))
    .catch (err => dispatch(fetchmyDataFailure(err.data)))
    }}


    
   
    
//sorting algorithm only



export const addCityReducer = (payload) =>  (dispatch)  => {
    
    axios.get("http://localhost:8082/products").then(
        (res)=>{     
        let data 
        if (payload===1){
          data=res.data.sort(
            (a,b)=>{return a.price-b.price}
          )            
        }else if(payload===-1){
            data=res.data.sort(
                (a,b)=>{return b.price-a.price}
              )    
        }
      dispatch(fetchmyDataSuccess(data))

    }
    ).catch(
        (error)=>{console.log(error,"axios")}
    )
    
}



    export {fetchData, fetchDatab,fetchDataC}

    