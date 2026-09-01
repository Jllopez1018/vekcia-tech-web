export default function Footer() {
  return (
    <footer
      className="
        bg-[var(--brand-primary)]
        text-white
      "
    >

      <div className="site-container">

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-4
            gap-12
            py-16
            lg:py-20
          "
        >

          {/* =========================================
              MARCA
          ========================================= */}

          <div className="lg:col-span-1">

            <img
              src="/images/logos/logo-emblema.png"
              alt="Emblema Seguro"
              className="
                h-12
                w-auto
                brightness-0
                invert
              "
            />

            <p
              className="
                mt-6
                max-w-sm
                text-sm
                leading-7
                text-white/70
              "
            >
              Protegemos lo que más te importa con soluciones de seguros
              diseñadas a tu medida, acompañamiento cercano y respaldo
              durante cada paso.
            </p>

          </div>


          {/* =========================================
              ENLACES
          ========================================= */}

          <div>

            <h3 className="font-bold text-lg">
              Enlaces rápidos
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#nosotros"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#mision"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Misión
                </a>
              </li>

              <li>
                <a
                  href="#vision"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Visión
                </a>
              </li>

              <li>
                <a
                  href="#seguros"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Seguros
                </a>
              </li>

              <li>
                <a
                  href="#siniestros"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Siniestros
                </a>
              </li>

              <li>
                <a
                  href="#cobertura"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Cobertura
                </a>
              </li>

            </ul>

          </div>


          {/* =========================================
              SEGUROS
          ========================================= */}

          <div>

            <h3 className="font-bold text-lg">
              Seguros
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <a
                  href="#seguro-personas"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Seguro de Personas
                </a>
              </li>

              <li>
                <a
                  href="#seguro-familias"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  GMM y Colectivo
                </a>
              </li>

              <li>
                <a
                  href="#seguro-flotillas"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Flotillas y Equipo Pesado
                </a>
              </li>

              <li>
                <a
                  href="#seguro-empresarial"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Seguro Empresarial
                </a>
              </li>

              <li>
                <a
                  href="#seguro-responsabilidad"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Responsabilidad Civil
                </a>
              </li>

              <li>
                <a
                  href="#seguro-transporte"
                  className="text-sm text-white/70 transition hover:text-white"
                >
                  Transporte de Mercancías
                </a>
              </li>

            </ul>

          </div>


          {/* =========================================
              CONTACTO
          ========================================= */}

          <div>

            <h3 className="font-bold text-lg">
              Contacto
            </h3>

            <div className="mt-5 space-y-4">

              <p className="text-sm text-white/70">
                [Teléfono de Emblema]
              </p>

              <p className="text-sm text-white/70">
                [Correo de Emblema]
              </p>

              <p className="text-sm text-white/70">
                [Dirección de Emblema]
              </p>

            </div>


            {/* CTA */}

            <a
              href="#contacto"
              className="
                inline-flex
                items-center
                justify-center
                mt-7
                px-5
                py-3
                rounded-[var(--brand-radius-sm)]
                border
                border-white/30
                text-sm
                font-bold
                transition-all
                duration-300
                hover:bg-white
                hover:text-[var(--brand-primary)]
              "
            >
              Cotiza ahora
            </a>

          </div>

        </div>


        {/* =========================================
            BARRA INFERIOR
        ========================================= */}

        <div
          className="
            border-t
            border-white/15
            py-6
            flex
            flex-col
            md:flex-row
            items-center
            justify-between
            gap-4
          "
        >

          <p className="text-sm text-white/60 text-center md:text-left">
            © {new Date().getFullYear()} Emblema Seguro. Todos los derechos
            reservados.
          </p>

          <div
            className="
              flex
              flex-wrap
              items-center
              justify-center
              gap-4
              md:gap-6
            "
          >

            <a
              href="#"
              className="
                text-sm
                text-white/60
                transition
                hover:text-white
              "
            >
              Aviso de privacidad
            </a>

            <span className="text-white/20">
              |
            </span>

            <a
              href="#"
              className="
                text-sm
                text-white/60
                transition
                hover:text-white
              "
            >
              Términos y condiciones
            </a>

            <span className="text-white/20">
              |
            </span>

            <span className="text-sm text-white/60">
              Desarrollado por{" "}
              <a
                href="https://vekcia.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  font-bold
                  text-white
                  transition
                  hover:text-[var(--brand-secondary)]
                "
              >
                VEKCIA.com
              </a>
            </span>

          </div>

        </div>

      </div>

    </footer>
  );
}