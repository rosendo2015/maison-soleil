import { Bell, Menu, Sun } from "lucide-react";

type HeaderProps = {
  onMenuClick?: () => void;
  hostName?: string;
  notificationCount?: number;
};

export function Header({
  onMenuClick,
  hostName = "Margaux",
  notificationCount = 0,
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-[#E8E0D5] bg-[#F8F5EF]/95 backdrop-blur-sm">
      <div className="flex min-h-[76px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Marca e botão do menu mobile */}
        <div className="flex min-w-0 items-center gap-3">
          <button
            type="button"
            onClick={onMenuClick}
            aria-label="Abrir menu de navegação"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[#352746] transition hover:bg-[#EDE6DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F55] lg:hidden"
          >
            <Menu size={21} strokeWidth={1.7} />
          </button>

          <a
            href="/"
            aria-label="Maison Soleil — página inicial"
            className="flex min-w-0 items-center gap-3"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#352746] text-[#F8F5EF]">
              <Sun size={21} strokeWidth={1.5} />
            </span>

            <span className="min-w-0">
              <span className="block truncate font-display text-xl leading-tight text-[#352746] sm:text-2xl">
                Maison Soleil
              </span>

              <span className="mt-1 hidden font-mono text-[9px] uppercase tracking-[0.18em] text-[#8B8177] sm:block">
                Votre maison loin de chez vous
              </span>
            </span>
          </a>
        </div>

        {/* Área de ações e perfil */}
        <div className="flex shrink-0 items-center gap-3 sm:gap-5">
          <button
            type="button"
            aria-label={
              notificationCount > 0
                ? `Notificações: ${notificationCount} não lidas`
                : "Notificações"
            }
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-[#352746] transition hover:bg-[#EDE6DC] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B86F55]"
          >
            <Bell size={19} strokeWidth={1.6} />

            {notificationCount > 0 && (
              <span className="absolute right-2 top-2 flex h-2 w-2 rounded-full bg-[#B86F55] ring-2 ring-[#F8F5EF]" />
            )}
          </button>

          <div className="h-8 w-px bg-[#E2D8CC]" />

          <div className="flex items-center gap-3">
            <div className="hidden text-right sm:block">
              <p className="font-sans text-sm font-medium text-[#352746]">
                {hostName}
              </p>

              <p className="mt-0.5 font-mono text-[9px] uppercase tracking-[0.14em] text-[#8B8177]">
                Votre hôte
              </p>
            </div>

            <div
              aria-label={`Perfil de ${hostName}`}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#D8B5A4] bg-[#E9D7CA] font-display text-lg text-[#6D4038]"
            >
              {hostName.charAt(0).toUpperCase()}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
