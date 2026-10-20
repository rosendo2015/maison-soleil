import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { ComponentsPage } from "./pages/ComponentsPage";
import HomePage from "./pages/HomePage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <nav className="flex items-center justify-between gap-4 border-b border-stone-200 bg-white px-5 py-4">
          <span className="font-serif text-xl font-bold text-[#9b4b2b]">
            Maison Soleil
          </span>

          <div className="flex gap-2 sm:gap-4">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm ${
                  isActive
                    ? "bg-[#29231f] text-white"
                    : "text-stone-600 hover:bg-stone-100"
                }`
              }
            >
              HOME
            </NavLink>

            <NavLink
              to="/componentes"
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm ${
                  isActive
                    ? "bg-[#29231f] text-white"
                    : "text-stone-600 hover:bg-stone-100"
                }`
              }
            >
              Componentes
            </NavLink>
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/componentes" element={<ComponentsPage />} />
          <Route
            path="*"
            element={
              <main className="p-10 text-center">
                <h1 className="font-serif text-3xl">Página não encontrada</h1>
                <NavLink className="mt-4 inline-block underline" to="/">
                  Voltar para a HOME
                </NavLink>
              </main>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
