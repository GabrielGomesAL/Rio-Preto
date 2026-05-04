import { contact } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { BrandMark } from "./BrandMark";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-graphite px-5 py-10 text-ice sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 border-t border-ice/10 pt-8 md:flex-row md:items-end md:justify-between">
        <div>
          <BrandMark />
          <p className="mt-5 max-w-xl text-sm leading-7 text-ice/58">
            {t.footer.line}
          </p>
          <p className="mt-2 text-sm leading-7 text-ice/48">
            {t.hero.presenter} — {t.hero.role}
          </p>
        </div>
        <div className="grid gap-2 text-sm font-semibold text-ice/68 md:text-right">
          <a href={contact.mailtoUrl} className="transition hover:text-copper">
            {contact.email}
          </a>
          <a href={contact.whatsappUrl} target="_blank" rel="noreferrer" className="transition hover:text-copper">
            {contact.phone}
          </a>
          <span className="text-ice/42">{t.footer.company}</span>
        </div>
      </div>
    </footer>
  );
}
