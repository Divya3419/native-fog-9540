// import * as types from "./actionType";

// const initialState = {
//     product:[],
//     error:"",
//     loading:false,
//     cart:[]

// }

// export const reducer = (state=initialState,action)=>{

//    const {type,payload}=action;

//    switch(type){
//     case types.ADD_PRODUCT_CART_REQUEST:
//         return{
//             ...state,
//              error:"",
//              loading:true,
//         }
//     case types.ADD_PRODUCT_CART_SUCCESS:
//         return{
//             ...state,
//             error:"",
//             cart:[...state.cart,payload],
//             loading:false,
//         }  
//     case types.ADD_PRODUCT_CART_FAILURE:
//          return{
//              ...state,
//             error:"",
//             loading:false,
//             }  




//     case types.FETCH_CART_REQUEST:
//         return{
//             ...state,
//              error:"",
//              loading:true,
//         }
//     case types.FETCH_CART_SUCCESS:
//         return{
//             ...state,
//             error:"",
//             cart:[...payload],
//             loading:false,
//         }  
//     case types.FETCH_CART_SUCCESS:
//          return{
//              ...state,
//             error:"",
//             loading:false,
//             }                
//         default:
//             return state;
    
//    }
// }