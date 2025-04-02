
import React from 'react';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", ariaLabel: "GitHub Profile" },
    { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn Profile" },
    { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter Profile" },
    { icon: Mail, href: "mailto:your.email@example.com", ariaLabel: "Send Email" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <div className="mb-4 md:mb-0">
              <a href="#home" className="text-2xl font-bold neon-text">Portfolio</a>
              <p className="text-foreground/60 mt-2 text-sm">
                Creating innovative digital experiences
              </p>
            </div>
            
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.ariaLabel}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 border border-foreground/20 rounded-full hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_10px_rgba(190,255,240,0.4)] transition-all duration-300"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="h-px bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8"></div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-foreground/60 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Your Name. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a href="#" className="text-foreground/60 hover:text-neon-green text-sm transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-foreground/60 hover:text-neon-green text-sm transition-colors duration-300">
                Terms of Service
              </a>
              <button
                onClick={scrollToTop}
                className="text-foreground/60 hover:text-neon-green transition-colors duration-300 flex items-center gap-1 text-sm"
              >
                Back to Top <ArrowUp size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
