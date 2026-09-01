export default function Mision() {
  return (
    <section
      id="mision"
      className="bg-[var(--brand-background-secondary)] py-24 lg:py-32"
      data-aos="fade-up"
    >
      <div className="site-container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Contenido */}
          <div className="max-w-xl">

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
              Nuestra misión
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
              Protección que se adapta a ti.
            </h2>

            <div
              className="
                w-20
                h-1
                mt-8
                rounded-full
                bg-[var(--brand-secondary)]
              "
            />

            <p
              className="
                mt-8
                text-xl
                leading-relaxed
                text-[var(--brand-text-secondary)]
              "
            >
              Brindar protección, confianza y acompañamiento a cada
              prospecto mediante soluciones de aseguramiento diseñadas
              a la medida.
            </p>

            <a
              href="#seguros"
              className="
                inline-flex
                items-center
                gap-2
                mt-8
                px-6
                py-3
                rounded-[var(--brand-radius-sm)]
                bg-[var(--brand-secondary)]
                text-white
                font-bold
                transition-all
                duration-300
                hover:bg-[var(--brand-primary)]
                hover:-translate-y-1
              "
            >
              Conoce nuestros seguros

              <span aria-hidden="true">
                →
              </span>
            </a>

          </div>


          {/* Imagen */}
          <div>

            <div
              className="
                overflow-hidden
                rounded-[var(--brand-radius-lg)]
                shadow-xl
              "
            >
              <img
                src="/images/mision/emblema-mision.jpg"
                alt="Asesoría personalizada de Emblema Seguro"
                className="
                  w-full
                  h-[420px]
                  lg:h-[520px]
                  object-cover
                "
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}