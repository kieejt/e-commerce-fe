// eslint-disable-next-line no-unused-vars
import React from 'react'
import { FaFire, FaArrowRight } from 'react-icons/fa'
import POPULAR from '../assets/popular'
import Item from './Item'

const Popular = () => {
  return (
    <section className='bg-gradient-to-br from-gray-50 via-white to-orange-50 py-20' id= "popular-section">
        <div className='max_padd_container'>
            {/* Section Header */}
            <div className='text-center mb-16'>
                <div className='inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold mb-4'>
                    <FaFire className='text-orange-500' />
                    Sản phẩm bán chạy
                </div>
                <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                    Sản phẩm <span className='bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent'>phổ biến</span>
                </h2>
                <p className='text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed'>
                    Khám phá những sản phẩm được yêu thích nhất với chất lượng cao và giá cả hợp lý
                </p>
            </div>
            
            {/* Products Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-12'>
                {POPULAR.map((item) => (
                    <Item key={item.id} id={item.id} image={item.image} name={item.name} new_price={item.new_price} old_price={item.old_price}/>
                ))}
            </div>
            
            {/* View More Button */}
            <div className='text-center'>
                <button className='group inline-flex items-center gap-2 bg-white border-2 border-orange-200 hover:border-orange-300 text-orange-600 hover:text-orange-700 px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-orange-50 shadow-sm hover:shadow-md'>
                    Xem tất cả sản phẩm
                    <FaArrowRight className='group-hover:translate-x-1 transition-transform duration-300' />
                </button>
            </div>
        </div>
    </section>
  )
}

export default Popular