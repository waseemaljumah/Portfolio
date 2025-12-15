import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const roles = [
  { text: "Web Development", textAr: "مطور ويب", roleClass: "role-web" },
  {
    text: "Front-End Development",
    textAr: "مطور واجهات",
    roleClass: "role-frontend",
  },
  { text: "IT Support", textAr: "دعم تقني", roleClass: "role-it" },
  {
    text: "Business & Systems Analyst",
    textAr: "محلل أعمال وأنظمة",
    roleClass: "role-analyst",
  },
];

const HeroSection = () => {
  const { t } = useLanguage();
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = t(
      roles[currentRoleIndex].text,
      roles[currentRoleIndex].textAr
    );
    const typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      setTimeout(() => setIsDeleting(true), 2000);
      return;
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayText((prev) =>
        isDeleting ? prev.slice(0, -1) : currentRole.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex, t]);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="animate-slide-up">
          <div className="text-primary text-lg md:text-xl mb-2 font-semibold tracking-wider uppercase">
            <span
              className="inline-block px-4 py-2 rounded-full border border-primary/30 text-primary text-sm font-medium mb-6 
               transform -translate-y-4 transition-all duration-500 ease-out
               hover:scale-105 hover:shadow-lg hover:bg-primary/10"
            >
              {t("Welcome to my portfolio", "مرحباً بكم في ملفي الشخصي")}
            </span>
          </div>

          <div className="flex items-start gap-6 w-fit mx-auto">
            <p className="text-muted-foreground text-lg md:text-xl mb-4 font-medium">
              {t("I'm", "أنا")}
            </p>

            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 hover:scale-105 transition-transform duration-500">
              <span className="gradient-text">
                {t("Waseem Aljumah", "وسيم الجمعة")}
              </span>
            </h1>
          </div>
          <div className="h-16 md:h-20 flex items-center justify-center mb-8">
            <span className="text-xl md:text-3xl font-medium text-muted-foreground">
              {t("I'm", "")}{" "}
            </span>
            <span
              className={`text-xl md:text-3xl ml-2 rtl:mr-2 rtl:ml-0 ${roles[currentRoleIndex].roleClass} transition-all duration-300`}
            >
              {displayText}
            </span>
            <span className="typing-cursor" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
            <a
              href="#contact"
              className="group flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold text-lg btn-hover ripple"
            >
              {t("Contact Me", "تواصل معي")}
            </a>
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-card border-2 border-primary text-primary px-8 py-4 rounded-full font-semibold text-lg btn-hover hover:bg-primary hover:text-primary-foreground"
            >
              {t("My Projects", "مشاريعي")}
            </a>
          </div>
        </div>

        {/* Scroll Down Arrow */}
        <a
          href="#about"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 cursor-pointer group"
        >
          <ArrowDown className="w-8 h-8 text-primary/70 animate-bounce-slow group-hover:text-primary group-hover:translate-y-2 transition-all duration-500" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
