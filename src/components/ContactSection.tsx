import { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Github,
  MessageCircle,
  PhoneCall,
  X,
} from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useLanguage } from "@/contexts/LanguageContext";

const socialLinks = [
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/waseem-aljumah",
    color: "hover:bg-blue-600 hover:text-white",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/waseemaljumah",
    color: "hover:bg-gray-800 hover:text-white dark:hover:bg-gray-600",
  },
];

const ContactSection = () => {
  const { t } = useLanguage();
  const { ref: titleRef, isVisible: titleVisible } = useScrollAnimation(0.2);
  const { ref: infoRef, isVisible: infoVisible } = useScrollAnimation(0.2);
  const [showPhoneOptions, setShowPhoneOptions] = useState(false);

  const phoneNumber = "+966599926127";

  return (
    <section id="contact" className="py-20 md:py-32">
      <div className="container mx-auto px-4 md:px-8">
        <div
          ref={titleRef}
          className={`text-center mb-16 ${
            titleVisible ? "scroll-visible" : "scroll-hidden"
          }`}
        >
          <h2 className="section-title">
            {t("Get In", "تواصل")}{" "}
            <span className="text-primary">{t("Touch", "معي")}</span>
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mt-4 rounded-full" />
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            {t(
              "I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.",
              "أنا دائماً منفتح لمناقشة المشاريع الجديدة والأفكار الإبداعية أو الفرص للمشاركة في رؤيتك."
            )}
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <div
            ref={infoRef}
            className={`space-y-6 ${
              infoVisible ? "scroll-visible" : "scroll-hidden"
            }`}
          >
            {/* Location */}
            <a
              href="https://maps.app.goo.gl/5mhvUgf4VHGDCwn3A"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-xl p-5 flex items-center gap-4 card-hover group cursor-pointer"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t("Location", "الموقع")}
                </p>
                <p className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  {t("Saudi Arabia", "السعودية")}
                </p>
              </div>
            </a>

            {/* Phone with Options */}
            <div className="relative">
              <div
                onClick={() => setShowPhoneOptions(!showPhoneOptions)}
                className="glass-card rounded-xl p-5 flex items-center gap-4 card-hover group cursor-pointer"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground">
                    {t("Phone", "الهاتف")}
                  </p>
                  <p className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                    {t("+966 59 992 6127", "6127 992 59 966+")}
                  </p>
                </div>
                <span className="text-xs text-muted-foreground">
                  {t("Click for options", "اضغط للخيارات")}
                </span>
              </div>

              {/* Phone Options Popup */}
              {showPhoneOptions && (
                <div className="absolute top-full left-0 right-0 mt-2 glass-card rounded-xl p-4 z-50 animate-scale-in">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-sm font-medium text-foreground">
                      {t("Choose an option", "اختر طريقة التواصل")}
                    </span>
                    <button
                      onClick={() => setShowPhoneOptions(false)}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={`tel:${phoneNumber}`}
                      className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-lg font-medium hover:bg-primary/90 transition-all hover:scale-105"
                    >
                      <PhoneCall className="w-5 h-5" />
                      {t("Call", "اتصال")}
                    </a>
                    <a
                      href={`https://wa.me/${phoneNumber.replace(/\+/g, "")}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 bg-green-500 text-white px-4 py-3 rounded-lg font-medium hover:bg-green-600 transition-all hover:scale-105"
                    >
                      <MessageCircle className="w-5 h-5" />
                      {t("WhatsApp", "واتساب")}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Email */}
            <a
              href="mailto:Waseemaljumah@gmail.com"
              className="glass-card rounded-xl p-5 flex items-center gap-4 card-hover group block"
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">
                  {t("Email", "البريد الإلكتروني")}
                </p>
                <p className="text-lg font-medium text-foreground hover:text-primary transition-colors">
                  Waseemaljumah@gmail.com
                </p>
              </div>
            </a>

            {/* Social Links */}
            <div className="flex justify-center gap-4 mt-8">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 glass-card rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 ${link.color}`}
                  aria-label={link.label}
                >
                  <link.icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
