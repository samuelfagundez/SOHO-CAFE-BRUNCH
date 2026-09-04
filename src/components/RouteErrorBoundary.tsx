import { useEffect } from "react";
import { useRouteError } from "react-router-dom";

// vite-react-ssg intenta cargar un manifiesto de datos en cada visita
// (aunque este sitio no usa loaders reales, ver "vite-react-ssg" en
// node_modules — es un comportamiento propio del framework). Si el
// navegador tiene en caché el index.html de un despliegue anterior, ese
// manifiesto ya no existe tras el siguiente deploy y GitHub Pages
// devuelve la página 404 en HTML — lo que rompe el "JSON.parse" con
// "Unexpected token '<'" y React Router muestra su pantalla genérica de
// error. Es un fallo transitorio de caché tras un deploy, no un bug de
// contenido: una recarga sola lo resuelve casi siempre. Este boundary
// intenta esa recarga una vez automáticamente antes de mostrar cualquier
// mensaje al usuario.
const RETRY_PARAM = "ssg_retry";

export default function RouteErrorBoundary() {
  const error = useRouteError();

  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (!url.searchParams.has(RETRY_PARAM)) {
      url.searchParams.set(RETRY_PARAM, "1");
      window.location.replace(url.toString());
    }
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-xl flex-col items-center justify-center px-4 text-center">
      <h1 className="font-display text-2xl font-bold">Un momento…</h1>
      <p className="mt-4 text-[var(--color-ink)]/70">
        Hubo un problema cargando la página. Si no se recarga sola en unos
        segundos, prueba a actualizar el navegador.
      </p>
      <button
        type="button"
        onClick={() => window.location.reload()}
        className="btn-primary mt-6"
      >
        Recargar
      </button>
    </div>
  );
}
