import {
  CalendarDays,
  CheckCircle2,
  Moon,
  ReceiptText,
  Users,
} from "lucide-react";
import { tv, type VariantProps } from "tailwind-variants";

const stayReceiptVariants = tv({
  slots: {
    card: [
      "overflow-hidden rounded-3xl border border-neutral-200",
      "bg-white text-neutral-900 shadow-sm",
    ],
    header: [
      "flex items-start justify-between gap-4",
      "border-b border-neutral-200 bg-neutral-50 p-6 sm:p-8",
    ],
    eyebrow:
      "font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-500",
    title: "mt-2 font-display text-2xl sm:text-3xl",
    subtitle: "mt-2 text-sm leading-6 text-neutral-600",
    status: [
      "inline-flex shrink-0 items-center gap-1.5 rounded-full",
      "bg-terracotta-100 px-3 py-1.5",
      "font-mono text-[10px] uppercase tracking-wider text-terracotta-700",
    ],
    content: "space-y-6 p-6 sm:p-8",
    sectionTitle: "mb-4 font-display text-lg",
    dates: "grid grid-cols-1 gap-3 sm:grid-cols-2",
    detail: "rounded-2xl border border-neutral-200 p-4",
    detailLabel: "flex items-center gap-2 text-xs text-neutral-500",
    detailValue: "mt-3 font-display text-lg",
    divider: "border-t border-dashed border-neutral-300",
    summaryRow: "flex items-center justify-between gap-4 text-sm",
    totalRow: "flex items-end justify-between gap-4",
    totalLabel: "font-display text-xl",
    totalValue: "font-display text-2xl text-terracotta-700 sm:text-3xl",
    footer: "border-t border-neutral-200 bg-neutral-50 px-6 py-5 sm:px-8",
    footerText: "text-xs leading-5 text-neutral-500",
  },
  variants: {
    size: {
      sm: {
        card: "max-w-sm",
        header: "p-5",
        content: "p-5",
        footer: "px-5 py-4",
      },
      md: {
        card: "max-w-2xl",
      },
      lg: {
        card: "max-w-4xl",
        header: "p-8 sm:p-10",
        content: "p-8 sm:p-10",
      },
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type StayReceiptProps = VariantProps<typeof stayReceiptVariants> & {
  guestName?: string;
  confirmationCode?: string;
  checkIn?: string;
  checkOut?: string;
  guests?: number;
  nights?: number;
  total?: string;
  currency?: string;
  className?: string;
};

export function StayReceipt({
  guestName = "Camille Martin",
  confirmationCode = "MS-2026-0842",
  checkIn = "20 out. 2026",
  checkOut = "23 out. 2026",
  guests = 2,
  nights = 3,
  total = "1.250,00",
  currency = "R$",
  size = "md",
  className,
}: StayReceiptProps) {
  const styles = stayReceiptVariants({ size });

  return (
    <article
      className={styles.card({ className })}
      aria-label="Recibo da reserva"
    >
      <header className={styles.header()}>
        <div>
          <p className={styles.eyebrow()}>Maison Soleil · Séjour</p>

          <h2 className={styles.title()}>Recibo da reserva</h2>

          <p className={styles.subtitle()}>
            Uma estadia especial espera por você, {guestName}.
          </p>
        </div>

        <div className={styles.status()}>
          <CheckCircle2 size={14} aria-hidden="true" />
          Confirmada
        </div>
      </header>

      <div className={styles.content()}>
        <section>
          <p className={styles.eyebrow()}>
            <ReceiptText
              className="mr-2 inline-block"
              size={14}
              aria-hidden="true"
            />
            Detalhes da reserva
          </p>

          <p className="mt-2 font-mono text-sm">{confirmationCode}</p>
        </section>

        <section>
          <h3 className={styles.sectionTitle()}>Sua estadia</h3>

          <div className={styles.dates()}>
            <div className={styles.detail()}>
              <p className={styles.detailLabel()}>
                <CalendarDays size={16} aria-hidden="true" />
                Check-in
              </p>

              <p className={styles.detailValue()}>{checkIn}</p>
            </div>

            <div className={styles.detail()}>
              <p className={styles.detailLabel()}>
                <CalendarDays size={16} aria-hidden="true" />
                Check-out
              </p>

              <p className={styles.detailValue()}>{checkOut}</p>
            </div>
          </div>

          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className={styles.detail()}>
              <p className={styles.detailLabel()}>
                <Users size={16} aria-hidden="true" />
                Hóspedes
              </p>

              <p className={styles.detailValue()}>
                {guests} {guests === 1 ? "hóspede" : "hóspedes"}
              </p>
            </div>

            <div className={styles.detail()}>
              <p className={styles.detailLabel()}>
                <Moon size={16} aria-hidden="true" />
                Duração
              </p>

              <p className={styles.detailValue()}>
                {nights} {nights === 1 ? "noite" : "noites"}
              </p>
            </div>
          </div>
        </section>

        <section className="space-y-4">
          <h3 className={styles.sectionTitle()}>Resumo do pagamento</h3>

          <div className={styles.summaryRow()}>
            <span className="text-neutral-600">
              Hospedagem · {nights} {nights === 1 ? "noite" : "noites"}
            </span>

            <span className="font-medium">
              {currency} {total}
            </span>
          </div>

          <div className={styles.divider()} />

          <div className={styles.totalRow()}>
            <div>
              <p className={styles.totalLabel()}>Total da reserva</p>

              <p className="mt-1 text-xs text-neutral-500">
                Valor ilustrativo para demonstração
              </p>
            </div>

            <p className={styles.totalValue()}>
              {currency} {total}
            </p>
          </div>
        </section>
      </div>

      <footer className={styles.footer()}>
        <p className={styles.footerText()}>
          Obrigado por escolher a Maison Soleil. Guarde o código da reserva para
          consultar os detalhes da sua estadia.
        </p>
      </footer>
    </article>
  );
}

export default StayReceipt;
