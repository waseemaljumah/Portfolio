import { ExternalLink, Github, Folder, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const projects = [
  {
    titleEn: "AutoPartSA – E-Platform for Car Spare Parts",
    titleAr: "AutoPartSA – منصة قطع غيار سيارات",
    descriptionEn:
      "Graduation project: An e-platform connecting users with certified car agencies and spare parts providers for online purchases and maintenance booking.",
    descriptionAr:
      "مشروع التخرج: منصة إلكترونية تربط المستخدمين بوكالات السيارات المعتمدة ومزودي قطع الغيار للشراء عبر الإنترنت وحجز الصيانة.",
    tags: ["E-Commerce", "Full Stack", "React"],
    emoji: "🚗",
    gradient: "from-emerald-500/20 to-teal-500/20",
    liveUrl: "https://vehicle-management-25.netlify.app/",
    githubUrl:
      "https://github.com/waseemaljumah/Graduation-Project-Auto-Parts-Store",
  },
  {
    titleEn: "Portfolio",
    titleAr: "الصفحة الشخصية",
    descriptionEn:
      "Responsive portfolio website built with React, TypeScript, Vite, Tailwind CSS, and shadcn-ui, showcasing projects, skills, and achievements.",
    descriptionAr:
      "موقع بورتفوليو متجاوب تم بناؤه باستخدام React، TypeScript، Vite، Tailwind CSS وshadcn-ui، لعرض المشاريع والمهارات والإنجازات.",
    tags: [
      "React",
      "TypeScript",
      "Vite",
      "Tailwind CSS",
      "shadcn-ui",
      "Portfolio",
      "Frontend",
      "Web Development",
    ],
    emoji: "🌐",
    gradient: "from-blue-900/40 to-indigo-900/40",
    liveUrl: "https://waseemaljumah.github.io/Portfolio/",
    githubUrl: "https://github.com/waseemaljumah/Portfolio",
  },
  {
    titleEn: "Bookmark Saver",
    titleAr: "حافظ الروابط",
    descriptionEn:
      "A practical web application to save and manage your bookmarks efficiently.",
    descriptionAr: "تطبيق ويب عملي لحفظ وإدارة الروابط بكفاءة.",
    tags: ["HTML", "CSS", "JavaScript", "Firebase", "Web App"],
    emoji: "🔖",
    gradient: "from-purple-500/20 to-pink-500/20",
    liveUrl: "https://waseemaljumah.github.io/Bookmark-Saver/",
    githubUrl: "https://github.com/waseemaljumah/Bookmark-Saver",
  },
  {
    titleEn: "Old Portfolio",
    titleAr: "الصفحة الشخصية القديم",
    descriptionEn:
      "A clean and responsive portfolio website built with HTML and CSS.",
    descriptionAr: "موقع بورتفوليو نظيف ومتجاوب مبني بـ HTML و CSS.",
    tags: ["HTML", "CSS"],
    emoji: "🌐",
    gradient: "from-blue-900/40 to-indigo-900/40",
    liveUrl: "https://waseemaljumah.github.io/WaseemAljumah-Portfolio/",
    githubUrl: "https://github.com/waseemaljumah/WaseemAljumah-Portfolio",
  },
  {
    titleEn: "Information Card",
    titleAr: "بطاقة معلومات",
    descriptionEn:
      "A clean and responsive information card component built with HTML, CSS.",
    descriptionAr: "مكون بطاقة معلومات نظيف ومتجاوب مبني بـ HTML و CSS.",
    tags: ["HTML", "CSS"],
    emoji: "📋",
    gradient: "from-blue-500/20 to-indigo-500/20",
    liveUrl: "https://waseemaljumah.github.io/Information_card/",
    githubUrl: "https://github.com/waseemaljumah/Information_card",
  },
  {
    titleEn: "Login Page",
    titleAr: "صفحة تسجيل دخول",
    descriptionEn:
      "A modern and responsive login page design with clean UI/UX.",
    descriptionAr: "تصميم صفحة تسجيل دخول حديث ومتجاوب مع واجهة مستخدم نظيفة.",
    tags: ["HTML", "CSS"],
    emoji: "🔐",
    gradient: "from-orange-500/20 to-amber-500/20",
    liveUrl: "https://waseemaljumah.github.io/Login-Page/",
    githubUrl: "https://github.com/waseemaljumah/Login-Page",
  },
];

const projectFolders = [
  {
    nameEn: "System Analysis Projects",
    nameAr: "مشاريع تحليل الأنظمة",
    url: "https://github.com/waseemaljumah/System-Analysis-And-Design-Projects",
  },
  {
    nameEn: "Java Projects",
    nameAr: "مشاريع Java",
    url: "https://github.com/waseemaljumah/Java-Projects",
  },
  {
    nameEn: "Python Projects",
    nameAr: "مشاريع Python",
    url: "https://github.com/waseemaljumah/Python-Projects",
  },
  {
    nameEn: "Prolog Projects",
    nameAr: "مشاريع Prolog",
    url: "https://github.com/waseemaljumah/Prolog-Projects",
  },
  {
    nameEn: "Database Projects",
    nameAr: "مشاريع قواعد البيانات",
    url: "https://github.com/waseemaljumah/Database-Projects",
  },
];

const ProjectsSection = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: projectsRef, isVisible: projectsVisible } =
    useScrollAnimation(0.1);
  const { ref: foldersRef, isVisible: foldersVisible } =
    useScrollAnimation(0.2);

  return (
    <section id="projects" className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <h2 className="section-title">
            {t("My", "")}{" "}
            <span className="text-primary">{t("Projects", "المشاريع")}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        {/* Featured Projects */}
        <div
          ref={projectsRef}
          className={`max-w-7xl mx-auto mb-16 ${
            projectsVisible ? "scroll-visible-blur" : "scroll-hidden-blur"
          }`}
        >
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${
              projectsVisible ? "scroll-visible" : ""
            }`}
          >
            {projects.map((project, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden card-hover group"
              >
                <div
                  className={`h-48 bg-gradient-to-br ${project.gradient} flex items-center justify-center`}
                >
                  <span className="text-7xl transform group-hover:scale-125 group-hover:rotate-12 transition-transform duration-500">
                    {project.emoji}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-2 line-clamp-1">
                    {t(project.titleEn, project.titleAr)}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {t(project.descriptionEn, project.descriptionAr)}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-medium bg-primary/10 text-primary px-3 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-all hover:scale-105"
                    >
                      <ExternalLink className="w-4 h-4" />
                      {t("Live Demo", "العرض المباشر")}
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium bg-muted border border-border text-foreground px-4 py-2 rounded-lg hover:bg-muted/80 transition-all hover:scale-105"
                    >
                      <Github className="w-4 h-4" />
                      {t("Source", "المصدر")}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Folders */}
        <div
          ref={foldersRef}
          className={`max-w-4xl mx-auto ${
            foldersVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-2">
            <Folder className="w-6 h-6 text-primary" />
            {t("More Projects", "مشاريع أخرى")}
          </h3>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {projectFolders.map((folder, index) => (
              <a
                key={index}
                href={folder.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-xl p-4 flex items-center gap-3 card-hover group"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center group-hover:bg-accent/20 group-hover:scale-110 transition-all">
                  <Folder className="w-5 h-5 text-accent" />
                </div>
                <span className="text-sm font-medium text-foreground flex-1">
                  {t(folder.nameEn, folder.nameAr)}
                </span>
                <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
