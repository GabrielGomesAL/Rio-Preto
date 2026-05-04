import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function Services() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="servicos" className="relative overflow-hidden bg-ice py-20 text-graphite sm:py-24 lg:py-28">
      <div className="absolute inset-0 topo-light opacity-80" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.services.title}
          description={t.services.description}
          className="[&_*]:!text-graphite [&_p]:!text-graphite/68"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.services.items.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.58, delay: index * 0.08 }}
                whileHover={{ y: -8 }}
                className="service-card group relative overflow-hidden border border-graphite/10 bg-white p-7 shadow-[0_18px_60px_rgba(7,21,18,0.08)] transition duration-300 hover:border-mineral/35"
              >
                <div className="relative">
                  <div className="mb-8 flex items-center justify-between">
                    <div className="grid h-14 w-14 place-items-center border border-mineral/18 bg-mineral text-ice">
                      <Icon size={26} strokeWidth={1.75} />
                    </div>
                    <span className="text-sm font-black text-copper">0{index + 1}</span>
                  </div>
                  <h3 className="text-2xl font-black text-graphite">{service.title}</h3>
                  <p className="mt-5 text-base leading-8 text-graphite/68">{service.description}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
