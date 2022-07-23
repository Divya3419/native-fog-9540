
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { fetchDatab } from '../Redux/action';
import {Link as RouteLink} from "react-router-dom"
const BabyFoot = () => {
  const nav=useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDatab("BabyFoot"));
  }, []);

  const ProductData = useSelector((store) => {
    return store.data.prod;
  });
// console.log(ProductData)
  const handleClick=(id)=>{
    // nav(`/product/${id}`)
    // console.log(id)
  }

  console.log("ProductData:", ProductData);
  return (
    <>
          <div><Link style={{ textDecoration: "none" }} to="/">Home</Link></div>
     <div className='abelmain'>
      <div className='start'>
<img  style={{height:"121px", width:"140"}} src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/2017_Global_Logo_PNG_File.png?v=1641423712"/>
    <div>
    <p style={{ color: "#12248C " }}>Abel Odor exists to create the world’s best 100% natural perfume without compromising<br/> on ethics or aesthetics. Abel’s fragrances are created by master perfumer Isaac Sinclair,<br/> using the latest in natural science.<br/> Abel directs 1% of its total revenue to environmental causes,<br/> specifically supporting the community from which it’s ingredients<br/> are sourced. Their sustainability mind-set goes all the way from their ingredients<br/> to their packaging and supply chain.</p>
    </div>
     
       </div>
        <div> 
<img  style={{height:"100%", width:"500px"}}src="https://cdn.shopify.com/s/files/1/0283/0185/2747/files/Baby_Foot_Brand_Banner.jpg?v=1630358266"/>
      </div>


    </div>
    
     <div className='all-product'>
    {ProductData.map((e) => {
        const { title,name,image,image_link,brand, price, description, category,  id, rating } = e;
      
        return (
     
          <div  className="prt-div" key={id} onClick={()=>{handleClick(id)}}>
<RouteLink to={`/productdetail/${id}`}>
            <img src={image_link}></img>
            <div className="view">
              <div className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}></div>
              {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
            </div>
            <div className="prt-name">{name}</div>
            <div className="prt-type">{brand}</div>
            <div className="prt-type">{price}</div>
       
            <div className="prt-finalPrice">{` $ ${price}`}</div>
            </RouteLink>
          </div>
        );
      })}
    </div>

    </>
  )
}

export default BabyFoot