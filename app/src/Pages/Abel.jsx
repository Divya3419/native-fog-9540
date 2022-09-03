import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar'
import "./Abel.css";
import { Link } from 'react-router-dom';
import {  fetchData  } from "../Redux/AppReducer/action";
import { Stack } from '@chakra-ui/react';
import {Link as RouteLink} from "react-router-dom"

const Abel = () => {

  const nav=useNavigate()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);

  const ProductData = useSelector((store) => {
    return store.AppReducer.prod;
  });



  console.log("ProductData:", ProductData);

  return (
    <>

   <div><Link style={{textDecoration:"none"}} to="/">Home</Link></div>
    <div className='abelmain'>
      <div className='start'>
<img  style={{height:"121px", width:"140"}} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/abel_logo_d36ec493-7a93-4303-9005-90a92f62a20f.jpg?v=1645196435"/>
    <div>
    <p style={{ color: "#12248C " }}>Abel Odor exists to create the world’s best 100% natural perfume without compromising<br/> on ethics or aesthetics. Abel’s fragrances are created by master perfumer Isaac Sinclair,<br/> using the latest in natural science.<br/> Abel directs 1% of its total revenue to environmental causes,<br/> specifically supporting the community from which it’s ingredients<br/> are sourced. Their sustainability mind-set goes all the way from their ingredients<br/> to their packaging and supply chain.</p>
    </div>
     
       </div>
        <div> 
<img  style={{height:"100%", width:"500px"}}src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/AbelBanner1.jpg?v=1645196435"/>
      </div>
    </div>

 

{/* products   */}

    <div className='all-product'>
    {ProductData.map((e) => {
        const { title,name,image,image_link,brand, price, description, category,  id, rating } = e;
    
        return (
     
          <div  className="prt-div" key={id}>
<RouteLink to={`/productdetail/${id}`}>
              <Stack>
            <img src={image_link}></img>
            <div className="view">
              <div className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}></div>
              {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
            </div>
            <div className="prt-name">{name}</div>
            <div className="prt-type">{brand}</div>
            <div className="prt-type">{price}</div>
            </Stack>
            </RouteLink> 
          </div>
        );
      })}
    </div>
    </>
  )
}

export default Abel