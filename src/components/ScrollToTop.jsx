import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Chỉ scroll lên đầu trang khi chuyển sang trang mới
    // Không scroll khi ở cùng trang (ví dụ: chỉ thay đổi query params)
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
