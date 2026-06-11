import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: 'VEKCIA Tech | Desarrollo de Software, IA y Soluciones Empresariales',
  description:
    'Desarrollamos software a la medida, aplicaciones web, plataformas empresariales, inteligencia artificial, GPS, telemetría y soluciones tecnológicas para impulsar el crecimiento de tu negocio.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}