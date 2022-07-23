import React from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import {  addCityReducer, fetchmyData } from '../Redux/action.js';
import {Box, Button} from "@chakra-ui/react"
//sorting algorithm import








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
    return store.data.product;
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
   
    
    <Box className='all-product'  display = "grid" gridTemplateColumns="repeat(5,1fr)">
     {ProductData2.map((e) => {
        const { title,name,image,image_link,brand, price, description, category,  id, rating } = e;


         
    
        return (
           
          
         
          
          <Box className="prt-Box" key={id} >
         
         
          {/* sorting algorithm inside sort-Box */}
           
       


            <img src={image_link}/>
            <Box className="view">
              <Box className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}></Box>
              {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
            </Box>
            <Box className="prt-name">{name}</Box>
            <Box className="prt-type">{brand}</Box>
            <Box className="prt-type">{price}</Box>
       
            
          </Box>
          

         
        );
        
      })
     
    }
    </Box>
  
    </>
  )
}






export default NewProducts