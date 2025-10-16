/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { FaSearch, FaHeart, FaShoppingCart } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'

const Item = ({id,name,image,old_price,new_price}) => {
  const { addToCart } = useContext(ShopContext);
  const discountPercentage = Math.round(((old_price - new_price) / old_price) * 100);
  
  const handleAddToCart = (event) => {
    event.preventDefault();
    event.stopPropagation();
    addToCart(id);
    // Có thể thêm toast notification ở đây nếu muốn
    console.log(`Đã thêm ${name} vào giỏ hàng`);
  };
  
  return (
    <div className='group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-orange-200'>
     <div className='relative overflow-hidden bg-gray-50'>
        {/* Discount Badge */}
        {discountPercentage > 0 && (
          <div className='absolute top-3 left-3 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-sm'>
            -{discountPercentage}%
          </div>
        )}
        
        {/* Action Buttons */}
        <div className='absolute top-3 right-3 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300'>
          <button className='h-8 w-8 bg-white/90 backdrop-blur-sm rounded-full flexCenter hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm'>
            <FaHeart className='text-sm' />
          </button>
          <button 
            onClick={handleAddToCart}
            className='h-8 w-8 bg-white/90 backdrop-blur-sm rounded-full flexCenter hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-sm'
          >
            <FaShoppingCart className='text-sm' />
          </button>
        </div>
        
        {/* Product Image */}
        <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
          <div className='relative h-64 overflow-hidden'>
            <img 
              src={image} 
              alt={name} 
              className='w-full h-full object-cover group-hover:scale-110 transition-all duration-500' 
            />
            {/* Quick View Overlay */}
            <div className='absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-300 flexCenter'>
              <div className='bg-white/90 backdrop-blur-sm rounded-full p-3 hover:bg-orange-500 hover:text-white transition-all duration-300'>
                <FaSearch className='text-lg' />
              </div>
            </div>
          </div>
        </Link>
     </div>
     
     <div className='p-5'>
        <Link to={`/product/${id}`} onClick={() => window.scrollTo(0, 0)}>
          <h4 className='font-semibold text-gray-800 hover:text-orange-600 transition-colors duration-300 line-clamp-2 mb-3 leading-tight'>
            {name}
          </h4>
        </Link>
        
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            {old_price > new_price && (
              <span className='text-sm text-gray-400 line-through'>
                ${old_price}
              </span>
            )}
            <span className='text-xl font-bold text-orange-600'>
              ${new_price}
            </span>
          </div>
          
          {/* Rating */}
          <div className='flex items-center gap-1'>
            <div className='flex text-yellow-400 text-sm'>
              ★★★★☆
            </div>
            <span className='text-xs text-gray-500'>(4.2)</span>
          </div>
        </div>
        
        {/* Add to Cart Button */}
        <button 
          onClick={handleAddToCart}
          className='w-full mt-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white py-2.5 rounded-xl font-semibold transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-0.5'
        >
          Thêm vào giỏ
        </button>
     </div>
    </div>
  )
}

export default Item