export default function Seguros() {
  const seguros = [
    {
      id: "seguro-personas",
      number: "01",
      category: "Personas",
      title: "Seguro de Vida y Colectivos",
      text: "Protección económica para las personas y sus familias ante situaciones que puedan afectar su estabilidad. También contamos con soluciones colectivas diseñadas para proteger a grupos y organizaciones.",
      image: "/images/seguros/seguro-vida.jpg",
      alt: "Familia disfrutando de un momento tranquilo y protegido",
    },
    {
      id: "seguro-familias",
      number: "02",
      category: "Familias",
      title: "Seguro de GMM y Colectivo",
      text: "Soluciones para proteger la salud y el patrimonio de nuestros clientes frente a gastos médicos. Contamos con alternativas individuales y colectivas de acuerdo con las necesidades de cada familia o grupo.",
      image: "/images/seguros/seguro-gmm.jpg",
      alt: "Familia protegida en un ambiente de bienestar",
    },
    {
      id: "seguro-flotillas",
      number: "03",
      category: "Flotillas",
      title: "Flotillas, Autos y Equipo Pesado",
      text: "Protección para vehículos particulares, flotillas y unidades de equipo pesado. Diseñamos programas de aseguramiento de acuerdo con las características y operación de cada cliente.",
      image: "/images/seguros/flotillas.jpg",
      alt: "Flotilla de vehículos comerciales",
    },
    {
      id: "seguro-empresarial",
      number: "04",
      category: "Empresas",
      title: "Seguro Empresarial",
      text: "Protección integral para empresas y negocios, considerando sus bienes, operaciones y principales riesgos. Construimos soluciones que responden a las necesidades específicas de cada organización.",
      image: "/images/seguros/empresarial.jpg",
      alt: "Empresa y profesionales en un entorno corporativo",
    },
    {
      id: "seguro-responsabilidad",
      number: "05",
      category: "Responsabilidad",
      title: "Seguro de Responsabilidad Civil",
      text: "Protección ante reclamaciones por daños que puedan ocasionarse a terceros como consecuencia de las actividades, operaciones o responsabilidades del asegurado.",
      image: "/images/seguros/responsabilidad-civil.jpg",
      alt: "Atención profesional después de un accidente",
    },
    {
      id: "seguro-transporte",
      number: "06",
      category: "Transporte",
      title: "Seguro de Transporte de Mercancías",
      text: "Protección para mercancías durante su traslado, ayudando a reducir el impacto económico de los riesgos que pueden presentarse durante el transporte.",
      image: "/images/seguros/transporte.jpg",
      alt: "Camión de transporte de mercancías",
    },
  ];

  return (
    <section
      id="seguros"
      className="bg-white py-24 lg:py-32"
      data-aos="fade-up"
    >
      <div className="site-container">

        {/* Encabezado */}
        <div className="max-w-4xl mx-auto text-center">

          <span
            className="
              inline-block
              mb-6
              text-sm
              font-bold
              uppercase
              tracking-[0.3em]
              text-[var(--brand-secondary)]
            "
          >
            Nuestros seguros
          </span>

          <h2
            className="
              text-4xl
              md:text-5xl
              lg:text-6xl
              font-black
              tracking-tight
              leading-[1.05]
              text-[var(--brand-primary)]
            "
          >
            Protección para cada
            <br />
            necesidad.
          </h2>

          <div
            className="
              w-20
              h-1
              mx-auto
              mt-8
              rounded-full
              bg-[var(--brand-secondary)]
            "
          />

          <p
            className="
              max-w-3xl
              mx-auto
              mt-8
              text-lg
              md:text-xl
              leading-relaxed
              text-[var(--brand-text-secondary)]
            "
          >
            Conoce nuestras principales soluciones de aseguramiento
            para personas, familias, empresas y transportistas.
          </p>

        </div>


        {/* Soluciones */}
        <div className="mt-20 lg:mt-28">

          {seguros.map((seguro, index) => {
            const imageLeft = index % 2 === 0;

            return (
              <article
                key={seguro.id}
                id={seguro.id}
                className="
                  grid
                  grid-cols-1
                  lg:grid-cols-2
                  gap-10
                  lg:gap-20
                  items-center
                  mb-24
                  lg:mb-32
                  last:mb-0
                  scroll-mt-28
                "
              >

                {/* Imagen */}
                <div
                  className={`
                    relative
                    ${imageLeft ? "lg:order-1" : "lg:order-2"}
                  `}
                >
                  <div
                    className="
                      overflow-hidden
                      rounded-[var(--brand-radius-lg)]
                      shadow-xl
                    "
                  >
                    <img
                      src={seguro.image}
                      alt={seguro.alt}
                      className="
                        w-full
                        h-[360px]
                        md:h-[440px]
                        lg:h-[500px]
                        object-cover
                        transition-transform
                        duration-700
                        hover:scale-[1.03]
                      "
                    />
                  </div>

                  {/* Número decorativo */}
                  <div
                    className={`
                      absolute
                      -bottom-5
                      ${imageLeft ? "-right-5" : "-left-5"}
                      flex
                      items-center
                      justify-center
                      w-20
                      h-20
                      rounded-2xl
                      bg-[var(--brand-secondary)]
                      text-white
                      text-xl
                      font-black
                      shadow-lg
                    `}
                  >
                    {seguro.number}
                  </div>
                </div>


                {/* Contenido */}
                <div
                  className={`
                    max-w-xl
                    ${imageLeft ? "lg:order-2" : "lg:order-1"}
                  `}
                >

                  <span
                    className="
                      inline-block
                      mb-5
                      text-sm
                      font-bold
                      uppercase
                      tracking-[0.3em]
                      text-[var(--brand-secondary)]
                    "
                  >
                    {seguro.category}
                  </span>

                  <h3
                    className="
                      text-4xl
                      md:text-5xl
                      font-black
                      tracking-tight
                      leading-[1.05]
                      text-[var(--brand-primary)]
                    "
                  >
                    {seguro.title}
                  </h3>

                  <div
                    className="
                      w-20
                      h-1
                      mt-7
                      rounded-full
                      bg-[var(--brand-secondary)]
                    "
                  />

                  <p
                    className="
                      mt-8
                      text-lg
                      md:text-xl
                      leading-8
                      text-[var(--brand-text-secondary)]
                    "
                  >
                    {seguro.text}
                  </p>

                </div>

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}