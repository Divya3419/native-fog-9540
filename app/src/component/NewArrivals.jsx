import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([Navigation, Pagination, Scrollbar]);

const data = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-laguna01-194251134482-1_470x.jpg?v=1656523888",
    head: "NARS",
    name: "Laguna Bronzing Cream",
    price: 38,
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840035212883-1_470x.jpg?v=1655323188",
    head: "ORIBE",
    name: "Valleys of Flowers Candle",
    price: 78,
  },
  {
    id:3,
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-5060403580108-1_470x.jpg?v=1657786475",
    head:"BOUCLEME",
    name:"Curl Cream",
    price:"32"
  },
  {
    id:4,
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-812025018607-1_470x.jpg?v=1657585105",
    head:"PCA SKIN",
    name:"Vitamin B3 Brightening Serum",
    price:"120"
  },
  {
    id:5,
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-857177007093-1_470x.jpg?v=1657584891",
    head:"ESKER",
    name:"Clarifying Body Wash",
    price:"28"
  },
  {
    id:6,
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-color-citron-690156000698-1_470x.jpg?v=1655922932",
    head:"VITRUVI",
    name:"Move Diffuser",
    price:"182"
  },
  {
    id:7,
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-390205025008-1_470x.jpg?v=1656609271",
    head:"ELTMAD",
    name:"UV Claer Broad-Spectrum SPF 46",
    price:"39"
  },
  {
    id:8,
    image:"https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431440976-1_470x.jpg?v=1657238695",
    head:"DIPTYQUE",
    name:"Candle Coffret",
    price:"114"
  }
]
const NewArrivals = () => {
  return (
    <>
      <Box>
        <Heading as={"h2"} color="#12284C" fontSize={'35px'} fontFamily={'Montserrat Regular'}>NEW ARRIVALS</Heading>
      </Box>
      <Swiper
        loop={true}
        spaceBetween={5}
        slidesPerView={4}
        slidesPerGroup={4}
        grabCursor={true}
        navigation
        pagination={{ clickable: true }}
        >
        {data.map((el) => (
          <SwiperSlide key={el.id} style={{ width: "200px" }}>
            <Stack textAlign={'center'}>
              <Image src={el.image} textAlign="center"/>
              <Text fontWeight={'bold'}>{el.head}</Text>
              <Text color={'#8B96A7'}>{el.name}</Text>
              <Text color={'#8B96A7'}>${el.price}</Text>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default NewArrivals;


