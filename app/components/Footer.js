import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-[#5B20B6] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between">
          {/* About Section */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">
              We are a music artist's e-commerce store, offering exclusive
              merchandise, albums, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1">
              <li>
                <Link href="/" className="hover:text-gray-300">
                  Shop
                </Link>
              </li>
              <li>
                <a
                  href="https://april-music-app-blog-vxmk-i1xg381ws-monwell57s-projects.vercel.app/"
                  className="hover:text-gray-300"
                >
                  Home
                </a>
              </li>

              <li>
                <Link href="/faq" className="hover:text-gray-300">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full sm:w-1/2 md:w-1/4 mb-6 sm:mb-0">
            <h3 className="text-lg font-semibold mb-2">Contact Info</h3>
            <p className="text-sm">Email: support@example.com</p>
            <p className="text-sm">Phone: +1 234 567 890</p>
            <p className="text-sm">Address: 123 Music Lane, New York, NY</p>
          </div>

          {/* Subscribe */}
        </div>

        {/* Social Media */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <div className="flex justify-center space-x-4">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaTwitter />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-gray-300"
            >
              <FaLinkedin />
            </a>
          </div>
          <p className="mt-4 text-sm">
            © 2024 Your Music Artist Store. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
