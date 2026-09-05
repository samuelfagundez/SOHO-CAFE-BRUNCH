import { ViteReactSSG } from "vite-react-ssg";
import { routes } from "./routes";
import "./index.css";

// Este sitio no tiene ninguna ruta con datos reales que cargar: el único
// fetch que hace vite-react-ssg en producción es su manifiesto interno
// "static-loader-data-manifest-<hash>.json" (hash aleatorio, distinto en
// cada build). Si el navegador sirve una copia en caché del index.html de
// un despliegue anterior, ese hash ya no existe tras el redeploy y
// GitHub Pages devuelve el 404.html en vez de JSON, lo que revienta el
// `.json()` interno con "Unexpected token '<'" y tumba toda la app (ver
// HANDOFF, bug #9). Como no hay ningún dato real que perder si esa
// petición falla, es seguro interceptarla aquí mismo: si no llega un
// JSON válido, se sustituye por un manifiesto vacío antes de que
// vite-react-ssg intente parsearlo. Así la recuperación es instantánea e
// invisible, sin pasar por RouteErrorBoundary — ese componente se deja
// como red de seguridad para cualquier otro tipo de error de ruta, no
// como mecanismo principal de recuperación de este caso conocido.
if (typeof window !== "undefined") {
  const originalFetch = window.fetch.bind(window);
  window.fetch = async (...args) => {
    const input = args[0];
    const url =
      typeof input === "string"
        ? input
        : input instanceof Request
          ? input.url
          : String(input);
    const isStaticLoaderRequest =
      url.includes("static-loader-data-manifest-") ||
      url.includes("/static-loader-data/");
    if (!isStaticLoaderRequest) {
      return originalFetch(...args);
    }
    try {
      const res = await originalFetch(...args);
      if (!res.ok) throw new Error(`static loader fetch: ${res.status}`);
      const contentType = res.headers.get("content-type") || "";
      if (!contentType.includes("json")) {
        throw new Error("static loader fetch: respuesta no es JSON");
      }
      return res;
    } catch {
      return new Response("{}", {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    }
  };
}

export const createRoot = ViteReactSSG(
  { routes, basename: import.meta.env.BASE_URL },
  ({ router }) => {
    void router;
  },
);
