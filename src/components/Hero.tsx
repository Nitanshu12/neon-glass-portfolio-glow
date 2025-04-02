
import React, { useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", ariaLabel: "GitHub Profile" },
    { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn Profile" },
    { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter Profile" },
    { icon: Mail, href: "mailto:your.email@example.com", ariaLabel: "Send Email" },
  ];

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      const children = elementRef.current.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.add('opacity-0', 'translate-y-10');
        children[i].style.animationDelay = `${i * 0.1}s`;
        observer.observe(children[i]);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative pt-16 pb-10">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-neon-green/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-neon-blue/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center" ref={elementRef}>
        <div className="order-2 md:order-1 flex flex-col gap-6">
          <h2 className="text-lg md:text-xl text-neon-green">Welcome to my Portfolio</h2>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-gradient-primary animate-glow">Nitanshu Goyal</span>
          </h1>
          <p className="text-xl text-foreground/80">
            I build stunning <span className="text-neon-pink font-medium">web experiences</span> with modern technologies
          </p>
          
          <div className="flex gap-4 mt-4">
            <Button className="bg-gradient-to-r from-neon-green to-neon-blue text-dark font-medium hover:shadow-[0_0_15px_rgba(190,255,240,0.5)] border-none">
              View Projects
            </Button>
            <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(255,46,99,0.5)]">
              Contact Me
            </Button>
          </div>
          
          <div className="flex gap-4 mt-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.ariaLabel}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 border border-foreground/20 rounded-full hover:border-neon-green hover:text-neon-green hover:shadow-[0_0_10px_rgba(190,255,240,0.4)] transition-all duration-300"
              >
                <social.icon size={20} />
              </a>
            ))}
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center md:justify-end">
          <div className="relative">
            <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-2 border-neon-green/50 p-1">
              <img 
                src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                alt="Portfolio Owner" 
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-blue/20 blur-xl -z-10"></div>
          </div>
        </div>
      </div>
      
      <a 
        href="#about" 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-foreground/80 hover:text-neon-green transition-colors duration-300 animate-float"
      >
        <ChevronDown size={24} />
      </a>
    </section>
  );
};

export default Hero;
