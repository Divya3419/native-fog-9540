import { Box, Button, Img } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { fetchData } from '../Redux/action';

const ProductDetail = () => {
  const {id}=useParams()
  //console.log(id)
const navigate=useNavigate()
  const ProductData = useSelector((store) => {
    return store.data.prod
  });
console.log(ProductData)
  const dispatch=useDispatch()
  
  const[currProduct,setcurrProduct]=useState({})

  useEffect(() => {
dispatch(fetchData())
  },[])

  useEffect(()=>{
if(id){
  const temp=ProductData.find((ele)=>ele.id===(id))
  temp && setcurrProduct(temp)
}
  },[ProductData,id])

//console.log(ProductData)
  console.log(currProduct)


  const handleBag=(id)=>{
    navigate(`/bag/${id}`)
    console.log(id)
  }
  return (
    <Box width="80%" margin="auto" key={currProduct.id} display="grid" gridTemplateColumns="repeat(2,1fr)">
      <Box>
      <Img src={currProduct.image_link}/>
      </Box>
      <Box marginTop="50px">
      <h3>{currProduct.name}</h3>
      <h3>{currProduct.price}</h3>
      <Button onClick={()=>handleBag(id)} width="70%"color="white" bg="blue.700">ADD TO BAG</Button>
      </Box>
      
          </Box>
  )
}

export default ProductDetail