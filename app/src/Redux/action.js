import * as types from "./actionType";
import axios from axios;

 const addProductCartRequest = (payload)=>{
    return{
        type:types.ADD_PRODUCT_CART_REQUEST,
        payload,
    };
};

const addProductCartSuccess = (payload)=>{
    return{
        type:types.ADD_PRODUCT_CART_SUCCESS,
        payload,
    };
};

const addProductCartFailure = (payload)=>{
    return{
        type:types.ADD_PRODUCT_CART_FAILURE,
        payload,
    };
};

const addProductCart=(product)=> dispatch =>{
   dispatch(addProductCartRequest())
   axios.post('/cart',product)
   .then(r=>dispatch(addProductCartSuccess(r.data)))
   .catch(e=>dispatch(addProductCartFailure(e.data)))
}

export {addProductCart}