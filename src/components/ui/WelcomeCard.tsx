import { tv, type VariantProps } from "tailwind-variants";

const welcomeCardVariants = tv({
  base: [
    "relative overflow-hidden rounded-3xl",
    "bg-terracotta-500 text-neutral-50",
    "p-6 sm:p-8",
  ],
  variants: {
    size: {
      sm: "max-w-sm p-5",
      md: "max-w-2xl p-6 sm:p-8",
      lg: "max-w-4xl p-8 sm:p-10",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

type WelcomeCardProps = VariantProps<typeof welcomeCardVariants> & {
  hostName?: string;
  message?: string;
  greeting?: string;
  className?: string;
};

export function WelcomeCard({
  hostName = "Margaux",
  greeting = "Bienvenue chez vous",
  message = "Je suis ravie de vous accueillir. J’espère que votre séjour à la Maison Soleil sera rempli de beaux moments et de découvertes.",
  size = "md",
  className,
}: WelcomeCardProps) {
  return (
    <section
      className={welcomeCardVariants({ size, className })}
      aria-label={`Bienvenue de ${hostName}`}
    >
      <div className="relative z-10 flex flex-col gap-5">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-neutral-50/80">
          Un petit mot de votre hôte
        </span>

        <h2 className="font-display text-3xl font-normal leading-tight sm:text-4xl">
          {greeting}
          <span className="block italic">et bienvenue !</span>
        </h2>

        <p className="max-w-lg font-sans text-sm leading-7 text-neutral-50/90 sm:text-base">
          {message}
        </p>

        <div className="mt-2 border-t border-neutral-50/25 pt-4">
          <p className="font-display text-2xl italic">{hostName}</p>
          <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-neutral-50/75">
            Votre hôte · Maison Soleil
          </p>
        </div>
      </div>

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-14 h-48 w-48 rounded-full border border-neutral-50/15 sm:h-64 sm:w-64"
      />

      <span
        aria-hidden="true"
        className="pointer-events-none absolute -right-2 -top-6 h-32 w-32 rounded-full border border-neutral-50/15 sm:h-44 sm:w-44"
      />
    </section>
  );
}

export default WelcomeCard;
