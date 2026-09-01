export default function Nosotros() {
  return (
    <section
      id="nosotros"
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
            ¿Quiénes somos?
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
            18 años protegiendo
            <br />
            lo que más importa.
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

        </div>


        {/* Contenido principal */}
        <div
          className="
            max-w-5xl
            mx-auto
            mt-12
            text-center
          "
        >

          <p
            className="
              text-xl
              md:text-2xl
              leading-relaxed
              text-[var(--brand-text-secondary)]
            "
          >
            En <strong className="text-[var(--brand-primary)]">
              Emblema Seguro
            </strong>{" "}
            contamos con 18 años de experiencia protegiendo el patrimonio
            de personas, empresas y transportistas.
          </p>

          <p
            className="
              mt-6
              text-lg
              md:text-xl
              leading-relaxed
              text-[var(--brand-text-secondary)]
            "
          >
            Brindamos soluciones de protección acompañadas de atención,
            seguimiento y respaldo, porque entendemos que cada prospecto
            es único.
          </p>

        </div>


        {/* Pilares */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-5
            mt-16
            max-w-6xl
            mx-auto
          "
        >

          <div className="group rounded-[var(--brand-radius-md)] border border-[var(--brand-border)] bg-[var(--brand-background-secondary)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div
              className="
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-xl
                bg-[var(--brand-accent)]
                text-[var(--brand-secondary)]
                text-xl
                font-bold
                mb-6
              "
            >
              01
            </div>

            <h3
              className="
                text-2xl
                font-bold
                text-[var(--brand-primary)]
              "
            >
              Servicio
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-[var(--brand-text-secondary)]
              "
            >
              Atención cercana y profesional para acompañarte
              en cada momento.
            </p>
          </div>


          <div className="group rounded-[var(--brand-radius-md)] border border-[var(--brand-border)] bg-[var(--brand-background-secondary)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div
              className="
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-xl
                bg-[var(--brand-accent)]
                text-[var(--brand-secondary)]
                text-xl
                font-bold
                mb-6
              "
            >
              02
            </div>

            <h3
              className="
                text-2xl
                font-bold
                text-[var(--brand-primary)]
              "
            >
              Seguimiento
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-[var(--brand-text-secondary)]
              "
            >
              Estamos presentes para dar continuidad a tus
              necesidades de protección.
            </p>
          </div>


          <div className="group rounded-[var(--brand-radius-md)] border border-[var(--brand-border)] bg-[var(--brand-background-secondary)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div
              className="
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-xl
                bg-[var(--brand-accent)]
                text-[var(--brand-secondary)]
                text-xl
                font-bold
                mb-6
              "
            >
              03
            </div>

            <h3
              className="
                text-2xl
                font-bold
                text-[var(--brand-primary)]
              "
            >
              Respaldo
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-[var(--brand-text-secondary)]
              "
            >
              Soluciones respaldadas por experiencia y por
              compañías aseguradoras.
            </p>
          </div>


          <div className="group rounded-[var(--brand-radius-md)] border border-[var(--brand-border)] bg-[var(--brand-background-secondary)] p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
            <div
              className="
                flex
                items-center
                justify-center
                w-12
                h-12
                rounded-xl
                bg-[var(--brand-accent)]
                text-[var(--brand-secondary)]
                text-xl
                font-bold
                mb-6
              "
            >
              04
            </div>

            <h3
              className="
                text-2xl
                font-bold
                text-[var(--brand-primary)]
              "
            >
              Experiencia
            </h3>

            <p
              className="
                mt-3
                leading-7
                text-[var(--brand-text-secondary)]
              "
            >
              18 años de experiencia nos permiten entender
              diferentes necesidades de protección.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}