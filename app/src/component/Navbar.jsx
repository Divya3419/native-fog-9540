import { SearchIcon } from '@chakra-ui/icons'
import { Box, Img } from '@chakra-ui/react'
import React from 'react'
import {Link as RouteLink} from "react-router-dom"
const Navbar = () => {
  return (
    <>
    <Box  height="40px" border="2px solid black" display="grid" gridTemplateColumns="25% 50% 25%" marginTop="20px">

<Box >
    <RouteLink to ="/location">SPA & STORE LOCATORE</RouteLink>
</Box>
<Box ></Box>

<Box  display="grid" gridTemplateColumns="repeat(4,1fr)">
<SearchIcon/>
<Box>Wishlist</Box>
<Box>account</Box>
<Box>bag</Box>
</Box>
 </Box >

    <Box height="40px" border="2px solid black" >
    <Img width="12%"  cursor="pointer" src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182"/>
        </Box>


<Box height="40px" display="grid" gridTemplateColumns="15% 70% 15%" border="2px solid black">
<Box ></Box>
<Box display="grid" fontSize="15px" gridTemplateColumns="repeat(7,1fr)">
<Box >SHOP</Box>
<Box>NEW!</Box>
<Box>BRAND</Box>
<Box>EXPLORE</Box>
<Box>EVENT</Box>
<Box>BLUEREWARDS</Box>
<Box>BEAUTY ALFRESCO</Box>
</Box>
<Box></Box>
    </Box>
    </>
  )
}

export default Navbar