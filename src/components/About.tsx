import { motion } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { SectionHeading } from "./SectionHeading";

export function About() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="quem-somos" className="relative bg-graphite-2 pb-20 pt-8 sm:pb-24 sm:pt-14 lg:pb-28 lg:pt-16">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-copper/40 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-8">
        <div>
          <SectionHeading title={t.about.title} />
          <p className="mt-7 text-lg leading-9 text-ice/70">
            {t.about.text}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {t.about.highlights.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.06 }}
                whileHover={{ y: -6 }}
                className="group border border-ice/10 bg-ice/[0.045] p-6 transition duration-300 hover:border-copper/45 hover:bg-ice/[0.07]"
              >
                <div className="mb-5 grid h-12 w-12 place-items-center border border-copper/35 bg-copper/10 text-copper transition group-hover:bg-copper group-hover:text-graphite">
                  <Icon size={23} strokeWidth={1.8} />
                </div>
                <h3 className="text-xl font-black text-ice">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ice/64">{item.description}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </AnimatedSection>
  );
}
