import { Box, Heading, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'

const Cart = () => {
  return (
   <Box>
    <Heading as="h2" size="xl" textAlign="center">
        YOUR BAG
    </Heading>

   </Box>
  )
}

function cartItem(){
    return(
        <Box border={"1px solid red"} rounded="lg" width={"fit-content"} margin="auto">
            <Stack direction={{base:'colum',md:"row"}} justifyContent="center" alignItems={"center"}>
            <Box height={"300px"} width="300px" border={"1px solid green"}>
                <Image

                rounded={"lg"}
                height={230}
                width={282}
                objectFit={"contain"}
                src={"image"}
                />
            </Box>
            <Box height={"300px"} width="300px" border={"1px solid green"}>
                <Heading as="h4" size="lg">Product info</Heading>
                <Text>lorem text hear detail about product map method</Text>
            </Box>
            </Stack>
        </Box>
    )
}

export default Cart