import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, } from "./action.type";


const initState = {
    prod : [],
    error : " ",
    loading:false

}




 export const reducer =(state = initState ,action) => {
    const {type,payload}=action;
    switch(type)
    {
        case FETCH_DATA_REQUEST:
         return {
            ...state,
            loading:true,
            error:" "
        }

        case FETCH_DATA_SUCCESS:
        return {
            ...state,
            prod: payload,
            loading:true,
            error:" "
        }

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

    