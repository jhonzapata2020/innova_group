"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="bg-white shadow-md sticky top-0 z-10">
      <div className="max-w-[calc(100% + 2rem)] mx-auto px-2">
        <div className="flex justify-between h-16 items-center">
          {/* Contenedor del Logo */}
          <div className="ml-2 sm:ml-4"> {/* Ajustado el margen izquierdo */}
            <Link href="/" className="flex items-center">
              <div className="w-48 h-14 relative">
                <Image
                  src="/innovagroup.jpg"
                  alt="INNOVALogo"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`py-2 px-3 text-gray-700 font-medium rounded-md transition duration-300 ${
                pathname === "/" ? "bg-green-500 text-white" : "hover:bg-gray-100 hover:text-green-500"
              }`}
            >
              Home
            </Link>
            <Link
              href="/software"
              className={`py-2 px-3 text-gray-700 font-medium rounded-md transition duration-300 ${
                pathname === "/software" ? "bg-green-500 text-white" : "hover:bg-gray-100 hover:text-green-500"
              }`}
            >
              Software Solutions
            </Link>
            <Link
              href="/router-cnc"
              className={`py-2 px-3 text-gray-700 font-medium rounded-md transition duration-300 ${
                pathname === "/router-cnc" ? "bg-green-500 text-white" : "hover:bg-gray-100 hover:text-green-500"
              }`}
            >
              Smart Router CNC
            </Link>
            <Link
              href="/ferrowood"
              className={`py-2 px-3 text-gray-700 font-medium rounded-md transition duration-300 ${
                pathname === "/ferrowood" ? "bg-green-500 text-white" : "hover:bg-gray-100 hover:text-green-500"
              }`}
            >
              Ferrowood Solutions
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;