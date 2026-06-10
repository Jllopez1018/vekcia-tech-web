import Image from "next/image";

export default function Servicios() {
const servicios = [
  {
    id: 1,
    numero: "01",
    type: "Desarrollo de Software",
    image: "/images/servicios/software.jpg",
    title: "Desarrollo de Software a la Medida",
    description:
      "Diseñamos y desarrollamos soluciones de software personalizadas que se adaptan a los procesos, objetivos y necesidades específicas de cada empresa. Creamos herramientas escalables que optimizan operaciones, automatizan tareas y mejoran la productividad.",

    bullets: [
      "Aplicaciones Web",
      "Sistemas Administrativos",
      "Automatización de Procesos",
      "Integración de Sistemas",
      "APIs y Servicios",
      "Desarrollo Empresarial",
    ],
  },

  {
    id: 2,
    numero: "02",
    type: "Presencia Digital",
    image: "/images/servicios/web.jpg",
    title: "Sitios Web y Presencia Digital",
    description:
      "Construimos sitios web profesionales, plataformas corporativas y tiendas en línea diseñadas para fortalecer tu marca, generar confianza y convertir visitantes en oportunidades de negocio.",

    bullets: [
      "Sitios Corporativos",
      "Landing Pages",
      "E-Commerce",
      "Hosting Profesional",
      "Correos Empresariales",
      "Diseño Responsive",
    ],
  },

  {
    id: 3,
    numero: "03",
    type: "Software Empresarial",
    image: "/images/servicios/empresarial.jpg",
    title: "Software Empresarial Listo para Implementar",
    description:
      "Implementamos plataformas empresariales probadas para la administración de clientes, inventarios, operaciones y procesos clave, reduciendo tiempos de implementación y acelerando resultados.",

    bullets: [
      "CRM",
      "Control de Inventarios",
      "Gestión de Clientes",
      "Seguimiento de Operaciones",
      "Administración Empresarial",
      "Reportes y Dashboards",
    ],
  },

  {
    id: 4,
    numero: "04",
    type: "Transformación Digital",
    image: "/images/servicios/consultoria.jpg",
    title: "Consultoría y Transformación Digital",
    description:
      "Ayudamos a las organizaciones a identificar oportunidades de mejora mediante tecnología, optimizando procesos y definiendo estrategias digitales alineadas a sus objetivos de negocio.",

    bullets: [
      "Transformación Digital",
      "Optimización de Procesos",
      "Consultoría Tecnológica",
      "Análisis de Requerimientos",
      "Arquitectura de Soluciones",
      "Estrategia Digital",
    ],
  },
];

  return (
    <section
      id="servicios"
      className="bg-white py-28"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="max-w-5xl mb-12">

          <span
            className="
              inline-flex
              items-center
              rounded-full
              px-5
              py-2.5
              text-sm
              font-semibold
              tracking-[0.2em]
              uppercase
              bg-blue-50
              border
              border-[var(--vekcia-bg)]
              mb-8
            "
          >
            Tecnología y Soluciones Digitales
          </span>

          <h2
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              font-bold
              text-slate-900
              leading-[1.05]
              mb-8
            "
          >
            Soluciones tecnológicas diseñadas para impulsar tu negocio.
          </h2>

          <p
            className="
              text-xl
              text-slate-600
              leading-9
              max-w-4xl
            "
          >
        Ayudamos a empresas a optimizar procesos, mejorar la productividad y acelerar su crecimiento mediante software a la medida, plataformas empresariales, sitios web y estrategias de transformación digital.            </p>

        </div>

        {/* Servicios */}
        <div className="space-y-28">

          {servicios.map((servicio, index) => (
            <div
              key={servicio.id}
              className="
                grid
                lg:grid-cols-[1.15fr_0.85fr]
                gap-16
                items-center
              "
            >

              {/* Imagen */}
              {/* Imagen */}
                <div
                className={`
                    ${index % 2 !== 0 ? "lg:order-2" : ""}
                `}
                >
                <div
                    className="
                    relative
                    h-[550px]
                    rounded-[36px]
                    overflow-hidden
                    shadow-xl
                    border
                    border-slate-200
                    group
                    "
                >

                    <Image
                    src={servicio.image}
                    alt={servicio.title}
                    fill
                    className="
                        object-cover
                        transition-transform
                        duration-700
                        group-hover:scale-105
                    "
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    />

                    {/* Overlay suave */}
                    <div
                    className="
                        absolute
                        inset-0
                        bg-gradient-to-t
                        from-slate-900/20
                        via-transparent
                        to-transparent
                    "
                    />

                   

                </div>
                </div>

              {/* Contenido */}
              <div
                className={`
                  ${index % 2 !== 0 ? "lg:order-1" : ""}
                `}
              >
              <span
                className="
                  inline-block
                  text-xs
                  font-bold
                  tracking-[0.2em]
                  uppercase
                  text-[var(--vekcia-bg)]
                  mb-4
                "
              >
                {servicio.type}
              </span>

                <h3
                  className="
                    text-4xl
                    lg:text-5xl
                    font-bold
                    text-slate-900
                    mt-4
                    mb-6
                    leading-tight
                  "
                >
                  {servicio.title}
                </h3>

<div
  className="
    w-24
    h-1
    bg-[var(--vekcia-bg)]
    rounded-full
    my-6
  "
/>

                <p
                  className="
                    text-xl
                    text-slate-600
                    leading-9
                    mb-10
                  "
                >
                  {servicio.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-10">

                  {servicio.bullets.map((item) => (
                    <span
                      key={item}
                      className="
                        px-4
                        py-2
                        rounded-full
                        border
                        border-slate-200
                        bg-slate-50
                        text-slate-700
                        text-sm
                        font-medium
                      "
                    >
                      {item}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}