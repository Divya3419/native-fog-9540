import { Box, Image } from "@chakra-ui/react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import {Link} from "react-router-dom"


// If you want to use your own Selectors look up the Advancaed Story book examples
const ImageSlider = ({ slides }) => {
  return (
    <Carousel infiniteLoop position="relative">
      {slides.map((slide) => {
        return (

          
          <Box key={slide.id}>
            
              <Image
                src={slide.image}
                height="500px"
                width="100%"
                position={"relative"}
              />
           
          </Box>
          
        );
      })}
    </Carousel>
  );
};

export default ImageSlider;
