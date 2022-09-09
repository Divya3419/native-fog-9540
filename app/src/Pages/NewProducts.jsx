import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {  addCityReducer, fetchmyData } from '../Redux/AppReducer/action.js';
import {Box, Button,Img} from "@chakra-ui/react"
import {Link as RouteLink} from "react-router-dom"


const NewProducts = () => {

  //sorting algorithm

  const sortHandler = (e) => {
    console.log(e.target.value,"sortHandler")
    if(e.target.value=="asc")
        //dispatch(sorting(1))
        dispatch(addCityReducer(1))
    else if(e.target.value=="dec")
        //dispatch(sorting(-1))
        dispatch(addCityReducer(-1))

        else
        dispatch(addCityReducer(1))

}

    const nav=useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchmyData());
  }, []);

  const ProductData2 = useSelector((store) => {
    return store.AppReducer.product;
  });


    return (

      <>
     
      <Box className="sort-Box">
      <Button>
    <select onChange={sortHandler} name="" id="sort">
    <option value="sel">--SORT BY PRICING--</option>
    <option value="asc">Low to High</option>
    <option value="dec">High to Low</option>
    </select>  
      </Button>
      </Box>
   
    
   <Box width="90%" margin="auto" >
    <Box className='all-product' gap="15px" display = "grid" gridTemplateColumns="repeat(3,1fr)">

     {ProductData2.map((e) => {
        const { title,name,image,image_link,brand, price, description, category,  id, rating } = e;
        return (

          <Box className="prt-Box" key={id} >
         
                 <RouteLink to={`/productdetail/${id}`}>
            <Img width="100%" h="60%" src={image_link}/>
            <Box className="view">

              {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
            </Box>
            <Box className="prt-name">{name}</Box>
            <Box className="prt-type">{brand}</Box>
            <Box className="prt-type">{price}</Box>
            </RouteLink>
            
          </Box>
          

         
        );
        
      })
    
     
    }

    </Box>
    </Box>
  
    </>
  )
}






export default NewProducts