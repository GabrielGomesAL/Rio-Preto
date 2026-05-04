export function TechnicalBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 technical-grid opacity-[0.32]" />
      <div className="absolute right-10 top-24 h-px w-72 rotate-12 bg-copper/20" />
      <div className="absolute bottom-24 left-8 h-px w-96 -rotate-6 bg-mineral-2/25" />
      <svg className="absolute right-0 top-16 h-[520px] w-[720px] opacity-35" viewBox="0 0 720 520">
        <path
          d="M35 360c66-72 119-80 192-48 59 26 91 23 135-26 74-82 176-103 303-51"
          fill="none"
          stroke="#c7974a"
          strokeWidth="1.2"
        />
        <path
          d="M10 421c92-68 145-74 214-39 79 40 146 21 212-50 58-63 122-77 254-26"
          fill="none"
          stroke="#f3f7f4"
          strokeOpacity=".28"
          strokeWidth="1"
        />
        <path
          d="M91 278c59-55 113-61 162-36 48 25 93 23 141-27 69-72 149-86 255-41"
          fill="none"
          stroke="#2b6f7a"
          strokeOpacity=".52"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
