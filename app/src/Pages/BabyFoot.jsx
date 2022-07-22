
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { fetchDatab } from '../Redux/action';

const BabyFoot = () => {
  const nav=useNavigate()
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDatab("BabyFoot"));
  }, []);

  const ProductData = useSelector((store) => {
    return store.data.products;
  });
// console.log(ProductData)
  const handleClick=(id)=>{
    // nav(`/product/${id}`)
    // console.log(id)
  }

  console.log("ProductData:", ProductData);
  return (
    <>
    
     <div className='all-product'>
    {ProductData.map((e) => {
        const { title,name,image,image_link,brand, price, description, category,  id, rating } = e;
      
        return (
     
          <div  className="prt-div" key={id} onClick={()=>{handleClick(id)}}>

            <img src={image_link}></img>
            <div className="view">
              <div className="view-icon" onClick={ ()=>{ nav(`/product/${id}`)}}></div>
              {/* < FavoriteBorderOutlinedIcon className="love-icon-1" onClick={ ()=>{ Addtowishlist( id) }}/> */}
            </div>
            <div className="prt-name">{name}</div>
            <div className="prt-type">{brand}</div>
            <div className="prt-type">{price}</div>
       
            <div className="prt-finalPrice">{` $ ${price}`}</div>
          </div>
        );
      })}
    </div>

    </>
  )
}

export default BabyFoot