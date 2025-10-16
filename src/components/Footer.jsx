import { Link } from "react-router-dom";
import FOOTER_LINKS from "../assets/footer_links";
import FOOTER_CONTACT_INFO from "../assets/footer_contact";
import SOCIALS from "../assets/socials";
const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      <div className="max_padd_container py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 to-orange-600 rounded-lg flexCenter">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-orange-400 to-orange-500 bg-clip-text text-transparent">
                ShopHub
              </span>
            </Link>
            <p className="text-gray-300 leading-relaxed mb-6">
              Trung tâm mua sắm trực tuyến hàng đầu với hàng ngàn sản phẩm chất lượng cao và giá cả cạnh tranh.
            </p>
            <div className="flex gap-4">
              {SOCIALS.links.map((link) => (
                <Link to="/" key={link} className="w-10 h-10 bg-gray-700 hover:bg-orange-500 rounded-full flexCenter transition-all duration-300 hover:scale-110">
                  <img src={link} alt="socialIcon" height={20} width={20}></img>
                </Link>
              ))}
            </div>
          </div>
          
          {/* Links Sections */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-3">
            {FOOTER_LINKS.map((col) => (
              <FooterColumn title={col.title} key={col.title}>
                <ul className="flex flex-col gap-3">
                  {col.links.map((link) => (
                    <Link to="/" key={link} className="text-gray-300 hover:text-orange-400 transition-colors duration-300 text-sm">
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            
            {/* Contact Info */}
            <FooterColumn title={FOOTER_CONTACT_INFO.title}>
              <div className="flex flex-col gap-3">
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <div key={link.label} className="flex flex-col sm:flex-row gap-1">
                    <span className="text-gray-400 text-sm">{link.label}:</span>
                    <span className="text-gray-300 text-sm font-medium">{link.value}</span>
                  </div>
                ))}
              </div>
            </FooterColumn>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 ShopHub. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Chính sách bảo mật
              </Link>
              <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Điều khoản sử dụng
              </Link>
              <Link to="/" className="text-gray-400 hover:text-orange-400 transition-colors duration-300">
                Liên hệ
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterColumn = ({ title, children }) => {
  return (
    <div className="flex flex-col gap-4">
      <h4 className="text-lg font-semibold text-white mb-2">{title}</h4>
      <div>{children}</div>
    </div>
  );
};

export default Footer;
