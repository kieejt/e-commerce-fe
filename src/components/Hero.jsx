import React from 'react'
import { MdOutlineLocalOffer, MdShoppingCart, MdTrendingUp } from 'react-icons/md'
import { FaStar, FaArrowRight } from 'react-icons/fa'
import { NavLink } from "react-router-dom"

const Hero = () => {
    const scrollToSection = () => {
        const section = document.getElementById("popular-section");
        const offsetTop = section.offsetTop;
    
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      };
  return (
    <section className='relative bg-gradient-to-br from-blue-50 via-white to-orange-50 h-screen w-full overflow-hidden'>
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f3f4f6%22%20fill-opacity%3D%220.3%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>
        
        <div className='max_padd_container relative top-32 xs:top-52 z-10'>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-orange-200 mb-6 shadow-sm">
                <MdTrendingUp className="text-orange-500" />
                <span className="text-sm font-medium text-gray-700">Xu hướng mua sắm 2024</span>
            </div>
            
            <h1 className='h1 capitalize max-w-[45rem] bg-gradient-to-r from-gray-900 via-gray-800 to-orange-600 bg-clip-text text-transparent leading-tight'>
                Trung tâm mua sắm số hiện đại
            </h1>
            <p className='text-gray-600 regular-16 mt-8 max-w-[40rem] leading-relaxed'>
                Khám phá thế giới mua sắm trực tuyến với hàng ngàn sản phẩm chất lượng cao. 
                Từ thời trang, điện tử đến đồ gia dụng - tất cả đều có tại đây với giá cả cạnh tranh nhất.
            </p>
            
            {/* Stats */}
            <div className='flexStart items-center gap-x-8 my-10'>
                <div className='flexCenter gap-x-2'>
                    <div className='flexCenter gap-x-1'>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                        <FaStar className="text-yellow-400"/>
                    </div>
                    <div className='bold-16 text-gray-800'>4.9/5</div>
                </div>
                <div className='bold-16 text-gray-800'>176k+ <span className='regular-16 text-gray-600'>Đánh giá xuất sắc</span></div>
                <div className='bold-16 text-gray-800'>50k+ <span className='regular-16 text-gray-600'>Sản phẩm</span></div>
            </div>
            
            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4'>
                <NavLink to={''} className={"group bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full flexCenter gap-2 font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"} onClick={scrollToSection}>
                    <MdShoppingCart className="text-xl" />
                    Mua sắm ngay
                    <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </NavLink>
                <NavLink to={''} className={"group bg-white/80 backdrop-blur-sm border-2 border-orange-200 hover:border-orange-300 text-gray-800 hover:text-orange-600 px-8 py-4 rounded-full flexCenter gap-2 font-semibold transition-all duration-300 shadow-sm hover:shadow-md"}>
                    <MdOutlineLocalOffer className='text-xl'/>
                    Ưu đãi đặc biệt
                </NavLink>
            </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-20 h-20 bg-orange-200/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-32 h-32 bg-blue-200/30 rounded-full blur-xl animate-pulse delay-1000"></div>
    </section>
  )
}

export default Hero