import React from 'react'
import "../css/Manu.css"
import { FaShoppingCart } from "react-icons/fa";

const Manu = () => {
  return (
    <div className='Manu'>

    <div className='Container1'>
      

        <div className='item'>
          <div className='img1'></div>
          <div className='name'>
            <h3 className='h3'>Chees Pizza</h3>
            <h3> Rs :1999/-</h3>
          </div>
          <div className='cart'>
            <button className='cartbtn'><FaShoppingCart /></button>
          </div>
        </div>

        <div className='item'>
          <div className='img2'></div>
          <div className='name'>
            <h3 className='h3'>Chicken kabab</h3>
            <h3> Rs :2999/-</h3>
          </div>
          <div className='cart'>
            <button className='cartbtn'><FaShoppingCart /></button>
          </div>
        </div>

        <div className='item'>
          <div className='img3'></div>
          <div className='name'>
            <h3 className='h3'>Fish Biryani</h3>
            <h3> Rs :1500/-</h3>
          </div>
          <div className='cart'>
            <button className='cartbtn'><FaShoppingCart /></button>
          </div>
        </div>

        <div className='item'>
          <div className='img4'></div>
          <div className='name'>
            <h3 className='h3'>French pastries</h3>
            <h3> Rs :1000/-</h3>
          </div>
          <div className='cart'>
            <button className='cartbtn'><FaShoppingCart /></button>
          </div>
        </div>

        <div className='item'>
          <div className='img5'></div>
          <div className='name'>
            <h3 className='h3'>Fries and Burger</h3>
            <h3> Rs :1200/-</h3>
          </div>
          <div className='cart'>
            <button className='cartbtn'><FaShoppingCart /></button>
          </div>
        </div>

        <div className='item'>
          <div className='img6'></div>
          <div className='name'>
            <h3 className='h3'>Vanila Chocolet</h3>
            <h3> Rs :1999/-</h3>
          </div>
          <div className='cart'>
            <button className='cartbtn'><FaShoppingCart /></button>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Manu