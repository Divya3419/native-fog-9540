import { Box, Input } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
    <Box borderTop="1px solid grey" textAlign="left" marginBottom="60px" color="grey" gap="50px" fontSize="15px" display="grid" gridTemplateColumns="repeat(5,1fr)">
<Box border="2px solid black" marginTop="20px" marginLeft="40px">
Get Expert Beauty Insight & Offer
<Input placeholder="EMAIL ADDRESS"/>
By continuing, you agree to Bluemercury's 
<br />
<a href="https://bluemercury.com/pages/privacy-policy#privacyHowCollect" target="_blank">Privacy Practices.</a>

Copyright 2022 bluemercury. All Rights Reserved.

</Box>

<Box border="2px solid black" marginTop="20px">
    <h3>BLUEMERCURY</h3>
    <a href="">Our Company</a>
    <br />
    <a href="">Store Locator</a>
    <br />
    <a href="">in-Store & Online Event</a>
    <br />
    <a href="">Spa Menu</a>
    <br />
    <a href="">Careers</a>
    <br />
    <a href="">Vendor Submissions</a>
    <br />
    <a href="">Diversity & Inclusion</a>
</Box>


<Box border="2px solid black" marginTop="20px" >
    <h3>MY ACCOUNT</h3>
    <a href="">My Account</a>
    <br />
    <a href="">Blue Rewards</a>
    <br />
    <a href="">Gift Card Balance Checker</a>
</Box>
<Box border="2px solid black" marginTop="20px" >
<h3>CUSTOMER SERVICES</h3>
</Box>
<Box border="2px solid black" marginTop="20px" >
<h3>RESOURCES</h3>
<a href="">Terms & Conditions</a>
<br />
<a href="">Privacy Notice</a>
<br />
<a href="">Do Not Sell My Personal Information
</a>
<br />
<a href="">CA Privacy Rights
</a>
<br />
<a href="">Accessibility
</a>
<br />
<a href="">Affiliate Program
</a>
<br />
<a href="">COVID-19 Updates
</a>
<br />
</Box>
    </Box>
  )
}

export default Footer