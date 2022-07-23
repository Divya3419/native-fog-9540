import styled from "styled-components";

export const Cart_div = styled.div`
.cart {
    width: 85%;
    height: 85%;
    /* background-color:black; */
    margin: auto;
  }
  
  .cart_1 {
    width: 100%;
    font-size: 80px;
  }
  
  .cart_container {
    font-family: "Montserrat", sans-serif;
    font-weight: 500;
    letter-spacing: .2em;
    /* padding-left: 30px; */
    text-transform: uppercase;
    color: #12284c;
    font-size: 30px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  /* blue rewards */
  
  .reward_login {
    height: 70px;
    width: 100%;
    margin: 20px auto;
    background-color: #F4FAFC;
    display: flex;
  }
  .rewards_blue {
    font-family: "Montserrat", sans-serif;
    font-weight: 400;
    font-size: 25px;
    color: #12284c;
    line-height: 34.65px;
  }
  
  .rewards {
    color: #12284c;
    line-height: 34.65px;
  }
  
  .free_Shipping {
    padding-top: 30px;
    margin-left: 10px;
  }
  
  .log_in_cart {
    padding-top: 30px;
    margin-left: 150px;
    font-size: 15px;
  }
  
  .join_now {
    padding-top: 15px;
    margin-left: 50px;
  }
  
  .join_now > button {
    height: 40px;
    width: 180px;
    background-color: rgb(13, 13, 65);
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 15px;
  }
  
  .your_Cart {
    font-size: 20px;
    /* margin-left: 0px; */
    font-weight: 400;
    font-family: "Montserrat", sans-serif;
    float: left;
  }
  
  #empty_bag {
    float: right;
  }
  
  /* you cart */
  .gift {
    display: flex;
  }
  
  .checkbox {
    margin-left: 45px;
    height: 20px;
    width: 20px;
    padding: 0;
  }
  
  .gift_Order {
    padding-bottom: 20px;
  }
  
  .order {
    padding-left: 2%;
    font-family: "Montserrat Semi Bold", sans-serif;
    font-weight: 400;
    font-size: 14px;
    width: 100%;
  }
  
  .hidden {
    padding-left: 8%;
    font-family: "Montserrat Light", sans-seri;
    font-weight: 400;
    line-height: 23.1px;
    font-size: 14px;
  }
  
  /* ready to ship */
  
  #ready_shift {
    height: 50px;
    width: 100%;
    display: flex;
    border-bottom: 2px solid #dcdcdc;
  }
  
  .readytoshift {
    width: 50%;
    font-size: 20px;
    font-family: "Montserrat", sans-serif;
    padding: 10px;
    padding-top: 10px;
    font-weight: 400;
  }
  
  .price {
    float: left;
    width: 20%;
    text-align: center;
    font-size: 15px;
    font-family: "Montserrat", sans-serif;
    padding: 10px;
    font-weight: 400;
    /* background-color: lightblue; */
  }
  
  .quantity {
    float: left;
    font-size: 15px;
    width: 15%;
    font-family: "Montserrat", sans-serif;
    padding: 10px;
    padding-top: 10px;
    font-weight: 400;
    /* background-color: lavenderblush; */
    text-align: center;
  }
  
  .total {
    /* float: left; */
    width: 15%; 
    font-size: 15px;
    text-align: right;
    font-family: "Montserrat", sans-serif;
    padding: 10px;
    font-weight: 400;
    /* background-color: lightblue; */
  }
  
  #line {
    width: 100%;
    border-bottom: 1px solid #dcdcdc;
  }
  
  #cart_Bag {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 150px;
    /* background-color: lawngreen; */
    border-bottom: 2px solid #dcdcdc;
  }
  
  #Offerings {
    font-size: 15px;
    font-family: "Montserrat", sans-serif;
    font-weight: lighter;
  }
  
  #Offer {
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    font-weight: lighter;
  }
  
  /*  sampe product */
  
  #sampleProduct {
    border-bottom: 1px solid #dcdcdc;
    width: 100%;
    margin: 20px 10px 0px 0px;
    padding-top: 20px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    border-top: 1px solid #dcdcdc;
    flex-direction: row;
  }
  
  .img1 {
    width: 25%;
    display: flex;
  }
  
  .sample_img1 {
    height: 94px;
    margin-right: 5px;
    width: 95px !important;
    display: block;
    width: 10%;
  }
  
  .complimentary {
    font-family: "Montserrat Medium", sans-serif;
    font-size: 14px;
    line-height: 18px;
    letter-spacing: 0.2px;
    text-transform: uppercase;
    color: #12284c;
    font-weight: 400;
    position: relative;
    margin-bottom: 12px;
    display: -ms-flexbox;
    display: flex;
  }
  
  .footer {
    padding-top: 40px;
    height: 100px;
    width: 100%;
    /* border:1px solid black; */
    display: flex;
    flex: wrap;
  }
  
  .shipping {
    /* margin-top: 10px; */
    height: 50px;
    width: 45%;
    background-color: #f4fafc;
    margin-left: 55%;
    /* display: block; */
  
    text-align: right;
    font-family: "Montserrat Medium", sans-serif;
    font-size: 20px;
    font-weight: 500;
    line-height: 23.1px;
    color: #12284c;
    padding: 13px 20px 13px 0;
  }
  
  #cart_total {
    margin-bottom: 8px;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 2px;
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    font-family: "Montserrat Medium", sans-serif;
    text-align: right;
    color: #12284c;
    margin-right: 30px;
  }
  
  .tax {
    font-weight: inherit;
    text-align: right;
    font-family: "Montserrat Medium", sans-serif;
    font-size: 12px;
  }
  
  #checkout {
    text-transform: uppercase;
    border: 0px;
    width: 30%;
    margin-top: 21px;
    float: right;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: white;
    font-weight: 900;
    background-color: #12284c;
    font-family: "Montserrat Light", sans-serif;
    font-size: 14px;
    line-height: 23.1px;
    text-decoration: none;
  }
  
  .clear {
    clear: both;
  }
  
  .paypal {
    background-color: #ffc439;
    border: 0px;
    text-transform: uppercase;
    width: 30%;
    margin-top: 5px;
    float: right;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    color: #12284c;
    font-family: "Montserrat Light", sans-serif;
    font-size: 14px;
    line-height: 23.1px;
  }
  
  .paypal-logo {
      width: 90px;
      margin: auto;
  }
  `;