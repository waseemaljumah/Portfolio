import { Briefcase, Calendar, MapPin, CheckCircle } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const ExperienceSection = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: cardRef, isVisible: cardVisible } = useScrollAnimation(0.2);

  const experiences = [
    {
      title: t(
        "IT Intern – Coop Training",
        "متدرب تقنية معلومات – تدريب تعاوني"
      ),
      company: t(
        "Anwar Al Madinah Movenpick Hotel",
        "فندق أنوار المدينة موڤنبيك"
      ),
      period: t("June 2024 – August 2024", "يونيو 2024 – أغسطس 2024"),
      responsibilities: [
        t(
          "Inspected and maintained Access Points and network switches to ensure internal network stability",
          "فحص وصيانة نقاط الوصول ومحولات الشبكة لضمان استقرار الشبكة الداخلية"
        ),
        t(
          "Worked with the Opera Property Management System (PMS) for hotel operations",
          "استخدام نظام أوبرا لإدارة الممتلكات (Opera PMS)"
        ),
        t(
          "Performed maintenance and repairs on laptops and desktop workstations",
          "اجراء عمليات صيانة وإصلاح لأجهزة الحاسب المحمولة والمكتبية"
        ),
        t(
          "Monitored hardware status to ensure daily operational readiness",
          "مراقبة حالة الأجهزة لضمان الجاهزية التشغيلية اليومية"
        ),
        t(
          "Provided technical support and troubleshooting for staff across departments",
          "تقديم الدعم الفني وحل المشكلات للموظفين في جميع الأقسام"
        ),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <h2 className="section-title">
            {t("Work", "")}{" "}
            <span className="text-primary">{t("Experience", "الخبرات")}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div
          ref={cardRef}
          className={`max-w-4xl mx-auto ${
            cardVisible ? "scroll-visible-x" : "scroll-hidden-left"
          }`}
        >
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="relative glass-card rounded-2xl p-8 md:p-10 card-hover"
            >
              <div className="absolute -left-3 top-10 w-6 h-6 bg-primary rounded-full border-4 border-background hidden md:block" />

              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0 w-16 h-16 bg-accent/10 rounded-xl flex items-center justify-center">
                  <Briefcase className="w-8 h-8 text-accent" />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="flex items-center gap-1 text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground text-sm">
                      <MapPin className="w-4 h-4" />
                      {t("Madinah, Saudi Arabia", "المدينة المنورة، السعودية")}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-lg text-accent font-medium mb-4">
                    {exp.company}
                  </p>

                  <ul className="space-y-3">
                    {exp.responsibilities.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-3 text-muted-foreground"
                      >
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
