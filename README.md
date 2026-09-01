# SOHO CAFÉ - BRUNCH

Landing page tipo SPA para SOHO CAFÉ - BRUNCH (Camins al Grau, València), basada en la plantilla de [La Finestra](https://github.com/samuelfagundez/la-finestra).

- **Stack:** React 19 + TypeScript + Vite 8, pre-renderizado con [`vite-react-ssg`](https://github.com/vite-pages/vite-react-ssg), Tailwind CSS 4, `react-helmet-async` para SEO/JSON-LD.
- **Contenido:** todo el texto, datos de contacto, horario y fotos del negocio vive en un único archivo: [`src/content.ts`](src/content.ts). Editar solo ahí para actualizar el sitio.
- **Contacto:** sin formularios ni backend — botón flotante de WhatsApp y CTAs de "Contáctanos" / "Reservar mesa", todos con `wa.me` y mensaje predefinido.
- **Carta:** enlaza a la carta pública del negocio en Carrd ([español](https://sohobrunch.carrd.co/) / [inglés](https://sohobrunch2.carrd.co/)) desde el header y el footer.
- **Hosting:** GitHub Pages (gratis), vía GitHub Actions (`.github/workflows/deploy.yml`), sin secrets.

## Desarrollo local

```bash
npm ci
npm run dev       # servidor de desarrollo
npm run build     # build de producción (tsc -b && vite-react-ssg build)
npm run lint      # oxlint
```

## Pendientes conocidos

- Rango de precio (10-20 € por persona), horario e Instagram (@sohobrunch) confirmados directamente por el cliente y verificados contra la ficha de Google Maps del negocio.
- Correo de contacto público: no facilitado por el cliente.
- Sin Facebook/TikTok confirmados — no se añaden enlaces hasta tenerlos.
