import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Link as RouteLink} from "react-router-dom"

SwiperCore.use([Navigation, Pagination, Scrollbar]);


const data = [
  {
    id: 1,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-819869029028-1_200x.jpg",
    head: "KJAER WEIS",
    name: "The Beautiful Eye Balm",
    price: 65,
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-885609026893-1_200x.jpg",
    head: "DYSON",
    name: "Air Wrap Multi-Styler",
    price: 599,
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-30treatments-817237011774-1_200x.jpg?v=1657808379",
    head: "M-61",
    name: "PowerGlow Peel",
    price: 32,
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-17oz-816218026882-1_200x.jpg?v=1657297959",
    head: "SUPERGOOP!",
    name: "Glowscreen SPF 40",
    price: 17,
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-819869029028-1_200x.jpg",
    head: "KJAER WEIS",
    name: "The Beautiful Eye Balm",
    price: 65,
  },
  {
    id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-885609026893-1_200x.jpg",
    head: "DYSON",
    name: "Air Wrap Multi-Styler",
    price: 599,
  },
  {
    id: 7,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-30treatments-817237011774-1_200x.jpg?v=1657808379",
    head: "M-61",
    name: "PowerGlow Peel",
    price: 32,
  },
  {
    id: 8,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-635494263008-1_200x.jpg",
    head: "SKINCEUTICALS",
    name: "C E Ferulic",
    price: 169,
  },
];

const BestSellers = () => {
  return (
    <>
      <Box>
        <Heading as={"h2"} color="#12284C" fontSize={'35px'} fontFamily={'Montserrat Regular'} padding="2rem">Best Sellers</Heading>
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
            <RouteLink to={`/productdetail/${el.id}`}>
            <Stack textAlign={'center'}>
              <Image src={el.image} textAlign="center"/>
              <Text fontWeight={'bold'}>{el.head}</Text>
              <Text color={'#8B96A7'}>{el.name}</Text>
              <Text color={'#8B96A7'}>${el.price}</Text>
            </Stack>
            </RouteLink>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  )
};

export default BestSellers;
