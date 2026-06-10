export default function Nosotros() {
  return (
    <section
      id="nosotros"
      className="bg-white pt-45 pb-45"
      data-aos="fade-up"
    >
      <div className="vekcia-container">

        <div
          className="
            flex
            flex-col
            items-center
            text-center
          "
        >

          <span
            className="
              inline-block
              text-sm
              font-semibold
              tracking-[0.35em]
              uppercase
              text-[var(--vekcia-bg)]
              mb-8
            "
          >
            Nosotros
          </span>

          <h2
            className="
              max-w-6xl
              mx-auto
              text-5xl
              lg:text-7xl
              font-black
              tracking-tight
              leading-[1]
              text-[#081221]
            "
          >
            Transformamos ideas en soluciones tecnológicas.
          </h2>

          <div
            className="
              w-24
              h-1
              bg-[var(--vekcia-bg)]
              mx-auto
              mt-8
              rounded-full
            "
          />

          <p
            className="
              max-w-5xl
              mx-auto
              mt-10
              text-xl
              leading-9
              text-slate-600
            "
          >
            En VEKCIA Technologies ayudamos a empresas a impulsar su
            crecimiento mediante el desarrollo de software, sitios web,
            automatización de procesos y soluciones digitales diseñadas
            para optimizar operaciones y mejorar la toma de decisiones.
            Combinamos experiencia tecnológica, innovación y enfoque
            empresarial para crear herramientas que generan valor real y
            acompañan la evolución de cada organización.
          </p>

        </div>

      </div>
    </section>
  );
}