import { ArrowRight, Mail, PhoneCall } from "lucide-react";
import { contact } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { AnimatedSection } from "./AnimatedSection";
import { ButtonLink } from "./ButtonLink";

export function Contact() {
  const { t } = useLanguage();

  return (
    <AnimatedSection id="contato" className="relative overflow-hidden bg-copper py-16 text-graphite sm:py-20 lg:py-24">
      <div className="absolute inset-0 contact-map opacity-35" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8">
        <div className="max-w-4xl">
          <h2 className="text-balance text-3xl font-black leading-tight sm:text-4xl lg:text-5xl">
            {t.contactSection.title}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-graphite/76">
            {t.contactSection.text}
          </p>
          <div className="mt-7 grid gap-2 text-base font-bold text-graphite/82 sm:flex sm:gap-6">
            <a href={contact.mailtoUrl} className="inline-flex items-center gap-2 hover:text-mineral">
              <Mail size={18} /> {contact.email}
            </a>
            <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 hover:text-mineral">
              <PhoneCall size={18} /> {contact.phone}
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row lg:flex-col">
          <ButtonLink href={contact.whatsappUrl} target="_blank" rel="noreferrer" variant="dark" icon={<PhoneCall size={18} />}>
            {t.contactSection.whatsappCta}
          </ButtonLink>
          <ButtonLink href={contact.mailtoUrl} variant="secondary" className="border-graphite/20 bg-white/30 text-graphite hover:bg-white/55" icon={<ArrowRight size={18} />}>
            {t.contactSection.emailCta}
          </ButtonLink>
        </div>
      </div>
    </AnimatedSection>
  );
}
