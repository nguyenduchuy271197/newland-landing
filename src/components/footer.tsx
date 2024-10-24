import React from "react";
import { Facebook, Instagram } from "lucide-react";
import Container from "./container";

const Footer: React.FC = () => {
  const menuItems = [
    "Giới thiệu",
    "Thành phần nổi bật",
    "Vấn đề và giải pháp",
    "Các dòng sản phẩm",
    "Chứng nhận",
    "Video từ người dùng",
    "Hướng dẫn mua hàng",
    "Cam kết từ Newland",
  ];

  return (
    <footer className="bg-white pt-16">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-center md:items-start">
            <img
              src="/api/placeholder/200/100"
              alt="New Land All Nature"
              className="h-24 mb-4"
            />
            <p className="text-gray-700 font-medium text-center md:text-left">
              Mỹ phẩm Hàn Quốc thuần tự nhiên
            </p>
          </div>

          {/* Menu */}
          <div>
            <h5 className="text-neutral-400 font-semibold mb-4">Danh mục</h5>
            <nav>
              <ul className="space-y-2">
                {menuItems.map((item, index) => (
                  <li key={index}>
                    <a href="#" className="text-neutral-300">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Company Info */}
          <div>
            <h5 className="text-neutral-400 font-semibold mb-4">
              CÔNG TY TNHH NEWLAND ALOE VINA
            </h5>
            <div className="space-y-2 text-neutral-300">
              <p>Người đại diện: LEE SEE YOUNG</p>
              <p>
                Địa chỉ: Số 15 Nguyễn Lương Bằng, Phường Tân Phú, Quận 7, Thành
                phố Hồ Chí Minh
              </p>
              <p>Điện thoại: KR: +84 -3-5339-7050; VN: 0366029004</p>
              <p>Email: lsy791017@hanmail.net</p>
              <p>MSDN: 0314796255, cấp ngày 19/12/2017 tại TP Hồ Chí Minh</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-4 border-t border-neutral-50 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Copyright */}
          <p className="text-neutral-400 text-sm">
            Copyright © Newland All Nature. Powered by LIKELION Vietnam
          </p>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <Facebook className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-3-3h6v-2H9v2zm0-4h6v-2H9v2zm0-4h6V7H9v2z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <Instagram className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="p-2 text-gray-500 hover:text-gray-700 transition-colors duration-200"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M16.6 5.82s.51.5 0 0A4.278 4.278 0 0 1 15.54 3h-3.09v12.4a2.592 2.592 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64c0 3.33 2.76 5.7 5.69 5.7c3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3s-1.88.09-3.24-1.48z"
                />
              </svg>
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
