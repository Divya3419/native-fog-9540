import { Box, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import BestSellers from './BestSellers'
import { Cart_div } from './Cart_style'
import { Link as RouteLink } from "react-router-dom";


const Cart = () => {
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
      <div id="ready_shift">
          <div className="readytoshift">Ready to Ship</div>
          <div className="price">Price</div>
          <div className="quantity">Quantity</div>
          <div className="total">Total</div>
      </div> 
      <div id="cart_Bag"></div>
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
      <RouteLink to="/AddressDetails"><Link onClick="checkLogin()" style={{color: "white"}}>Checkout</Link>
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

function cartItem(){
    return(
        <Box border={"1px solid red"} rounded="lg" width={"fit-content"} margin="auto">
            <Stack direction={{base:'colum',md:"row"}} justifyContent="center" alignItems={"center"}>
            <Box height={"300px"} width="300px" border={"1px solid green"}>
                <Image

                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"contain"}
                src={"image"}
                />
            </Box>
            <Box height={"300px"} width="300px" border={"1px solid green"}>
                <Heading as="h4" size="lg">Product info</Heading>
                <Text>lorem text hear detail about product map method</Text>
            </Box>
            </Stack>
        </Box>
    )
}

export default Cart




{/* <Image
                  src="https://img.icons8.com/plumpy/344/star--v1.png"
                  width={"20px"}
                  height={"20px"}
                />
                <Image
                  src="https://img.icons8.com/plumpy/344/star--v1.png"
                  width={"20px"}
                  height={"20px"}
                />
                <Image
                  src="https://img.icons8.com/plumpy/344/star--v1.png"
                  width={"20px"}
                  height={"20px"}
                /> */}