"use client";

import './navbar.css';
import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsappSquare } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="custom-nav fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="text-xl font-bold text-white">Marcos.Dev</h1>

        <ul className="flex gap-25 text-gray-300 custom-nav-links">
          <li className="hover:text-white cursor-pointer transition">Início</li>
          <li className="hover:text-white cursor-pointer transition">Sobre</li>
          <li className="hover:text-white cursor-pointer transition">Recomendações</li>
          <li className="hover:text-white cursor-pointer transition">Contato</li>
        </ul>

        <div id="nav-contacts">
          <ul className="flex gap-6 text-gray-300">
            <li className="hover:text-white cursor-pointer transition">
              <a href="#linkedin">
                <FaLinkedin size={30}/>
              </a>
            </li>
            <li className="hover:text-white cursor-pointer transition">
              <a href="#discord">
                <IoLogoDiscord size={30}/>
              </a>
            </li>
            <li className="hover:text-white cursor-pointer transition">
              <a href="#whatsapp">
                <FaWhatsappSquare size={30}/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
}
