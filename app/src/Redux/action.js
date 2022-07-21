// import * as types from "./actionType";
// import axios from axios;

//  const addProductCartRequest = (payload)=>{
//     return{
//         type:types.ADD_PRODUCT_CART_REQUEST,
//         payload,
//     };
// };

// const addProductCartSuccess = (payload)=>{
//     return{
//         type:types.ADD_PRODUCT_CART_SUCCESS,
//         payload,
//     };
// };

// const addProductCartFailure = (payload)=>{
//     return{
//         type:types.ADD_PRODUCT_CART_FAILURE,
//         payload,
//     };
// };

// const addProductCart=(product)=> dispatch =>{
//    dispatch(addProductCartRequest())
//    axios.post('/cart',product)
//    .then(r=>dispatch(addProductCartSuccess(r.data)))
//    .catch(e=>dispatch(addProductCartFailure(e.data)))
// }


// const fetchCartRequest = (payload)=>{
//     return{
//         type:types.FETCH_CART_REQUEST,
//         payload,
//     };
// };

// const fetchCartSuccess = (payload)=>{
//     return{
//         type:types.FETCH_CART_SUCCESS,
//         payload,
//     };
// };

// const fetchCartFailure = (payload)=>{
//     return{
//         type:types.FETCH_CART_FAILURE,
//         payload,
//     };
// };

// const fetchCart=(payload)=>dispatch=>{
//     dispatch(fetchCartRequest())
//     axios.get('/cart')
//     .then(r=>dispatch(fetchCartSuccess(r.data)))
//     .catch(e=>dispatch(fetchCartFailure(e.data)))
// }

// export {addProductCart,fetchCart}