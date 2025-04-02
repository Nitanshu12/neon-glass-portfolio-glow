
import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, Figma, Database, Server, 
  Globe, Smartphone, Layers, GitBranch 
} from 'lucide-react';

type Skill = {
  name: string;
  level: number;
  icon: React.ComponentType<any>;
  category: string;
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const sectionRef = useRef<HTMLDivElement>(null);
  
  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'backend', name: 'Backend' },
    { id: 'design', name: 'Design' },
    { id: 'other', name: 'Other' },
  ];
  
  const skills: Skill[] = [
    { name: 'HTML/CSS', level: 92, icon: Globe, category: 'frontend' },
    { name: 'JavaScript', level: 88, icon: Code, category: 'frontend' },
    { name: 'React', level: 85, icon: Code, category: 'frontend' },
    { name: 'TypeScript', level: 80, icon: Code, category: 'frontend' },
    { name: 'Responsive Design', level: 90, icon: Smartphone, category: 'frontend' },
    { name: 'Node.js', level: 78, icon: Server, category: 'backend' },
    { name: 'Express', level: 75, icon: Server, category: 'backend' },
    { name: 'MongoDB', level: 72, icon: Database, category: 'backend' },
    { name: 'SQL', level: 70, icon: Database, category: 'backend' },
    { name: 'Figma', level: 88, icon: Figma, category: 'design' },
    { name: 'UI/UX Design', level: 85, icon: Layers, category: 'design' },
    { name: 'Git', level: 82, icon: GitBranch, category: 'other' },
  ];
  
  const filteredSkills = activeCategory === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeCategory);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('opacity-0', 'translate-y-10');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach(bar => {
      bar.classList.add('opacity-0', 'translate-y-10');
      observer.observe(bar);
    });

    return () => observer.disconnect();
  }, [filteredSkills]);

  return (
    <section id="skills" className="section-padding bg-dark-lighter">
      <div className="container mx-auto px-4" ref={sectionRef}>
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              My <span className="text-gradient-primary">Skills</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-8"></div>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              I've developed expertise in various technologies and tools through years of practice and real-world project experience.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-neon-green to-neon-blue text-dark font-medium shadow-[0_0_10px_rgba(190,255,240,0.5)]'
                    : 'bg-dark-light hover:bg-dark text-foreground/70 hover:text-foreground'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {filteredSkills.map((skill, index) => (
              <div key={index} className="skill-bar glass p-6 transition-all duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-md bg-dark text-neon-green">
                    <skill.icon size={20} />
                  </div>
                  <h3 className="font-medium">{skill.name}</h3>
                  <span className="ml-auto text-sm text-foreground/70">{skill.level}%</span>
                </div>
                <div className="w-full h-2 bg-dark rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-neon-green to-neon-blue transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%`, transitionDelay: `${index * 100}ms` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
