import { GraduationCap, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const EducationSection = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.3);

  return (
    <section id="education" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <h2 className="section-title">
            {t("My", "")}{" "}
            <span className="text-primary">{t("Education", "التعليم")}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div
          ref={cardRef}
          className={`max-w-3xl mx-auto ${
            cardVisible ? "scroll-visible-scale" : "scroll-hidden-scale"
          }`}
        >
          <div className="glass-card rounded-2xl p-8 md:p-10 card-hover cursor-default">
            <div className="flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <GraduationCap className="w-8 h-8 text-primary" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 text-primary text-sm font-medium mb-2">
                  <Calendar className="w-4 h-4" />
                  {t("Sep 2020 - May 2025", "سبتمبر 2020 - مايو 2025")}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {t(
                    "Bachelor's Degree in Computer Science",
                    "بكالوريوس علوم الحاسب"
                  )}
                </h3>
                <p className="text-lg text-muted-foreground">
                  {t("Taibah University", "جامعة طيبة")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
