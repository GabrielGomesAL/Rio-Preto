import { MotionConfig } from "framer-motion";
import { useEffect } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Differentials } from "./components/Differentials";
import { Equipment } from "./components/Equipment";
import { Experience } from "./components/Experience";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { RcSection } from "./components/RcSection";
import { Services } from "./components/Services";
import { useLanguage } from "./i18n/LanguageContext";

export default function App() {
  const { t } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = t.seo.htmlLang;
    document.title = t.seo.title;

    const metaDescription = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (metaDescription) {
      metaDescription.content = t.seo.description;
    }
  }, [t]);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden bg-graphite text-ice">
        <Header />
        <main>
          <Hero />
          <About />
          <Services />
          <RcSection />
          <Differentials />
          <Experience />
          <Equipment />
          <Contact />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  );
}
