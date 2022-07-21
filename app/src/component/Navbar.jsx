import { SearchIcon } from "@chakra-ui/icons";
import { Box, Center, Img } from "@chakra-ui/react";
import React from "react";
import { Link as RouteLink } from "react-router-dom";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
const Navbar = () => {
  return (
    <>
      <Box
        height="40px"
        display="grid"
        gridTemplateColumns="25% 50% 25%"
        marginTop="20px"
      >
        <Box fontSize="10px">
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

        <Box fontSize="10px" display="grid" gridTemplateColumns="repeat(4,1fr)">
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
          <Box display="flex" gap="10px">
            <Img
              width="30%"
              height="50%"
              src="https://image.shutterstock.com/image-vector/shopping-bag-icon-260nw-678890278.jpg"
            />
            BAG
          </Box>
        </Box>
      </Box>

      

<Center marginBottom="10px" h='40px'>
<a href=""><Img
            width="15%"
            margin="auto"
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/bluemercury-logo_1216x.png?v=1648743182"
          /></a>
</Center>

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
{/* <Tabs fontSize="12px" width="80%" margin="auto" justifyContent="center">
  <TabList>
    <Tab>SHOP</Tab>
    <Tab>NEW!</Tab>
    <Tab>BRAND</Tab>
    <Tab>EXPLORE</Tab>
    <Tab>EVENT</Tab>
    <Tab>BLUEREWARDS</Tab>
    <Tab>BEAUTY ALFRESCO</Tab>
    
  </TabList>

  <TabPanels>
    <TabPanel>
      <Box width="80%" margin="auto" display="grid" gridTemplateColumns="30% 70%" color="grey" fontSize="12px" border="2px solid black">
        <Box>
          <p>MAKE-UP</p>
          <p>HAIR</p>
          <p>BATH & BODY</p>
          <p>HOME</p>
          <p>SUN CARE</p>
          
        </Box>
        <Box></Box>
      </Box>

    </TabPanel>
    <TabPanel>
    <Box width="80%" margin="auto" display="grid" gridTemplateColumns="30% 70%" color="grey" fontSize="12px" border="2px solid black">
        <Box>
          <p>MAKE-UP</p>
          <p>HAIR</p>
          <p>BATH & BODY</p>
          <p>HOME</p>
          <p>SUN CARE</p>
          
        </Box>
        <Box></Box>
      </Box>
    </TabPanel>
    <TabPanel>
    <Box width="80%" margin="auto" display="grid" gridTemplateColumns="30% 70%" color="grey" fontSize="12px" border="2px solid black">
        <Box>
          <p>MAKE-UP</p>
          <p>HAIR</p>
          <p>BATH & BODY</p>
          <p>HOME</p>
          <p>SUN CARE</p>
          
        </Box>
        <Box></Box>
      </Box>
    </TabPanel>
    <TabPanel>
    <Box width="80%" margin="auto" display="grid" gridTemplateColumns="30% 70%" color="grey" fontSize="12px" border="2px solid black">
        <Box>
          <p>MAKE-UP</p>
          <p>HAIR</p>
          <p>BATH & BODY</p>
          <p>HOME</p>
          <p>SUN CARE</p>
          
        </Box>
        <Box></Box>
      </Box>
    </TabPanel>
    <TabPanel>
    <Box width="80%" margin="auto" display="grid" gridTemplateColumns="30% 70%" color="grey" fontSize="12px" border="2px solid black">
        <Box>
          <p>MAKE-UP</p>
          <p>HAIR</p>
          <p>BATH & BODY</p>
          <p>HOME</p>
          <p>SUN CARE</p>
          
        </Box>
        <Box></Box>
      </Box>
    </TabPanel>
    <TabPanel>
    <Box width="80%" margin="auto" display="grid" gridTemplateColumns="30% 70%" color="grey" fontSize="12px" border="2px solid black">
        <Box>
          <p>MAKE-UP</p>
          <p>HAIR</p>
          <p>BATH & BODY</p>
          <p>HOME</p>
          <p>SUN CARE</p>
          
        </Box>
        <Box></Box>
      </Box>
    </TabPanel>
    <TabPanel>
    <Box width="80%" margin="auto" display="grid" gridTemplateColumns="30% 70%" color="grey" fontSize="12px" border="2px solid black">
        <Box>
          <p>MAKE-UP</p>
          <p>HAIR</p>
          <p>BATH & BODY</p>
          <p>HOME</p>
          <p>SUN CARE</p>
          
        </Box>
        <Box></Box>
      </Box>
    </TabPanel>
  </TabPanels>
</Tabs>
 */}
      <Box
        border="2px solid black"
        backgroundColor="black"
        color="white"
        fontSize="12px"
      >
        <marquee>FREE GIFT WITH PURCHES. BROWSE NOW</marquee>
      </Box>
    </>
  );
};

export default Navbar;
