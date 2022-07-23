
import React from 'react'
import { Box, Heading, Image, Link, Stack, Text } from '@chakra-ui/react'
import { Link as RouteLink } from "react-router-dom";


import { Payment_div } from './PaymentPage_style'

const PaymentPage = () => {
  return (
   
 <Payment_div>
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
                        <p id="navbar_text">
                            <span>Cart</span> &nbsp;&nbsp;
                            <span className="arrow">  </span> &nbsp;&nbsp;
                            <span>Customer information</span> &nbsp;&nbsp;
                            <span className="arrow">  </span> &nbsp;&nbsp;
                            {/* <!-- <span> Shipping method</span> &nbsp;&nbsp; 
                            <span className="arrow"> > </span> &nbsp;&nbsp; --> */}
                            <span><b>Payment method</b></span>
                        </p>
                    </nav>
                </header>
                <div id="payment_detail">
                    <div className="contact_content">
                        <div className="contact_ship">Contact <span className="add">
                             Name map </span><span className="action">CHANGE</span></div><br/>
                        <div className="contact_ship">Ship to <span className="add">
                                Add map, Bengaluru, Karnataka 560095</span><span
                                className="action">CHANGE</span></div>
                    </div>

                    <form id="main_contact_info_page" onsubmit="validatePayment(event)">
                        <h1 id="Heading_contact_info">Payment method</h1>
                        <small>All transactions are secure and encrypted.</small>


                        <div id="card_detail">
                            <div className="card">
                                <div className="radio">
                                    <input type="radio" name="payment_method" checked="checked"/>
                                </div>
                                <div className="radioLabel">
                                    <label className="className_label" for="">Credit Card</label>
                                </div>
                                <div className="lable-giff">
                                    <ul>
                                        <li><span><img
                                                    src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg"
                                                    alt=""/></span></li>
                                        <li><span><img
                                                    src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg"
                                                    alt=""/></span></li>
                                        <li><span><img
                                                    src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg"
                                                    alt=""/></span></li>
                                        <li><span></span><img
                                                src="https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg"
                                                alt=""/></li>

                                    </ul>
                                </div>
                            </div>
                            <div id="payment_input">
                                <input id="card_holder" type="number" className="input_style" placeholder="Card number" required/><br/>
                                <input id="name_on_card" className="input_style" placeholder="Name on card" required/><br/>
                                <input id="Expiry_date" type="month" className="input_style_2" placeholder="Expiration Date (MM/YY)" required/>
                                <input id="security_code" type="password" className="input_style_2" placeholder="Security Code" required/>
                            </div>

                            <div className="card">
                                <div className="radio">
                                    <input type="radio" name="payment_method"/>
                                </div>
                                <div id="pay_pal">
                                    <ul>
                                        <li>
                                            <span><img src="https://cdn.shopify.com/shopifycloud/shopify/assets/checkout/offsite-gateway-logos/paypal@2x-768388b0667bef1aa9a7cf02fa1cc2184c2915a90d4cdd62dde223f74f2acbfc.png" alt=""/></span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="card">
                                <div className="radio">
                                    <input type="radio" name="payment_method"/>
                                </div>
                                <div className="radioLabel">
                                    <label className="className_label" for="">BUY NOW, PAY LATER WITH KLARNA</label>
                                </div>
                                <div className="lable-giff">
                                    <ul>
                                        <li><span><img id="klarna_img"
                                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnQkEqvC1ypxkpm20RidRdNdWyITAiGGvbFQt7Prl20nofrp6_foDSwEWFI9hx2ukuxbo&usqp=CAU"
                                                    alt=""/></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <h1 id="Heading_contact_info">Billing Address</h1>
                        <div id="billing_add">
                            <div className="card">
                                <div className="radio">
                                    <input type="radio" checked="checked" name="ship-address"/>
                                </div>
                                <div className="radioLabel">
                                    <label for="">Same as shipping address</label>
                                </div>
                            </div>

                            <div className="card">
                                <div className="radio">
                                    <input type="radio" name="ship-address"/>
                                </div>
                                <div className="radioLabel">
                                    <label for="">Use a different billing address</label>
                                </div>
                            </div>
                        </div>

                        <p id="privacy_policy">To learn more about how we use your information and your rights, see <a
                                href="Customer_info.html">Privacy Note</a></p>
                        <div id="form_bottom_line">
                            <span className="arrow">
                            </span>
                            <a id="return_to_cart_text" href="/cart"> RETURN TO CART</a>
                            <RouteLink to="/Success"><button type="submit" id="Shipping_method">COMPLETE ORDER</button></RouteLink>
                        </div>
                    </form>
                </div>
            </div>
        </div>

        <aside id="sidepage_container">
            <div id="aside_main_div">
              
                <div id="Prod_row_1"></div>

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
                                $00
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
                        </p>
                    </div>
                </div>
                <div></div>
            </div>
        </aside>
    </div>

 </Payment_div>
  )
}

export default PaymentPage