import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">

        {/* Logo + Descripción */}
        <div className="text-center mb-16">

          <img
            src="/logos/logot.png"
            alt="VEKCIA"
            className="h-30 mx-auto mb-1"
          />

          <p
            className="
              text-slate-400
              leading-8
              max-w-3xl
              mx-auto
            "
          >
            Soluciones tecnológicas para empresas mediante desarrollo de
            software, plataformas empresariales, sitios web y transformación
            digital.
          </p>

        </div>

        {/* Links */}
        <div className="grid md:grid-cols-3 gap-12">

          {/* Sobre VEKCIA */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              VEKCIA Technologies
            </h3>

            <p className="text-slate-400 leading-8">
              Impulsamos empresas mediante tecnología, innovación y
              desarrollo de software, creando soluciones digitales
              diseñadas para optimizar procesos y acelerar el crecimiento.
            </p>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Servicios
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Desarrollo de Software
                </Link>
              </li>

              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Sitios Web y Presencia Digital
                </Link>
              </li>

              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Software Empresarial
                </Link>
              </li>

              <li>
                <Link
                  href="#servicios"
                  className="hover:text-white transition-colors"
                >
                  Consultoría y Transformación Digital
                </Link>
              </li>

            </ul>
          </div>

          {/* Empresas del Grupo */}
          <div>
            <h3 className="text-xl font-bold mb-6">
              Empresas del Grupo
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  href="https://gps.vekcia.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  VEKCIA GPS
                </Link>
              </li>

              <li>
                <Link
                  href="https://seguros.vekcia.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  VEKCIA Seguros
                </Link>
              </li>

              <li>
                <Link
                  href="https://group.vekcia.com"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  VEKCIA Group
                </Link>
              </li>

            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="border-t border-slate-800 mt-12 pt-8">
          <p className="text-slate-500 text-sm text-center">
            © 2026 VEKCIA Technologies. Todos los derechos reservados.
          </p>
        </div>

      </div>
    </footer>
  );
}