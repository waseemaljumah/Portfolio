import { useEffect, useState } from "react";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      // Detect active section
      const sections = [
        "home",
        "about",
        "education",
        "experience",
        "skills",
        "projects",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "education", label: "Education" },
    { id: "experience", label: "Experience" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <>
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-muted/50 z-[60]">
        <div
          className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Section Dots Navigation */}
      <nav className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3">
        {sections.map((section) => (
          <a
            key={section.id}
            href={`#${section.id}`}
            className="group relative flex items-center justify-end"
          >
            <span
              className={`
              absolute right-6 px-3 py-1 rounded-lg text-sm font-medium
              bg-card/90 backdrop-blur-sm border border-border
              opacity-0 translate-x-2 group-hover:opacity-100 group-hover:translate-x-0
              transition-all duration-300 whitespace-nowrap
              ${
                activeSection === section.id
                  ? "text-primary"
                  : "text-muted-foreground"
              }
            `}
            >
              {section.label}
            </span>
            <div
              className={`
              w-3 h-3 rounded-full border-2 transition-all duration-300
              ${
                activeSection === section.id
                  ? "bg-primary border-primary scale-125"
                  : "bg-transparent border-muted-foreground/50 hover:border-primary hover:scale-110"
              }
            `}
            />
          </a>
        ))}
      </nav>
    </>
  );
};

export default ScrollProgress;
