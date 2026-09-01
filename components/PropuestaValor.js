export default function PropuestaValor() {
  const propuestas = [
    {
      number: "01",
      title: "Asesoría especializada",
      text: "Analizamos las necesidades de cada prospecto para ofrecer la mejor estrategia de protección.",
    },
    {
      number: "02",
      title: "Soluciones personalizadas",
      text: "Diseñamos programas de seguros para personas, familias, empresas y transportistas.",
    },
    {
      number: "03",
      title: "Acompañamiento permanente",
      text: "Brindamos apoyo durante la contratación, administración y seguimiento de cada póliza.",
    },
    {
      number: "04",
      title: "Protección patrimonial",
      text: "Nuestro objetivo es proteger el patrimonio y la tranquilidad de quienes confían en nosotros.",
    },
  ];

  return (
    <section
      id="propuesta"
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
            Nuestra propuesta
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
            Una forma diferente
            <br />
            de asegurar.
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
            Entendemos las necesidades de cada prospecto para construir
            soluciones de protección que respondan a su realidad.
          </p>

        </div>

        {/* Propuestas */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            max-w-6xl
            mx-auto
            mt-16
          "
        >

          {propuestas.map((item) => (
            <article
              key={item.number}
              className="
                group
                relative
                overflow-hidden
                rounded-[var(--brand-radius-md)]
                border
                border-[var(--brand-border)]
                bg-[var(--brand-background-secondary)]
                p-8
                md:p-10
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
            >

              {/* Acento */}
              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-1
                  bg-[var(--brand-secondary)]
                  scale-x-0
                  origin-left
                  transition-transform
                  duration-300
                  group-hover:scale-x-100
                "
              />

              {/* Número */}
              <div
                className="
                  flex
                  items-center
                  justify-center
                  w-14
                  h-14
                  rounded-2xl
                  bg-[var(--brand-accent)]
                  text-[var(--brand-secondary)]
                  text-lg
                  font-bold
                  mb-8
                "
              >
                {item.number}
              </div>

              <h3
                className="
                  text-2xl
                  md:text-3xl
                  font-bold
                  text-[var(--brand-primary)]
                "
              >
                {item.title}
              </h3>

              <p
                className="
                  mt-4
                  max-w-lg
                  text-lg
                  leading-8
                  text-[var(--brand-text-secondary)]
                "
              >
                {item.text}
              </p>

            </article>
          ))}

        </div>

      </div>
    </section>
  );
}