
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_MYDATA_REQUEST, } from "./action.type";



const initState = {
    products : [],
    error : " ",
    loading:false

}




 export const reducer =(state = initState ,action) => {
    const {type,payload}=action;
    switch(type)
    {
        //case FETCH_MYDATA_REQUEST:
        case FETCH_DATA_REQUEST:
         return {
            ...state,
            loading:true,
            error:" "
        }

        //case FETCH_MYDATA_SUCCESS:
         case FETCH_DATA_SUCCESS:
        return {
            ...state,
            products: payload,
            loading:true,
            error:" "
        }

        //case FETCH_MYDATA_FAILURE:

        case FETCH_DATA_FAILURE:
            return {
                ... state,
                loading:false,
                error:payload
            }

            default:
                return state
    }

}


    
