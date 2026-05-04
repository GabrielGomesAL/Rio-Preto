import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

function RcMetricPanel() {
  const { t } = useLanguage();

  return (
    <div className="relative overflow-hidden border border-copper/28 bg-graphite/72 p-6 shadow-mineral backdrop-blur-sm lg:p-8">
      <div className="absolute inset-0 rc-panel-grid opacity-70" aria-hidden="true" />
      <div className="relative grid gap-5 sm:grid-cols-2">
        <div className="border border-ice/10 bg-ice/[0.055] p-5">
          <span className="block text-sm font-semibold text-ice/58">{t.rc.metrics.productivityLabel}</span>
          <strong className="mt-3 block text-5xl font-black text-copper lg:text-6xl">60</strong>
          <span className="mt-1 block text-lg font-bold text-ice">{t.rc.metrics.productivityUnit}</span>
        </div>
        <div className="border border-ice/10 bg-ice/[0.055] p-5">
          <span className="block text-sm font-semibold text-ice/58">{t.rc.metrics.capacityLabel}</span>
          <strong className="mt-3 block text-5xl font-black text-copper lg:text-6xl">3</strong>
          <span className="mt-1 block text-lg font-bold text-ice">{t.rc.metrics.capacityUnit}</span>
        </div>
      </div>

      <div className="relative mt-6 overflow-hidden border border-ice/10 bg-graphite/80">
        <svg viewBox="0 0 620 260" className="h-full min-h-56 w-full" aria-hidden="true">
          <rect width="620" height="260" fill="#0a1714" />
          <path d="M0 98 C122 39 180 122 304 73 C421 27 510 52 620 22 L620 0 L0 0 Z" fill="#123e34" />
          <path d="M0 169 C96 110 183 174 308 119 C421 69 493 112 620 71 L620 34 C512 61 427 42 304 93 C182 144 107 68 0 128 Z" fill="#1f5f50" opacity=".72" />
          <path d="M0 260 L620 260 L620 137 C505 177 432 137 309 190 C187 244 110 182 0 224 Z" fill="#101f1b" />
          <path d="M58 143 C151 98 206 158 315 111 C437 58 493 103 565 82" fill="none" stroke="#c7974a" strokeWidth="5" strokeLinecap="round" />
          <line x1="404" y1="28" x2="404" y2="224" stroke="#f3f7f4" strokeOpacity=".46" strokeDasharray="7 9" strokeWidth="2" />
          <circle cx="404" cy="143" r="10" fill="#c7974a" />
        </svg>
      </div>
    </div>
  );
}

export function RcSection() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="sondagem-rc" className="relative overflow-hidden bg-graphite py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 mineral-noise" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-start">
          <div>
            <SectionHeading
              title={t.rc.title}
              description={t.rc.description}
            />
            <div className="mt-9">
              <RcMetricPanel />
            </div>
          </div>

          <div className="grid gap-5">
            {t.rc.groups.map((group, index) => {
              const Icon = group.icon;
              return (
                <motion.article
                  key={group.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.55, delay: index * 0.07 }}
                  className="group border border-ice/10 bg-ice/[0.045] p-6 transition duration-300 hover:border-copper/45 hover:bg-ice/[0.07]"
                >
                  <div className="flex items-start gap-4">
                    <div className="grid h-12 w-12 shrink-0 place-items-center border border-copper/30 bg-copper/10 text-copper transition group-hover:bg-copper group-hover:text-graphite">
                      <Icon size={23} strokeWidth={1.8} />
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-ice">{group.title}</h3>
                      <ul className="mt-4 grid gap-3 text-sm leading-6 text-ice/68">
                        {group.items.map((item) => (
                          <li key={item} className="flex gap-3">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
