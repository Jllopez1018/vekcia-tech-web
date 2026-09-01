export default function Vision() {
  return (
    <section
      id="vision"
      className="bg-[var(--brand-primary)] py-24 lg:py-32"
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
              Nuestra visión
            </span>

            <h2
              className="
                text-4xl
                md:text-5xl
                lg:text-6xl
                font-black
                tracking-tight
                leading-[1.05]
                text-white
              "
            >
              Construir relaciones
              <br />
              que perduren.
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
                text-white/80
              "
            >
              Queremos seguir creciendo junto a nuestros clientes,
              fortaleciendo nuestra capacidad de brindar soluciones
              de protección, atención y respaldo.
            </p>

            <p
              className="
                mt-6
                text-lg
                leading-relaxed
                text-white/70
              "
            >
              Nuestro compromiso es mantener una atención cercana y
              profesional, acompañando a cada persona, familia,
              empresa y transportista en sus necesidades de protección.
            </p>

          </div>

          {/* Imagen */}
<div className="relative lg:pl-4">

  <div
    className="
      overflow-hidden
      rounded-[var(--brand-radius-lg)]
      shadow-xl
      bg-[var(--brand-background)]
    "
  >
    <img
      src="/images/vision/emblema-vision.jpg"
      alt="Asesoría personalizada de Emblema Seguro"
      className="
        w-full
        h-[380px]
        md:h-[460px]
        lg:h-[500px]
        object-cover
        object-[72%_center]
      "
    />
  </div>

</div>

        </div>

      </div>
    </section>
  );
}