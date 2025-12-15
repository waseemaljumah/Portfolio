import { Award, Calendar } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const CertificationsSection = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollAnimation(0.1);

  const certifications = [
    {
      title: t("AI Track", "مسار الذكاء الاصطناعي"),
      provider: "IBM",
      year: "2025",
      description: t(
        "AI Agents, LLMs, Chatbots, TTS, Data Summaries with Granite, Generative AI Tools",
        "AI Agents, LLMs, Chatbots, TTS, Data Summaries with Granite, Generative AI Tools"
      ),
      color: "from-primary/20 to-primary/5",
    },
    {
      title: t("Introduction to Packet Tracer", "مقدمة في Packet Tracer"),
      provider: "Cisco",
      year: "2024",
      description: t(
        "Network simulation and configuration fundamentals",
        "أساسيات محاكاة وتكوين الشبكات"
      ),
      color: "from-accent/20 to-accent/5",
    },
    {
      title: t("Cybersecurity Track", "مسار الأمن السيبراني"),
      provider: "FutureX | Coursera",
      year: "2023",
      description: t(
        "EHE, Network Security, Penetration Testing, Incident Response and Forensics",
        "EHE, Network Security, Penetration Testing, Incident Response and Forensics"
      ),
      color: "from-role-analyst/20 to-role-analyst/5",
    },
  ];

  return (
    <section className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <h2 className="section-title">
            {t("Courses &", "الدورات")}{" "}
            <span className="text-primary">
              {t("Certifications", "والشهادات")}
            </span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
        </div>

        <div
          ref={cardsRef}
          className={`max-w-6xl mx-auto ${
            cardsVisible ? "scroll-visible-flip" : "scroll-hidden-flip"
          }`}
        >
          <div
            className={`grid md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children ${
              cardsVisible ? "scroll-visible" : ""
            }`}
          >
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl overflow-hidden card-hover group"
              >
                <div className={`h-2 bg-gradient-to-r ${cert.color}`} />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <span className="flex items-center gap-1 text-primary text-sm font-medium bg-primary/10 px-3 py-1 rounded-full">
                      <Calendar className="w-4 h-4" />
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-foreground mb-1">
                    {cert.title}
                  </h3>
                  <p className="text-accent font-medium mb-3">
                    {cert.provider}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
