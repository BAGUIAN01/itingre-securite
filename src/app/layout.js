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

const SITE_URL = "https://itingre-securite.bf";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "ITINGRÉ SÉCURITÉ — Gardiennage, Investigation & Formation | Ouagadougou",
    template: "%s · ITINGRÉ SÉCURITÉ",
  },
  description:
    "ITINGRÉ SÉCURITÉ, société burkinabè agréée par le MSECU/DGSI/DRSP, spécialisée en gardiennage, investigation privée et formation. Protection de personnes, biens et entreprises à Ouagadougou et dans tout le Burkina Faso. Héritier de l'intégrité, garant de votre sécurité.",
  applicationName: "Itingré Sécurité",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Itingré Sécurité",
    "Itingre Securite",
    "sécurité privée Burkina Faso",
    "gardiennage Ouagadougou",
    "société de gardiennage Burkina",
    "investigation privée Burkina",
    "enquêtes privées Ouagadougou",
    "formation agent de sécurité Burkina",
    "protection rapprochée Ouagadougou",
    "télésurveillance Burkina Faso",
    "escorte de convois Burkina",
    "sûreté entreprise Ouagadougou",
    "MSECU DGSI DRSP",
    "Toudoubweogo",
    "agence de sécurité agréée Burkina",
  ],
  authors: [{ name: "Itingré Sécurité", url: SITE_URL }],
  creator: "Itingré Sécurité",
  publisher: "Itingré Sécurité",
  category: "Security Services",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: "/",
    languages: {
      "fr-BF": "/",
      fr: "/",
      "x-default": "/",
    },
  },
  openGraph: {
    type: "website",
    locale: "fr_BF",
    url: SITE_URL,
    siteName: "Itingré Sécurité",
    title:
      "ITINGRÉ SÉCURITÉ — Héritier de l'intégrité, garant de votre sécurité",
    description:
      "Société burkinabè agréée · Gardiennage, investigation privée et formation. Ouagadougou, Burkina Faso. Agréments MSECU/DGSI/DRSP.",
    images: [
      {
        url: "/panneau.jpeg",
        width: 1200,
        height: 630,
        alt: "Itingré Sécurité — Gardiennage, Investigation, Formation",
      },
      {
        url: "/logo.jpeg",
        width: 600,
        height: 600,
        alt: "Blason Itingré Sécurité",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ITINGRÉ SÉCURITÉ — Gardiennage, Investigation & Formation",
    description:
      "Société de sécurité privée agréée au Burkina Faso. Héritier de l'intégrité, garant de votre sécurité.",
    images: ["/panneau.jpeg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.webmanifest",
  verification: {
    // google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
  },
  other: {
    "geo.region": "BF-KAD",
    "geo.placename": "Ouagadougou",
    "geo.position": "12.3714;-1.5197",
    ICBM: "12.3714, -1.5197",
  },
};

export const viewport = {
  themeColor: "#070e18",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
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
