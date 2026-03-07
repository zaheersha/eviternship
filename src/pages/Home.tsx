import { useEffect, useState, useRef } from "react";
import React from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react"

import {
  ArrowRight, BookOpen, BrainCircuit, Code, Database,
  LineChart, Server, Star, Trophy, Users, CheckCircle2,
  ChevronRight, PlayCircle, MapPin, Mail, Phone,
  Globe, Shield, Zap, Laptop, MessageSquare, Clock,
  ChevronUp
} from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

import BatchNotification from "../components/ui/BatchNotification";

import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import logoImage from "../../attached_assets/logo_-_Eviternship_1772863765020.png";

import heroImg from "../assets/images/hero.jpg";
import aboutImg from "../assets/images/about.jpg";
import project1Img from "../assets/images/project-1.jpg";
import mentor1Img from "../assets/images/mentor-1.jpg";
import mentor2Img from "../assets/images/mentor-2.jpg";
import training1Img from "../assets/images/training-1.jpg";
import training2Img from "../assets/images/training-2.jpg";
import cert1Img from "../assets/images/cert-1.jpg";
import student1Img from "../assets/images/student-1.jpg";
import student2Img from "../assets/images/student-2.jpg";



// Project images with fallbacks
import projectSocial from "../assets/images/project-social.jpg";
import projectStock from "../assets/images/project-stock.jpg";
import projectEcommerce from "../assets/images/project-ecommerce.jpg";
import project2Img from "../assets/images/project-2.jpg";
import communityImg from "../assets/images/community-1.jpg";

const StatsCounter = ({ end, label, suffix = "+" }: { end: number, label: string, suffix?: string }) => {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-black text-white mb-2">
        <CountUp end={end} duration={3} enableScrollSpy scrollSpyOnce />
        {suffix}
      </div>
      <div className="text-white/60 font-bold uppercase tracking-widest text-sm">{label}</div>
    </div>
  );
};
type Course = {
  title: string
  desc: string
  img: string
}

type LearningPath = {
  title: string
  desc: string
  img: string
}


const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) setIsVisible(true);
      else setIsVisible(false);
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-8 right-8 z-50 p-4 bg-primary text-white rounded-full shadow-2xl hover:scale-110 transition-transform"
        >
          <ChevronUp className="w-6 h-6" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};


const WhatsAppHelp = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-4 p-6 bg-white rounded-2xl shadow-2xl border border-gray-100 max-w-[300px]"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
            >
              <X className="w-4 h-4" />
            </button>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">
                <MessageSquare className="w-6 h-6" />
              </div>
              <p className="font-bold text-secondary">Hello 👋</p>
            </div>
            <p className="text-sm text-gray-600 mb-6">
              Need help with EVITernship programs? Chat with us on WhatsApp.
            </p>
            <div className="flex flex-col gap-2">
              <Button
                onClick={() => window.open("https://wa.me/916304237115", "_blank")}
                className="bg-green-500 hover:bg-green-600 text-white font-bold w-full"
              >
                Chat Now
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="w-full text-gray-500"
              >
                Cancel
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-6 py-4 bg-green-500 text-white rounded-full shadow-2xl font-bold"
      >
        <MessageSquare className="w-6 h-6" />
        <div className="text-left hidden sm:block">
          <div className="text-[10px] uppercase opacity-80 leading-none mb-1">Need Help?</div>
          <div className="text-sm leading-none">Chat on WhatsApp</div>
        </div>
      </motion.button>
    </div>
  );
};

const CountdownTimer = () => {

  // Target date → March 20, 2026
  const targetDate = new Date("2026-03-20T00:00:00");

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    return { days, hours, minutes };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 60000); // updates every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 justify-center md:justify-start">

      {[
        { label: "Days", val: timeLeft.days },
        { label: "Hours", val: timeLeft.hours },
        { label: "Minutes", val: timeLeft.minutes }
      ].map((t, i) => (

        <div
          key={i}
          className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[80px] border border-white/20 text-center"
        >

          <div className="text-2xl font-bold text-white">
            {t.val.toString().padStart(2, "0")}
          </div>

          <div className="text-[10px] uppercase tracking-wider text-white/60">
            {t.label}
          </div>

        </div>

      ))}

    </div>
  );
};

const Section = ({
  children,
  className,
  id
}: {
  children: React.ReactNode
  className?: string
  id?: string
}) => (
  <motion.section
    id={id}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6 }}
    className={className}
  >
    {children}
  </motion.section>
)


export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-primary/30 overflow-x-hidden">
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary z-[60] origin-left" style={{ scaleX }} />

      <ScrollToTop />
      <WhatsAppHelp />













      {/* HEADER */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-lg border-b">

        <div className="container mx-auto px-4 h-20 flex items-center justify-between">

          {/* LOGO */}
          <a href="/" className="flex items-center">
            <img src={logoImage} alt="EVITernship" className="h-10" />
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8 font-semibold">
            <a href="#bootcamp" className="hover:text-primary">Bootcamp</a>
            <a href="#Interviews" className="hover:text-primary">Interviews</a>

            <a href="#courses" className="hover:text-primary">Courses</a>
            <a href="#resourses" className="hover:text-primary">Resourses</a>

            <a href="#community" className="hover:text-primary">Community</a>
            <a href="#projects" className="hover:text-primary">Projects</a>

            <a href="#Login" className="hover:text-primary">Login</a>
          </nav>

          <div className="flex items-center gap-4">

            <Button className="hidden md:inline-flex bg-primary text-white font-bold">
              Enroll Now
            </Button>

            {/* HAMBURGER */}
            <button
              className="md:hidden text-primary z-[60]"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

          </div>

        </div>


        {/* DARK OVERLAY */}
        {menuOpen && (
          <div
            onClick={() => setMenuOpen(false)}
            className="fixed inset-0 bg-black/40 z-40"
          />
        )}

        {/* MOBILE MENU */}
        <div
          className={`fixed top-0 right-0 h-screen w-[280px] bg-white shadow-2xl z-50 transform transition-transform duration-300
${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        >

          <div className="flex flex-col gap-6 p-8 pt-24 font-semibold">

            <a
              href="#bootcamp"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-primary"
            >
              Bootcamp
            </a>

            <a
              href="#Interviews"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-primary"
            >
              Interviews
            </a>

            <a
              href="#courses"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-primary"
            >
              Courses
            </a>

            <a
              href="#resourses"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-primary"
            >
              Resourses
            </a>

            <a
              href="#projects"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-primary"
            >
              Projects
            </a>

            <a
              href="#Login"
              onClick={() => setMenuOpen(false)}
              className="text-lg hover:text-primary"
            >
              Login
            </a>

            <Button className="mt-6 bg-primary text-white font-bold">
              Enroll Now
            </Button>

          </div>

        </div>

      </header>







      {/* 1. HERO SECTION */}

      <div className="pt-20">
        <section className="relative pt-20 pb-24 md:pt-32 md:pb-40 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent text-primary font-bold text-sm">
                  <Zap className="w-4 h-4" /> Next Batch Starting Soon
                </div>
                <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-secondary leading-[1.1]">
                  Launch Your <span className="gradient-text">Tech Career</span> with EvITernship
                </h1>
                <p className="text-xl text-gray-600 max-w-lg leading-relaxed">
                  Learn real-world skills through internships, projects, and mentorship designed to make you industry ready.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-white h-14 px-10 text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-primary/25 group">
                    Explore Programs <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-10 text-lg font-bold border-2 hover:bg-gray-50 transition-all">
                    Enroll Now
                  </Button>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-square md:aspect-[4/5] lg:aspect-square">
                  <img src={"https://media.istockphoto.com/photos/elearning-education-concept-learning-online-picture-id1290864946?b=1&k=20&m=1290864946&s=170667a&w=0&h=zZq7rG5McSptSIpEm9f8iTGd3Mrdkcslakr91T7qTYM="} alt="Students" className="object-cover w-full h-full" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/60 to-transparent"></div>
                </div>
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 glass-card p-6 rounded-2xl shadow-2xl max-w-[200px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                    <span className="text-xs font-bold uppercase tracking-wider text-gray-500">Live Mentorship</span>
                  </div>
                  <p className="text-sm font-bold text-secondary">Get 1:1 guidance from industry experts</p>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>










      {/* 2. TRUSTED BY */}
      <section className="py-20 bg-gray-50/50 border-y overflow-hidden">
        <div className="container mx-auto px-4">
          <p className="text-center text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-12">
            Students preparing for companies like
          </p>
          <div className="flex overflow-hidden group">
            <div className="flex animate-scroll group-hover:pause gap-20 items-center min-w-full">
              {["Google", "Microsoft", "Amazon", "Adobe", "IBM", "Meta", "Flipkart", "Goldman Sachs"].map((logo, i) => (
                <span key={i} className="text-2xl md:text-3xl font-black text-secondary/20 hover:text-primary transition-colors whitespace-nowrap cursor-default">
                  {logo}
                </span>
              ))}
              {["Google", "Microsoft", "Amazon", "Adobe", "IBM", "Meta", "Flipkart", "Goldman Sachs"].map((logo, i) => (
                <span key={i + 10} className="text-2xl md:text-3xl font-black text-secondary/20 hover:text-primary transition-colors whitespace-nowrap cursor-default">
                  {logo}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEARNING PATHS */}
      <Section id="resourses" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">

          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
              Choose a Learning Path
            </h2>
            <p className="text-gray-500 text-lg">
              Select a career path and start your journey today.
            </p>
          </div>

          {(() => {

            const paths: LearningPath[] = [
              {
                title: "Full Stack Development",
                desc: "Learn React, Node.js, MongoDB and build production-ready web apps.",
                img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c"
              },
              {
                title: "Data Analysis",
                desc: "Master Python, SQL, Tableau and Power BI for data-driven roles.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              },
              {
                title: "Programming",
                desc: "Build strong coding foundations with JavaScript and algorithms.",
                img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
              },
              {
                title: "Interview Preparation",
                desc: "Prepare with coding challenges and real mock interviews.",
                img: "https://images.unsplash.com/photo-1580894908361-967195033215"
              },
              {
                title: "CS Core Subjects",
                desc: "Understand DBMS, Operating Systems and System Design concepts.",
                img: "https://images.unsplash.com/photo-1518779578993-ec3579fee39f"
              },
              {
                title: "Off Campus Preparation",
                desc: "Prepare for product-based companies and hiring drives.",
                img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              }
            ]


            const PathCard = ({ item }: { item: LearningPath }) => (
              <motion.div
                whileHover={{ y: -8 }}
                className="group relative rounded-3xl overflow-hidden shadow-lg cursor-pointer"
              >

                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[260px] md:h-[300px] object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">

                  <h3 className="text-2xl font-bold text-white mb-2 text-center">
                    {item.title}
                  </h3>

                  <div className="w-12 h-[3px] bg-primary mx-auto rounded-full mb-3"></div>

                  {/* MOBILE → always visible */}
                  <p className="text-sm text-gray-200 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-300">
                    {item.desc}
                  </p>

                  <Button
                    variant="outline"
                    className="mt-4 w-fit border-white text-white md:opacity-0 md:group-hover:opacity-100 transition-all hover:bg-primary hover:border-primary hover:text-white"
                  >
                    Explore
                    <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>

                </div>

              </motion.div>
            )


            return (
              <>

                {/* MOBILE CAROUSEL */}
                <div className="block lg:hidden">

                  <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                  ><br /><br />
                    {paths.map((item, i) => (
                      <SwiperSlide key={i}>
                        <PathCard item={item} />
                      </SwiperSlide>
                    ))}
                  </Swiper>

                </div>


                {/* DESKTOP GRID */}
                <div className="hidden lg:grid md:grid-cols-2 lg:grid-cols-3 gap-8">

                  {paths.map((item, i) => (
                    <PathCard key={i} item={item} />
                  ))}

                </div>

              </>
            )

          })()}

        </div>
      </Section>








      {/* 4. UPCOMING BOOTCAMP */}
      <Section
        id="bootcamp"
        className="py-24 bg-secondary relative overflow-hidden scroll-mt-24"
      >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">


              <div className="inline-block px-4 py-2 rounded-lg bg-primary text-white font-bold text-sm uppercase tracking-widest">
                Job Guarantee Track
              </div>
              <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                Full Stack Web Development Job Bootcamp
              </h2>
              <p className="text-xl text-white/70">
                A 6-month intensive bootcamp designed to help you land your dream tech job with hands-on learning.
              </p>

              <div className="space-y-6">
                <p className="text-sm font-bold text-white/40 uppercase tracking-widest">Master this stack</p>
                <div className="flex flex-wrap gap-4">
                  {["HTML", "CSS", "JS", "React", "Node.js", "MongoDB", "Express"].map((tech, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                      className="px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold transition-colors cursor-default"
                    >
                      {tech}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <p className="text-white/60 mb-4 font-semibold">Next Batch Starting In:</p>
                <CountdownTimer />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="https://your-form-link.com" target="_blank">
                  <Button
                    size="lg"
                    className="bg-primary text-white h-14 px-10 text-lg font-bold hover:scale-105 transition-all shadow-xl shadow-primary/25"
                  >
                    Enroll Now
                  </Button>
                </a>
                <a href="/jobbootcamp.pdf" download>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-10 text-lg font-bold border-white/20 text-white hover:bg-white/5 transition-all"
                  >
                    Know More
                  </Button>
                </a>
              </div>
            </div>

            <div className="relative group overflow-hidden">
              <div className="absolute -inset-4 bg-primary/20 blur-3xl rounded-full group-hover:bg-primary/30 transition-all duration-700"></div>

              <div className="relative glass-card border-white/10 p-8 rounded-[2.5rem] shadow-2xl overflow-hidden">

                <div className="overflow-hidden">
                  <div className="flex gap-12 animate-marquee whitespace-nowrap">

                    {[
                      { icon: Zap, title: "Live Classes", desc: "Interactive mentor sessions", color: "text-primary" },
                      { icon: Code, title: "Real Projects", desc: "Build production apps", color: "text-blue-400" },
                      { icon: Shield, title: "Placement Support", desc: "Mock interviews", color: "text-green-400" },
                      { icon: Database, title: "Backend APIs", desc: "Node + MongoDB", color: "text-purple-400" },
                      { icon: Users, title: "Community", desc: "Hackathons & contests", color: "text-orange-400" }
                    ].map((item, i) => (

                      <div key={i} className="flex items-center gap-4 min-w-[250px]">

                        <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center">
                          <item.icon className={`w-7 h-7 ${item.color}`} />
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-orange-500">{item.title}</h4>
                          <p className="text-black/50 text-sm">{item.desc}</p>
                        </div>

                      </div>

                    ))}

                  </div>
                </div>

              </div>
              <br /><br />

              <div className="relative glass-card border-white/10 p-8 rounded-[2.5rem] shadow-2xl">

                <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-6">
                  Skills You Will Learn
                </p>

                <Swiper
                  modules={[Autoplay]}
                  spaceBetween={20}
                  autoplay={{ delay: 2500, disableOnInteraction: false }}
                  loop={true}
                  breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 }
                  }}
                >

                  {[
                    { name: "HTML", img: "https://cdn.worldvectorlogo.com/logos/html-1.svg" },
                    { name: "CSS", img: "https://cdn.worldvectorlogo.com/logos/css-3.svg" },
                    { name: "JavaScript", img: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg" },
                    { name: "React", img: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
                    { name: "Node.js", img: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg" },
                    { name: "MongoDB", img: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg" },
                    { name: "Express", img: "https://cdn.worldvectorlogo.com/logos/express-109.svg" },
                    { name: "GitHub", img: "https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" },
                    { name: "REST APIs", img: "https://cdn-icons-png.flaticon.com/512/2165/2165004.png" },
                    { name: "System Design", img: "https://cdn-icons-png.flaticon.com/512/906/906175.png" },
                    { name: "AI Tools", img: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png" }
                  ].map((skill, i) => (

                    <SwiperSlide key={i}>

                      <motion.div
                        whileHover={{ scale: 1.12 }}
                        transition={{ type: "spring", stiffness: 300 }}
                        className="flex flex-col items-center justify-center gap-2 h-28 rounded-xl bg-white/10 border border-white/10 p-3 cursor-pointer"
                      >

                        <img
                          src={skill.img}
                          alt={skill.name}
                          className="h-12 w-12 object-contain transition-transform duration-300"
                          loading="lazy"
                        />

                        <span className="text-xs text-black/80 font-semibold text-center">
                          {skill.name}
                        </span>

                      </motion.div>

                    </SwiperSlide>

                  ))}

                </Swiper>

              </div>

              <br /><br />
              <div className="relative glass-card border-white/10 p-10 rounded-[2.5rem] shadow-2xl overflow-hidden">

                <p className="text-sm font-bold text-orange-500 uppercase tracking-widest mb-8">
                  Your 6 Month Journey
                </p>

                <Swiper
                  modules={[Autoplay, Pagination]}
                  slidesPerView={1}
                  loop={true}
                  speed={2500}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false
                  }}
                  pagination={{ clickable: true }}
                  spaceBetween={30}
                  className="journeySlider"
                >

                  {[
                    {
                      id: "01",
                      title: "Data Structures & Algorithms",
                      desc: "Master logical thinking and coding patterns used in tech interviews.",
                      img: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4"
                    },
                    {
                      id: "02",
                      title: "Frontend Development",
                      desc: "Build responsive UIs using HTML, CSS, JavaScript and React.",
                      img: "https://images.unsplash.com/photo-1555099962-4199c345e5dd"
                    },
                    {
                      id: "03",
                      title: "Backend Development",
                      desc: "Develop APIs using Node.js, Express and MongoDB.",
                      img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
                    },
                    {
                      id: "04",
                      title: "AI & GenAI Tools",
                      desc: "Use modern AI tools to build intelligent applications.",
                      img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
                    },
                    {
                      id: "05",
                      title: "Real World Projects",
                      desc: "Create production-level projects for your portfolio.",
                      img: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                    },
                    {
                      id: "06",
                      title: "Placement Preparation",
                      desc: "Resume building, mock interviews and soft skills training.",
                      img: "https://miro.medium.com/max/875/1*RRGWtfJJMArs62lj2iwVEA.jpeg"
                    }
                  ].map((step, i) => (

                    <SwiperSlide key={i}>

                      <motion.div
                        whileHover={{ scale: 1.03 }}
                        transition={{ type: "spring", stiffness: 200 }}
                        className="relative rounded-2xl overflow-hidden mx-auto max-w-[520px] h-[240px]"
                      >

                        {/* Background Image */}
                        <img
                          src={step.img}
                          alt={step.title}
                          className="absolute inset-0 w-full h-full object-cover"
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60"></div>

                        {/* Content */}
                        <div className="relative z-10 p-8 text-white flex flex-col justify-center h-full">

                          <div className="text-5xl font-black text-orange-400 mb-3">
                            {step.id}
                          </div>

                          <h3 className="text-xl font-bold text-white mb-2">
                            {step.title}
                          </h3>

                          <p className="text-sm text-white/80 leading-relaxed">
                            {step.desc}
                          </p>

                        </div>

                      </motion.div>

                    </SwiperSlide>

                  ))}

                </Swiper>

              </div>




            </div>

          </div>
        </div>
      </Section>





      {/* 6. PROJECTS CAROUSEL */}
      <Section id="projects" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-xl">
              <h2 className="text-4xl font-bold text-secondary mb-4">Masterpiece Projects</h2>
              <p className="text-lg text-gray-500">Real-world applications built by our students during the bootcamp.</p>
            </div>
          </div>

          <Swiper
            modules={[Autoplay, Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 2.5 }
            }}
            className="pb-16"
          >
            {[
              { title: "Social Media App", img: projectSocial, desc: "Dynamic platform with feeds, profiles, and chats." },
              { title: "Stock Analysis", img: projectStock, desc: "Real-time market tracking and data visualization." },
              { title: "BusyBuy Ecommerce", img: projectEcommerce, desc: "A full-featured online store with cart and payments." },
              { title: "Interview Simulator", img: project1Img, desc: "AI-powered mock interview practice tool." },
              { title: "PhotoFolio", img: project2Img, desc: "Modern gallery app for professional photographers." }
            ].map((p, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2rem] overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all h-full"
                >
                  <img src={p.img} alt={p.title} className="w-full h-48 object-cover" loading="lazy" />
                  <div className="p-8">
                    <h4 className="text-xl font-bold text-secondary mb-2">{p.title}</h4>
                    <p className="text-gray-500 text-sm">{p.desc}</p>
                    <Button variant="link" className="px-0 mt-4 font-bold text-primary">Case Study <ArrowRight className="ml-1 w-4 h-4" /></Button>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
            <br /><br />
          </Swiper>
        </div>
      </Section>




      {/* 7. OUR TOP COURSES */}
      <Section id="courses" className="py-24 md:py-32 bg-gray-50">
        <div className="container mx-auto px-4">

          {/* SECTION HEADER */}
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
              Our Top Courses
            </h2>
            <p className="text-lg text-gray-500">
              Learn industry-demand skills with real-world projects and mentorship.
            </p>
          </div>


          {/* COURSE DATA */}
          {(() => {
            const courses = [
              {
                title: "Full Stack Development",
                desc: "Build complete web applications using modern technologies.",
                img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085"
              },
              {
                title: "Data Analytics",
                desc: "Analyze data using Python, SQL and visualization tools.",
                img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71"
              },
              {
                title: "Artificial Intelligence",
                desc: "Create intelligent applications using modern AI tools.",
                img: "https://images.unsplash.com/photo-1677442136019-21780ecad995"
              },
              {
                title: "React Development",
                desc: "Build fast and modern UI using React and Tailwind.",
                img: "https://images.unsplash.com/photo-1633356122544-f134324a6cee"
              },
              {
                title: "Backend Development",
                desc: "Create powerful APIs using Node.js and Express.",
                img: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31"
              },
              {
                title: "Data Science",
                desc: "Learn data science concepts and machine learning models.",
                img: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5"
              }
            ]

            const CourseCard = ({ course }: { course: Course }) => (

              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
                className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all"
              >
                <div className="overflow-hidden">
                  <img
                    src={course.img}
                    alt={course.title}
                    className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {course.title}
                  </h3>

                  <p className="text-gray-500 text-sm mb-4">
                    {course.desc}
                  </p>

                  <Button variant="link" className="px-0 font-bold text-primary">
                    Explore Course →
                  </Button>
                </div>
              </motion.div>
            )


            return (
              <>
                {/* MOBILE SLIDER */}
                <div className="block lg:hidden">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={20}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    autoplay={{ delay: 3000 }}
                    className="pb-10"
                  ><br /><br />
                    {courses.map((course, i) => (
                      <SwiperSlide key={i}>
                        <CourseCard course={course} />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>


                {/* DESKTOP GRID */}
                <div className="hidden lg:grid grid-cols-3 gap-8">
                  {courses.map((course, i) => (
                    <CourseCard key={i} course={course} />
                  ))}
                </div>
              </>
            )
          })()}

        </div>
      </Section>




      {/* 8. COMMUNITY */}
      <Section id="community" className="py-24 bg-secondary text-white">
        <div className="container mx-auto px-4">

          <div className="grid lg:grid-cols-2 gap-16 items-stretch">

            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center space-y-8">

              {/* ORANGE HEADING */}
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                Join the <span className="text-primary">EvITernship</span> Developer Community
              </h2>

              <div className="grid gap-6">

                {[
                  { title: "Expert Talks", icon: MessageSquare },
                  { title: "Open Source Projects", icon: Globe },
                  { title: "Coding Contests", icon: Trophy },
                  { title: "Hackathons", icon: Zap }
                ].map((act, i) => (

                  <motion.div
                    key={i}
                    whileHover={{ x: 10 }}
                    className="flex items-center gap-6 p-6 rounded-2xl bg-white/5 border border-white/10 transition-all"
                  >

                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <act.icon className="w-6 h-6" />
                    </div>

                    <span className="text-xl font-bold">
                      {act.title}
                    </span>

                  </motion.div>

                ))}

              </div>

            </div>


            {/* RIGHT IMAGE */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="relative rounded-[2.5rem] overflow-hidden min-h-[420px]"
            >

              <img
                src={"https://static.vecteezy.com/system/resources/previews/004/579/151/non_2x/the-web-developer-team-is-building-a-smartphone-app-in-flat-design-free-vector.jpg"}
                alt="Community"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                loading="lazy"
              />

              <div className="absolute inset-0 rounded-[2.5rem] ring-1 ring-white/20"></div>

            </motion.div>

          </div>

        </div>
      </Section>




      {/* 9. STATS COUNTER */}
      <Section className="py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            <StatsCounter end={5000} label="Students Trained" />
            <StatsCounter end={200} label="Projects Built" />
            <StatsCounter end={100} label="Partner Colleges" />
            <StatsCounter end={50} label="Industry Mentors" />
          </div>
        </div>
      </Section>




      {/* 10. CERTIFICATE */}
      <Section className="py-24 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <motion.div
              whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
              className="relative preserve-3d"
            >
              <img src={"https://eviternship.com/assets/img/showImg/blogger.jpg"} alt="Certificate" className="rounded-xl shadow-2xl border-8 border-white" loading="lazy" />
              <div className="absolute -top-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-xl font-bold">
                Certified Professional
              </div>
            </motion.div>
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-secondary">Earn Internship Certification</h2>
              <p className="text-lg text-gray-500 leading-relaxed">
                Get a verified certificate that showcases your practical skills and project work to employers worldwide.
              </p>
              <ul className="space-y-4">
                {["Industry Recognized", "Project Verified", "Sharable on LinkedIn"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 font-bold text-secondary">
                    <CheckCircle2 className="w-6 h-6 text-green-500" /> {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>



      {/* 14. CONTACT */}
      <Section id="contact" className="py-16 md:py-24 bg-gray-50">

        <div className="container mx-auto px-4">

          <div className="bg-white rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 shadow-xl border border-gray-100">

            <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">

              {/* LEFT CONTENT */}
              <div className="space-y-6 md:space-y-8">

                <h2 className="text-3xl md:text-4xl font-bold text-secondary">
                  Get in Touch
                </h2>

                <p className="text-base md:text-lg text-gray-500">
                  Have questions about our programs? Our team is here to help you.
                </p>

                <div className="space-y-6">

                  {/* PHONE */}
                  <div className="flex items-center gap-4 md:gap-6">

                    <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-xl md:rounded-2xl flex items-center justify-center text-primary">
                      <Phone className="w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    <div>
                      <div className="text-xs md:text-sm font-bold text-gray-400 uppercase">
                        Phone
                      </div>

                      <div className="text-lg md:text-xl font-bold text-secondary">
                        6304237115
                      </div>
                    </div>

                  </div>


                  {/* EMAIL */}
                  <div className="flex items-center gap-4 md:gap-6">

                    <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-xl md:rounded-2xl flex items-center justify-center text-primary">
                      <Mail className="w-5 h-5 md:w-6 md:h-6" />
                    </div>

                    <div>
                      <div className="text-xs md:text-sm font-bold text-gray-400 uppercase">
                        Email
                      </div>

                      <div className="text-lg md:text-xl font-bold text-secondary break-all">
                        team@eviternship.com
                      </div>
                    </div>

                  </div>

                </div>

              </div>


              {/* RIGHT IMAGE */}
              <div className="relative">

                <img
                  src={aboutImg}
                  alt="Contact"
                  className="w-full h-[240px] md:h-[320px] object-cover rounded-2xl md:rounded-3xl shadow-lg grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />

              </div>

            </div>

          </div>

        </div>

      </Section>



      {/* 15. FINAL CTA */}
      <Section className="py-24">
        <div className="container mx-auto px-4">
          <div className="bg-secondary rounded-[3rem] p-16 md:p-24 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10 blur-[100px]"></div>
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 relative z-10">Get the Tech Career You Deserve, Faster</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center relative z-10">
              <Button size="lg" className="bg-primary text-white h-16 px-12 text-xl font-bold hover:scale-105 transition-all shadow-2xl shadow-primary/30">
                Enroll Now
              </Button>
              <Button size="lg" variant="outline" className="h-16 px-12 text-xl font-bold text-white border-white/20 hover:bg-white/10 transition-all">
                Explore Programs
              </Button>
            </div>
          </div>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="bg-white pt-24 pb-12 border-t">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-2 md:col-span-1">
              <img src={logoImage} alt="EVITernship" className="h-10 mb-8" />
              <p className="text-gray-500 max-w-xs">Building the next generation of industry-ready tech talent through practical training.</p>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-6">Programs</h4>
              <ul className="space-y-4 text-gray-500">
                <li><Link href="#" className="hover:text-primary transition-colors">Bootcamp</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Internships</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Data Analysis</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-6">Company</h4>
              <ul className="space-y-4 text-gray-500">
                <li><Link href="#" className="hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Careers</Link></li>
                <li><Link href="#" className="hover:text-primary transition-colors">Community</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-secondary mb-6">Contact</h4>
              <ul className="space-y-4 text-gray-500">
                <li>team@eviternship.com</li>
                <li>6304237115</li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t flex flex-col md:flex-row justify-between items-center gap-8">
            <p className="text-sm text-gray-400 font-medium">© 2026 EVITernship. All rights reserved.</p>
            <div className="flex gap-8">
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors font-bold">LinkedIn</Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors font-bold">Instagram</Link>
              <Link href="#" className="text-gray-400 hover:text-primary transition-colors font-bold">YouTube</Link>
            </div>
          </div>
        </div>
      </footer>
      <BatchNotification menuOpen={menuOpen} />
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll {
          animation: scroll 40s linear infinite;
        }
        .gradient-text {
          background: linear-gradient(to right, #FF8C42, #FFB347);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        .preserve-3d {
          transform-style: preserve-3d;
          perspective: 1000px;
        }
        /* Custom Swiper Styles */
        .swiper-button-next, .swiper-button-prev {
          color: #FF8C42;
          background: white;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }
        .swiper-button-next:after, .swiper-button-prev:after {
          font-size: 20px;
          font-weight: bold;
        }
        .swiper-pagination-bullet-active {
          background: #FF8C42;
        }
      `}</style>
    </div>
  );
}
