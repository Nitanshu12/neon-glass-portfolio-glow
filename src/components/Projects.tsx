
import React, { useState, useEffect, useRef } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
  category: string;
};

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const projectsRef = useRef<HTMLDivElement>(null);
  
  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'design', name: 'UI/UX Design' },
  ];
  
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product filtering, cart functionality, and payment integration.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 2,
      title: 'Finance Dashboard',
      description: 'An interactive dashboard for tracking personal finances. Built with React, Chart.js, and Firebase. Includes expense tracking, budgeting, and financial insights.',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      tags: ['React', 'Firebase', 'Chart.js', 'Tailwind CSS'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 3,
      title: 'Fitness Tracker App',
      description: 'A mobile app for tracking workouts and fitness progress. Built with React Native and Firebase. Features include workout logs, progress charts, and personalized recommendations.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d',
      tags: ['React Native', 'Firebase', 'Expo', 'Redux'],
      demoLink: '#',
      codeLink: '#',
      category: 'mobile'
    },
    {
      id: 4,
      title: 'Corporate Website Redesign',
      description: 'A complete redesign of a corporate website focusing on improved user experience, accessibility, and modern visual design. Implemented with HTML, CSS, and JavaScript.',
      image: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1',
      tags: ['HTML', 'CSS', 'JavaScript', 'Figma'],
      demoLink: '#',
      codeLink: '#',
      category: 'design'
    },
    {
      id: 5,
      title: 'Task Management Application',
      description: 'A collaborative task management application with real-time updates. Built with React, Socket.io, and MongoDB. Features include task assignment, status tracking, and team collaboration.',
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b',
      tags: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      demoLink: '#',
      codeLink: '#',
      category: 'web'
    },
    {
      id: 6,
      title: 'Social Media App UI Design',
      description: 'A comprehensive UI design for a social media application. Created with Figma, focusing on intuitive navigation, engaging visual design, and seamless user experience.',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
      demoLink: '#',
      codeLink: '#',
      category: 'design'
    },
  ];
  
  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category === activeFilter);
  
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
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
      card.classList.add('opacity-0', 'translate-y-10');
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filteredProjects]);

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4" ref={projectsRef}>
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              My <span className="text-gradient-primary">Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-8"></div>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Explore my portfolio of work across web development, mobile applications, and UI/UX design.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`px-4 py-2 rounded-full text-sm transition-all duration-300 ${
                  activeFilter === filter.id
                    ? 'bg-gradient-to-r from-neon-green to-neon-blue text-dark font-medium shadow-[0_0_10px_rgba(190,255,240,0.5)]'
                    : 'bg-dark-light hover:bg-dark text-foreground/70 hover:text-foreground'
                }`}
              >
                {filter.name}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="project-card glass group overflow-hidden transition-all duration-500">
                <div className="relative overflow-hidden h-56">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 w-full p-4 flex justify-between items-center">
                    <h3 className="text-lg font-medium text-white">{project.title}</h3>
                    <a href={project.demoLink} className="text-neon-green hover:text-neon-blue transition-colors duration-300">
                      <ArrowRight size={20} />
                    </a>
                  </div>
                </div>
                
                <div className="p-6">
                  <p className="text-foreground/80 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-dark text-xs text-neon-green rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex justify-between">
                    <a 
                      href={project.demoLink}
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-neon-green transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                    <a 
                      href={project.codeLink}
                      className="flex items-center gap-2 text-sm text-foreground/80 hover:text-neon-pink transition-colors duration-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} />
                      Source Code
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
