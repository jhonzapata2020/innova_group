import React from "react";

const productList = [ // Datos de ejemplo para la galería de productos
    {
        imageUrl: "/images/ferrowood-mesa1.jpg", // Reemplaza con tus imágenes reales en /public/images/
        title: "Mesa de Comedor Industrial",
        description: "Mesa robusta con base de hierro forjado y tapa de madera maciza de roble. Ideal para espacios modernos y rústicos."
    },
    {
        imageUrl: "/images/ferrowood-silla1.jpg",
        title: "Silla de Bar Diseño Loft",
        description: "Silla alta de estilo industrial, perfecta para bares y cocinas. Asiento de madera de acacia y estructura metálica."
    },
    {
        imageUrl: "/images/ferrowood-estante1.jpg",
        title: "Estantería Modular Rústica",
        description: "Sistema de estanterías modulares de pared. Combina estantes de pino tratado con soportes de hierro negro."
    },
    {
        imageUrl: "/images/ferrowood-banco1.jpg",
        title: "Banco de Jardín Exterior",
        description: "Banco resistente para exteriores, con tablones de madera dura tropical y patas de hierro fundido."
    },
    // ... Agrega más productos aquí ...
];


export default function FerrowoodPage() {
  return (
    <div className="bg-gray-50 py-16"> {/* Fondo gris muy claro para resaltar la galería */}
      <div className="container mx-auto px-6 md:px-12"> {/* Más padding horizontal en pantallas más grandes */}
        <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Ferrowood Creations</h1> {/* Título más impactante */}
        <p className="mb-10 text-lg text-gray-700 text-center leading-relaxed">
          Descubre la fusión perfecta de calidez y resistencia. En Ferrowood Creations, diseñamos y creamos muebles y soluciones arquitectónicas que combinan la belleza natural de la madera con la solidez del hierro. Explora nuestra colección y encuentra la pieza ideal para tu espacio.
        </p>

        {/* Galería de Productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {productList.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                    <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-cover" /> {/* Imágenes más grandes */}
                    <div className="p-6">
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">{product.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                    </div>
                </div>
            ))}
        </div>

        {/* Secciones de "Nuestros Productos" y "Servicios" (Opcionales - Podrían eliminarse o modificarse según se necesite) */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-12"> {/* Mayor separación y grid de 2 columnas */}
            <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Líneas de Producto</h2> {/* Título cambiado */}
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg"> {/* Texto más grande y claro */}
                    <li>Mobiliario a medida y de diseño exclusivo</li>
                    <li>Elementos arquitectónicos en madera y metal</li>
                    <li>Compuestos avanzados de madera-hierro</li>
                    <li>Soluciones eco-sostenibles en carpintería</li>
                </ul>
            </div>

            <div>
                <h2 className="text-3xl font-semibold text-gray-800 mb-6">Servicios Especializados</h2> {/* Título cambiado */}
                <ul className="list-disc list-inside space-y-3 text-gray-700 text-lg">
                    <li>Procesamiento CNC de alta precisión en madera</li>
                    <li>Diseño personalizado y prototipado 3D</li>
                    <li>Tratamiento y acabado profesional de superficies</li>
                    <li>Consultoría en selección de materiales y técnicas</li>
                </ul>
            </div>
        </div>

        {/* Sección "¿Por qué elegir Ferrowood?" (Revisada y estilizada) */}
        <div className="mt-24">
            <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Nuestros Valores</h2> {/* Título cambiado */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10"> {/* Mayor espaciado entre las tarjetas */}
                <div className="bg-white p-8 rounded-lg shadow-lg border-b-4 border-brown-500 hover:shadow-xl transition-shadow duration-300"> {/* Tarjetas blancas con sombra y borde inferior */}
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Calidad Superior</h3>
                    <p className="text-gray-600 leading-relaxed">Seleccionamos rigurosamente cada material y aplicamos técnicas de vanguardia para asegurar la durabilidad y excelencia de nuestros productos.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-b-4 border-brown-500 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Innovación Constante</h3>
                    <p className="text-gray-600 leading-relaxed">Exploramos continuamente nuevas tecnologías y procesos para liderar el sector y ofrecer soluciones creativas y funcionales.</p>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg border-b-4 border-brown-500 hover:shadow-xl transition-shadow duration-300">
                    <h3 className="font-bold text-xl text-gray-800 mb-3">Compromiso Sostenible</h3>
                    <p className="text-gray-600 leading-relaxed">Priorizamos prácticas eco-amigables, desde el abastecimiento responsable hasta la optimización de procesos, para un futuro más verde.</p>
                </div>
            </div>
        </div>

      </div>
    </div>
  );
}