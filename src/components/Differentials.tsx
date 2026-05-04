import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLanguage } from "../i18n/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function Differentials() {
  const { t } = useLanguage();

  return (
    <AnimatedSection className="relative bg-graphite-2 py-20 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          title={t.differentials.title}
          description={t.differentials.description}
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {t.differentials.groups.map((group, index) => {
            const Icon = group.icon;
            return (
              <motion.article
                key={group.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                whileHover={{ y: -7 }}
                className="relative overflow-hidden border border-ice/10 bg-ice/[0.045] p-7 transition duration-300 hover:border-copper/45 hover:bg-ice/[0.065]"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-copper via-mineral-2 to-transparent" />
                <div className="grid h-14 w-14 place-items-center text-copper">
                  <Icon size={30} strokeWidth={1.7} />
                </div>
                <h3 className="mt-6 text-2xl font-black text-ice">{group.title}</h3>
                <ul className="mt-6 grid gap-3 text-sm leading-6 text-ice/68">
                  {group.items.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-copper" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
