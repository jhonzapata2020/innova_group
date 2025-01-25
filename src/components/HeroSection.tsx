"use client"

import Link from "next/link"
import Image from "next/image"

const HeroSection = () => {
  return (
    <div className="bg-gray-100 py-24"> {/* Más padding vertical para dar espacio */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16"> {/* Margen inferior para separar del contenido principal */}
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block">Bienvenido a</span> {/* "Welcome to" en español */}
            <span className="block text-green-500">INNOVA GROUP</span>
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Un holding de empresas innovadoras que impulsan el crecimiento a través de soluciones de software,
            tecnología CNC avanzada y productos de ferrowood.
          </p> {/* Descripción en español */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Grid de 3 columnas en pantallas medianas y grandes */}
          {/* Empresa 1: Software Solutions */}
          <Link href="/software" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
            <Image 
              src="/software-icon.svg" 
              alt="Software Solutions" 
              width={64} 
              height={64} 
              className="mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Software Solutions</h2>
            <p className="text-gray-600 text-sm text-center">Desarrollo de software a medida para optimizar tu negocio.</p>
          </Link>

          {/* Empresa 2: Smart Router CNC */}
          <Link href="/router-cnc" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
            <Image 
              src="/cnc-icon.svg" 
              alt="Smart Router CNC" 
              width={64} 
              height={64} 
              className="mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Smart Router CNC</h2>
            <p className="text-gray-600 text-sm text-center">Tecnología CNC de vanguardia para la industria de la madera y más.</p>
          </Link>

          {/* Empresa 3: Ferrowood Solutions */}
          <Link href="/ferrowood" className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300 flex flex-col items-center">
            <Image 
              src="/ferrowood-icon.svg" 
              alt="Ferrowood Solutions" 
              width={64} 
              height={64} 
              className="mb-4"
            />
            <h2 className="text-xl font-semibold text-gray-800 mb-2">Ferrowood Solutions</h2>
            <p className="text-gray-600 text-sm text-center">Productos innovadores de ferrowood para la construcción y el diseño.</p>
          </Link>

          {/* Empresa 4: Innova Group */}
          <Link href="/" className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
            <div className="flex flex-col items-center">
              <div style={{ width: '120px', height: '40px', position: 'relative' }}>
                <Image 
                  src="/innovagroup.jpg" 
                  alt="Innova Group" 
                  fill
                  style={{
                    objectFit: 'contain',
                    width: '100%',
                    height: '100%'
                  }}
                  priority
                />
              </div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Innova Group</h2>
              <p className="text-gray-600 text-sm text-center">La empresa que impulsó el crecimiento.</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default HeroSection