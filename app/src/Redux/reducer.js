
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_MYDATA_REQUEST, FETCH_MYDATA_SUCCESS, FETCH_MYDATA_FAILURE, } from "./action.type";



const initState = {
    prod : [],
     product:[],
    error : false,
    loading:false

}
 export const reducer =(state = initState ,action) => {
    const {type,payload}=action;
    switch(type)
    {
        //rasheed
        case FETCH_DATA_REQUEST:
         return {
            ...state,
            loading:true,
            error:false
        }

        
         case FETCH_DATA_SUCCESS:
        return {
            ...state,
            prod: payload,
            loading:false,
            error:false
        }

        

        case FETCH_DATA_FAILURE:
            return {
                ...state,
                loading:false,
                error:true
            }
            //abhishek
            case FETCH_MYDATA_REQUEST:
                return {
                   ...state,
                   loading:true,
                   error:false
               }
       
               //case FETCH_MYDATA_SUCCESS:
                case FETCH_MYDATA_SUCCESS:
               return {
                   ...state,
                   product: payload,
                   loading:false,
                   error:false
               }
       
               //case FETCH_MYDATA_FAILURE:
       
               case FETCH_MYDATA_FAILURE:
                   return {
                       ...state,
                       loading:false,
                       error:true
                   }
       
            default:
                return state
    }

}


    
