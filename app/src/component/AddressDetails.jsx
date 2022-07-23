import React from 'react'
import { Box, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Link as RouteLink } from "react-router-dom";


import { Address_div } from './Address_style'

const AddressDetails = () => {
  return (
    <Address_div>
       
       <div id="main_container">
        <div id="customer_container">
            <div id="customer_info_div">
                <header>
                    {/* <!-- Logo_Image --> */}
                    <a>
                        <img id="heading_image"
                            src="//cdn.shopify.com/s/files/1/0283/0185/2747/files/blm-checkout-logo.png?63129"/>
                    </a>
                    {/* <!-- Navigation bar --> */}
                    <nav id="navbar">
                        <p id="navbar_text"><span>Cart</span>&nbsp;&nbsp;
                            <span className="arrow"></span>&nbsp;&nbsp;
                            <span><b>Customer information</b></span>&nbsp;&nbsp;
                            <span className="arrow"></span>&nbsp;&nbsp;
                            <span>Payment method</span>
                        </p>
                    </nav>
                </header>
                <div>
                    <form id="main_contact_info_page">
                        <h1 id="Heading_contact_info">Contact information</h1>
                        <input id="email" type="email" placeholder="Email" required/>
                        <div id="checkbox_div">
                            <input type="checkbox" id="Email_checkbox"/>
                            <label id="checkbox_text">Keep me up to date on news and offers</label>
                        </div>
                        <h1 id="Shipping_heading">Shipping address</h1>
                        <span id="name"><input type="text" id="first_name" class="Name" placeholder="First name"
                                required/><input type="text" id="last_name" class="Name" placeholder="Last name"/></span>
                        <input type="text" id="address1" class="input_bar" placeholder="Address" required/>
                        <input type="text" id="address2" class="input_bar"
                            placeholder="Apartment, suite, etc. (optional)" required/>
                        <input type="text" id="city" class="input_bar" placeholder="City" required/>
                        <div id="input_3_bar">
                            <div id="country_div">
                                <label>COUNTRY/REGION</label>
                                <select id="country">
                                    <option value="United States">
                                        United States
                                    </option>
                                </select>
                            </div>
                            <div id="state_div">
                                <label>STATE</label>
                                <select id="state">
                                    <option value="United States">
                                        Albama
                                    </option>
                                    <option value="United States">
                                        Arizona
                                    </option>
                                    <option value="United States">
                                        Boston
                                    </option>
                                    <option value="United States">
                                        California
                                    </option>
                                    <option value="United States">
                                        Chicago
                                    </option>
                                    <option value="United States">
                                        Dallas
                                    </option>
                                </select>
                            </div>
                            <input type="tel" id="zipcode" placeholder="ZIP code"/>
                        </div>
                        <span id="checkbox2_span"><input type="checkbox" id="checkbox2"/>&nbsp;<span id="checkbox2_text">
                                Save this information for next time</span></span>
                        <p id="privacy_policy">To learn more about how we use your information and your rights, see <a
                                href="Customer_info.html">Privacy Note</a></p>
                        <div id="form_bottom_line">
                            <span class="arrow"></span>
                            <a id="return_to_cart_text" href="/cart"> RETURN TO CART</a>
                           <RouteLink to="/PaymentPage"> <button type="button" id="Shipping_method"  >CONTINUE TO SHIPPING METHOD</button></RouteLink>
                        </div>
                    </form>
                </div>
            </div>
            <aside id="sidepage_container">
                <div id="aside_main_div">
                    <div id="Prod_row_1">
                    </div>
                    <div id="Prod_row_2">
                        <div id="promocode">
                            <label id="promocode_text1">GIFT CARD OR DISCOUNT CODE</label>
                            <input id="promocode_text2" type="text"/>
                        </div>
                        <button id="apply_btn" type="button">APPLY</button>
                    </div>
                    <div id="Prod_row_3">
                        <div id="Prod_subtotal_text">
                            <div id="subtotal_row1">
                                <p id="subtotal">
                                    Subtotal
                                </p>
                                <p id="total_price">
                                    $0.00
                                </p>
                            </div>
                            <div id="subtotal_row2">
                                <span id="shipping">Shipping</span>
                                <span id="calcutate">$5</span>
                            </div>
                        </div>
                        <div id="subtotal_row3">
                            <p id="total">
                                Total
                            </p>
                            <p id="total_amount">
                                <span id="usd">USD</span>
                                $0.00
                            </p>
                        </div>
                    </div>
                    <div></div>
                </div>
            </aside>
        </div>
    </div>
    </Address_div>
  )
}

export default AddressDetails