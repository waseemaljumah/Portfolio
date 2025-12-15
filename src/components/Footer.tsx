import { Heart } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border bg-card/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <a
            href="#home"
            className="font-display text-xl font-bold text-foreground hover:scale-105 transition-transform"
          >
            Waseem<span className="text-primary">.</span>
          </a>

          <p className="text-muted-foreground text-sm flex items-center gap-1">
            © {currentYear} {t("Made with", "صنع بـ")}{" "}
            <Heart className="w-4 h-4 text-accent fill-accent animate-pulse" />{" "}
            {t("by Waseem Aljumah", "بواسطة وسيم الجمعة")}
          </p>

          <div className="flex items-center gap-6">
            <a
              href="#about"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("About", "عني")}
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("Projects", "المشاريع")}
            </a>
            <a
              href="#contact"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {t("Contact", "التواصل")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
