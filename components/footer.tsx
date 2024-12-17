import Link from 'next/link'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiMail } from "react-icons/ci";

export function Footer() {
  return (
    <footer className="mt-auto py-8 text-center bg-gray-50 border-t">
      <div className="flex flex-col items-center space-y-4 opacity-100">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/image.png" alt="Mammothzy" className="w-[250px] h-[96px]" />
        </Link>
        <p className="text-sm text-gray-600 font-inter text-center">
          Marketplace for searching, filtering, and instantly booking team activities
        </p>
        
        <div className="flex space-x-4 justify-center opacity-100">
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <FaFacebook className="w-6 h-6 text-[#382D51] " />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <FaInstagram className="w-6 h-6 text-[#382D51]" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <FaLinkedin className="w-6 h-6 text-[#382D51]" />
          </Link>
          <Link href="#" className="text-gray-400 hover:text-gray-600">
            <CiMail className="w-6 h-6 text-[#382D51]" />
          </Link>
        </div>

        <div className="w-[1216px] border-t-[1px] border-solid border-[#E9E9EB] opacity-100"></div>

        <p className="text-sm text-gray-600 font-inter opacity-100">
          Copyright © 2024
        </p>
      </div>
    </footer>
  )
}
