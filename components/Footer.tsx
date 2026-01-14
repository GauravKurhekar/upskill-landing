"use client";

import { FaLinkedin, FaYoutube, FaInstagram, FaFacebook, FaWhatsapp, FaHeart } from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Course: [
      { name: "Course Content", href: "#course" },
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#cta" },
      { name: "FAQ", href: "#faq" },
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Instructor", href: "#instructor" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#" },
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Cookie Policy", href: "#" },
    ],
  };

  const socialLinks = [
    { Icon: FaInstagram, href: "https://www.instagram.com/upskillacademyofficial/", label: "Instagram" },
    { Icon: FaFacebook, href: "https://www.facebook.com/upskillacademytraining", label: "Facebook" },
    { Icon: FaWhatsapp, href: "https://wa.me/917020269389", label: "WhatsApp" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@upskillacademyofficial", label: "YouTube" },
    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/upskillacademyofficial/", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
              UpSkill Academy
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Empowering professionals with cutting-edge Azure Data Engineering
              skills. Transform your career with industry-leading training and
              certification.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-110"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-white font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} UpSkill Academy. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-2">
            Developed with <FaHeart className="text-red-500" /> by{" "}
            <a
              href="https://pixelsdigital.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-semibold transition-colors duration-200"
            >
              Pixels Digital Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
