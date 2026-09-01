export default function Siniestros() {
  return (
    <section
      id="siniestros"
      className="bg-[var(--brand-background-secondary)] py-24 lg:py-32"
      data-aos="fade-up"
    >
      <div className="site-container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Imagen */}
          <div className="relative order-2 lg:order-1">

            <div
              className="
                overflow-hidden
                rounded-[var(--brand-radius-lg)]
                shadow-xl
              "
            >
              <img
                src="/images/siniestros/siniestros.jpg"
                alt="Atención y seguimiento de siniestros de Emblema Seguro"
                className="
                  w-full
                  h-[420px]
                  lg:h-[520px]
                  object-cover
                "
              />
            </div>

          </div>


          {/* Contenido */}
          <div className="max-w-xl order-1 lg:order-2">

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
              Atención de siniestros
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
              Estamos contigo cuando más lo necesitas.
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
              Sabemos que un siniestro puede generar incertidumbre.
              Por eso te acompañamos durante el proceso para ayudarte
              a recibir la atención y el respaldo que necesitas.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-[var(--brand-text-secondary)]
              "
            >
              Nuestro equipo brinda seguimiento desde el reporte del
              evento y mantiene la comunicación contigo durante las
              diferentes etapas de la atención.
            </p>


            {/* Proceso */}
            <div className="mt-10 space-y-5">

              <div className="flex gap-4 items-start">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0
                    w-10
                    h-10
                    rounded-full
                    bg-[var(--brand-accent)]
                    text-[var(--brand-secondary)]
                    font-bold
                  "
                >
                  01
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Reporte del siniestro
                  </h3>

                  <p
                    className="
                      mt-1
                      text-base
                      leading-7
                      text-[var(--brand-text-secondary)]
                    "
                  >
                    Recibimos la información del evento y orientamos
                    sobre los siguientes pasos.
                  </p>
                </div>

              </div>


              <div className="flex gap-4 items-start">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0
                    w-10
                    h-10
                    rounded-full
                    bg-[var(--brand-accent)]
                    text-[var(--brand-secondary)]
                    font-bold
                  "
                >
                  02
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Atención y seguimiento
                  </h3>

                  <p
                    className="
                      mt-1
                      text-base
                      leading-7
                      text-[var(--brand-text-secondary)]
                    "
                  >
                    Damos seguimiento al proceso y mantenemos
                    comunicación durante la atención.
                  </p>
                </div>

              </div>


              <div className="flex gap-4 items-start">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0
                    w-10
                    h-10
                    rounded-full
                    bg-[var(--brand-accent)]
                    text-[var(--brand-secondary)]
                    font-bold
                  "
                >
                  03
                </div>

                <div>
                  <h3
                    className="
                      text-lg
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Acompañamiento
                  </h3>

                  <p
                    className="
                      mt-1
                      text-base
                      leading-7
                      text-[var(--brand-text-secondary)]
                    "
                  >
                    Estamos presentes para ayudarte a resolver tus
                    dudas y dar continuidad al caso.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}