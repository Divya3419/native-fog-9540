import { Box, Heading, Image, Stack, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import {Link as RouteLink} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../Redux/AppReducer/action";

SwiperCore.use([Navigation, Pagination, Scrollbar]);


const BestSellers = () => {
  const data=useSelector((state)=>state.AppReducer.prod)
  const dispatch = useDispatch()

  useEffect(() => {
dispatch(fetchData(data))
  },[])

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
              <Image src={el.image_link} textAlign="center"/>
              <Text fontWeight={'bold'}>{el.head}</Text>
              <Text color={'#8B96A7'}>{el.name}</Text>
              <Text color={'#8B96A7'}>{el.price}</Text>
            </Stack>
            </RouteLink>
          </SwiperSlide>
        ))}
      </Swiper>
      
    </>
  )
};

export default BestSellers;
