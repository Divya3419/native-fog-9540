//rasheed
import { FETCH_DATA_REQUEST, FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE, FETCH_MYDATA_REQUEST,HIGH_TO_LOW,LOW_TO_HIGH } from "./action.type";

// abhishek sorting algorithm
import { SORTING,ORIGINAL } from "./action";




const initState = {
    prod : [],
    error : " ",
    loading:false

}




 export const reducer =(state = initState ,action) => {
    const {type,payload}=action;
    switch(type)
    {

        //sorting algorithm

        case HIGH_TO_LOW:
      const  sortdata= state.data.sort((a,b)=>{
        return a.price-b.price;
      })
        return{
          ...state,
          data:sortdata,
        }
        case LOW_TO_HIGH:
      const  LOWdata= state.data.sort((a,b)=>{
        return a.price-b.price;
      })
        return{
          ...state,
          data:LOWdata,
        }



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
            prod: payload,
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



// abhishek sorting algorithm


//////////////////////////////////////////////////////////////////////////////////////////



 ///////////////////////////////////////////////////////////////////////////////////////   
