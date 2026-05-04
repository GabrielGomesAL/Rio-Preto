import { AnimatePresence, motion } from "framer-motion";
import { Menu, PhoneCall, X } from "lucide-react";
import { useState } from "react";
import { contact } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";
import { BrandMark } from "./BrandMark";
import { ButtonLink } from "./ButtonLink";
import { LanguageSwitcher } from "./LanguageSwitcher";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-copper/20 bg-graphite shadow-[0_18px_70px_rgba(7,21,18,0.42)]">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 xl:px-8">
        <BrandMark />

        <nav className="hidden items-center gap-6 xl:flex" aria-label="Navegação principal">
          {t.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-ice/72 transition hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 xl:flex">
          <LanguageSwitcher />
          <ButtonLink href={contact.whatsappUrl} target="_blank" rel="noreferrer" icon={<PhoneCall size={17} />}>
            {t.hero.primaryCta}
          </ButtonLink>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-sm border border-ice/14 bg-ice/[0.05] text-ice transition hover:border-copper/60 hover:text-copper focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-copper"
            aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
            aria-controls="mobile-menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.22 }}
            className="border-t border-ice/10 bg-graphite px-5 py-5 shadow-mineral xl:hidden"
          >
            <nav className="mx-auto grid max-w-7xl gap-2" aria-label="Navegação mobile">
              {t.navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-sm px-2 py-3 text-base font-semibold text-ice/78 transition hover:bg-ice/[0.05] hover:text-copper"
                >
                  {item.label}
                </a>
              ))}
              <ButtonLink
                href={contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                icon={<PhoneCall size={17} />}
                className="mt-3 w-full"
              >
                {t.hero.primaryCta}
              </ButtonLink>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
