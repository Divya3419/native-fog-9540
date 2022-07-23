import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {  fetchmyData } from '../Redux/action.js';
import {Link as RouteLink} from "react-router-dom"
import {Box, Img} from "@chakra-ui/react"

const NewProducts = () => {

    const nav=useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmyData());
  }, []);

  const ProductData2 = useSelector((store) => {
    return store.data.product;
  });


    return (
    <Box display = "flex" width="90%" margin="auto" >
    <Box className='all-product' gap="15px" display = "grid" gridTemplateColumns="repeat(3,1fr)">
     {ProductData2.map((e) => {
        const { title,name,image,image_link,brand, price, description, category,  id, rating } = e;
    
        return (
     
          <Box className="prt-Box" key={id} >
                 <RouteLink to={`/productdetail/${id}`}>
            <Img width="100%" h="60%" src={image_link}/>
            <Box className="view">
              <Box className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}></Box>
              {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
            </Box>
            <Box className="prt-name">{name}</Box>
            <Box className="prt-type">{brand}</Box>
            <Box className="prt-type">{price}</Box>
            </RouteLink>
            
          </Box>
        );
      })}
    </Box>
    </Box>
  )
}






export default NewProducts