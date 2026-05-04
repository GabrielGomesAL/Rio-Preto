import { motion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, PhoneCall } from "lucide-react";
import { contact } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { ButtonLink } from "./ButtonLink";
import { GeoScene3D } from "./GeoScene3D";
import { TechnicalBackdrop } from "./TechnicalBackdrop";

function GeoCorePanel() {
  const { t } = useLanguage();

  return (
    <div className="relative mx-auto w-full max-w-[500px] overflow-hidden border border-ice/12 bg-graphite/58 p-4 shadow-mineral backdrop-blur-md sm:p-5">
      <div className="absolute inset-0 strata-panel opacity-80" aria-hidden="true" />
      <div className="relative flex items-center justify-between border-b border-ice/10 pb-4 text-xs font-bold text-ice/66">
        <span>{t.geoPanel.title}</span>
        <span className="text-copper">RC</span>
      </div>

      <div className="relative mt-5 grid gap-4">
        <div className="h-44 overflow-hidden border border-ice/10 bg-graphite/70 sm:h-52">
          <svg viewBox="0 0 420 220" className="h-full w-full" aria-hidden="true">
            <defs>
              <linearGradient id="core" x1="0" x2="1" y1="0" y2="1">
                <stop offset="0%" stopColor="#1f5f50" />
                <stop offset="52%" stopColor="#0b1c18" />
                <stop offset="100%" stopColor="#c7974a" />
              </linearGradient>
            </defs>
            <rect width="420" height="220" fill="#091713" />
            <path d="M0 66 C84 30 130 84 204 56 C282 26 322 36 420 18 L420 0 L0 0 Z" fill="#123e34" />
            <path d="M0 112 C72 74 154 128 222 96 C310 54 340 92 420 66 L420 24 C330 44 280 34 204 68 C130 101 80 48 0 82 Z" fill="url(#core)" opacity=".9" />
            <path d="M0 176 C82 132 136 184 220 142 C298 103 350 126 420 101 L420 74 C340 107 302 74 220 118 C140 160 84 108 0 146 Z" fill="#27312d" />
            <path d="M0 220 L420 220 L420 128 C344 151 302 137 224 174 C142 213 82 164 0 202 Z" fill="#111f1b" />
            <path d="M36 78 C114 42 162 102 230 73 C302 42 337 54 388 36" fill="none" stroke="#f3f7f4" strokeOpacity=".34" strokeWidth="2" />
            <path d="M30 150 C105 109 154 169 230 131 C314 88 342 123 390 96" fill="none" stroke="#c7974a" strokeOpacity=".76" strokeWidth="3" />
            <line x1="294" x2="294" y1="18" y2="198" stroke="#f3f7f4" strokeDasharray="5 7" strokeOpacity=".42" />
            <circle cx="294" cy="96" r="8" fill="#c7974a" />
          </svg>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {t.geoPanel.labels.map((item) => (
            <div key={item} className="border border-ice/10 bg-ice/[0.04] px-3 py-3 text-sm font-semibold text-ice/78">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const { t } = useLanguage();

  return (
    <section id="inicio" className="relative isolate overflow-hidden bg-graphite pt-20">
      <img
        src="/assets/hero-mineral-terrain.png"
        alt=""
        className="hero-image absolute inset-0 h-full w-full object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 hero-fade" aria-hidden="true" />
      <GeoScene3D />
      <TechnicalBackdrop />

      <div className="relative mx-auto grid min-h-[68svh] max-w-7xl items-center gap-12 px-5 py-10 sm:px-6 lg:px-8 lg:py-12 xl:grid-cols-[1.02fr_0.98fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <h1 className="max-w-3xl text-balance text-3xl font-black leading-[1.05] text-ice sm:text-5xl lg:text-6xl">
            {t.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-ice/74 sm:mt-7 sm:text-xl sm:leading-9">
            {t.hero.subtitle}
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={contact.whatsappUrl} target="_blank" rel="noreferrer" icon={<PhoneCall size={18} />}>
              {t.hero.primaryCta}
            </ButtonLink>
            <ButtonLink href="#servicos" variant="secondary" icon={<ArrowRight size={18} />}>
              {t.hero.secondaryCta}
            </ButtonLink>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-2 xl:hidden">
            {t.heroStats.map((stat) => (
              <div key={`${stat.value}-${stat.label}-mobile`} className="border border-ice/12 bg-ice/[0.07] p-3 backdrop-blur-md">
                <div className="text-xl font-black text-copper">{stat.value}</div>
                <div className="mt-1 text-xs font-semibold leading-5 text-ice/74">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 hidden flex-col gap-2 text-sm text-ice/62 sm:flex sm:flex-row sm:items-center sm:gap-4">
            <span>{t.hero.presenter}</span>
            <span className="hidden h-1 w-1 rounded-full bg-copper sm:block" aria-hidden="true" />
            <span>{t.hero.role}</span>
            <a href={contact.mailtoUrl} className="inline-flex items-center gap-2 text-copper transition hover:text-copper-2">
              <Mail size={15} /> {contact.email}
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
          className="relative hidden xl:block"
        >
          <GeoCorePanel />
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-2">
            {t.heroStats.map((stat) => (
              <motion.div
                key={`${stat.value}-${stat.label}`}
                whileHover={{ y: -5 }}
                className="border border-ice/12 bg-ice/[0.07] p-4 shadow-mineral backdrop-blur-md"
              >
                <div className="text-2xl font-black text-copper sm:text-3xl">{stat.value}</div>
                <div className="mt-2 text-sm font-semibold leading-5 text-ice/74">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      <a
        href="#quem-somos"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-bold text-ice/58 transition hover:text-copper lg:flex"
      >
        <ArrowDown size={16} />
        {t.hero.scrollCue}
      </a>
    </section>
  );
}
