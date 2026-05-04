import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function Equipment() {
  const { t } = useLanguage();

  return (
    <AnimatedSection className="relative overflow-hidden bg-graphite py-20 sm:py-24 lg:py-28">
      <div className="absolute inset-0 mineral-noise" aria-hidden="true" />
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            title={t.equipment.title}
            description={t.equipment.description}
          />
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-5">
          {t.equipment.items.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.52, delay: index * 0.05 }}
                whileHover={{ y: -8 }}
                className="equipment-card group min-h-72 border border-ice/10 bg-ice/[0.045] p-6 transition duration-300 hover:border-copper/45 hover:bg-ice/[0.065]"
              >
                <div className="mb-8 flex items-start justify-between">
                  <div className="grid h-14 w-14 place-items-center border border-copper/28 bg-copper/10 text-copper transition group-hover:bg-copper group-hover:text-graphite">
                    <Icon size={26} strokeWidth={1.75} />
                  </div>
                  <span className="text-sm font-black text-ice/36">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-black leading-tight text-ice">{item.title}</h3>
                <p className="mt-4 text-sm leading-7 text-ice/64">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
