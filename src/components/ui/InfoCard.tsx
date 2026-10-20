import { Coffee, KeyRound, Wifi } from "lucide-react";
import type { ReactNode } from "react";
import { tv, type VariantProps } from "tailwind-variants";

const infoCardVariants = tv({
  slots: {
    card: [
      "flex h-full flex-col rounded-2xl border border-neutral-400",
      "bg-neutral-0 p-5 shadow-sm",
      "transition duration-200 hover:-translate-y-0.5 hover:shadow-md",
    ],
    header: "flex items-center justify-between gap-3",
    heading: "flex min-w-0 items-center gap-3",
    iconWrapper: [
      "flex size-9 shrink-0 items-center justify-center rounded-lg",
      "text-white",
    ],
    icon: "size-5",
    label: ["font-mono text-xs font-medium uppercase tracking-[0.16em]"],
    number: "font-display text-2xl",
    title: "mt-5 font-display text-xl leading-snug text-neutral-900",
    subtitle: "mt-1 text-xs leading-relaxed text-neutral-600",
    description: "mt-3 text-sm leading-relaxed text-neutral-700",
    content: "mt-4",
  },
  variants: {
    variant: {
      arrival: {
        iconWrapper: "bg-terracotta-700",
        label: "text-terracotta-700",
        number: "text-terracotta-700",
      },
      wifi: {
        iconWrapper: "bg-blue-500",
        label: "text-blue-500",
        number: "text-blue-500",
      },
      breakfast: {
        iconWrapper: "bg-rose-500",
        label: "text-rose-500",
        number: "text-rose-500",
      },
    },
  },
  defaultVariants: {
    variant: "arrival",
  },
});

type InfoCardVariantProps = VariantProps<typeof infoCardVariants>;

type InfoCardProps = InfoCardVariantProps & {
  number: string;
  label: string;
  title: string;
  subtitle?: string;
  description?: string;
  children?: ReactNode;
  className?: string;
};

const icons = {
  arrival: KeyRound,
  wifi: Wifi,
  breakfast: Coffee,
};

export default function InfoCard({
  variant = "arrival",
  number,
  label,
  title,
  subtitle,
  description,
  children,
  className,
}: InfoCardProps) {
  const styles = infoCardVariants({ variant });
  const Icon = icons[variant ?? "arrival"];

  return (
    <article className={styles.card({ className })}>
      <header className={styles.header()}>
        <div className={styles.heading()}>
          <span className={styles.iconWrapper()}>
            <Icon className={styles.icon()} aria-hidden="true" />
          </span>

          <span className={styles.label()}>{label}</span>
        </div>

        <span className={styles.number()}>{number}</span>
      </header>

      <h2 className={styles.title()}>{title}</h2>

      {subtitle && <p className={styles.subtitle()}>{subtitle}</p>}

      {description && <p className={styles.description()}>{description}</p>}

      {children && <div className={styles.content()}>{children}</div>}
    </article>
  );
}
