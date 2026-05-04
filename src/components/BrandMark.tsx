type BrandMarkProps = {
  compact?: boolean;
};

export function BrandMark({ compact = false }: BrandMarkProps) {
  return (
    <a href="#inicio" className="group flex items-center gap-3" aria-label="Rio Preto Prospecção - início">
      <span className="relative grid h-11 w-11 place-items-center overflow-hidden rounded-sm border border-copper/40 bg-graphite shadow-copper">
        <span className="absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(225,183,109,0.28),transparent_38%)]" />
        <svg viewBox="0 0 48 48" className="relative h-8 w-8" aria-hidden="true">
          <path d="M7 34 18 12l11 22H7Z" fill="#c7974a" />
          <path d="M20 34 31 10l11 24H20Z" fill="#f3f7f4" />
          <path
            d="M12 34h29"
            fill="none"
            stroke="#2d6b5b"
            strokeLinecap="round"
            strokeWidth="3"
          />
        </svg>
      </span>
      {!compact ? (
        <span className="hidden leading-tight min-[370px]:block">
          <span className="block text-sm font-black text-ice">RIO PRETO</span>
          <span className="block text-[0.68rem] font-semibold uppercase text-copper">
            Prospecção Ltda
          </span>
        </span>
      ) : null}
    </a>
  );
}
