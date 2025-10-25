import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { 
  FaGithub, 
  FaLinkedin, 
  FaEnvelope, 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaPython, 
  FaReact,
  FaDownload,
  FaArrowRight
} from "react-icons/fa";
import { SiC, SiDjango } from "react-icons/si";
import profileImage from "@/assets/profile.jpg";
import heroBackground from "@/assets/hero-bg.jpg";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent! 💌",
      description: "Thank you for reaching out. I'll get back to you soon!",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const skills = [
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "Python", icon: FaPython, color: "#3776AB" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "C", icon: SiC, color: "#A8B9CC" },
    { name: "Django", icon: SiDjango, color: "#092E20" },
  ];

  const projects = [
    {
      title: "CGPA Calculator",
      description: "A simple calculator to compute students' CGPA with an intuitive interface",
      tech: ["HTML", "CSS", "JavaScript"],
      status: "completed"
    },
    {
      title: "Skill Swap Portal",
      description: "A platform to connect users for skill exchange and collaborative learning",
      tech: ["HTML", "CSS", "JavaScript", "Django"],
      status: "completed"
    },
    {
      title: "Indeed Scraper",
      description: "Scrapes job listings from Indeed to display latest tech opportunities",
      tech: ["Python", "BeautifulSoup", "Django"],
      status: "completed"
    },
    {
      title: "Amazon Scraper",
      description: "Scrapes Amazon product details for price comparison and analysis",
      tech: ["Python", "BeautifulSoup", "Selenium"],
      status: "completed"
    },
    {
      title: "Live Weather Dashboard",
      description: "Displays live weather data using API for user-specified locations",
      tech: ["React.js", "JavaScript", "APIs"],
      status: "completed"
    },
    {
      title: "Tech Job Portal",
      description: "Aggregates jobs from Indeed and Glassdoor in a user-friendly interface",
      tech: ["Django", "HTML", "CSS", "JavaScript"],
      status: "completed"
    },
  ];

  const achievements = [
    {
      title: "Symposium Presentation",
      description: "Presented on a technical topic at college symposium",
      year: "2024"
    },
    {
      title: "Bootcamp Participation",
      description: "Attended a coding/tech bootcamp",
      year: "2024"
    },
    {
      title: "3-Month Trio Course in Cybernaut",
      description: "Completed specialized technical course",
      year: "2024"
    },
    {
      title: "Workshop Attendance",
      description: "Participated in various tech workshops",
      year: "2023-2024"
    },
  ];

  const internships = [
    {
      company: "Cybernaut",
      role: "Online Intern",
      duration: "Currently working",
      description: "Completed 2 mini projects + 1 major project focusing on web development",
    },
    {
      company: "Bevywise",
      role: "Web Developer Intern",
      duration: "15 days",
      description: "Developed a CGPA Calculator application",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        id="home" 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url(${heroBackground})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 to-background/70" />
        
        <div className="relative section-container text-center z-10">
          <div className="animate-fade-in">
            <div className="mb-8 inline-block">
              <img 
                src={profileImage} 
                alt="Rajalakshmi P" 
                className="w-48 h-48 rounded-full border-4 border-primary shadow-glow mx-auto object-cover"
              />
            </div>
            
            <h1 className="text-5xl sm:text-7xl font-bold mb-4">
              <span className="text-gradient">Rajalakshmi P</span>
            </h1>
            
            <h2 className="text-3xl sm:text-4xl font-semibold text-foreground/90 mb-6">
              Full Stack Developer
            </h2>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Passionate about creating, learning, and innovating
            </p>
            
            <Button 
              size="lg" 
              className="btn-primary group"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
              <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <p className="text-lg text-foreground/90 leading-relaxed">
              I'm an engineering student who has a great interest in coding and web development. 
              I enjoy exploring new technologies and building creative full-stack projects that make 
              a real impact. I'm passionate about continuous learning and turning innovative ideas 
              into functional web experiences.
            </p>
          </Card>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-container">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Skills</span>
        </h2>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border/50 card-hover text-center group"
            >
              <skill.icon 
                className="w-12 h-12 mx-auto mb-3 transition-transform group-hover:scale-110" 
                style={{ color: skill.color }}
              />
              <p className="font-semibold">{skill.name}</p>
              {["React", "C", "DSA"].includes(skill.name) && (
                <span className="text-xs text-primary mt-1 block">Learning</span>
              )}
            </Card>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-container">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Projects</span>
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border/50 card-hover flex flex-col"
            >
              <h3 className="text-xl font-bold mb-3 text-primary">{project.title}</h3>
              <p className="text-foreground/80 mb-4 flex-grow">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary">
            Projects in Progress 🚀
          </h3>
          <Card className="p-6 bg-card/50 backdrop-blur border-border/50 text-center">
            <p className="text-foreground/80">
              Currently exploring new technologies and building exciting projects. 
              Stay tuned for updates!
            </p>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="section-container">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Achievements</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {achievements.map((achievement, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border/50 card-hover"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-primary font-bold">{achievement.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-foreground/80">{achievement.description}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Internships Section */}
      <section id="internships" className="section-container">
        <h2 className="text-4xl sm:text-5xl font-bold mb-12 text-center">
          <span className="text-gradient">Internships</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {internships.map((internship, index) => (
            <Card 
              key={index}
              className="p-6 bg-card/50 backdrop-blur border-border/50 card-hover"
            >
              <h3 className="text-2xl font-bold mb-2 text-primary">{internship.company}</h3>
              <p className="text-lg font-semibold mb-2">{internship.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{internship.duration}</p>
              <p className="text-foreground/80">{internship.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gradient">My Resume</span>
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Want to know more about my experience and qualifications?
          </p>
          <Button size="lg" className="btn-primary group">
            <FaDownload className="mr-2 group-hover:animate-bounce" />
            Download Resume
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4 text-center">
            <span className="text-gradient">Let's Connect 💌</span>
          </h2>
          <p className="text-center text-foreground/80 mb-12">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
          
          <Card className="p-8 bg-card/50 backdrop-blur border-border/50">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="bg-background/50"
                />
              </div>
              
              <div>
                <Textarea
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  className="bg-background/50 min-h-[150px]"
                />
              </div>
              
              <Button type="submit" className="w-full btn-primary" size="lg">
                Send Message
              </Button>
            </form>
          </Card>

          <div className="flex justify-center gap-6 mt-8">
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-foreground/70 hover:text-primary transition-colors"
            >
              <FaGithub />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-3xl text-foreground/70 hover:text-primary transition-colors"
            >
              <FaLinkedin />
            </a>
            <a 
              href="mailto:rajalakshmi@example.com"
              className="text-3xl text-foreground/70 hover:text-primary transition-colors"
            >
              <FaEnvelope />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="section-container">
          <p className="text-center text-lg">
            ✨ Made with love by <span className="text-primary font-semibold">Rajalakshmi</span> ✨
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
