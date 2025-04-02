
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Send } from 'lucide-react';
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "nitanshugoyal786@gmail.com",
      href: "mailto:nitanshugoyal786@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      details: "Patiala, Punjab",
      href: "https://maps.google.com"
    }
  ];

  return (
    <section id="contact" className="section-padding bg-dark-lighter">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-3">
              Get In <span className="text-gradient-primary">Touch</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-neon-green to-neon-blue mx-auto mb-8"></div>
            <p className="text-foreground/80 max-w-2xl mx-auto">
              Have a project in mind or want to discuss a potential collaboration? Feel free to reach out to me.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {contactInfo.map((info, index) => (
              <a 
                key={index}
                href={info.href}
                className="glass p-6 text-center hover:bg-dark-light/50 transition-all duration-300"
                target={info.icon === MapPin ? "_blank" : undefined}
                rel={info.icon === MapPin ? "noopener noreferrer" : undefined}
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center bg-dark rounded-full mb-4 text-neon-green">
                  <info.icon size={24} />
                </div>
                <h3 className="text-lg font-medium mb-2">{info.title}</h3>
                <p className="text-foreground/80">{info.details}</p>
              </a>
            ))}
          </div>
          
          <div className="glass p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-dark-light/30 p-6 rounded-lg flex flex-col justify-center">
                <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Let's Discuss Your Project</h3>
                <p className="text-foreground/80 mb-6">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-neon-green">
                      <Send size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neon-pink">Custom Website Development</h4>
                      <p className="text-sm text-foreground/70">Tailored solutions for your unique requirements</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-neon-green">
                      <Send size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neon-blue">UI/UX Design</h4>
                      <p className="text-sm text-foreground/70">Intuitive interfaces and engaging user experiences</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 text-neon-green">
                      <Send size={18} />
                    </div>
                    <div>
                      <h4 className="font-medium text-neon-purple">Web Application Development</h4>
                      <p className="text-sm text-foreground/70">Robust and scalable applications for your business</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="bg-dark-light/30 border-dark-light placeholder:text-foreground/50 focus:border-neon-green focus:ring-1 focus:ring-neon-green/50"
                  />
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="bg-dark-light/30 border-dark-light placeholder:text-foreground/50 focus:border-neon-green focus:ring-1 focus:ring-neon-green/50"
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="bg-dark-light/30 border-dark-light placeholder:text-foreground/50 focus:border-neon-green focus:ring-1 focus:ring-neon-green/50"
                  />
                </div>
                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="bg-dark-light/30 border-dark-light placeholder:text-foreground/50 focus:border-neon-green focus:ring-1 focus:ring-neon-green/50 min-h-[120px]"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-neon-green to-neon-blue text-dark font-medium hover:shadow-[0_0_15px_rgba(190,255,240,0.5)] border-none"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
