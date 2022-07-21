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
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080240552-1_470x.jpg?v=1657738892",
    head: "LAFCO",
    name: "Summer Fling White Grapefruit Candle & Reed Diffuser Duo",
    price: 96,
  },
  {
    id: 2,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-840732122355-1_470x.jpg?v=1654275321",
    head: "NEST NEWYORK",
    name: "Gray Malin Sicilian Tangerine 3-Wick Candle",
    price: 76,
  },
  {
    id: 3,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-8028713620034-1_470x.jpg?v=1657569140",
    head: "ACQUA DI PARMA",
    name: "Buongiorno Candle",
    price: 82,
  },
  {
    id: 4,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431400208-1_470x.jpg?v=1654274576",
    head: "DIPTYQUE",
    name: "Gardenia Candle",
    price: 70,
  },
  {
    id: 5,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-3700431417756-1_470x.jpg?v=1654274681",
    head: "DIPTYQUE",
    name: "LYS Candle",
    price: 70,
  },
  {
    id: 6,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/variant_images-size-106oz300g-5060244570559-1_470x.jpg?v=1655872830",
    head: "FORNASETTI PROFUMI",
    name: "Ortensia Candle",
    price: 215,
  },
  {
    id: 7,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-727080238009-1_470x.jpg?v=1654274921",
    head: "LAFCO",
    name: "Blue Mercury Spa Signature Candle",
    price: 70,
  },
  {
    id: 8,
    image:
      "https://cdn.shopify.com/s/files/1/0283/0185/2747/products/global_images-8028713620034-1_470x.jpg?v=1657569140",
    head: "ACQUA DI PARMA",
    name: "Buongiorno Candle",
    price: 82,
  },
];
const Essential = () => {
  return (
    <>
      <Box>
        <Heading
          as={"h2"}
          color="#12284C"
          fontSize={"35px"}
          fontFamily={"Montserrat Regular"}
        >
          ESSENTIAL SUMMER CANDLES
        </Heading>
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
            <Stack textAlign={"center"}>
              <Image src={el.image} textAlign="center" />
              <Text fontWeight={"bold"}>{el.head}</Text>
              <Text color={"#8B96A7"}>{el.name}</Text>
              <Text color={"#8B96A7"}>${el.price}</Text>
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Essential;
