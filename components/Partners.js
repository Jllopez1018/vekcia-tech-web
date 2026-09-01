export default function Partners() {
  const aseguradoras = [
    {
      name: "HDI Seguros",
      image: "/images/aseguradoras/hdi.png",
    },
    {
      name: "ANA Seguros",
      image: "/images/aseguradoras/ana.png",
    },
    {
      name: "Seguros Atlas",
      image: "/images/aseguradoras/atlas.png",
    },
    {
      name: "AXA Seguros",
      image: "/images/aseguradoras/axa.png",
    },
    {
      name: "Chubb",
      image: "/images/aseguradoras/chubb.png",
    },
    {
      name: "GNP Seguros",
      image: "/images/aseguradoras/gnp.png",
    },    
    {
      name: "MAPFRE",
      image: "/images/aseguradoras/mapfre.png",
    },
    {
      name: "MAPS Seguros",
      image: "/images/aseguradoras/maps.png",
    },
    {
      name: "Primero Seguros",
      image: "/images/aseguradoras/primero.png",
    },
    {
      name: "Quálitas",
      image: "/images/aseguradoras/qualitas.png",
    },
  ];

  return (
    <section
      id="partners"
      className="bg-[var(--brand-background-secondary)] py-24 lg:py-32"
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
            Compañías que representamos
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
            El respaldo de grandes
            <br />
            compañías aseguradoras.
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
            Trabajamos con compañías aseguradoras reconocidas para ofrecer
            alternativas de protección que respondan a las necesidades de
            cada persona, familia, empresa y transportista.
          </p>

        </div>


        {/* Logos */}
        <div
          className="
            grid
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-5
            gap-5
            max-w-6xl
            mx-auto
            mt-16
          "
        >

          {aseguradoras.map((aseguradora) => (
            <div
              key={aseguradora.name}
              className="
                group
                flex
                items-center
                justify-center
                h-32
                px-6
                rounded-[var(--brand-radius-md)]
                border
                border-[var(--brand-border)]
                bg-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-lg
              "
            >
              <img
                src={aseguradora.image}
                alt={aseguradora.name}
                className="
                  max-w-full
                  max-h-20
                  w-auto
                  h-auto
                  object-contain
                  transition-transform
                  duration-300
                  group-hover:scale-105
                "
              />
            </div>
          ))}

        </div>


        {/* Cierre */}
        <div
          className="
            max-w-4xl
            mx-auto
            mt-14
            text-center
          "
        >
          <p
            className="
              text-base
              md:text-lg
              font-semibold
              text-[var(--brand-primary)]
            "
          >
            Más opciones de protección para encontrar la solución adecuada
            para cada necesidad.
          </p>
        </div>

      </div>
    </section>
  );
}