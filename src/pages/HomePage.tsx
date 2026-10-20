import { useState } from "react";

import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";

import InfoCard from "../components/ui/InfoCard";
import StayReceipt from "../components/ui/StayRecipt";
import WelcomeCard from "../components/ui/WelcomeCard";

export default function HomePage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F8F5EF] lg:flex">
      {/* Navegação lateral */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Conteúdo principal */}
      <div className="min-w-0 flex-1">
        <Header
          onMenuClick={() => setSidebarOpen(true)}
          hostName="Margaux"
          notificationCount={2}
        />

        <main className="mx-auto w-full max-w-7xl space-y-8 px-4 py-8 sm:px-6 sm:py-10 lg:px-10">
          {/* Introdução */}
          <section>
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#8B8177]">
              Maison Soleil · Votre séjour
            </p>

            <h1 className="mt-3 font-display text-3xl text-[#352746] sm:text-4xl">
              Bonjour et bienvenue !
            </h1>

            <p className="mt-3 max-w-2xl font-sans text-sm leading-7 text-[#62596A] sm:text-base">
              Toutes les informations essentielles pour profiter pleinement de
              votre séjour sont réunies ici.
            </p>
          </section>

          {/* Boas-vindas da anfitriã */}
          <section aria-label="Message de bienvenue">
            <WelcomeCard />
          </section>

          {/* Informações úteis */}
          <section>
            <div className="mb-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8B8177]">
                Informations pratiques
              </p>

              <h2 className="mt-2 font-display text-2xl text-[#352746] sm:text-3xl">
                Tout pour votre confort
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
              <InfoCard
                variant="arrival"
                number="01"
                label="Arrival"
                title="Check-in"
                subtitle="À partir de 15:00"
                description="Votre arrivée et l'accès à la maison."
              />

              <InfoCard
                variant="wifi"
                number="02"
                label="Connexion"
                title="Wi-Fi"
                subtitle="Le Soleil · Guest"
                description="Restez connecté pendant votre séjour."
              />

              <InfoCard
                variant="breakfast"
                number="03"
                label="Gourmandise"
                title="Petit-déjeuner"
                subtitle="De 8:00 à 10:30"
                description="Commencez la journée en douceur."
              />
            </div>
          </section>

          {/* Recibo da reserva */}
          <section>
            <div className="mb-5">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#8B8177]">
                Votre réservation
              </p>

              <h2 className="mt-2 font-display text-2xl text-[#352746] sm:text-3xl">
                Le détail de votre séjour
              </h2>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#62596A]">
                Retrouvez les informations de votre réservation et le
                récapitulatif de votre séjour.
              </p>
            </div>

            <StayReceipt />
          </section>

          {/* Rodapé */}
          <footer className="border-t border-[#E8E0D5] pt-6">
            <p className="text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#8B8177]">
              Maison Soleil · Une maison loin de chez vous
            </p>
          </footer>
        </main>
      </div>
    </div>
  );
}
