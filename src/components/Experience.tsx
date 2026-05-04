import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="experiencia" className="relative overflow-hidden bg-ice py-20 text-graphite sm:py-24 lg:py-28">
      <div className="absolute inset-0 topo-light opacity-70" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <div>
            <SectionHeading
              title={t.experience.title}
              description={t.experience.description}
              className="[&_*]:!text-graphite [&_p]:!text-graphite/68"
            />
            <div className="mt-8 flex flex-wrap gap-3">
              {t.experience.minerals.map((mineral) => (
                <span
                  key={mineral}
                  className="border border-graphite/12 bg-white px-4 py-2 text-sm font-bold text-mineral shadow-[0_10px_30px_rgba(7,21,18,0.06)]"
                >
                  {mineral}
                </span>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {t.experience.capabilityMarks.map((mark) => (
              <div key={mark.value} className="border border-graphite/10 bg-white p-6 shadow-[0_18px_60px_rgba(7,21,18,0.07)]">
                <strong className="block text-3xl font-black text-mineral">{mark.value}</strong>
                <span className="mt-2 block text-sm font-semibold text-graphite/62">{mark.label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 overflow-hidden border border-graphite/10 bg-white p-5 shadow-[0_24px_80px_rgba(7,21,18,0.08)] sm:p-7">
          <div className="journey-line grid gap-4 md:grid-cols-3 xl:grid-cols-6">
            {t.experience.journey.map((step, index) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.32 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="relative flex items-center gap-4 border border-graphite/8 bg-ice px-4 py-4 md:block md:min-h-40"
                >
                  <div className="grid h-12 w-12 shrink-0 place-items-center bg-mineral text-ice">
                    <Icon size={23} strokeWidth={1.8} />
                  </div>
                  <div className="md:mt-8">
                    <span className="text-xs font-black text-copper">0{index + 1}</span>
                    <h3 className="mt-1 text-lg font-black leading-tight text-graphite">{step.title}</h3>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
