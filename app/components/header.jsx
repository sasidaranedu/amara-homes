"use client";
import Image from "next/image";
import { useState } from "react";
import clsx from "clsx"; // Optional, for cleaner class logic

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header>
      <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-14 py-10">
        <div>
          <Image
            src="/images/logo/amara-homes-logo.svg"
            width={215}
            height={50}
            alt="Amara Homes Logo"
          />
        </div>

        <div
          className="w-14 h-14 cursor-pointer"
          onClick={() => setIsOpen(true)}
        >
          <svg width="30" height="24" viewBox="0 0 30 24" fill="none">
            <rect y="4" width="30" height="2" fill="#f05b27" />
            <rect y="16" width="30" height="2" fill="#f05b27" />
          </svg>
        </div>
      </div>

      {/* Menu Overlay */}
      <div
        className={clsx(
          "fixed inset-0 z-[999] bg-black bg-opacity-95 flex flex-col items-center text-white overflow-hidden transition-all duration-500",
          isOpen
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        )}
      >
        <div className="absolute top-0 left-0 w-full z-50 flex items-center justify-between px-14 py-10">
          <div>
            <Image
              src="/images/logo/amara-homes-logo.svg"
              width={215}
              height={50}
              alt="Amara Homes Logo"
            />
          </div>

          <div
            className="w-14 h-14 cursor-pointer"
            onClick={() => setIsOpen(false)}
          >
            <svg width="30" height="26" viewBox="0 0 30 24" fill="none">
              <line
                x1="5"
                y1="5"
                x2="25"
                y2="19"
                stroke="#f05b27"
                strokeWidth="2"
              />
              <line
                x1="5"
                y1="19"
                x2="25"
                y2="5"
                stroke="#f05b27"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        {/* Menu Content */}
        <nav className="mt-40 flex flex-col items-start space-y-6 text-6xl font-semibold w-3xl">
          <a href="#" className="hover:text-[#f05b27]">
            Home
          </a>
          <a href="#" className="hover:text-[#f05b27]">
            About
          </a>
          <a href="#" className="hover:text-[#f05b27]">
            Projects
          </a>
          <a href="#" className="hover:text-[#f05b27]">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
