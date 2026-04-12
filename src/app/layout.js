import { Cormorant_Garamond, Manrope, Geist_Mono } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "ITINGRÉ SÉCURITÉ — Héritier de l'intégrité, garant de votre sécurité",
  description:
    "ITINGRÉ SÉCURITÉ — Société burkinabè spécialisée en gardiennage, investigation et formation. Agréments MSECU/DGSI/DRSP. Ouagadougou, Burkina Faso.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${manrope.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col grain">{children}</body>
    </html>
  );
}
