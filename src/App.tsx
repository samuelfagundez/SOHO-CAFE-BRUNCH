import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  // Si la página llegó a cargar hasta aquí, ya no hace falta el parámetro
  // de reintento que pudo agregar RouteErrorBoundary — lo limpiamos de la
  // URL para que no se quede pegado tras una recuperación exitosa.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const url = new URL(window.location.href);
    if (url.searchParams.has("ssg_retry")) {
      url.searchParams.delete("ssg_retry");
      window.history.replaceState({}, "", url.toString());
    }
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <a href="#contenido" className="skip-link">
        Saltar al contenido
      </a>
      <Header />
      <main id="contenido" className="flex-1">
        <Outlet />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
