import { FileText, GraduationCap, Award, Briefcase } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";

const useScrollAnimation = (threshold = 0.3) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [threshold]);

  return { ref, isVisible };
};

const AboutSection = () => {
  const { t } = useLanguage();

  const { ref: sectionRef, isVisible: sectionVisible } =
    useScrollAnimation(0.2);
  const { ref: imageRef, isVisible: imageVisible } = useScrollAnimation(0.3);
  const { ref: contentRef, isVisible: contentVisible } =
    useScrollAnimation(0.3);

  const stats = [
    { icon: GraduationCap, label: t("Graduated", "التخرج"), value: "2025" },
    { icon: Briefcase, label: t("Projects", "المشاريع"), value: "10+" },
    { icon: Award, label: t("Certifications", "الشهادات"), value: "3+" },
  ];

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <div
          ref={sectionRef}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            sectionVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="section-title">
            {t("About", "عن")}{" "}
            <span className="text-primary">{t("Me", "نفسي")}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Main Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[380px_1fr] gap-12 items-start">
          {/* Image */}
          <div
            ref={imageRef}
            className={`flex justify-center lg:justify-end transition-transform duration-700 ease-out
              ${
                imageVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-40 opacity-0"
              }`}
          >
            <div className="relative group">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-2xl bg-gradient-to-br from-primary to-accent p-1 rotate-0 group-hover:-rotate-3 transition-transform duration-500">
                <div className="w-full h-full rounded-2xl bg-muted overflow-hidden group-hover:scale-105 transition-transform duration-500">
                  <img
                    src="/public/myPic.jpg"
                    alt="My Photo"
                    className="w-full h-full object-cover object-top rounded-2xl"
                  />
                </div>
              </div>

              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10 group-hover:scale-150 transition-transform duration-700" />
            </div>
          </div>

          {/* Content */}
          <div
            ref={contentRef}
            className={`space-y-6 max-w-2xl transition-transform duration-700 ease-out
              ${
                contentVisible
                  ? "translate-x-0 opacity-100"
                  : "translate-x-40 opacity-0"
              }`}
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t(
                "Highly motivated Computer Science graduate with practical experience in IT support, business and system analysis, and front-end development. Looking for an opportunity to leverage problem-solving abilities, technical expertise, and a user-centered approach to support organizational objectives and enhance scalable digital solutions.",
                "خريج علوم حاسب متحمس للغاية مع خبرة عملية في دعم تقنية المعلومات وتحليل الأعمال والأنظمة وتطوير الواجهات الأمامية. أبحث عن فرصة للاستفادة من قدرات حل المشكلات والخبرة التقنية والنهج المرتكز على المستخدم لدعم الأهداف التنظيمية وتعزيز الحلول الرقمية القابلة للتطوير."
              )}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center card-hover cursor-pointer transition-all duration-500"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">
                    {stat.value}
                  </p>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* CV Buttons */}
            <div className="flex flex-wrap gap-4 mt-6">
              <a
                href="/public/enCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold btn-hover ripple transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FileText className="w-5 h-5" />
                {t("Download CV (EN)", "تحميل السيرة الذاتية (EN)")}
              </a>

              <a
                href="/public/arCV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold btn-hover ripple transition-all duration-300 hover:scale-105 hover:shadow-lg"
              >
                <FileText className="w-5 h-5" />
                {t("Download CV (AR)", "تحميل السيرة الذاتية (AR)")}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
