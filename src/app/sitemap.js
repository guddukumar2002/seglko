export default function sitemap() {
  return [
    {
      url: "https://seglko.org",
      lastModified: new Date(),
      priority: 1.0,
    },
    {
      url: "https://seglko.org/about",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://seglko.org/contact",
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: "https://seglko.org/admission",
      lastModified: new Date(),
      priority: 0.8,
    },
    // Microsites
    {
      url: "https://seglko.org/ssitm",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://seglko.org/sitm",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://seglko.org/scl",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://seglko.org/scp",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://seglko.org/scep",
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: "https://seglko.org/lip",
      lastModified: new Date(),
      priority: 0.9,
    },
  ];
}