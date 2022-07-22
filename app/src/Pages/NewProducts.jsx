import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchData } from '../Redux/action.js';

import {Box} from "@chakra-ui/react"

const NewProducts = () => {

    const nav=useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const ProductData2 = useSelector((store) => {
    return store.data.product;
  });


    return (
    <Box border="2px solid black" display = "flex" >
    <Box className='all-product' border="2px solid black" display = "grid" gridTemplateColumns="repeat(3,1fr)">
     {ProductData2.map((e) => {
        const { title,name,image,image_link,brand, price, description, category,  id, rating } = e;
    
        return (
     
          <Box  className="prt-Box" key={id} >

            <img src={image_link}></img>
            <Box className="view">
              <Box className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}></Box>
              {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
            </Box>
            <Box className="prt-name">{name}</Box>
            <Box className="prt-type">{brand}</Box>
            <Box className="prt-type">{price}</Box>
       
            
          </Box>
        );
      })}
    </Box>
    </Box>
  )
}

export default NewProducts