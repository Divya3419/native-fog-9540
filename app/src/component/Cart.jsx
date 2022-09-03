import { Box, Button, Heading, Img, Link, Stack, Text, useStatStyles } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import BestSellers from './BestSellers'
import { Cart_div } from './Cart_style'
import { Link as RouteLink, useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchData } from '../Redux/AppReducer/action';


const Cart = () => {
    const[count,setCount]=useState(0)
    const {id}=useParams()
console.log(id)
    const navigate=useNavigate()
    const bagData = useSelector((store)=>{
        return store.AppReducer.prod
    })
    console.log(bagData)

    const dispatch=useDispatch()

    const[currProduct,setcurrProduct]=useState({})

    useEffect(()=>{
        dispatch(fetchData())
    },[])

    useEffect(()=>{
        if(id){
            const bag=bagData.find((elem)=>elem.id===(id))
            bag && setcurrProduct(bag)
        }
    },[bagData,id])

    console.log(currProduct)

    const handleAddress=(id)=>{
        navigate(`/AddressDetails/${id}`)

        console.log(id)
    }

  return (


   <Cart_div>
    <div className="cart" >
      
      <div className="cart_container">
          <p> your bag </p> 
      </div>
      <div className="reward_login">
          <div className="rewards_blue">
              <p style={{marginLeft: "20px", marginTop: "20px"}}>BLUEREWARDS</p>
          </div>
          <div className="free_Shipping">FREE GROUND SHIPPING AND FREE TWO-DAY SHIPPING WHEN YOU SPEND $150.</div>
         
          {/* style={{ fontSize: "12px" }} */}
      </div>
      <h2 className="your_Cart">Your cart</h2>
          <div id="empty_bag">
              <i className="fa-solid fa-trash-can" style={{fontSize:" 100px", color: "#12284C", zIndex: "1"}}></i>
              Delete Cart
          </div>
      </div>
      <div className="clear"></div>
      <div id="ready_shift" >
          <div className="readytoshift">Ready to Ship</div>
          <div className="price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
      </div> 


      {/* ********************************************************** */}
      {Cart.id === 0 ? (
          
            <div  >
            <div id="oops" >
              <img margin="auto"
                src="https://www.1mg.com/images/online_consultation/empty-cart-icon.svg"
                alt="empty cart"
                height="40%" 
              />
                <b>Oops!</b>
              </div>
              <div id="text">Looks like there is no item in your Bag yet.</div>
              <b> <Link href="/">ADD PRODUCT</Link></b>
            </div>
          
        ) : (

      <div id="cart_Bag">
        <Box width="80%" margin="auto" key={currProduct.id} display="flex" justifyContent="space-evenly" marginTop="30px">
      <Box width="200px" height="auto" marginLeft="-150px" marginTop="-20px" >
      <Img src={currProduct.image_link}/>
      <h3>{currProduct.name}</h3>
      </Box>
      
      <h3>{"$"+currProduct.price}</h3>
      <Box>
      <Button onClick={ ()=>setCount(count+1)}>+</Button>
      {count}
       <Button onClick={ ()=>setCount(count-1)}>-</Button>
       </Box>
      
       <h3>{"$"+currProduct.price}</h3>
       </Box>
   
      </div>

    )}
      <br/><br/>
      <div>
          <p id="Offerings">Additional Offerings</p>
      </div>
      <div>
          <label id="Offer">Based on the items in your bag, you've qualified for the following offers.</label>
      </div>
      <div id ="sampleProduct">
          <div className="img1">
              <div className="sample_img1"><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/lg_256x256_crop_center_cbd2a6d9-de5c-4fd8-86c8-6f75df548001_small.png?v=1612476322"/></div>
              <div className="complimentary">COMPLIMENTARY<br/> SAMPLES</div>
          </div>
          <div  className="img1">
              <div className="sample_img1"><img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/lg_256x256_crop_center_cbd2a6d9-de5c-4fd8-86c8-6f75df548001_small.png?v=1612476322"/></div>
              <div className="complimentary">COMPLIMENTARY<br/> SAMPLES</div>
          </div>
          <div  className="img1">
              <div className="sample_img1"> <img src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/lg_256x256_crop_center_cbd2a6d9-de5c-4fd8-86c8-6f75df548001_small.png?v=1612476322"/></div>
              <div className="complimentary">COMPLIMENTARY<br/> SAMPLES</div>
          </div>
              <div  className="img1">
              <div className="sample_img1"><img src="https://cdn.shopify.com/s/files/1/1338/0845/collections/lippie-pencil_grande.jpg?v=1512588769"/></div>
              <div className="complimentary">COMPLIMENTARY<br/> SAMPLES</div>
          </div>
      </div>
      
      <div className="footer">
          <div className="shipping" id="shipping_calculate">
              <h6>You are $150 away from Free Ground Shipping!</h6>
          </div>
      </div>
      <div id="cart_total" >Subtotal</div>
      <h3 className="tax">Shipping, Taxes, Beauty Cards, and additional discounts applied at checkout</h3>
      


      <button type="submit" id="checkout">
      <RouteLink to="/AddressDetails"><Link onClick={()=>handleAddress(id)} style={{color: "white"}}>Checkout</Link>
          </RouteLink>
      </button>
      <div className="clear"></div>
      <button type="submit"className="paypal" target="_blank">
          <img className="paypal-logo" src="https://australianliquorsuppliers.com.au/wp-content/uploads/2020/08/Paypal-Logo-1.png"/>
      </button>
      <div className="clear" style={{padding: "25px"}}></div>  
     
      <Box>
        <BestSellers />
      </Box>
   
   </Cart_div>
  )
}



export default Cart




