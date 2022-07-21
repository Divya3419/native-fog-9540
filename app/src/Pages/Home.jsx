import { Box, Heading, Image, Text, Stack, Flex } from "@chakra-ui/react";
import React from "react";
import BestSellers from "../component/BestSellers";
import Essential from "../component/Essential";
import ImageSlider from "../component/ImageSlider";
import NewArrivals from "../component/NewArrivals";
import { SlideData } from "../component/SlideData";

const Home = () => {
  return (
    <>
      {/* Banner */}
      <Box>
        <ImageSlider slides={SlideData} />
      </Box>
      {/* New Arrivals */}
      <Box>
        <NewArrivals />
      </Box>

      {/* Ocean Eyes */}

      <Box backgroundColor={"#F2E8E6"} height="800px">
        <Heading as={"h2"} fontSize="28px" color={"#12284C"} paddingTop="2rem">
          OCEAN EYES
        </Heading>
        <Box
          width={"60%"}
          margin="auto"
          fontSize={"20px"}
          paddingTop={"2rem"}
          textAlign="center"
        >
          <Text color={"#677186"}>
            This high-performance treatment resurfaces and reinforces your
            skin’s moisture barrier in one easy step to reveal smooth, radiant
            skin.
          </Text>
          <Stack direction={"row"} gap={"20px"} padding={"2rem"} width={"100%"}>
            <Stack width={"600px"} height={"500px"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/OSEA_shop_the_collection_600x.progressive.jpg?v=1657661079"
                height={"100%"}
              />
            </Stack>
            <Stack
              width={"600px"}
              height={"500px"}
              backgroundColor="white"
              textAlign={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent="center"
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-675468101738-1_235x235_crop_center.jpg?v=1658261512"
                  width={"70%"}
                  height={"70%"}
                />
              </Box>
              <Text as="h5" color={"#5D6C85"}>
                OSEA
              </Text>
              <Text color={"#8B96A7"}>Seaglow Overnight Serum</Text>
              <Text color={"#8B96A7"}>$64</Text>
              <Box display={"flex"} justifyContent="center">
                <Image
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
                />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
      {/* Best Seelers */}

      <Box>
        <BestSellers />
      </Box>

      {/* next */}

      <Flex justifyContent={"center"} gap="4rem" marginTop={"8rem"}>
        <Box width="44%" height={"auto"}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/uv_clear_Elta_MD_side_by_side_640x.jpg?v=1657661287"
            width={"100%"}
          />
          <Text fontSize={"32px"} textAlign="left" color={"#293D5E"}>
            EltaMD is Here!
          </Text>
          <Text textAlign={"left"} fontSize={"23px"} color={"#485975"}>
            New to Bluemercury! This lightweight, silky, oil-free sunscreen from
            EltaMD helps calm and protect sensitive skin types to promote the
            appearance of healthy-looking skin.
          </Text>
          <Text
            textAlign={"left"}
            fontSize="20px"
            fontWeight={"bold"}
            color={"#293D5E"}
            textDecoration={"underline"}
            padding="0.5rem"
            cursor={"pointer"}
          >
            SHOP NOW
          </Text>
        </Box>
        <Box width="44%" height={"auto"}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/BAL_side_by_side_FINAL_640x.jpg?v=1652904545"
            width={"100%"}
          />
          <Text fontSize={"32px"} textAlign="left" color={"#293D5E"}>
            Beauty Alfresco
          </Text>
          <Text textAlign={"left"} fontSize={"23px"} color={"#485975"}>
            This summer is all about the outdoors, and we're here for it. You
            can find everything you need to make your summer outside a success
            in our curated collection of seasonal essentials
          </Text>
          <Text
            textAlign={"left"}
            fontSize="20px"
            fontWeight={"bold"}
            color={"#293D5E"}
            textDecoration={"underline"}
            padding="0.5rem"
            cursor={"pointer"}
          >
            SHOP SUMMER MUST-HAVES
          </Text>
        </Box>
      </Flex>

      {/* Essential Summer Candles*/}
      <Box marginTop={"3rem"}>
        <Essential />
      </Box>

      <Box backgroundColor={"#F4F6FC"} height="800px">
        <Text fontSize="35px" color={"#12284C"} paddingTop="2rem">
          NEW! FROM BUMBLE AND BUMBLE
        </Text>
        <Box
          width={"60%"}
          margin="auto"
          fontSize={"20px"}
          paddingTop={"2rem"}
          textAlign="center"
        >
          <Text color={"#677186"}>
            The Curl Reactivator is a moisturizing mist that deeply hydrates
            hair, reduces frizz, and provides light hold.
          </Text>
          <Stack direction={"row"} gap={"20px"} padding={"2rem"} width={"100%"}>
            <Stack width={"600px"} height={"500px"}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Bumble_COOP_Shop_collection_600x.progressive.jpg?v=1657720027"
                height={"100%"}
              />
            </Stack>
            <Stack
              width={"600px"}
              height={"500px"}
              backgroundColor="white"
              textAlign={"center"}
            >
              <Box
                display={"flex"}
                alignItems={"center"}
                justifyContent="center"
              >
                <Image
                  src="https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-685428027824-1_235x235_crop_center.jpg?v=1657025167"
                  width={"70%"}
                  height={"70%"}
                />
              </Box>
              <Text as="h5" color={"#5D6C85"}>
                BUMBLE AND BUMBLE
              </Text>
              <Text color={"#8B96A7"}>Curl Reactivator</Text>
              <Text color={"#8B96A7"}>$30</Text>
              <Box display={"flex"} justifyContent="center">
                <Image
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
                />
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Last */}

      <Flex justifyContent={"center"} gap="1rem" marginTop={"8rem"} >
        <Box width="30%" height={"auto"}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/samples-content_block_705x705.jpg?v=1604551537"
            width={"100%"}
          />
          <Text fontSize={"16px"} color={"#293D5E"} fontWeight="550">
            FREE GIFTS WITH PURCHASE
          </Text>
          <Text fontSize={"16px"} color={"#727F94"}>
          Stock up on all your favorite brands, then try something new on us
          </Text>
          <Text
             fontSize="16px"
             fontWeight="550"
             color={"#293D5E"}
             textDecoration="underline"
             textUnderlineOffset={'10px'}
             letterSpacing={'0.5px'}
             paddingBottom="6px"
             cursor={"pointer"}
             
          >
            BROWSE NOW
          </Text>
        </Box>
        <Box width="30%" height={"auto"}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/consultation_promo_nav_1_705x705.jpg?v=1657733426"
            width={"100%"}
          />
          <Text fontSize={"16px"} color={"#293D5E"} fontWeight="550" >
          $20 OFF $100 WITH AN IN-STORE CONSULTATION!
          </Text>
          <Text fontSize={"16px"} color={"#727F94"}>
          Our Beauty Experts can show you quick makeup application tricks and how to revamp your skincare regimen.
          </Text>
          <Box
             fontSize="16px"
             fontWeight="550"
             color={"#293D5E"}
             textDecoration="underline"
             textUnderlineOffset={'10px'}
             letterSpacing={'0.5px'}
             paddingBottom="6px"
             cursor={"pointer"}
             width="auto"
             
          >
            BOOK NOW
          </Box>
        </Box>

        <Box width="30%" height={"auto"}>
          <Image
            src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/spa_menu_photo_705x705.jpg?v=1628018315"
            width={"100%"}
          />
          <Text fontSize={"16px"} color={"#293D5E"} fontWeight="550">
          BLUEMERCURY SPA
          </Text>
          <Text fontSize={"16px"} color={"#727F94"} >
          Our luxurious spa services are customizable to your individual needs
          </Text>
          <Text
            fontSize="16px"
            fontWeight="550"
            color={"#293D5E"}
            letterSpacing={'0.5px'}
            paddingBottom="6px"
            cursor={"pointer"}
            textDecoration="underline"
             textUnderlineOffset={'10px'}
          >
            BROWSE THE MENU
          </Text>
        </Box>
      </Flex>


    </>
  );
};

export default Home;
