"use client";

import { useState } from "react";

export default function Contacto() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // TODO:
    // Conectar posteriormente con el endpoint de contacto
    // y servicio SMTP.

    setSubmitted(true);
  };

  return (
    <section
      id="contacto"
      className="bg-white py-24 lg:py-32"
      data-aos="fade-up"
    >
      <div className="site-container">

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-20
            items-start
          "
        >

          {/* =========================================
              INFORMACIÓN DE CONTACTO
          ========================================= */}

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
              Contacto
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
              Hablemos,
              <br />
              estamos para ayudarte.
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
                text-lg
                md:text-xl
                leading-relaxed
                text-[var(--brand-text-secondary)]
              "
            >
              Permítenos conocer tus necesidades para ofrecerte la mejor
              opción de protección para ti, tu familia o tu empresa.
            </p>


            {/* Datos de contacto */}

            <div className="mt-10 space-y-7">

              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0
                    w-11
                    h-11
                    rounded-full
                    bg-[var(--brand-accent)]
                    text-[var(--brand-secondary)]
                  "
                >
                  <span className="text-lg">☎</span>
                </div>

                <div>
                  <h3
                    className="
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Teléfono
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[var(--brand-text-secondary)]
                    "
                  >
                    [Teléfono de Emblema]
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0
                    w-11
                    h-11
                    rounded-full
                    bg-[var(--brand-accent)]
                    text-[var(--brand-secondary)]
                  "
                >
                  <span className="text-lg">✉</span>
                </div>

                <div>
                  <h3
                    className="
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Correo electrónico
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[var(--brand-text-secondary)]
                    "
                  >
                    [Correo de Emblema]
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0
                    w-11
                    h-11
                    rounded-full
                    bg-[var(--brand-accent)]
                    text-[var(--brand-secondary)]
                  "
                >
                  <span className="text-lg">⌖</span>
                </div>

                <div>
                  <h3
                    className="
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Dirección
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[var(--brand-text-secondary)]
                    "
                  >
                    [Dirección de Emblema]
                  </p>
                </div>

              </div>


              <div className="flex items-start gap-4">

                <div
                  className="
                    flex
                    items-center
                    justify-center
                    shrink-0
                    w-11
                    h-11
                    rounded-full
                    bg-[var(--brand-accent)]
                    text-[var(--brand-secondary)]
                  "
                >
                  <span className="text-lg">◷</span>
                </div>

                <div>
                  <h3
                    className="
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Horario de atención
                  </h3>

                  <p
                    className="
                      mt-1
                      text-[var(--brand-text-secondary)]
                    "
                  >
                    [Horario de atención]
                  </p>
                </div>

              </div>

            </div>

          </div>


          {/* =========================================
              FORMULARIO
          ========================================= */}

          <div
            className="
              rounded-[var(--brand-radius-lg)]
              border
              border-[var(--brand-border)]
              bg-white
              p-7
              md:p-10
              shadow-[0_15px_45px_rgba(6,43,112,.08)]
            "
          >

            <form onSubmit={handleSubmit}>

              <div
                className="
                  grid
                  grid-cols-1
                  md:grid-cols-2
                  gap-6
                "
              >

                {/* Nombre */}

                <div>
                  <label
                    htmlFor="nombre"
                    className="
                      block
                      mb-2
                      text-sm
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Nombre completo
                  </label>

                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Ingresa tu nombre"
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-[var(--brand-radius-sm)]
                      border
                      border-[var(--brand-border)]
                      bg-white
                      text-[var(--brand-text)]
                      outline-none
                      transition
                      focus:border-[var(--brand-secondary)]
                      focus:ring-2
                      focus:ring-[var(--brand-accent)]
                    "
                  />
                </div>


                {/* Correo */}

                <div>
                  <label
                    htmlFor="correo"
                    className="
                      block
                      mb-2
                      text-sm
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Correo electrónico
                  </label>

                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    placeholder="Ingresa tu correo electrónico"
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-[var(--brand-radius-sm)]
                      border
                      border-[var(--brand-border)]
                      bg-white
                      text-[var(--brand-text)]
                      outline-none
                      transition
                      focus:border-[var(--brand-secondary)]
                      focus:ring-2
                      focus:ring-[var(--brand-accent)]
                    "
                  />
                </div>


                {/* Teléfono */}

                <div>
                  <label
                    htmlFor="telefono"
                    className="
                      block
                      mb-2
                      text-sm
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Teléfono
                  </label>

                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    placeholder="Ingresa tu teléfono"
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-[var(--brand-radius-sm)]
                      border
                      border-[var(--brand-border)]
                      bg-white
                      text-[var(--brand-text)]
                      outline-none
                      transition
                      focus:border-[var(--brand-secondary)]
                      focus:ring-2
                      focus:ring-[var(--brand-accent)]
                    "
                  />
                </div>


                {/* Tipo de seguro */}

                <div>
                  <label
                    htmlFor="seguro"
                    className="
                      block
                      mb-2
                      text-sm
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Tipo de seguro de interés
                  </label>

                  <select
                    id="seguro"
                    name="seguro"
                    required
                    defaultValue=""
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-[var(--brand-radius-sm)]
                      border
                      border-[var(--brand-border)]
                      bg-white
                      text-[var(--brand-text)]
                      outline-none
                      transition
                      focus:border-[var(--brand-secondary)]
                      focus:ring-2
                      focus:ring-[var(--brand-accent)]
                    "
                  >
                    <option value="" disabled>
                      Selecciona una opción
                    </option>

                    <option value="personas">
                      Seguro de Personas
                    </option>

                    <option value="familias">
                      GMM y Colectivo
                    </option>

                    <option value="flotillas">
                      Flotillas, Autos y Equipo Pesado
                    </option>

                    <option value="empresarial">
                      Seguro Empresarial
                    </option>

                    <option value="responsabilidad-civil">
                      Responsabilidad Civil
                    </option>

                    <option value="transporte">
                      Transporte de Mercancías
                    </option>

                  </select>
                </div>


                {/* Mensaje */}

                <div className="md:col-span-2">

                  <label
                    htmlFor="mensaje"
                    className="
                      block
                      mb-2
                      text-sm
                      font-bold
                      text-[var(--brand-primary)]
                    "
                  >
                    Mensaje
                  </label>

                  <textarea
                    id="mensaje"
                    name="mensaje"
                    rows="5"
                    placeholder="Cuéntanos cómo podemos ayudarte..."
                    required
                    className="
                      w-full
                      px-4
                      py-3
                      rounded-[var(--brand-radius-sm)]
                      border
                      border-[var(--brand-border)]
                      bg-white
                      text-[var(--brand-text)]
                      outline-none
                      resize-none
                      transition
                      focus:border-[var(--brand-secondary)]
                      focus:ring-2
                      focus:ring-[var(--brand-accent)]
                    "
                  />

                </div>

              </div>


              {/* Botón */}

              <button
                type="submit"
                className="
                  w-full
                  mt-7
                  px-6
                  py-3.5
                  rounded-[var(--brand-radius-sm)]
                  bg-[var(--brand-secondary)]
                  text-white
                  font-bold
                  transition-all
                  duration-300
                  hover:bg-[var(--brand-primary)]
                  hover:-translate-y-0.5
                  hover:shadow-lg
                "
              >
                Enviar solicitud
              </button>


              {/* Estado temporal */}

              {submitted && (
                <p
                  className="
                    mt-4
                    text-center
                    text-sm
                    font-semibold
                    text-[var(--brand-primary)]
                  "
                >
                  El formulario está listo para conectarse al servicio de
                  contacto.
                </p>
              )}

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}