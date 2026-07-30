"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, ExternalLink, Code2, Database, Terminal, Server, GraduationCap, Briefcase, Award, Send } from "lucide-react";
import { FaGithub, FaLinkedin, FaReact, FaJsSquare, FaHtml5, FaCss3Alt, FaWhatsapp } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiTypescript, SiRedux } from "react-icons/si";
import Background from "@/components/Background";

// أيقونات الـ Frontend للدائرة المدارية
const frontendTechs = [
  { icon: FaReact, name: "React", color: "text-sky-400" },
  { icon: SiNextdotjs, name: "Next.js", color: "text-white" },
  { icon: FaJsSquare, name: "JavaScript", color: "text-yellow-400" },
  { icon: SiTailwindcss, name: "Tailwind", color: "text-cyan-400" },
  { icon: SiTypescript, name: "TypeScript", color: "text-blue-400" },
  { icon: SiRedux, name: "Redux", color: "text-purple-400" },
  { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
  { icon: FaCss3Alt, name: "CSS3", color: "text-blue-500" },
];

const projects = [
  {
    title: "Full-Stack Real-Time Chat System",
    description: "High-performance real-time messaging ecosystem featuring instant text delivery and status sync using Laravel WebSockets and React.",
    tags: ["Laravel", "React.js", "Pusher/Echo", "MySQL", "Tailwind CSS"],
    image: "./chats.jpg",
    github: "https://github.com/hamzaobed7",
    demo: "https://hamza-obed-portfolio.netlify.app/",
  },
  {
    title: "Library Management & Subscriptions",
    description: "Full digital and physical assets library management with PayPal REST API integration for automated transaction workflows.",
    tags: ["Laravel", "React.js", "PayPal API", "MySQL", "Material-UI"],
    image: "./BookAdmin.png",
    github: "https://github.com/hamzaobed7/LibraryAlAhlam",
    demo: "https://hamza-obed-portfolio.netlify.app/",
  },
  {
    title: "Military Management System",
    description: "Comprehensive administrative web application engineered for managing personnel, records, assignments, and operational workflows efficiently.",
    tags: ["JavaScript", "React.js", "Laravel API", "MySQL", "Tailwind CSS"],
    image: "./Militry.png",
    github: "https://github.com/hamzaobed7/MiliteryManagment",
    demo: "#",
  },
  {
    title: "E-Commerce Digital Platform",
    description: "Modern, scalable e-commerce application featuring product catalog management, interactive shopping cart, checkout integration, and responsive design.",
    tags: ["JavaScript", "React.js", "REST API", "Tailwind CSS"],
    image: "Ecommerce.png",
    github: "https://github.com/hamzaobed7/Ecomerce",
    demo: "#",
  },
  {
    title: "Multimedia Processing Suite",
    description: "Advanced C# & ASP.NET suite implementing custom computer vision algorithms, matrix computations, and distance transforms from scratch.",
    tags: ["C#", "ASP.NET Core", "Image Processing", "Algorithms"],
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1200&auto=format&fit=crop",
    github: "https://github.com/hamzaobed7/Bank",
    demo: "#",
  },
  {
    title: "Films & Media Discovery Web",
    description: "Interactive movie browsing web application designed with seamless dynamic filtering, real-time data fetching, and rich media UI elements.",
    tags: ["JavaScript", "React.js", "TMDB API", "CSS3"],
    image: "films.png",
    github: "https://github.com/hamzaobed7/Films",
    demo: "https://amazing-strudel-ac3e49.netlify.app/",
  },
  {
    title: "Interactive Map & Location Tracker",
    description: "Geospatial tracking dashboard with OpenStreetMap integration via React Leaflet for live location pinpointing and geofencing.",
    tags: ["React.js", "Leaflet Maps", "Tailwind CSS", "REST API"],
    image: "trov.png",
    github: "https://github.com/hamzaobed7",
    demo: "https://rad-kitten-d12c52.netlify.app/",
  },


   {
    title: "Anime Watchs",
    description: "Web application for watch and DownLoad Anime",
    tags: ["React.js", "Material Ui", "Tailwind CSS"],
    image: "animi.png",
    github: "https://github.com/hamzaobed7/anime",
    demo: "https://hamzaobed777.netlify.app",
  },
  {
    title: "House For Rate",
    description: "Web application for Sales and Rental Homes",
    tags: ["React.js", "Material Ui", "Tailwind CSS"],
    image: "Homes.png",
    github: "https://github.com/hamzaobed7/Homes",
    demo: "https://idyllic-faloodeh-f7f23f.netlify.app/",
  },
 {
    title: "Burger",
    description: "Web application for Order all kind of Burger",
    tags: ["React.js", "Material Ui", "Tailwind CSS"],
    image: "Burger.png",
    github: "https://github.com/hamzaobed7/burger/",
    demo: "https://unique-biscuit-b7b9a3.netlify.app/",
  },

   {
    title: "Mounakh",
    description: "Web application for view the status of sky the language is English and Arabic ",
    tags: ["React.js", "Material Ui", "Tailwind CSS","Api "],
    image: "wetherd.png",
    github: "https://github.com/hamzaobed7/",
    demo: "https://calm-buttercream-b7865a.netlify.app/",
  },
];

const skills = [
  { category: "Backend Engineering", items: ["PHP", "Laravel", "REST APIs", "WebSockets", "PayPal Integration", "Node.js"], icon: Server },
  { category: "Frontend Architecture", items: ["React.js", "Next.js", "JavaScript (ES6+)", "Tailwind CSS", "Material-UI", "Framer Motion"], icon: Code2 },
  { category: "Databases & Tools", items: ["MySQL", "SQL Server", "Firebase FCM", "Git / GitHub", "Postman", "Linux"], icon: Database },
  { category: "Languages & Systems", items: ["C++", "Java (OOP)", "Python", "C#", "ASP.NET Core"], icon: Terminal },
];

export default function Portfolio() {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  // إخفاء الـ Preloader بعد ثانيتين من تحميل الصفحة
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500/30 selection:text-amber-200 w-full overflow-x-hidden">
      {/* Preloader Animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="preloader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-zinc-950 text-white"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
              className="flex items-center gap-3 text-3xl font-bold tracking-tight mb-6"
            >
              <span className="w-4 h-4 rounded-full bg-amber-500 animate-pulse" />
              M. Hamza Obed
            </motion.div>

            {/* Spinner Progress Bar */}
            <div className="w-48 h-1 bg-zinc-800 rounded-full overflow-hidden">
              <motion.div initial={{ x: "-100%" }} animate={{ x: "0%" }} transition={{ duration: 1.8, ease: "easeInOut" }} className="w-full h-full bg-amber-500" />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Background />

      <div className="relative z-10 w-full px-6 md:px-16 lg:px-24 py-8 space-y-36">
        {/* Navbar */}
        <nav className="flex justify-between items-center py-6 border-b border-zinc-800/60 backdrop-blur-md sticky top-0 z-50 w-full">
          <span className="text-2xl md:text-3xl font-bold tracking-tight text-white flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-500" /> M. Hamza Obed
          </span>
          <div className="flex gap-6 md:gap-10 text-base font-semibold text-zinc-300">
            <a href="#about" className="hover:text-amber-400 transition">
              About
            </a>
            <a href="#skills" className="hover:text-amber-400 transition">
              Skills
            </a>
            <a href="#projects" className="hover:text-amber-400 transition">
              Projects
            </a>
            <a href="#experience" className="hover:text-amber-400 transition">
              Experience
            </a>
            <a href="#contact" className="hover:text-amber-400 transition text-amber-500">
              Contact
            </a>
          </div>
        </nav>

        {/* Hero Section with Interactive Orbit */}
        <section id="about" className="pt-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center w-full">
          {/* Left Text Content */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="lg:col-span-7 space-y-8">
            <span className="inline-block px-4 py-1.5 text-sm font-mono bg-zinc-900 border border-zinc-800 text-amber-400 rounded-md font-semibold tracking-wide">
              SOFTWARE ENGINEER & FULL-STACK DEVELOPER
            </span>
            <h1 className="text-5xl sm:text-7xl xl:text-8xl font-black tracking-tight text-white leading-[1.1]">
              Architecting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Modern Web Products.</span>
            </h1>
            <p className="text-zinc-300 text-xl sm:text-2xl leading-relaxed font-normal max-w-3xl">
              Software Engineering student at AIU specializing in decoupled architectures, RESTful APIs with Laravel, dynamic UIs using React & Next.js, and optimized database solutions.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/hamzaobed7"
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/50 hover:text-amber-400 transition"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/in/hamza-obed-278507371"
                target="_blank"
                rel="noreferrer"
                className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/50 hover:text-amber-400 transition"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a href="mailto:hamzaobed92@gmail.com" className="p-4 bg-zinc-900 border border-zinc-800 rounded-xl hover:border-amber-500/50 hover:text-amber-400 transition">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

          {/* Right Orbit Ring (Frontend Tech Circle - ENLARGED) */}
          <div className="lg:col-span-5 flex justify-center items-center relative py-16">
            {/* Expanded Orbit Container */}
            <div className="relative w-[360px] h-[360px] sm:w-[460px] sm:h-[460px] flex justify-center items-center">
              {/* Central Core */}
              <div className="w-32 h-32 sm:w-36 sm:h-36 rounded-full bg-zinc-900 border border-zinc-700/80 flex flex-col justify-center items-center shadow-2xl shadow-amber-500/10 z-10">
                <Code2 className="w-10 h-10 text-amber-400 mb-1" />
                <span className="text-xs font-mono font-bold text-zinc-200 uppercase tracking-widest">Frontend</span>
              </div>

              {/* Orbiting Ring */}
              <motion.div animate={{ rotate: 360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }} className="absolute inset-0 rounded-full border border-dashed border-zinc-700/80">
                {frontendTechs.map((tech, index) => {
                  const angle = (index / frontendTechs.length) * (2 * Math.PI);
                  const radius = 185; // Increased Orbit Radius
                  const x = Math.cos(angle) * radius;
                  const y = Math.sin(angle) * radius;
                  const Icon = tech.icon;

                  return (
                    <motion.div
                      key={index}
                      className="absolute left-1/2 top-1/2 p-4 bg-zinc-900/90 border border-zinc-700/80 rounded-full shadow-xl backdrop-blur-md group hover:scale-125 transition duration-300"
                      style={{
                        transform: `translate(-50%, -50%) translate(${x}px, ${y}px)`,
                      }}
                    >
                      {/* Counter-rotate icons so they stay right-side up */}
                      <motion.div animate={{ rotate: -360 }} transition={{ duration: 35, repeat: Infinity, ease: "linear" }}>
                        <Icon className={`w-7 h-7 sm:w-8 sm:h-8 ${tech.color}`} />
                      </motion.div>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Technical Stack Section */}
        <section id="skills" className="space-y-10 w-full">
          <h2 className="text-4xl font-black tracking-tight text-white border-l-4 border-amber-500 pl-4">Technical Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
            {skills.map((skillGroup, idx) => {
              const Icon = skillGroup.icon;
              return (
                <motion.div key={idx} whileHover={{ y: -3 }} className="p-7 bg-zinc-900/50 border border-zinc-800/90 rounded-2xl backdrop-blur-sm space-y-5">
                  <div className="flex items-center gap-3">
                    <Icon className="w-6 h-6 text-amber-400" />
                    <h3 className="text-lg font-bold text-white">{skillGroup.category}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5">
                    {skillGroup.items.map((item, sIdx) => (
                      <span key={sIdx} className="px-3 py-1.5 text-sm font-mono bg-zinc-900 text-zinc-200 rounded-md border border-zinc-800">
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="space-y-12 w-full">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-white border-l-4 border-amber-500 pl-4">Featured Work</h2>
            <p className="text-zinc-300 text-lg mt-2">Production-ready applications and software systems.</p>
          </div>

          <div className="space-y-14 w-full">
            {projects.map((proj, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-zinc-900/40 border border-zinc-800 rounded-2xl p-6 lg:p-10 hover:border-zinc-700 transition"
              >
                {/* Large Project Image */}
                <div className="lg:col-span-7 h-72 sm:h-96 md:h-[420px] w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 group">
                  <img src={proj.image} alt={proj.title} loading="lazy" className="w-full h-full object-cover group-hover:scale-102 transition duration-700 opacity-90 group-hover:opacity-100" />
                </div>

                {/* Project Info Side-Panel */}
                <div className="lg:col-span-5 space-y-6 flex flex-col justify-between h-full">
                  <div className="space-y-4">
                    <h3 className="text-3xl font-extrabold text-white leading-snug">{proj.title}</h3>
                    <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">{proj.description}</p>
                  </div>

                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2.5">
                      {proj.tags.map((tag, tIdx) => (
                        <span key={tIdx} className="text-sm font-mono px-3.5 py-1.5 bg-amber-500/10 text-amber-300 rounded-md border border-amber-500/20">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-8 pt-4 border-t border-zinc-800">
                      <a href={proj.github} target="_blank" rel="noreferrer" className="text-base font-semibold text-zinc-200 hover:text-white flex items-center gap-2">
                        <FaGithub className="w-5 h-5" /> Source Code
                      </a>
                      {proj.demo !== "#" && (
                        <a href={proj.demo} target="_blank" rel="noreferrer" className="text-base font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-2">
                          Live Demo <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Experience & Education */}
        <section id="experience" className="grid grid-cols-1 lg:grid-cols-2 gap-12 w-full">
          {/* Work */}
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold flex items-center gap-3 text-white">
              <Briefcase className="w-8 h-8 text-amber-400" /> Experience
            </h2>
            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-bold text-xl text-white">Freelance Full-Stack Developer</h3>
                  <p className="text-sm text-amber-400 font-mono mt-1">Self-Employed</p>
                </div>
                <span className="text-sm text-zinc-400 font-medium">2024 – Present</span>
              </div>
              <ul className="text-base text-zinc-300 space-y-2.5 list-disc list-inside leading-relaxed">
                <li>Architect optimized backend API endpoints, converting monolithic scripts into schemas.</li>
                <li>Build production-ready interfaces using modern reactive frameworks (React / Next.js).</li>
              </ul>
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8">
            <h2 className="text-3xl font-extrabold flex items-center gap-3 text-white">
              <GraduationCap className="w-8 h-8 text-amber-400" /> Education
            </h2>
            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-2">
              <h3 className="font-bold text-xl text-white">B.S. in Software Engineering</h3>
              <p className="text-sm text-amber-400 font-medium">Arab International University (AIU)</p>
              <p className="text-sm text-zinc-400">2022 – Present • GPA: 3.19 / 4.00</p>
            </div>

            <div className="p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl space-y-2">
              <h3 className="font-bold flex items-center gap-2 text-lg text-white">
                <Award className="w-5 h-5 text-amber-400" /> Syrian Computer Society (SCS)
              </h3>
              <p className="text-sm text-zinc-300">Laravel Web Development Certification</p>
            </div>
          </div>
        </section>

        {/* Contact Me Section */}
        <section id="contact" className="space-y-10 w-full pt-4">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-white border-l-4 border-amber-500 pl-4">Get In Touch</h2>
            <p className="text-zinc-300 text-lg mt-2">Open for backend & full-stack development opportunities.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full">
            <div className="space-y-5 lg:col-span-1">
              {/* Email */}
              <a href="mailto:hamzaobed92@gmail.com" className="flex items-center gap-6 p-7 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-amber-500/40 transition group">
                <Mail className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-sm text-zinc-400 uppercase font-mono tracking-wider font-semibold">Email</h4>
                  <p className="text-lg md:text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition mt-0.5">hamzaobed92@gmail.com</p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/963948389479" // ضع رقمك هنا بالصيغة الدولية بدون (+) أو (00)
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-7 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-amber-500/40 transition group"
              >
                <FaWhatsapp className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-sm text-zinc-400 uppercase font-mono tracking-wider font-semibold">WhatsApp</h4>
                  <p className="text-lg md:text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition mt-0.5">+963948389479</p>
                </div>
              </a>

              {/* LinkedIn */}
              <a
                href="https://linkedin.com/in/hamza-obed-278507371"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-6 p-7 bg-zinc-900/40 border border-zinc-800 rounded-2xl hover:border-amber-500/40 transition group"
              >
                <FaLinkedin className="w-8 h-8 text-amber-400 shrink-0" />
                <div>
                  <h4 className="text-sm text-zinc-400 uppercase font-mono tracking-wider font-semibold">LinkedIn</h4>
                  <p className="text-lg md:text-xl font-bold text-zinc-100 group-hover:text-amber-400 transition mt-0.5">Hamza Obed</p>
                </div>
              </a>
            </div>

            <div className="lg:col-span-2 p-8 bg-zinc-900/40 border border-zinc-800 rounded-2xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Name"
                    className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition text-base"
                  />
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Your Email"
                    className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition text-base"
                  />
                </div>

                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Your Message..."
                  className="w-full px-5 py-4 bg-zinc-950 border border-zinc-800 rounded-xl text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500 transition text-base resize-none"
                />

                <button type="submit" className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-zinc-950 font-bold rounded-xl transition flex items-center justify-center gap-2.5 text-base">
                  <Send className="w-5 h-5" /> Send Message
                </button>

                {submitted && <p className="text-sm text-emerald-400 font-semibold">Message sent successfully!</p>}
              </form>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm text-zinc-500 border-t border-zinc-800/60 pt-8 w-full">© {new Date().getFullYear()} Mohammed Hamza Obed. Built with Next.js & Tailwind CSS.</footer>
      </div>
    </div>
  );
}
