
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

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

    if (sectionRef.current) {
      const children = sectionRef.current.children;
      for (let i = 0; i < children.length; i++) {
        children[i].classList.add('opacity-0', 'translate-y-10');
        children[i].style.animationDelay = `${i * 0.1}s`;
        observer.observe(children[i]);
      }
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16" ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">
            About <span className="text-gradient-primary">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-8"></div>
          
          <div className="glass p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              <div className="md:col-span-1">
                <div className="rounded-lg overflow-hidden border border-neon-green/30">
                  <img 
                    src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                    alt="About Me" 
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
              
              <div className="md:col-span-2 text-left">
                <p className="text-foreground/80 mb-4">
                  Hello! I'm a passionate web developer and designer with a focus on creating intuitive and engaging user experiences. With expertise in modern technologies like React, Node.js, and TypeScript, I bring ideas to life with clean, efficient code.
                </p>
                <p className="text-foreground/80 mb-4">
                  My journey began with a fascination for the intersection of design and technology. Today, I channel that passion into crafting digital solutions that are both functional and visually stunning.
                </p>
                <p className="text-foreground/80">
                  When I'm not coding, you'll find me exploring new design trends, contributing to open-source projects, or experimenting with emerging technologies.
                </p>
                
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <div>
                    <h3 className="text-neon-green font-medium mb-2">Education</h3>
                    <p className="text-sm text-foreground/80">B.S. Computer Science, University Name (2018-2022)</p>
                  </div>
                  <div>
                    <h3 className="text-neon-pink font-medium mb-2">Location</h3>
                    <p className="text-sm text-foreground/80">San Francisco, CA</p>
                  </div>
                  <div>
                    <h3 className="text-neon-blue font-medium mb-2">Email</h3>
                    <p className="text-sm text-foreground/80">your.email@example.com</p>
                  </div>
                  <div>
                    <h3 className="text-neon-purple font-medium mb-2">Languages</h3>
                    <p className="text-sm text-foreground/80">English, Spanish</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
