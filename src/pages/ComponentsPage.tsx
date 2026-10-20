import Header from "../components/layout/Header";
import { Button } from "../components/ui/Button";
import InfoCard from "../components/ui/InfoCard";
import StayReceipt from "../components/ui/StayRecipt";
import WelcomeCard from "../components/ui/WelcomeCard";

export function ComponentsPage() {
  return (
    <main className="min-h-screen bg-[#f8f4ed] p-6 md:p-10">
      <p className="text-xs uppercase tracking-[0.2em] text-stone-500">
        Design system · Playground
      </p>

      <h1 className="mt-3 font-serif text-4xl text-[#29231f]">Componentes</h1>

      <p className="mt-3 max-w-xl text-stone-600">
        Um espaço para testar estilos, variantes e componentes da Maison Soleil
        antes de utilizá-los na página principal.
      </p>

      <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="font-display text-2xl">Header</h2>

        <div className="overflow-hidden rounded-xl border border-[#E8E0D5]">
          <Header notificationCount={2} />
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6">
        <h2 className="font-serif text-2xl">Paleta de cores</h2>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { name: "Creme", color: "#f8f4ed" },
            { name: "Terracota", color: "#9b4b2b" },
            { name: "Escuro", color: "#29231f" },
            { name: "Roxo", color: "#281a32" },
          ].map((item) => (
            <div key={item.name}>
              <div
                className="h-20 rounded-xl border border-black/10"
                style={{ backgroundColor: item.color }}
              />
              <p className="mt-2 text-sm font-medium">{item.name}</p>
              <p className="text-xs text-stone-500">{item.color}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-neutral-400 bg-neutral-0 p-6">
        <h2 className="font-display text-2xl text-neutral-900">Botões</h2>

        <p className="mt-2 text-neutral-600">
          Variantes visuais definidas com tailwind-variants.
        </p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          <Button variant="primary">Principal</Button>
          <Button variant="secondary">Secundário</Button>
          <Button variant="terracotta">Terracota</Button>
          <Button variant="sun">Sol</Button>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <Button size="sm">Pequeno</Button>
          <Button size="md">Médio</Button>
          <Button size="lg">Grande</Button>
          <Button disabled>Desabilitado</Button>
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-neutral-400 bg-neutral-100 p-5 md:p-6">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-neutral-600">
          Design system · Cards
        </p>

        <h2 className="mt-2 font-display text-2xl text-neutral-900">
          Cartões informativos
        </h2>

        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          <InfoCard
            variant="arrival"
            number="01"
            label="Arrival"
            title="Check-in from 15:00"
            subtitle="Sat, 25 April"
            description="Ring the brass bell by the blue door. If we're at the market, the key is in the terracotta pot by the olive tree."
          />

          <InfoCard
            variant="wifi"
            number="02"
            label="WiFi"
            title="Le Soleil · Guest"
            subtitle="Password below"
          >
            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between gap-3 rounded-lg bg-neutral-100 px-3 py-2">
                <span className="font-mono uppercase tracking-wider text-neutral-600">
                  Network
                </span>
                <span className="text-right text-neutral-800">
                  Le Soleil · Guest
                </span>
              </div>

              <div className="flex items-center justify-between gap-3 rounded-lg bg-neutral-100 px-3 py-2">
                <span className="font-mono uppercase tracking-wider text-neutral-600">
                  Password
                </span>
                <span className="font-medium text-neutral-800">
                  soleil-2026
                </span>
              </div>
            </div>
          </InfoCard>

          <InfoCard
            variant="breakfast"
            number="03"
            label="Breakfast"
            title="Served 8 – 10:30"
            subtitle="On the terrace"
            description="Fresh figs, Marseille honey, pain au levain, and espresso. Gluten-free option? Leave a note the night before."
          />
        </div>
      </section>

      <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 space-y-4">
        <h2 className="font-display text-2xl">WelcomeCard</h2>

        <WelcomeCard />
      </section>

      <section className="mt-6 rounded-2xl border border-stone-200 bg-white p-6 space-y-4">
        <h2 className="font-display text-2xl">StayReceipt</h2>

        <StayReceipt />
      </section>
    </main>
  );
}
