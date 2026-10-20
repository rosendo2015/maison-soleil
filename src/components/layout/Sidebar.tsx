import {
  CalendarDays,
  CircleHelp,
  House,
  LogOut,
  Settings,
  Sparkles,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";

type SidebarProps = {
  isOpen?: boolean;
  onClose?: () => void;
  onLogout?: () => void;
};

const navigationItems = [
  {
    label: "Accueil",
    description: "Tableau de bord",
    to: "/",
    icon: House,
    end: true,
  },
  {
    label: "Ma réservation",
    description: "Détails du séjour",
    to: "/reservation",
    icon: CalendarDays,
    end: false,
  },
];

const secondaryItems = [
  {
    label: "Aide & contact",
    to: "/aide",
    icon: CircleHelp,
  },
  {
    label: "Paramètres",
    to: "/parametres",
    icon: Settings,
  },
];

export function Sidebar({ isOpen = false, onClose, onLogout }: SidebarProps) {
  return (
    <>
      {/* Overlay mobile */}
      {isOpen && (
        <button
          type="button"
          aria-label="Fermer le menu"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-[#241B30]/50 backdrop-blur-[2px] lg:hidden"
        />
      )}

      <aside
        id="main-sidebar"
        aria-label="Navigation principale"
        className={[
          "fixed inset-y-0 left-0 z-50 flex w-[272px] flex-col",
          "border-r border-[#E8E0D5] bg-[#F8F5EF]",
          "transition-transform duration-300 ease-in-out",
          "lg:sticky lg:top-0 lg:z-20 lg:h-screen lg:translate-x-0",
          isOpen ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        {/* Marca */}
        <div className="flex min-h-[76px] items-center justify-between border-b border-[#E8E0D5] px-6">
          <NavLink to="/" onClick={onClose} className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#352746] text-[#F8F5EF]">
              <Sparkles size={20} strokeWidth={1.5} />
            </span>

            <span>
              <span className="block font-display text-xl leading-tight text-[#352746]">
                Maison Soleil
              </span>

              <span className="mt-1 block font-mono text-[9px] uppercase tracking-[0.18em] text-[#8B8177]">
                Guest experience
              </span>
            </span>
          </NavLink>

          <button
            type="button"
            aria-label="Fermer le menu"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full text-[#352746] hover:bg-[#EDE6DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F55] lg:hidden"
          >
            <X size={19} />
          </button>
        </div>

        {/* Perfil da anfitriã */}
        <div className="mx-4 mt-6 rounded-2xl bg-[#352746] p-4 text-[#F8F5EF]">
          <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-[#D8C9DD]">
            Votre séjour
          </p>

          <p className="mt-2 font-display text-xl">Bienvenue !</p>

          <p className="mt-1 text-xs leading-5 text-[#E0D8E5]">
            Tout est prêt pour vous accueillir.
          </p>
        </div>

        {/* Navegação principal */}
        <nav className="flex-1 overflow-y-auto px-4 py-7">
          <p className="mb-3 px-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#8B8177]">
            Menu principal
          </p>

          <div className="space-y-1">
            {navigationItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  end={item.end}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      "group flex items-center gap-3 rounded-xl px-3 py-3",
                      "transition-colors duration-200",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F55]",
                      isActive
                        ? "bg-[#EAD9CF] text-[#6D4038]"
                        : "text-[#62596A] hover:bg-[#EDE6DC] hover:text-[#352746]",
                    ].join(" ")
                  }
                >
                  {({ isActive }) => (
                    <>
                      <Icon size={19} strokeWidth={isActive ? 2 : 1.6} />

                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium">
                          {item.label}
                        </span>

                        <span
                          className={[
                            "mt-0.5 block text-[11px]",
                            isActive ? "text-[#8B6258]" : "text-[#8B8177]",
                          ].join(" ")}
                        >
                          {item.description}
                        </span>
                      </span>

                      {isActive && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[#B86F55]" />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </div>

          <p className="mb-3 mt-8 px-3 font-mono text-[9px] uppercase tracking-[0.18em] text-[#8B8177]">
            Assistance
          </p>

          <div className="space-y-1">
            {secondaryItems.map((item) => {
              const Icon = item.icon;

              return (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={onClose}
                  className={({ isActive }) =>
                    [
                      "flex items-center gap-3 rounded-xl px-3 py-3",
                      "text-sm transition-colors",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F55]",
                      isActive
                        ? "bg-[#EAD9CF] text-[#6D4038]"
                        : "text-[#62596A] hover:bg-[#EDE6DC] hover:text-[#352746]",
                    ].join(" ")
                  }
                >
                  <Icon size={19} strokeWidth={1.6} />
                  <span>{item.label}</span>
                </NavLink>
              );
            })}
          </div>
        </nav>

        {/* Rodapé */}
        <div className="border-t border-[#E8E0D5] p-4">
          <div className="flex items-center gap-3 rounded-xl px-3 py-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#E9D7CA] font-display text-lg text-[#6D4038]">
              M
            </div>

            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium text-[#352746]">
                Margaux
              </p>

              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-wider text-[#8B8177]">
                Votre hôte
              </p>
            </div>

            {onLogout && (
              <button
                type="button"
                onClick={onLogout}
                aria-label="Se déconnecter"
                className="flex h-9 w-9 items-center justify-center rounded-full text-[#62596A] transition hover:bg-[#EAD9CF] hover:text-[#6D4038] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F55]"
              >
                <LogOut size={17} />
              </button>
            )}
          </div>

          <p className="px-3 pb-1 text-center font-mono text-[9px] tracking-wider text-[#A49A90]">
            MAISON SOLEIL · 2026
          </p>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
