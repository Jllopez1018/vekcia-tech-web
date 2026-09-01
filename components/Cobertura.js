export default function Cobertura() {
  return (
    <section
      id="cobertura"
      className="bg-white py-24 lg:py-32"
      data-aos="fade-up"
    >
      <div className="site-container">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Información */}
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
              Nuestro alcance
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
              Cobertura nacional
              <br />
              y respaldo cercano.
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
              Contamos con una red de oficinas de representación y
              servicio de ajustes que nos permite respaldar la atención
              de primera línea para nuestros asegurados.
            </p>


            {/* Oficina */}
            <div className="mt-10 flex gap-5 items-start">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  shrink-0
                  w-14
                  h-14
                  rounded-2xl
                  bg-[var(--brand-accent)]
                  text-[var(--brand-secondary)]
                "
              >
                <span className="text-2xl font-black">
                  5
                </span>
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                    text-[var(--brand-primary)]
                  "
                >
                  Oficinas de representación
                </h3>

                <p
                  className="
                    mt-1
                    text-lg
                    leading-7
                    text-[var(--brand-text-secondary)]
                  "
                >
                  Presencia para brindar atención y servicio cercano
                  a nuestros asegurados.
                </p>
              </div>

            </div>


            {/* Ajustadores */}
            <div className="mt-6 flex gap-5 items-start">

              <div
                className="
                  flex
                  items-center
                  justify-center
                  shrink-0
                  w-14
                  h-14
                  rounded-2xl
                  bg-[var(--brand-accent)]
                  text-[var(--brand-secondary)]
                "
              >
                <span className="text-2xl font-black">
                  33
                </span>
              </div>

              <div>
                <h3
                  className="
                    text-xl
                    font-bold
                    text-[var(--brand-primary)]
                  "
                >
                  Ajustadores
                </h3>

                <p
                  className="
                    mt-1
                    text-lg
                    leading-7
                    text-[var(--brand-text-secondary)]
                  "
                >
                  Personal listo para apoyar y brindar atención
                  durante los siniestros.
                </p>
              </div>

            </div>


            {/* Cierre */}
            <div
              className="
                mt-10
                p-6
                rounded-[var(--brand-radius-md)]
                bg-[var(--brand-background-secondary)]
                border
                border-[var(--brand-border)]
              "
            >
              <p
                className="
                  text-lg
                  leading-8
                  text-[var(--brand-primary)]
                  font-semibold
                "
              >
                Una red que nos permite brindar mejor atención
                y seguimiento a nuestros asegurados.
              </p>
            </div>

          </div>


          {/* Mapa */}
         <div
  className="
    relative
    flex
    items-center
    justify-center
    rounded-[var(--brand-radius-lg)]
    bg-white
    shadow-[0_15px_40px_rgba(6,43,112,.10)]
    p-4
    lg:p-6
  "
>
  <img
    src="/images/cobertura/cobertura.png"
    alt="Cobertura nacional de Emblema Seguro"
    className="
      block
      w-full
      h-auto
      object-contain
    "
  />
</div>

        </div>

      </div>
    </section>
  );
}