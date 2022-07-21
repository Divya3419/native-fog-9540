import { FETCH_MYDATA_REQUEST, FETCH_MYDATA_SUCCESS, FETCH_MYDATA_FAILURE, } from "./actionTypes";


const initState = {
    products : [],
    error : " ",
    loading:false

}




 export const reducer =(state = initState ,action) => {
    const {type,payload}=action;
    switch(type)
    {
        case FETCH_MYDATA_REQUEST:
         return {
            ...state,
            loading:true,
            error:" "
        }

        case FETCH_MYDATA_SUCCESS:
        return {
            ...state,
            products: payload,
            loading:true,
            error:" "
        }

        case FETCH_MYDATA_FAILURE:
            return {
                ... state,
                loading:false,
                error:payload
            }

            default:
                return state
    }

}