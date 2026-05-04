import { languageLabels, Language } from "../data/content";
import { useLanguage } from "../i18n/LanguageContext";

const languages: Language[] = ["pt", "en", "es"];

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className="flex items-center gap-0.5 border border-ice/18 bg-graphite/70 p-1 shadow-[0_10px_36px_rgba(0,0,0,0.22)] min-[370px]:gap-1"
      aria-label="Selecionar idioma"
    >
      {languages.map((item) => (
        <button
          key={item}
          type="button"
          className={`min-h-8 px-2 text-[0.62rem] font-black transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper min-[370px]:px-2.5 min-[370px]:text-[0.68rem] ${
            language === item
              ? "bg-copper text-graphite"
              : "text-ice/62 hover:bg-ice/[0.08] hover:text-ice"
          }`}
          aria-pressed={language === item}
          onClick={() => setLanguage(item)}
        >
          {languageLabels[item]}
        </button>
      ))}
    </div>
  );
}
