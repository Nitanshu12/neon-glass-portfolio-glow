
import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown, Github, Linkedin, Twitter, Mail, ChevronUp, ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const socialLinks = [
    { icon: Github, href: "https://github.com", ariaLabel: "GitHub Profile" },
    { icon: Linkedin, href: "https://linkedin.com", ariaLabel: "LinkedIn Profile" },
    { icon: Twitter, href: "https://twitter.com", ariaLabel: "Twitter Profile" },
    { icon: Mail, href: "mailto:nitanshugoyal786@gmail.com", ariaLabel: "Send Email" },
  ];

  // Image positioning state
  const [imagePosition, setImagePosition] = useState({
    x: 50, // percentage (0-100)
    y: 42, // percentage (0-100)
    scale: 1.1, // zoom level
  });

  // State to toggle image adjustment controls
  const [showControls, setShowControls] = useState(false);

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
        const child = children[i] as HTMLElement;
        child.classList.add('opacity-0', 'translate-y-10');
        child.style.animationDelay = `${i * 0.1}s`;
        observer.observe(child);
      }
    }

    return () => observer.disconnect();
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Image position adjustment functions
  const adjustPosition = (direction: 'up' | 'down' | 'left' | 'right') => {
    const step = 2; // percentage step for each click
    setImagePosition(prev => {
      switch (direction) {
        case 'up':
          return { ...prev, y: Math.max(0, prev.y - step) };
        case 'down':
          return { ...prev, y: Math.min(100, prev.y + step) };
        case 'left':
          return { ...prev, x: Math.max(0, prev.x - step) };
        case 'right':
          return { ...prev, x: Math.min(100, prev.x + step) };
        default:
          return prev;
      }
    });
  };

  const adjustZoom = (increase: boolean) => {
    const step = 0.05;
    setImagePosition(prev => ({
      ...prev,
      scale: increase ? Math.min(2, prev.scale + step) : Math.max(0.5, prev.scale - step)
    }));
  };

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
            <Button 
              className="bg-gradient-to-r from-neon-green to-neon-blue text-dark font-medium hover:shadow-[0_0_15px_rgba(190,255,240,0.5)] border-none"
              onClick={scrollToProjects}
            >
              View Projects
            </Button>
            <Button 
              variant="outline" 
              className="border-neon-pink text-neon-pink hover:bg-neon-pink/10 hover:shadow-[0_0_15px_rgba(255,46,99,0.5)]"
              onClick={scrollToContact}
            >
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
              <div className="w-full h-full rounded-full overflow-hidden">
                <img 
                  src="/lovable-uploads/a701ffe8-28f4-4cb3-91f0-3b456f3e2525.png" 
                  alt="Nitanshu Goyal" 
                  className="w-full h-full object-cover"
                  style={{
                    objectPosition: `${imagePosition.x}% ${imagePosition.y}%`,
                    transform: `scale(${imagePosition.scale})`,
                    transition: 'all 0.2s ease-in-out'
                  }}
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-neon-green/20 to-neon-blue/20 blur-xl -z-10"></div>
            
            {/* Toggle for image adjustment controls */}
            <Button 
              variant="outline" 
              size="sm"
              className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 bg-background/80 backdrop-blur-sm text-xs"
              onClick={() => setShowControls(!showControls)}
            >
              {showControls ? 'Hide Controls' : 'Adjust Image'}
            </Button>
            
            {/* Image adjustment controls */}
            {showControls && (
              <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-background/80 backdrop-blur-sm p-3 rounded-lg border border-neon-green/50 flex flex-col gap-2 w-56">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-neon-green">Position:</span>
                  <div className="grid grid-cols-3 gap-1">
                    <div></div>
                    <Button variant="ghost" size="icon" className="h-6 w-6 p-0" onClick={() => adjustPosition('up')}>
                      <ChevronUp size={14} />
                    </Button>
                    <div></div>
                    <Button variant="ghost" size="icon" className="h-6 w-6 p-0" onClick={() => adjustPosition('left')}>
                      <ChevronLeft size={14} />
                    </Button>
                    <div></div>
                    <Button variant="ghost" size="icon" className="h-6 w-6 p-0" onClick={() => adjustPosition('right')}>
                      <ChevronRight size={14} />
                    </Button>
                    <div></div>
                    <Button variant="ghost" size="icon" className="h-6 w-6 p-0" onClick={() => adjustPosition('down')}>
                      <ChevronDown size={14} />
                    </Button>
                    <div></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-neon-green">Zoom:</span>
                  <div className="flex gap-1">
                    <Button variant="ghost" size="sm" className="h-6 px-2 py-0 text-xs" onClick={() => adjustZoom(false)}>-</Button>
                    <span className="text-xs flex items-center">{imagePosition.scale.toFixed(2)}x</span>
                    <Button variant="ghost" size="sm" className="h-6 px-2 py-0 text-xs" onClick={() => adjustZoom(true)}>+</Button>
                  </div>
                </div>
                <div className="text-xs text-muted-foreground mt-1">
                  Position: X:{imagePosition.x}% Y:{imagePosition.y}%
                </div>
              </div>
            )}
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
