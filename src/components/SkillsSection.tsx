import {
  Code,
  Globe,
  Wrench,
  Network,
  LineChart,
  Monitor,
  Users,
  Lightbulb,
  Database,
  BookOpen,
  MessageSquare,
  RefreshCw,
  Target,
  Github,
} from "lucide-react";

import {
  DiHtml5,
  DiCss3,
  DiJavascript1,
  DiJava,
  DiPython,
  DiMysql,
} from "react-icons/di";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillsSection = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: techRef, isVisible: techVisible } = useScrollAnimation(0.1);
  const { ref: personalRef, isVisible: personalVisible } =
    useScrollAnimation(0.1);

  const technicalSkills = [
    {
      name: "HTML",
      icon: DiHtml5,
      color: "bg-orange-600/10 text-orange-600 dark:text-orange-400",
    },
    {
      name: "CSS",
      icon: DiCss3,
      color: "bg-blue-600/10 text-blue-600 dark:text-blue-400",
    },
    {
      name: "JavaScript",
      icon: DiJavascript1,
      color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    },
    {
      name: "Java",
      icon: DiJava,
      color: "bg-red-500/10 text-red-600 dark:text-red-400",
    },
    {
      name: "Python",
      icon: DiPython,
      color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    },
    {
      name: "MySQL",
      icon: DiMysql,
      color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    },
    {
      name: "Github",
      icon: Github,
      color: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
    },
    {
      name: "Microsoft Office",
      icon: Monitor,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      name: "Opera PMS",
      icon: Monitor,
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
    {
      name: "Packet Tracer",
      icon: Database,
      color: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
    },
    {
      name: t("Web Development", "تطوير الويب"),
      icon: Globe,
      color: "bg-primary/10 text-primary",
    },
    {
      name: t("Front-End Development", "تطوير الواجهات"),
      icon: Globe,
      color: "bg-primary/10 text-primary",
    },
    {
      name: t("IT Support", "الدعم التقني"),
      icon: Wrench,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      name: t("Business & Systems Analysis", "تحليل الأعمال والأنظمة"),
      icon: LineChart,
      color: "bg-accent/10 text-accent",
    },
    {
      name: t("Hardware Maintenance", "صيانة الأجهزة"),
      icon: Wrench,
      color: "bg-gray-500/10 text-gray-600 dark:text-gray-400",
    },
    {
      name: t("Network Fundamentals", "أساسيات الشبكات"),
      icon: Network,
      color: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
  ];

  const personalSkills = [
    {
      name: t("Team Collaboration", "العمل الجماعي"),
      icon: Users,
      color: "bg-primary/10 text-primary",
    },
    {
      name: t("Problem Solving", "حل المشكلات"),
      icon: Lightbulb,
      color: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400",
    },
    {
      name: t("Fast Learner", "التعلم السريع"),
      icon: BookOpen,
      color: "bg-green-500/10 text-green-600 dark:text-green-400",
    },
    {
      name: t("Strong Communication", "مهارات التواصل"),
      icon: MessageSquare,
      color: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      name: t("Commitment & Accuracy", "الالتزام والدقة"),
      icon: Target,
      color: "bg-accent/10 text-accent",
    },
    {
      name: t("Adaptable to New Systems", "قابلية التكيف مع الأنظمة الجديدة"),
      icon: RefreshCw,
      color: "bg-accent/10 text-accent",
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <h2 className="section-title">
            {t("My", "")}{" "}
            <span className="text-primary">{t("Skills", "المهارات")}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {/* Technical Skills */}
          <div
            ref={techRef}
            className={`${
              techVisible ? "scroll-visible-blur" : "scroll-hidden-blur"
            }`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Code className="w-6 h-6 text-primary" />
              {t("Technical Skills", "المهارات التقنية")}
            </h3>
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 ${
                techVisible ? "scroll-visible" : ""
              }`}
            >
              {technicalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-4 text-center card-hover group cursor-default"
                >
                  <div
                    className={`w-12 h-12 ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Personal Skills */}
          <div
            ref={personalRef}
            className={`${
              personalVisible ? "scroll-visible-blur" : "scroll-hidden-blur"
            }`}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
              <Users className="w-6 h-6 text-primary" />
              {t("Personal Skills", "المهارات الشخصية")}
            </h3>
            <div
              className={`grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ${
                personalVisible ? "scroll-visible" : ""
              }`}
            >
              {personalSkills.map((skill, index) => (
                <div
                  key={index}
                  className="glass-card rounded-xl p-4 text-center card-hover group cursor-default"
                >
                  <div
                    className={`w-12 h-12 ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <skill.icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm font-medium text-foreground">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
