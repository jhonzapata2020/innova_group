import React from "react";

const applicationList = [ // Datos de ejemplo para la galería de aplicaciones
    {
        imageUrl: "/images/cnc-woodworking.jpg", // Reemplaza con tus imágenes reales en /public/images/
        title: "Woodworking Preciso",
        description: "Corte y grabado detallado en madera para muebles, molduras, instrumentos y más."
    },
    {
        imageUrl: "/images/cnc-metal-fabrication.jpg",
        title: "Fabricación de Metal",
        description: "Corte y grabado de metales no ferrosos como aluminio, latón y plásticos de ingeniería."
    },
    {
        imageUrl: "/images/cnc-plastic-cutting.jpg",
        title: "Corte de Plásticos Técnicos",
        description: "Creación de prototipos y piezas finales en acrílico, policarbonato, PVC y otros plásticos."
    },
    {
        imageUrl: "/images/cnc-sign-making.jpg",
        title: "Rotulación y Señalización",
        description: "Producción de letreros, logotipos y señalización personalizada en diversos materiales."
    },
    // ... Agrega más aplicaciones aquí ...
];


export default function RouterCNCPage() {
  return (
    <div className="bg-gray-50 py-16"> {/* Fondo gris muy claro */}
      <div className="container mx-auto px-6 md:px-12"> {/* Padding horizontal aumentado en pantallas mayores */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Tecnología Smart Router CNC</h1> {/* Título más descriptivo y tecnológico */}
        <p className="mb-10 text-lg text-gray-700 text-center leading-relaxed">
          Soluciones CNC de vanguardia para corte y ruteado de alta precisión. Nuestra tecnología Smart Router CNC ofrece un rendimiento superior para una amplia gama de aplicaciones industriales y artesanales.
        </p>

        {/* "Galería" de Aplicaciones CNC */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Grid de 4 columnas en pantallas grandes para aplicaciones */}
            {applicationList.map((app, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <img src={app.imageUrl} alt={app.title} className="w-full h-48 object-cover" /> {/* Altura fija para imágenes de aplicaciones */}
                    <div className="p-5"> {/* Padding reducido para la descripción en aplicaciones */}
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">{app.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{app.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Secciones "Features" y "Applications" (Ahora "Características Clave" y "Sectores") */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Mayor separación y grid de 2 columnas */}
            <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Características Clave</h2> {/* Título más enfocado en características */}
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg"> {/* Texto más grande y claro */}
                    <li>Corte de alta precisión y repetibilidad</li>
                    <li>Software de control avanzado e intuitivo</li>
                    <li>Control multi-ejes para formas complejas</li>
                    <li>Sistema de cambio automático de herramientas</li>
                    <li>Integración con sistemas CAD/CAM líderes</li> {/* Añadido feature adicional */}
                </ul>
            </div>

            <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Sectores de Aplicación</h2> {/* Título más general */}
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                    <li>Industria del mueble y carpintería fina</li>
                    <li>Fabricación de prototipos y modelismo</li>
                    <li>Industria de la señalización y rotulación</li>
                    <li>Sector de plásticos y materiales compuestos</li>
                    <li>Aeronáutica y automoción (componentes no metálicos)</li> {/* Añadido sector adicional */}
                </ul>
            </div>
        </div>
      </div>
    </div>
  );
}