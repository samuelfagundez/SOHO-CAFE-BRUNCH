// ---------------------------------------------------------------------------
// Contenido único del negocio. Editar SOLO este archivo para actualizar
// nombre, dirección, horario, fotos, redes, etc. Todo el sitio lee de aquí.
// ---------------------------------------------------------------------------

export interface DayHours {
  day: string;
  hours: string;
}

export interface Photo {
  src: string;
  alt: string;
}

export const content = {
  name: "SOHO CAFÉ - BRUNCH",
  shortName: "SOHO Café",
  tagline: "Brunch en tonos rosa junto a Ciudad de las Artes, València",
  description:
    "SOHO CAFÉ - BRUNCH es un restaurante de brunch en Camins al Grau, València, valorado con 4,3 estrellas por más de 700 clientes en Google. Su carta combina opciones healthy y caprichos dulces y salados —desde açaí bowls hasta huevos benedict o syrniki— en un local de estética en tonos rosa muy fotogénica, con terraza y ambiente amigable con la comunidad LGBTQ+. Abre todos los días de 8:00 a 23:00, para desayunar, comer o cenar.",
  metaDescription:
    "SOHO CAFÉ - BRUNCH: restaurante de brunch en Camins al Grau, València. Açaí bowls, huevos benedict, café de especialidad y terraza. 4,3★ en Google con más de 700 opiniones. Abierto todos los días.",
  keywords: [
    "SOHO CAFÉ - BRUNCH",
    "SOHO Brunch",
    "València",
    "Camins al Grau",
    "brunch",
    "brunch Valencia",
    "restaurante de brunch",
    "açaí bowl",
  ],
  priceRange: "10 € - 20 €",
  priceRangeDisplay: "10 € – 20 € por persona aprox.",
  cuisine: "Brunch internacional",

  rating: {
    value: 4.3,
    count: 713,
    countDisplay: "713",
  },

  highlights: [
    "Carta variada, de opciones healthy a caprichos dulces y salados: açaí bowls, huevos benedict, syrniki y más.",
    "Local en tonos rosa muy fotogénico, con terraza y ambiente informal.",
    "Amigable con la comunidad LGBTQ+ y con espacio seguro para personas trans.",
    "Abierto todos los días de 8:00 a 23:00 — desayuno, brunch, comida y cena.",
  ],

  address: {
    streetAddress: "Carrer de Trafalgar, 46",
    addressLocality: "València",
    addressRegion: "Comunitat Valenciana",
    postalCode: "46023",
    addressCountry: "ES",
    full: "Carrer de Trafalgar, 46, Camins al Grau, 46023 València",
  },

  // Coordenadas tomadas del propio enlace de Google Maps del negocio.
  geo: { latitude: 39.4591915, longitude: -0.3459229 } as {
    latitude: number;
    longitude: number;
  } | null,

  phone: "+34 664 67 98 51",
  phoneDisplay: "664 67 98 51",
  // Solo dígitos, con código de país, sin "+" — formato que exige wa.me.
  whatsappNumber: "34664679851",
  // Pendiente: el cliente no dio un correo de contacto público.
  email: "",

  // URL final del sitio en GitHub Pages (repo público "soho-cafe-brunch").
  siteUrl: "https://samuelfagundez.github.io/soho-cafe-brunch/",

  // La carta pública del negocio (Carrd), en español e inglés.
  menuUrl: "https://sohobrunch.carrd.co/",
  menuUrlEn: "https://sohobrunch2.carrd.co/",

  social: {
    instagram: "https://www.instagram.com/sohobrunch",
    facebook: "",
    tiktok: "",
    whatsapp:
      "https://wa.me/34664679851?text=" +
      encodeURIComponent(
        "¡Hola! Vengo de la página web de SOHO CAFÉ - BRUNCH.",
      ),
  },

  hours: [
    { day: "Lunes", hours: "8:00 – 23:00" },
    { day: "Martes", hours: "8:00 – 23:00" },
    { day: "Miércoles", hours: "8:00 – 23:00" },
    { day: "Jueves", hours: "8:00 – 23:00" },
    { day: "Viernes", hours: "8:00 – 23:00" },
    { day: "Sábado", hours: "8:00 – 23:00" },
    { day: "Domingo", hours: "8:00 – 23:00" },
  ] as DayHours[],

  // openingHoursSpecification en formato schema.org (día abreviado ISO).
  // Mismo horario los 7 días — un único bloque cubre toda la semana.
  openingHoursSchema: [
    {
      days: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "08:00",
      closes: "23:00",
    },
  ],

  gallery: [
    {
      src: "/gallery/soho-cafe-brunch-interior-rosa.jpg",
      alt: "Interior en tonos rosa de SOHO CAFÉ - BRUNCH, con banquetas y azulejos terracota",
    },
    {
      src: "/gallery/soho-cafe-brunch-terraza-fachada.jpg",
      alt: "Fachada y terraza de SOHO CAFÉ - BRUNCH en Carrer de Trafalgar, València",
    },
    {
      src: "/gallery/soho-cafe-brunch-bowls-fruta.jpg",
      alt: "Bowls de fruta fresca y granola de SOHO CAFÉ - BRUNCH",
    },
    {
      src: "/gallery/soho-cafe-brunch-matcha-rosas.jpg",
      alt: "Matcha con crema rosa y pétalos de SOHO CAFÉ - BRUNCH",
    },
  ] as Photo[],

  // Embed de Google Maps sin API key, geolocalizando por dirección de texto.
  mapEmbedSrc:
    "https://www.google.com/maps?q=" +
    encodeURIComponent(
      "SOHO CAFÉ - BRUNCH, Carrer de Trafalgar, 46, 46023 València",
    ) +
    "&hl=es&z=16&output=embed",
  mapLinkUrl: "https://maps.app.goo.gl/5RQquVknMMX7CkwQ7",
};

/** Link de WhatsApp click-to-chat con mensaje predefinido. */
export function whatsappLink(message: string): string {
  return `https://wa.me/${content.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_CONTACT_MESSAGE =
  "¡Hola! Vengo de la página web de SOHO CAFÉ - BRUNCH y tengo una consulta.";
export const WHATSAPP_RESERVE_MESSAGE =
  "¡Hola! Vengo de la página web de SOHO CAFÉ - BRUNCH y me gustaría hacer una reserva.";

// Link externo del sistema de reservas (se abre en pestaña nueva). Mientras
// no se defina, "Reservar mesa" cae de vuelta a WhatsApp automáticamente.
export const reservationLink = "";

/** Href del botón "Contáctanos": siempre WhatsApp. */
export function contactHref(): string {
  return whatsappLink(WHATSAPP_CONTACT_MESSAGE);
}

/** Href del botón "Reservar mesa": link externo si ya está definido, si no WhatsApp. */
export function reservationHref(): string {
  return reservationLink || whatsappLink(WHATSAPP_RESERVE_MESSAGE);
}
