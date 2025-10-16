/* eslint-disable react/no-unescaped-entities */
import { FaArrowRight, FaGift, FaClock } from 'react-icons/fa'

const Offer = () => {
  return (
    <section className="relative bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 w-full py-20 mt-16 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      
      <div className="max_padd_container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-white">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <FaGift className="text-white" />
              Ưu đãi đặc biệt
            </div>
            
            <h2 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
              Giảm giá <span className="text-yellow-300">50%</span>
            </h2>
            
            <h3 className="text-2xl md:text-3xl font-semibold mb-6 text-white/90">
              Giày da nam cao cấp
            </h3>
            
            <p className="text-white/80 text-lg mb-8 leading-relaxed">
              Cơ hội sở hữu những đôi giày da nam chất lượng cao với mức giá không thể bỏ qua. 
              Số lượng có hạn, đặt hàng ngay!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-white text-orange-600 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flexCenter gap-2">
                Mua ngay
                <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
              </button>
              
              <div className="flex items-center gap-2 text-white/80">
                <FaClock className="text-white/60" />
                <span className="text-sm">Còn lại: 2 ngày 15 giờ</span>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
              <div className="bg-white rounded-2xl p-6 shadow-2xl">
                <div className="text-center">
                  <div className="text-6xl font-bold text-orange-600 mb-2">50%</div>
                  <div className="text-gray-600 font-semibold">GIẢM GIÁ</div>
                  <div className="text-sm text-gray-500 mt-2">Áp dụng cho tất cả sản phẩm giày da nam</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Offer