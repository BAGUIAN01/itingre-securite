import Image from "next/image";
import Link from "next/link";
import {
  Shield,
  Search,
  GraduationCap,
  Phone,
  MapPin,
  Mail,
  ArrowUpRight,
  Clock,
  Calendar,
  CheckCircle2,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

const PHONE_1 = "+226 05 28 56 56";
const PHONE_2 = "+226 51 92 01 01";
const SITE_URL = "https://itingre-securite.com";

const ARRETES = [
  "N° 2026-0055 / MSECU / CAB / DGSI / DRSP",
  "N° 2025-1206 / MSECU / CAB / DGSI / DRSP",
  "N° 2025-1205 / MSECU / CAB / DGSI / DRSP",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "Organization", "SecurityService"],
      "@id": `${SITE_URL}/#organization`,
      name: "Itingré Sécurité",
      legalName: "ITINGRÉ SÉCURITÉ",
      alternateName: "Itingre Securite",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/logo.jpeg`,
        width: 600,
        height: 600,
      },
      image: [`${SITE_URL}/logo.jpeg`, `${SITE_URL}/panneau.jpeg`],
      description:
        "Société burkinabè agréée, spécialisée en gardiennage, investigation privée et formation. Protection de personnes, biens et entreprises. Héritier de l'intégrité, garant de votre sécurité.",
      slogan: "Héritier de l'intégrité, garant de votre sécurité.",
      foundingDate: "2026",
      areaServed: [
        { "@type": "Country", name: "Burkina Faso" },
        { "@type": "City", name: "Ouagadougou" },
      ],
      address: {
        "@type": "PostalAddress",
        streetAddress: "Toudoubweogo",
        addressLocality: "Ouagadougou",
        addressRegion: "Centre",
        addressCountry: "BF",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 12.3714,
        longitude: -1.5197,
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          telephone: "+22605285656",
          contactType: "customer service",
          areaServed: "BF",
          availableLanguage: ["French"],
          contactOption: "TollFree",
        },
        {
          "@type": "ContactPoint",
          telephone: "+22651920101",
          contactType: "emergency",
          areaServed: "BF",
          availableLanguage: ["French"],
        },
      ],
      telephone: "+22605285656",
      email: "itingresecurite@gmail.com",
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      priceRange: "€€",
      knowsAbout: [
        "Gardiennage",
        "Protection rapprochée",
        "Télésurveillance",
        "Escorte de convois",
        "Investigation privée",
        "Enquêtes de moralité",
        "Filature",
        "Intelligence économique",
        "Formation agent de sécurité",
        "Gestion de crise",
      ],
      hasCredential: ARRETES.map((a) => ({
        "@type": "EducationalOccupationalCredential",
        name: `Arrêté ${a}`,
        credentialCategory: "License",
        recognizedBy: {
          "@type": "GovernmentOrganization",
          name: "Ministère de la Sécurité du Burkina Faso (MSECU/DGSI/DRSP)",
        },
      })),
      makesOffer: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Gardiennage",
            description:
              "Protection statique et mobile, surveillance de sites, rondes, télésurveillance et protection rapprochée.",
            serviceType: "Security Service",
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Investigation privée",
            description:
              "Enquêtes discrètes sur personnes et entreprises, filature, collecte de preuves, intelligence économique.",
            serviceType: "Investigation Service",
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Formation en sécurité",
            description:
              "Formations certifiantes pour agents de sécurité, modules de sûreté d'entreprise et gestion de crise.",
            serviceType: "Training",
            provider: { "@id": `${SITE_URL}/#organization` },
          },
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Itingré Sécurité",
      description:
        "Gardiennage, investigation privée et formation au Burkina Faso.",
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "fr-BF",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: "ITINGRÉ SÉCURITÉ — Gardiennage, Investigation & Formation",
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "fr-BF",
      primaryImageOfPage: {
        "@type": "ImageObject",
        url: `${SITE_URL}/panneau.jpeg`,
      },
    },
    {
      "@type": "Event",
      "@id": `${SITE_URL}/#launch-event`,
      name: "Cérémonie officielle de lancement d'Itingré Sécurité",
      startDate: "2026-02-21T09:00:00+00:00",
      endDate: "2026-02-21T13:00:00+00:00",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      eventStatus: "https://schema.org/EventScheduled",
      location: {
        "@type": "Place",
        name: "Siège Itingré Sécurité",
        address: {
          "@type": "PostalAddress",
          streetAddress: "Toudoubweogo",
          addressLocality: "Ouagadougou",
          addressCountry: "BF",
        },
      },
      image: [`${SITE_URL}/ouverture1.jpeg`, `${SITE_URL}/ouverture2.jpeg`],
      description:
        "Cérémonie officielle de lancement des activités d'Itingré Sécurité au siège à Toudoubweogo, Ouagadougou, sous le parrainage de M. Ismaël Sana, Directeur Général de l'Université Libre du Burkina.",
      organizer: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Accueil",
          item: SITE_URL,
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <div className="relative flex w-full flex-col overflow-x-hidden">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-[color:var(--gold)] focus:px-4 focus:py-2 focus:text-[color:var(--ink)]"
      >
        Aller au contenu
      </a>
      <Nav />
      <main id="main" role="main">
        <Hero />
        <Marquee />
        <About />
        <Services />
        <WhyUs />
        <Launch />
        <Team />
        <Leadership />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* ---------------- NAV ---------------- */
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[color:var(--ink)]/70 backdrop-blur-md border-b border-[color:var(--gold)]/15">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between px-4 py-3 md:px-10 md:py-4">
        <Link href="#top" className="flex items-center gap-2.5 md:gap-3">
          <div className="relative h-9 w-9 overflow-hidden rounded-full ring-1 ring-[color:var(--gold)]/60 md:h-11 md:w-11">
            <Image src="/logo.jpeg" alt="Itingré Sécurité" fill className="object-cover" />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="font-display text-[15px] font-semibold tracking-wide text-[color:var(--ivory)] md:text-[17px]">
              ITINGRÉ
            </span>
            <span className="caption text-[10px] text-[color:var(--gold)] md:text-[11px]">Sécurité</span>
          </div>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {[
            ["À propos", "#about"],
            ["Services", "#services"],
            ["Équipe", "#team"],
            ["Événement", "#launch"],
            ["Contact", "#contact"],
          ].map(([label, href]) => (
            <a
              key={href}
              href={href}
              className="caption text-[color:var(--ivory)]/70 transition-colors hover:text-[color:var(--gold)]"
            >
              {label}
            </a>
          ))}
        </nav>

        <a
          href={`tel:${PHONE_1.replace(/\s/g, "")}`}
          className="group flex items-center gap-2 rounded-full border border-[color:var(--gold)]/50 px-3 py-2 text-[12px] font-medium text-[color:var(--gold)] transition-all hover:bg-[color:var(--gold)] hover:text-[color:var(--ink)] md:px-4 md:text-[13px]"
          aria-label="Appeler Itingré Sécurité"
        >
          <Phone className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">{PHONE_1}</span>
          <span className="sm:hidden">Appeler</span>
        </a>
      </div>
    </header>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section id="top" className="relative min-h-screen w-full pt-20 md:pt-28">
      {/* Deep navy layered background */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 35%, rgba(18,33,55,.8) 0%, rgba(7,14,24,1) 70%)",
          }}
        />
        {/* Heraldic hairlines */}
        <div className="absolute left-0 right-0 top-[18%] mx-auto h-px w-[88%] max-w-[1400px] bg-gradient-to-r from-transparent via-[color:var(--gold)]/40 to-transparent drawline" />
        <div className="absolute left-0 right-0 bottom-[10%] mx-auto h-px w-[88%] max-w-[1400px] bg-gradient-to-r from-transparent via-[color:var(--gold)]/30 to-transparent drawline" style={{animationDelay:".35s"}} />
      </div>

      <div className="relative mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 pb-20 pt-6 sm:px-6 md:grid-cols-12 md:px-10 md:pb-24 md:pt-20">
        {/* LEFT COLUMN — meta */}
        <aside className="order-2 md:order-1 md:col-span-3 md:border-r md:border-[color:var(--gold)]/15 md:pr-8">
          <div className="fade grid grid-cols-3 gap-6 border-y border-[color:var(--gold)]/15 py-6 md:flex md:flex-col md:gap-8 md:border-0 md:py-0" style={{animationDelay:".2s"}}>
            <div className="space-y-1">
              <p className="caption text-[color:var(--gold)]">Dossier</p>
              <p className="font-mono text-[11px] text-[color:var(--ivory)]/60">
                MSECU / DGSI / DRSP · 2026
              </p>
            </div>
            <div className="space-y-1">
              <p className="caption text-[color:var(--gold)]">Fondée</p>
              <p className="font-display text-2xl text-[color:var(--ivory)] md:text-3xl">MMXXVI</p>
            </div>
            <div className="space-y-1">
              <p className="caption text-[color:var(--gold)]">Siège</p>
              <p className="text-xs leading-snug text-[color:var(--ivory)]/80 md:text-sm">
                Toudoubweogo<br />Ouagadougou, BF
              </p>
            </div>
          </div>
        </aside>

        {/* CENTER — main headline */}
        <div className="relative order-1 md:order-2 md:col-span-6 md:px-4">
          <div className="rise flex flex-col items-center text-center">
            {/* Crest */}
            <div className="relative mb-5 h-32 w-32 sm:h-40 sm:w-40 md:mb-6 md:h-56 md:w-56">
              <div className="absolute inset-0 animate-pulse rounded-full bg-[color:var(--gold)]/10 blur-2xl" />
              <Image
                src="/logo.jpeg"
                alt="Blason Itingré Sécurité"
                fill
                priority
                sizes="(max-width: 768px) 160px, 224px"
                className="relative rounded-full object-cover ring-2 ring-[color:var(--gold)]/60 shadow-[0_0_80px_rgba(212,175,55,0.25)]"
              />
            </div>

            <p className="caption mb-4 text-[10px] text-[color:var(--gold)] md:mb-5 md:text-[11px]">
              — Itingré Sécurité · Est. 2026 —
            </p>

            <h1 className="font-display text-[clamp(2.2rem,11vw,6.2rem)] font-light leading-[0.95] tracking-tight text-[color:var(--ivory)]">
              Héritier de
              <br />
              <span className="italic gold-shimmer font-medium">l&apos;intégrité,</span>
              <br />
              garant de votre
              <br />
              <span className="italic">sécurité.</span>
            </h1>

            <p className="mt-6 max-w-xl px-2 text-[14px] leading-relaxed text-[color:var(--ivory)]/70 md:mt-8 md:text-[15px]">
              Société burkinabè agréée en gardiennage, investigation privée et
              formation. Nous protégeons personnes, biens et intérêts avec la
              rigueur d&apos;une maison, la discrétion d&apos;une garde.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-10">
              <a
                href="#contact"
                className="group inline-flex w-full items-center justify-center gap-2 bg-[color:var(--gold)] px-6 py-3.5 text-[12px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink)] transition-all hover:bg-[color:var(--gold-bright)] sm:w-auto md:text-[13px]"
                style={{ clipPath: "polygon(8px 0, 100% 0, calc(100% - 8px) 100%, 0 100%)" }}
              >
                Demander un devis
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="#services"
                className="caption text-[color:var(--ivory)]/80 underline-offset-8 hover:text-[color:var(--gold)] hover:underline"
              >
                Découvrir nos services →
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN — services preview */}
        <aside className="order-3 md:col-span-3 md:border-l md:border-[color:var(--gold)]/15 md:pl-8">
          <div className="fade flex flex-col gap-6" style={{animationDelay:".4s"}}>
            <p className="caption text-[color:var(--gold)]">Trois Métiers</p>
            {[
              { n: "I", t: "Gardiennage", d: "Protection statique et mobile" },
              { n: "II", t: "Investigation", d: "Enquêtes privées & renseignement" },
              { n: "III", t: "Formation", d: "Agents, cadres, entreprises" },
            ].map((s) => (
              <div key={s.t} className="group cursor-default">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-2xl text-[color:var(--gold)]">{s.n}</span>
                  <span className="font-display text-xl text-[color:var(--ivory)] transition-colors group-hover:text-[color:var(--gold)]">
                    {s.t}
                  </span>
                </div>
                <p className="mt-1 text-xs text-[color:var(--ivory)]/55">{s.d}</p>
              </div>
            ))}
            <Separator className="bg-[color:var(--gold)]/20" />
            <a href={`tel:${PHONE_1.replace(/\s/g,"")}`} className="group block">
              <p className="caption text-[color:var(--gold)]">Urgence 24/7</p>
              <p className="mt-1 font-display text-xl text-[color:var(--ivory)] group-hover:text-[color:var(--gold)]">
                {PHONE_1}
              </p>
              <p className="text-xs text-[color:var(--ivory)]/55">{PHONE_2}</p>
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function Marquee() {
  const words = [
    "Gardiennage",
    "Investigation",
    "Formation",
    "Protection rapprochée",
    "Enquêtes privées",
    "Télésurveillance",
    "Escorte",
    "Conseil en sûreté",
  ];
  const row = [...words, ...words];
  return (
    <div className="relative border-y border-[color:var(--gold)]/20 bg-[color:var(--ink-2)] py-4 overflow-hidden md:py-6">
      <div className="flex whitespace-nowrap marquee">
        {row.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="font-display text-2xl italic text-[color:var(--ivory)]/90 px-5 sm:text-3xl sm:px-8 md:text-4xl">
              {w}
            </span>
            <span className="text-[color:var(--gold)]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

/* ---------------- ABOUT ---------------- */
function About() {
  return (
    <section id="about" className="relative py-20 md:py-36">
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 gap-10 px-5 sm:px-6 md:grid-cols-12 md:gap-14 md:px-10">
        <div className="md:col-span-5">
          <p className="caption mb-5 text-[color:var(--gold)] md:mb-6">— Chapitre 01 · La Maison</p>
          <h2 className="font-display text-[2.5rem] font-light leading-[1] text-[color:var(--ivory)] sm:text-5xl md:text-6xl">
            Une maison bâtie sur la <span className="italic text-[color:var(--gold)]">parole</span>{" "}
            donnée.
          </h2>
          <div className="hairline mt-10 drawline" />
          <div className="mt-10 space-y-4">
            {ARRETES.map((a, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-[color:var(--gold)]" />
                <p className="font-mono text-[11px] leading-relaxed text-[color:var(--ivory)]/70">
                  ARRÊTÉ {a}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="md:col-span-7 md:pl-10">
          <div className="space-y-5 text-[14px] leading-[1.75] text-[color:var(--ivory)]/75 md:space-y-6 md:text-[15px] md:leading-[1.8]">
            <p className="first-letter:font-display first-letter:text-5xl first-letter:font-medium first-letter:text-[color:var(--gold)] first-letter:float-left first-letter:mr-3 first-letter:leading-[0.85] md:first-letter:text-6xl">
              ITINGRÉ SÉCURITÉ est une société privée spécialisée dans les activités
              de gardiennage, formation et investigations. L&apos;entreprise accompagne
              particuliers, ONG et institutions privées et publiques, nationales et
              internationales, dans la garantie de la protection de leurs risques et
              de leurs biens.
            </p>
            <p>
              Le choix de nous confier vos préoccupations sécuritaires relève d&apos;un
              service sur mesure, reposant sur des techniques éprouvées, des
              collaborateurs qualifiés et une chaîne de commandement disciplinée.
              Notre mission — protéger, rassurer et servir avec intégrité.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-[color:var(--gold)]/20 pt-8 md:mt-14 md:gap-6 md:pt-10">
            {[
              { n: "100%", l: "Agents assermentés" },
              { n: "24/7", l: "Intervention" },
              { n: "03", l: "Agréments d'État" },
            ].map((s) => (
              <div key={s.l}>
                <p className="gold-shimmer font-display text-3xl font-medium leading-none sm:text-4xl md:text-5xl">
                  {s.n}
                </p>
                <p className="caption mt-2 text-[9px] text-[color:var(--ivory)]/60 md:mt-3 md:text-[11px]">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- SERVICES ---------------- */
function Services() {
  const services = [
    {
      n: "01",
      icon: Shield,
      title: "Gardiennage",
      kicker: "Protection statique & mobile",
      body: "Surveillance de sites, protection rapprochée, rondes et télésurveillance. Des équipes assermentées, entraînées à la posture, au rapport et à l'intervention mesurée.",
      items: ["Gardes à poste fixe", "Protection rapprochée", "Escorte de convois", "Télésurveillance"],
    },
    {
      n: "02",
      icon: Search,
      title: "Investigation",
      kicker: "Enquêtes privées & renseignement",
      body: "Enquêtes discrètes sur personnes et entreprises, filature, collecte de preuves, intelligence économique et lutte contre la fraude interne. Rigueur et confidentialité.",
      items: ["Enquêtes de moralité", "Recherche de preuves", "Filatures", "Veille & intelligence"],
    },
    {
      n: "03",
      icon: GraduationCap,
      title: "Formation",
      kicker: "Agents, cadres & entreprises",
      body: "Formations certifiantes pour agents de sécurité, modules de sûreté pour cadres d'entreprise, préparation aux situations de crise et auto-protection.",
      items: ["Agent de sécurité", "Sûreté d'entreprise", "Gestion de crise", "Self-défense"],
    },
  ];

  return (
    <section
      id="services"
      className="relative border-y border-[color:var(--gold)]/20 bg-[color:var(--ink-2)]/60 py-20 md:py-36"
    >
      <div
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(var(--gold) 1px, transparent 1px), linear-gradient(90deg, var(--gold) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="mb-12 flex flex-col items-start gap-6 md:mb-20 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="caption mb-3 text-[color:var(--gold)] md:mb-4">— Chapitre 02 · Métiers</p>
            <h2 className="font-display text-[2.5rem] font-light leading-[0.95] text-[color:var(--ivory)] sm:text-5xl md:text-7xl">
              Trois métiers.
              <br />
              <span className="italic text-[color:var(--gold)]">Une seule parole.</span>
            </h2>
          </div>
          <p className="max-w-sm text-[13px] leading-relaxed text-[color:var(--ivory)]/60 md:text-[14px]">
            Chaque mission est encadrée par nos agréments d&apos;État et conduite
            selon un protocole écrit, documenté et traçable.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-0 border-t border-[color:var(--gold)]/20 md:grid-cols-3">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <article
                key={s.n}
                className={`service-card group relative flex flex-col justify-between gap-8 border-b border-[color:var(--gold)]/20 p-7 sm:p-10 md:gap-10 md:p-12 ${
                  i > 0 ? "md:border-l md:border-[color:var(--gold)]/20" : ""
                } md:border-b-0`}
              >
                <div>
                  <div className="flex items-start justify-between">
                    <span className="service-numeral font-display text-6xl font-light text-[color:var(--ivory)]/25 md:text-7xl">
                      {s.n}
                    </span>
                    <Icon className="h-6 w-6 text-[color:var(--gold)]" strokeWidth={1.4} />
                  </div>
                  <h3 className="mt-6 font-display text-3xl leading-none text-[color:var(--ivory)] md:mt-8 md:text-4xl">
                    {s.title}
                  </h3>
                  <p className="caption mt-3 text-[color:var(--gold)]">{s.kicker}</p>
                  <p className="mt-5 text-[13.5px] leading-[1.7] text-[color:var(--ivory)]/65 md:mt-6 md:text-[14px]">
                    {s.body}
                  </p>
                </div>
                <ul className="space-y-2.5 border-t border-[color:var(--gold)]/15 pt-5 md:pt-6">
                  {s.items.map((it) => (
                    <li key={it} className="flex items-center gap-3 text-[13px] text-[color:var(--ivory)]/75">
                      <span className="h-px w-4 bg-[color:var(--gold)]" />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const values = [
    { k: "Intégrité", v: "La parole donnée tient lieu de contrat avant la signature." },
    { k: "Rigueur", v: "Protocoles écrits, rapports horodatés, chaîne de commandement claire." },
    { k: "Discrétion", v: "Confidentialité absolue sur les missions, les clients et les données." },
    { k: "Présence", v: "Des agents formés, visibles ou invisibles selon la mission." },
  ];
  return (
    <section className="relative py-20 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-4">
            <p className="caption mb-5 text-[color:var(--gold)] md:mb-6">— Chapitre 03 · Credo</p>
            <h2 className="font-display text-[2.5rem] font-light leading-[0.95] text-[color:var(--ivory)] sm:text-5xl md:text-6xl">
              Ce qui nous <span className="italic text-[color:var(--gold)]">tient debout.</span>
            </h2>
            <div className="hairline mt-8 md:mt-10" />
            <p className="mt-8 text-[13.5px] leading-[1.75] text-[color:var(--ivory)]/65 md:mt-10 md:text-[14px] md:leading-[1.8]">
              Quatre valeurs qui commandent chacune de nos interventions, du garde
              posté à l&apos;enquêteur de terrain.
            </p>
          </div>
          <div className="md:col-span-8">
            <dl className="grid grid-cols-1 gap-px bg-[color:var(--gold)]/20 md:grid-cols-2">
              {values.map((v, i) => (
                <div
                  key={v.k}
                  className="group relative bg-[color:var(--ink)] p-7 transition-colors hover:bg-[color:var(--ink-3)] sm:p-10"
                >
                  <span className="absolute right-5 top-5 font-mono text-[10px] text-[color:var(--gold)]/50 md:right-6 md:top-6 md:text-[11px]">
                    0{i + 1}
                  </span>
                  <dt className="font-display text-2xl italic text-[color:var(--gold)] md:text-3xl">
                    {v.k}
                  </dt>
                  <dd className="mt-3 text-[13.5px] leading-[1.7] text-[color:var(--ivory)]/70 md:mt-4 md:text-[14px]">
                    {v.v}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- LAUNCH EVENT ---------------- */
function Launch() {
  return (
    <section
      id="launch"
      className="relative overflow-hidden border-y border-[color:var(--gold)]/25 bg-[color:var(--ink-2)] py-20 md:py-36"
    >
      {/* Decorative heraldic bg */}
      <div
        className="absolute inset-0 -z-10 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, rgba(212,175,55,0.35), transparent 30%), radial-gradient(circle at 80% 70%, rgba(184,31,44,0.25), transparent 30%)",
        }}
      />
      <div className="mx-auto grid max-w-[1400px] grid-cols-1 items-center gap-12 px-5 sm:px-6 md:grid-cols-12 md:gap-16 md:px-10">
        <div className="md:col-span-6">
          <p className="caption mb-4 text-[color:var(--gold)] md:mb-5">— Save the Date</p>
          <h2 className="font-display text-[2.6rem] font-light leading-[0.9] text-[color:var(--ivory)] sm:text-5xl md:text-[5.5rem]">
            Cérémonie
            <br />
            <span className="italic text-[color:var(--gold)]">officielle</span>
            <br />
            de lancement.
          </h2>
          <p className="mt-6 max-w-md text-[14px] leading-[1.7] text-[color:var(--ivory)]/70 md:mt-8 md:text-[15px]">
            Nous avons l&apos;honneur de vous convier à la cérémonie officielle de
            lancement des activités d&apos;ITINGRÉ SÉCURITÉ, au sein de notre siège
            sis à Toudoubweogo.
          </p>
          <p className="mt-5 text-[12.5px] italic text-[color:var(--ivory)]/60 md:mt-6 md:text-[13px]">
            Sous le parrainage de Monsieur Ismaël SANA, Directeur Général de
            l&apos;Université Libre du Burkina.
          </p>
        </div>

        <div className="md:col-span-6">
          <div className="frame-corners relative border border-[color:var(--gold)]/40 bg-[color:var(--ink)]/70 p-7 backdrop-blur sm:p-10 md:p-14">
            <div className="flex items-start justify-between">
              <Badge className="bg-[color:var(--crimson)] text-[color:var(--ivory)] uppercase tracking-wider">
                Invitation
              </Badge>
              <span className="font-mono text-[11px] text-[color:var(--ivory)]/50">2026</span>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-6 border-b border-[color:var(--gold)]/20 pb-8 md:mt-10 md:gap-10 md:pb-10">
              <div>
                <p className="caption text-[color:var(--gold)]">Date</p>
                <p className="mt-2 font-display text-3xl text-[color:var(--ivory)] sm:text-4xl">
                  Samedi
                  <br />
                  <span className="italic">21 février</span>
                </p>
              </div>
              <div>
                <p className="caption text-[color:var(--gold)]">Heure</p>
                <p className="mt-2 font-display text-3xl text-[color:var(--ivory)] sm:text-4xl">
                  <span className="italic">9 h 00</span>
                </p>
              </div>
            </div>

            <div className="mt-7 grid grid-cols-1 gap-4 md:mt-8 md:gap-5">
              <div className="flex items-center gap-4">
                <MapPin className="h-4 w-4 text-[color:var(--gold)]" />
                <p className="text-sm text-[color:var(--ivory)]/80">
                  Siège ITINGRÉ SÉCURITÉ — Toudoubweogo, Ouagadougou
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Calendar className="h-4 w-4 text-[color:var(--gold)]" />
                <p className="text-sm text-[color:var(--ivory)]/80">
                  Tenue correcte recommandée
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Clock className="h-4 w-4 text-[color:var(--gold)]" />
                <p className="text-sm text-[color:var(--ivory)]/80">
                  Accueil des invités dès 8 h 30
                </p>
              </div>
            </div>

            <div className="mt-8 flex items-center justify-between border-t border-[color:var(--gold)]/20 pt-5 md:mt-10 md:pt-6">
              <p className="font-display text-base italic text-[color:var(--gold)] sm:text-lg md:text-xl">
                Gardiennage · Investigation · Formation
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- TEAM ---------------- */
function Team() {
  const tiles = [
    {
      src: "/images/equipe1.jpeg",
      label: "La garde rapprochée",
      caption: "Agents assermentés en tenue officielle ITINGRÉ",
      span: "md:col-span-7 md:row-span-2",
      aspect: "aspect-[4/3] md:aspect-auto md:h-full",
    },
    {
      src: "/images/equipe2.jpeg",
      label: "Commandement & terrain",
      caption: "Cadres et agents · cérémonie de lancement",
      span: "md:col-span-5",
      aspect: "aspect-[4/3]",
    },
    {
      src: "/images/equipe3.jpeg",
      label: "Aux côtés des parrains",
      caption: "L'équipe sous le regard des invités officiels",
      span: "md:col-span-3",
      aspect: "aspect-[4/5]",
    },
    {
      src: "/images/equipe4.jpeg",
      label: "En formation",
      caption: "Rigueur, posture, discipline — chaque jour",
      span: "md:col-span-2",
      aspect: "aspect-[3/4]",
    },
  ];

  return (
    <section
      id="team"
      className="relative border-t border-[color:var(--gold)]/20 py-20 md:py-36"
    >
      {/* Subtle decorative numeral backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-[0.04]"
      >
        <span className="absolute -right-10 top-10 font-display text-[28rem] leading-none text-[color:var(--gold)] md:text-[40rem]">
          IV
        </span>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        {/* Header */}
        <div className="mb-12 grid grid-cols-1 gap-8 md:mb-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-7">
            <p className="caption mb-3 text-[color:var(--gold)] md:mb-4">
              — Chapitre 04 · L&apos;équipe
            </p>
            <h2 className="font-display text-[2.5rem] font-light leading-[0.95] text-[color:var(--ivory)] sm:text-5xl md:text-7xl">
              Des visages.
              <br />
              <span className="italic text-[color:var(--gold)]">Une parole.</span>
            </h2>
          </div>
          <div className="md:col-span-5 md:pt-6">
            <div className="hairline mb-6 md:mb-8" />
            <p className="text-[14px] leading-[1.8] text-[color:var(--ivory)]/70">
              Derrière chaque mission, une équipe d&apos;hommes et de femmes
              formés, assermentés et engagés. Ils portent l&apos;uniforme comme on
              porte une promesse — celle de veiller, de protéger et de rendre
              compte.
            </p>
            <div className="mt-6 flex items-baseline gap-5">
              <p className="gold-shimmer font-display text-4xl font-medium leading-none md:text-5xl">
                +20
              </p>
              <p className="caption text-[color:var(--ivory)]/60">
                agents en service<br />dès le jour 1
              </p>
            </div>
          </div>
        </div>

        {/* Editorial photo grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-12 md:grid-rows-2 md:gap-5">
          {tiles.map((t, i) => (
            <figure
              key={t.src}
              className={`group relative overflow-hidden border border-[color:var(--gold)]/25 bg-[color:var(--ink-2)] ${t.span} ${t.aspect}`}
            >
              <Image
                src={t.src}
                alt={t.label}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 40vw"
                className="object-cover transition-all duration-[900ms] ease-out group-hover:scale-[1.04] group-hover:grayscale-0 grayscale-[0.35]"
              />
              {/* gradient wash */}
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/95 via-[color:var(--ink)]/10 to-transparent" />
              {/* index numeral */}
              <span className="absolute right-4 top-4 font-mono text-[10px] tracking-widest text-[color:var(--gold)]/70 md:right-5 md:top-5">
                · 0{i + 1} ·
              </span>
              {/* caption */}
              <figcaption className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
                <p className="caption text-[10px] text-[color:var(--gold)] md:text-[11px]">
                  {t.label}
                </p>
                <p className="mt-2 font-display text-lg italic leading-tight text-[color:var(--ivory)] md:text-xl">
                  {t.caption}
                </p>
                <div className="mt-3 h-px w-10 origin-left scale-x-0 bg-[color:var(--gold)] transition-transform duration-500 group-hover:scale-x-100" />
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Values strip */}
        <div className="mt-14 grid grid-cols-2 gap-px bg-[color:var(--gold)]/20 md:mt-20 md:grid-cols-4">
          {[
            { k: "Assermentés", v: "100%" },
            { k: "Formés en continu", v: "24/7" },
            { k: "Uniformes officiels", v: "MSECU" },
            { k: "Agréments d'État", v: "III" },
          ].map((s) => (
            <div
              key={s.k}
              className="group flex flex-col justify-between bg-[color:var(--ink)] p-6 transition-colors hover:bg-[color:var(--ink-3)] sm:p-8"
            >
              <p className="gold-shimmer font-display text-4xl font-medium leading-none md:text-5xl">
                {s.v}
              </p>
              <p className="caption mt-6 text-[10px] text-[color:var(--ivory)]/60 md:text-[11px]">
                {s.k}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- LEADERSHIP ---------------- */
function Leadership() {
  return (
    <section id="leadership" className="relative py-20 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="mb-12 flex items-end justify-between md:mb-16">
          <div>
            <p className="caption mb-3 text-[color:var(--gold)] md:mb-4">— Chapitre 05 · Parrainage</p>
            <h2 className="font-display text-[2.5rem] font-light leading-[0.95] text-[color:var(--ivory)] sm:text-5xl md:text-6xl">
              Sous le regard du <span className="italic text-[color:var(--gold)]">parrain.</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-5">
            <div className="relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden border border-[color:var(--gold)]/30 md:max-w-none">
              <Image
                src="/images/dg_ulb.jpeg"
                alt="Monsieur Ismaël SANA, Directeur Général de l'Université Libre du Burkina"
                fill
                className="object-cover grayscale transition-all duration-700 hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--ink)]/90 via-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="caption text-[color:var(--gold)]">Parrain</p>
                <p className="mt-1 font-display text-2xl text-[color:var(--ivory)]">
                  Ismaël SANA
                </p>
                <p className="text-xs text-[color:var(--ivory)]/60">
                  Directeur Général · Université Libre du Burkina
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 md:pl-10">
            <blockquote className="font-display text-2xl font-light italic leading-[1.3] text-[color:var(--ivory)] sm:text-3xl md:text-4xl">
              <span className="text-6xl leading-none text-[color:var(--gold)]">&ldquo;</span>
              La sécurité n&apos;est pas un luxe, c&apos;est la condition première
              du développement. ITINGRÉ SÉCURITÉ porte avec dignité cette
              responsabilité pour le Burkina.
              <span className="text-6xl leading-none text-[color:var(--gold)]">&rdquo;</span>
            </blockquote>
            <div className="mt-10 flex items-center gap-4">
              <div className="h-px w-16 bg-[color:var(--gold)]" />
              <p className="caption text-[color:var(--ivory)]/60">
                Ismaël Sana · Parrain de lancement
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------------- CONTACT ---------------- */
function Contact() {
  return (
    <section
      id="contact"
      className="relative border-t border-[color:var(--gold)]/25 bg-[color:var(--ink-2)]/70 py-20 md:py-36"
    >
      <div className="mx-auto max-w-[1400px] px-5 sm:px-6 md:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <p className="caption mb-3 text-[color:var(--gold)] md:mb-4">— Chapitre 06 · Contact</p>
            <h2 className="font-display text-[2.6rem] font-light leading-[0.95] text-[color:var(--ivory)] sm:text-5xl md:text-7xl">
              Écrivez-nous.
              <br />
              <span className="italic text-[color:var(--gold)]">Nous veillons.</span>
            </h2>
            <p className="mt-6 max-w-md text-[13.5px] leading-[1.7] text-[color:var(--ivory)]/65 md:mt-8 md:text-[14px]">
              Une demande de devis, un appel d&apos;offre, un rendez-vous
              confidentiel ? Notre bureau vous répond sous 24 heures.
            </p>

            <div className="mt-10 space-y-5 md:mt-12 md:space-y-6">
              <ContactLine
                icon={Phone}
                label="Téléphone · 24/7"
                value={`${PHONE_1} · ${PHONE_2}`}
                href={`tel:${PHONE_1.replace(/\s/g, "")}`}
              />
              <ContactLine
                icon={Mail}
                label="E-mail"
                value="itingresecurite@gmail.com"
                href="mailto:itingresecurite@gmail.com"
              />
              <ContactLine
                icon={MapPin}
                label="Siège"
                value="Toudoubweogo, Ouagadougou — Burkina Faso"
              />
            </div>
          </div>

          <div className="md:col-span-7 md:pl-10">
            <form className="space-y-5 border border-[color:var(--gold)]/25 bg-[color:var(--ink)]/60 p-6 backdrop-blur sm:p-8 md:space-y-6 md:p-12">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <Field label="Nom complet" placeholder="Jean Dupont" />
                <Field label="Organisation" placeholder="Nom de l'entreprise" />
                <Field label="Téléphone" placeholder="+226 ..." />
                <Field label="Email" placeholder="vous@exemple.com" type="email" />
              </div>
              <div>
                <label className="caption mb-2 block text-[color:var(--gold)]">
                  Service souhaité
                </label>
                <div className="flex flex-wrap gap-2">
                  {["Gardiennage", "Investigation", "Formation", "Conseil"].map((s) => (
                    <label
                      key={s}
                      className="cursor-pointer border border-[color:var(--gold)]/30 px-4 py-2 text-xs text-[color:var(--ivory)]/70 transition-all hover:border-[color:var(--gold)] hover:text-[color:var(--gold)]"
                    >
                      <input type="checkbox" className="hidden" />
                      {s}
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="caption mb-2 block text-[color:var(--gold)]">Message</label>
                <textarea
                  rows={5}
                  placeholder="Décrivez votre besoin de sûreté…"
                  className="w-full border border-[color:var(--gold)]/25 bg-transparent p-4 text-sm text-[color:var(--ivory)] placeholder:text-[color:var(--ivory)]/30 focus:border-[color:var(--gold)] focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-3 bg-[color:var(--gold)] px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.18em] text-[color:var(--ink)] transition-all hover:bg-[color:var(--gold-bright)]"
              >
                Transmettre la demande
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({ label, placeholder, type = "text" }) {
  return (
    <div>
      <label className="caption mb-2 block text-[color:var(--gold)]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full border-b border-[color:var(--gold)]/25 bg-transparent py-3 text-sm text-[color:var(--ivory)] placeholder:text-[color:var(--ivory)]/30 focus:border-[color:var(--gold)] focus:outline-none"
      />
    </div>
  );
}

function ContactLine({ icon: Icon, label, value, href }) {
  const Wrap = href ? "a" : "div";
  return (
    <Wrap
      href={href}
      className="group flex items-start gap-4 border-b border-[color:var(--gold)]/15 pb-5 md:gap-5 md:pb-6"
    >
      <Icon className="mt-1 h-4 w-4 flex-shrink-0 text-[color:var(--gold)]" />
      <div className="min-w-0 flex-1">
        <p className="caption text-[color:var(--ivory)]/50">{label}</p>
        <p className="mt-1 break-words font-display text-base text-[color:var(--ivory)] transition-colors group-hover:text-[color:var(--gold)] sm:text-lg md:text-xl">
          {value}
        </p>
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-[color:var(--ivory)]/30 transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[color:var(--gold)]" />
      )}
    </Wrap>
  );
}

/* ---------------- FOOTER ---------------- */
function Footer() {
  return (
    <footer className="relative border-t border-[color:var(--gold)]/25 bg-[color:var(--ink)]">
      <div className="mx-auto max-w-[1400px] px-5 py-12 sm:px-6 md:px-10 md:py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-12 md:gap-12">
          <div className="col-span-2 md:col-span-5">
            <div className="flex items-center gap-4">
              <div className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-[color:var(--gold)]/60 md:h-16 md:w-16">
                <Image src="/logo.jpeg" alt="Itingré Sécurité" fill className="object-cover" />
              </div>
              <div>
                <p className="font-display text-2xl text-[color:var(--ivory)] md:text-3xl">
                  ITINGRÉ <span className="italic text-[color:var(--gold)]">Sécurité</span>
                </p>
                <p className="caption text-[color:var(--ivory)]/50">Ouagadougou · Burkina Faso</p>
              </div>
            </div>
            <p className="mt-6 max-w-sm font-display text-lg italic leading-tight text-[color:var(--ivory)]/80 md:mt-8 md:text-xl">
              « Héritier de l&apos;intégrité,
              <br />
              garant de votre sécurité. »
            </p>
          </div>

          <div className="col-span-1 md:col-span-3">
            <p className="caption mb-4 text-[color:var(--gold)]">Métiers</p>
            <ul className="space-y-2 text-sm text-[color:var(--ivory)]/70">
              <li><a href="#services">Gardiennage</a></li>
              <li><a href="#services">Investigation</a></li>
              <li><a href="#services">Formation</a></li>
              <li><a href="#services">Conseil en sûreté</a></li>
            </ul>
          </div>

          <div className="col-span-1 md:col-span-4">
            <p className="caption mb-4 text-[color:var(--gold)]">Agréments d&apos;État</p>
            <ul className="space-y-2 font-mono text-[10px] leading-relaxed text-[color:var(--ivory)]/55 md:text-[10.5px]">
              {ARRETES.map((a) => (
                <li key={a}>ARRÊTÉ {a}</li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-10 bg-[color:var(--gold)]/15 md:my-12" />

        <div className="flex flex-col items-start justify-between gap-3 text-[11px] text-[color:var(--ivory)]/50 md:flex-row md:items-center md:text-xs">
          <p>© {new Date().getFullYear()} Itingré Sécurité · Tous droits réservés.</p>
          <p className="font-mono">
            {PHONE_1} &nbsp;·&nbsp; {PHONE_2}
          </p>
        </div>
      </div>
    </footer>
  );
}
