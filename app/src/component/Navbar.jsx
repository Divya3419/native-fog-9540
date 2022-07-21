import { SearchIcon } from "@chakra-ui/icons";
import { Box, Img } from "@chakra-ui/react";
import React from "react";
//import {useSelector} from 'react-redux'
import { Link as RouteLink } from "react-router-dom";
import CartCounter from "./CartCounter";
const Navbar = () => {
  // const nevigate=useNavigate();
  // const { cartData } = useSelector((state) => {
  //   return state;
  // });
  return (
    <>
      <Box
        height="40px"
        display="grid"
        gridTemplateColumns="25% 50% 25%"
        marginTop="20px"
      >
        <Box fontSize="12px" color="blue.400">
          <RouteLink to="/location">
            <Box display="flex" paddingLeft="40px">
              <Img
                width="6%"
                src="https://cdn-icons-png.flaticon.com/512/67/67347.png"
              />
              STORE & SPA LOCATOR
            </Box>
          </RouteLink>
        </Box>
        <Box></Box>

        <Box fontSize="12px" display="grid" gridTemplateColumns="repeat(4,1fr)">
          <Box display="flex" gap="10px">
            <Img
              width="30%"
              height="50%"
              src="https://icon-library.com/images/wishlist-icon/wishlist-icon-0.jpg"
            />
            WISHLIST
          </Box>
          <Box>
            <SearchIcon w={5} h={5} /> SEARCH
          </Box>

          <Box display="flex" gap="10px">
            <Img
              width="30%"
              height="50%"
              src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
            />
            ACCOUNT
          </Box>
          <RouteLink to='/cart'>
          <Box display="flex" gap="10px" position="relative" padding="0 0.5rem 0 0">
            <Img
              width="30%"
              height="50%"
              src="https://image.shutterstock.com/image-vector/shopping-bag-icon-260nw-678890278.jpg"
            />
           
            <CartCounter/>
            BAG
          </Box>
          </RouteLink>
        </Box>
      </Box>

      <Box height="40px" display="grid" gridTemplateColumns="repeat(3,1fr)">
        <Box></Box>
        <Box>
          <Img
            width="40%"
            margin="auto"
            cursor="pointer"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182"
          />
        </Box>
        <Box></Box>
      </Box>

      <Box height="40px" display="grid" gridTemplateColumns="15% 70% 15%">
        <Box></Box>
        <Box display="grid" fontSize="12px" gridTemplateColumns="repeat(7,1fr)">
          <Box>SHOP</Box>
          <Box>NEW!</Box>
          <Box>BRAND</Box>
          <Box>EXPLORE</Box>
          <Box>EVENT</Box>
          <Box>BLUEREWARDS</Box>
          <Box>BEAUTY ALFRESCO</Box>
        </Box>
        <Box></Box>
      </Box>
      <Box
        border="2px solid black"
        backgroundColor="black"
        color="white"
        fontSize="12px"
      >
        {/* <marquee>FREE GIFT WITH PURCHES. BROWSE NOW</marquee> */}
      </Box>
    </>
  );
};

export default Navbar;




{/* <div className="cart_icon">
              <div
                className="cart_svg"
                onClick={() => {
                  nevigate("/Cart");
                }}
              >
                <ul className="Cart_Counter_PopUp">
                  <li>
                    <span className="CartCounterPopUp__summary___1Ff-x">
                      Order Summary
                    </span>
                    <span className="CartCounterPopUp__count___3cYl6">
                      {cartData.length} Item
                    </span>
                  </li>
                  <li>
                    <RouteLink
                      to="/Cart"
                      data-auto-proceed-cart="true"
                      data-attribute="cart-counter-popup"
                    >
                      <span className="CartCounterPopUp__proceed___vJFRh">
                        PROCEED TO CART
                      </span>
                    </RouteLink>
                  </li>
                </ul>
              </div>
              <div className="count">{cartData.length}</div>
            </div> */}
