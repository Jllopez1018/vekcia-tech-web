"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-[var(--brand-border)] shadow-sm">

      <div className="site-container">

        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <a
            href="#inicio"
            onClick={closeMenu}
            className="flex items-center"
          >
            <img
              src="/images/logos/logo-emblema.png"
              alt="Emblema Seguro"
              className="h-12 w-auto"
            />
          </a>


          {/* Desktop Menu */}
          <ul className="hidden md:flex items-center gap-6">

            <li>
              <a
                href="#nosotros"
                className="text-[var(--brand-text)] font-semibold transition-colors hover:text-[var(--brand-secondary)]"
              >
                Nosotros
              </a>
            </li>

            <li>
              <a
                href="#mision"
                className="text-[var(--brand-text)] font-semibold transition-colors hover:text-[var(--brand-secondary)]"
              >
                Misión
              </a>
            </li>

            <li>
              <a
                href="#vision"
                className="text-[var(--brand-text)] font-semibold transition-colors hover:text-[var(--brand-secondary)]"
              >
                Visión
              </a>
            </li>

            <li>
              <a
                href="#seguros"
                className="text-[var(--brand-text)] font-semibold transition-colors hover:text-[var(--brand-secondary)]"
              >
                Seguros
              </a>
            </li>

            <li>
              <a
                href="#siniestros"
                className="text-[var(--brand-text)] font-semibold transition-colors hover:text-[var(--brand-secondary)]"
              >
                Siniestros
              </a>
            </li>

            <li>
              <a
                href="#cobertura"
                className="text-[var(--brand-text)] font-semibold transition-colors hover:text-[var(--brand-secondary)]"
              >
                Cobertura
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                className="text-[var(--brand-text)] font-semibold transition-colors hover:text-[var(--brand-secondary)]"
              >
                Contacto
              </a>
            </li>

            {/* CTA */}
            <li>
              <a
                href="#contacto"
                className="
                  inline-flex
                  items-center
                  justify-center
                  px-5
                  py-2.5
                  rounded-lg
                  bg-[var(--brand-secondary)]
                  text-white
                  font-bold
                  transition-all
                  hover:bg-[var(--brand-primary)]
                  hover:-translate-y-0.5
                "
              >
                Cotiza ahora
              </a>
            </li>

          </ul>


          {/* Mobile Button */}
          <button
            type="button"
            onClick={() => setOpen(!open)}
            className="
              md:hidden
              flex
              items-center
              justify-center
              text-[var(--brand-primary)]
            "
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X size={30} /> : <Menu size={30} />}
          </button>

        </div>

      </div>


      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-[var(--brand-border)] shadow-lg">

          <ul className="flex flex-col py-3">

            <li>
              <a
                href="#nosotros"
                onClick={closeMenu}
                className="block px-6 py-3 text-[var(--brand-text)] font-semibold hover:bg-[var(--brand-background-secondary)]"
              >
                Nosotros
              </a>
            </li>

            <li>
              <a
                href="#mision"
                onClick={closeMenu}
                className="block px-6 py-3 text-[var(--brand-text)] font-semibold hover:bg-[var(--brand-background-secondary)]"
              >
                Misión
              </a>
            </li>

            <li>
              <a
                href="#vision"
                onClick={closeMenu}
                className="block px-6 py-3 text-[var(--brand-text)] font-semibold hover:bg-[var(--brand-background-secondary)]"
              >
                Visión
              </a>
            </li>

            <li>
              <a
                href="#seguros"
                onClick={closeMenu}
                className="block px-6 py-3 text-[var(--brand-text)] font-semibold hover:bg-[var(--brand-background-secondary)]"
              >
                Seguros
              </a>
            </li>

            <li>
              <a
                href="#siniestros"
                onClick={closeMenu}
                className="block px-6 py-3 text-[var(--brand-text)] font-semibold hover:bg-[var(--brand-background-secondary)]"
              >
                Siniestros
              </a>
            </li>

            <li>
              <a
                href="#cobertura"
                onClick={closeMenu}
                className="block px-6 py-3 text-[var(--brand-text)] font-semibold hover:bg-[var(--brand-background-secondary)]"
              >
                Cobertura
              </a>
            </li>

            <li>
              <a
                href="#contacto"
                onClick={closeMenu}
                className="block px-6 py-3 text-[var(--brand-text)] font-semibold hover:bg-[var(--brand-background-secondary)]"
              >
                Contacto
              </a>
            </li>

            {/* CTA */}
            <li className="px-6 pt-3">
              <a
                href="#contacto"
                onClick={closeMenu}
                className="
                  flex
                  items-center
                  justify-center
                  w-full
                  px-5
                  py-3
                  rounded-lg
                  bg-[var(--brand-secondary)]
                  text-white
                  font-bold
                "
              >
                Cotiza ahora
              </a>
            </li>

          </ul>

        </div>
      )}

    </nav>
  );
}