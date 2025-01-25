import React from "react";
import Link from "next/link"; // Import Link para los enlaces "Más Información"

const mainServices = [
    {
        title: "Automatización Empresarial",
        description: "Reducimos errores, ahorramos tiempo y mejoramos la eficiencia de tu negocio.",
        link: "/servicios/automatizacion" // Reemplaza con la ruta real
    },
    {
        title: "Servicios Legales y de Registro",
        description: "Facilitamos el proceso de registro de empresas y redacción de estatutos basados en las leyes colombianas vigentes.",
        link: "/servicios/legales-registro" // Reemplaza con la ruta real
    },
    {
        title: "Diseño y Branding",
        description: "Creamos identidades visuales personalizadas que destacan tu marca.",
        link: "/servicios/diseno-branding" // Reemplaza con la ruta real
    },
    {
        title: "Desarrollo Web y Software",
        description: "Desarrollamos sitios web modernos y aplicaciones a medida para tu negocio.",
        link: "/servicios/desarrollo-web-software" // Reemplaza con la ruta real
    },
];

const additionalServices = [ // Servicios adicionales basados en tu perfil (Opcional - puedes editar o quitar)
    {
        title: "Automatización con Agentes de IA",
        description: "Implementamos agentes de IA para automatizar tareas complejas y flujos de trabajo inteligentes.",
        link: "/servicios/automatizacion-ia"
    },
    {
        title: "Desarrollo de Aplicaciones Web con React",
        description: "Creamos aplicaciones web de alto rendimiento y escalables utilizando React y Next.js.",
        link: "/servicios/desarrollo-react"
    },
    {
        title: "Integraciones de Software y APIs",
        description: "Conectamos diferentes sistemas y plataformas a través de APIs para un flujo de datos eficiente.",
        link: "/servicios/integraciones-apis"
    },
];


export default function SoftwarePage() {
    return (
        <div className="bg-gray-50 py-16"> {/* Fondo gris muy claro */}
            <div className="container mx-auto px-6 md:px-12"> {/* Padding horizontal aumentado en pantallas grandes */}
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 mb-6">I A Software Solutions</h1> {/* Título más prominente */}
                    <p className="text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-8">
                        <span className="font-semibold text-green-500">Impulsamos tu negocio</span> con soluciones integrales que abarcan desde servicios legales y branding impactante hasta automatización inteligente y desarrollo de software de vanguardia.
                    </p>
                    <p className="text-gray-600">Soluciones avanzadas de software y consultoría empresarial enfocadas en innovación y eficiencia.</p>
                </div>


                {/* Sección Servicios Principales */}
                <section className="mb-20">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Nuestros Servicios Principales</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {mainServices.map((service, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between"> {/* Tarjeta con hover y flex para alinear botón abajo */}
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                                </div>
                                <div className="mt-6 text-right"> {/* Mover botón "Más Información" a la derecha y abajo */}
                                    <Link href={service.link} className="inline-block bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300">
                                        Más Información
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>


                {/* Sección Servicios Adicionales (Opcional) */}
                {additionalServices.length > 0 && ( // Renderizar solo si hay servicios adicionales
                    <section className="mb-20">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-8 text-center">Servicios Especializados </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {additionalServices.map((service, index) => (
                                <div key={index} className="bg-white rounded-lg shadow-sm p-5 hover:shadow-md transition-shadow duration-300">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-3">{service.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
                                    <div className="mt-4 text-right">
                                        <Link href={service.link} className="text-green-500 hover:text-green-700 font-semibold transition duration-300">
                                            Más Información
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

            </div>
        </div>
    );
}