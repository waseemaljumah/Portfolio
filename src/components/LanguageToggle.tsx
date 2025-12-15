import { Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LanguageToggle = () => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-all duration-300 hover:scale-110 active:scale-95"
      aria-label="Toggle language"
    >
      <div className="flex items-center gap-1">
        <Globe className="w-5 h-5 text-foreground" />
        <span className="text-xs font-bold text-foreground">
          {language === "en" ? "AR" : "EN"}
        </span>
      </div>
    </button>
  );
};

export default LanguageToggle;
