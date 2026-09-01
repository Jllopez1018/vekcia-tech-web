import "./globals.css";

export const metadata = {
  title: "Emblema Seguro | Protección a la Medida",
  description:
    "Emblema Seguro brinda soluciones de aseguramiento diseñadas a la medida para personas, familias, empresas, flotillas y transporte de mercancías.",

  keywords: [
    "Emblema Seguro",
    "seguros",
    "seguro de vida",
    "GMM",
    "seguros colectivos",
    "seguro empresarial",
    "seguro de autos",
    "flotillas",
    "equipo pesado",
    "responsabilidad civil",
    "transporte de mercancías",
    "seguros para empresas",
  ],

  icons: {
    icon: "/images/logos/logo-fav.png",
    shortcut: "/images/logos/logo-fav.png",
    apple: "/images/logos/logo-fav.png",
  },

  openGraph: {
    title: "Emblema Seguro | Protección a la Medida",
    description:
      "Soluciones de aseguramiento diseñadas a la medida para personas, familias, empresas y transportistas.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}