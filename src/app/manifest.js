export default function manifest() {
  return {
    name: "Itingré Sécurité",
    short_name: "Itingré",
    description:
      "Société burkinabè de gardiennage, investigation privée et formation. Ouagadougou, Burkina Faso.",
    start_url: "/",
    display: "standalone",
    background_color: "#070e18",
    theme_color: "#070e18",
    lang: "fr-BF",
    dir: "ltr",
    orientation: "portrait",
    categories: ["business", "security", "services"],
    icons: [
      {
        src: "/logo.jpeg",
        sizes: "192x192",
        type: "image/jpeg",
        purpose: "any",
      },
      {
        src: "/logo.jpeg",
        sizes: "512x512",
        type: "image/jpeg",
        purpose: "any",
      },
    ],
  };
}
