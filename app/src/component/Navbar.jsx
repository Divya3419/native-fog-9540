import React, { useEffect, useRef, useState } from 'react'


const Navbar = () => {
    const [ words, setWords ] = useState(['FREE OVERNIGHT SHIPPING WITHOUT MINIMUM PURCHASE', 'FREE SAMPLE WITH ALL ORDERS', 'FREE GIFTS WITH PURCHASE'])

    const wrapperRef = useRef()
  
    const handleAnim = () => {
  
      setTimeout(() => {
        const copyWords = [ ...words ];
        const firstElem = copyWords.splice(1)
        wrapperRef.current.style.transition = 'none';
        wrapperRef.current.style.top = '0px'
        setWords([ ...firstElem.concat(copyWords) ])
      },2000);
  
      wrapperRef.current.style.transition = '0.5s';
      wrapperRef.current.style.top = '-70px'
    }
    useEffect(() => {
      setTimeout(() => {
        handleAnim()
      }, 3000);
    })
  return (
    <>
    <div className="test-container">

    <div className='text-container-word'>
      <div ref={wrapperRef} className='text-container-word-wrapper'>
        <span className='text-word'>{words[0]}</span>
        <span className='text-word'>{words[1]}</span>
      </div>
    </div>
  </div>
  <style jsx>
        {`
          .test-container {
           
            width: 100%;
            display: flex;
          }
       
          .text-container-word {
            position: relative;
            width: 100%;
            height: 50px;
            background-color: #12284C;
            color:#D7EBF2;
            display: inline-block;
            overflow: hidden;
           
          }
          .text-container-word-wrapper {
            height: auto;
            position: relative;
            top: 0px;
          }
          .test-container h1 {
            position: relative;
            display: inline;
            padding: 10px;
          }
          .text-word {
            height: 70px;
            font-size: 22px;
            font-family: 20px "Montserrat Regular", sans-serif
            font-weight: bold;
            display: block;
            transition: 0.5s;
            line-height: 70px;
          }
       

        `}
      </style>
    </>
  )
}

export default Navbar