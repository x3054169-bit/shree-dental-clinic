import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Clock, 
  Star, 
  CheckCircle2, 
  Menu, 
  X, 
  ChevronRight, 
  Instagram, 
  Facebook, 
  Twitter,
  Calendar,
  ShieldCheck,
  Award,
  Users,
  ArrowRight
} from 'lucide-react';
import Lenis from 'lenis';
import { useForm } from 'react-hook-form';
import { cn } from './lib/utils';

// --- Constants ---
const CLINIC_NAME = "Shree Dental";
const FULL_NAME = "Shree Dental Clinic";
const PHONE_NUMBER = "+91 88717 98481";
const WHATSAPP_NUMBER = "918871798481";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
const ADDRESS = "Mahaveer Dwar, 979, Footi Kothi Rd, Sector D, Sudama Nagar, Indore, MP 452009";
const MAP_LINK = "https://maps.app.goo.gl/3962fc4a9022aeb1";

const SERVICES = [
  { title: "Teeth Cleaning", icon: "✨", desc: "Professional scaling and polishing for a brighter smile." },
  { title: "Root Canal", icon: "🦷", desc: "Painless RCT to save your natural teeth from decay." },
  { title: "Braces & Alignment", icon: "😬", desc: "Modern orthodontic solutions for perfectly aligned teeth." },
  { title: "Tooth Extraction", icon: "🏥", desc: "Safe and gentle removal of damaged or wisdom teeth." },
  { title: "Teeth Whitening", icon: "💎", desc: "Advanced bleaching for a sparkling white smile." },
  { title: "Caps & Crowns", icon: "👑", desc: "Durable and natural-looking restoration for damaged teeth." },
];

const REVIEWS = [
  { name: "Rahul Sharma", text: "Very affordable and friendly clinic. Highly recommended.", rating: 5, date: "2 weeks ago" },
  { name: "Priya Patel", text: "Saw visible improvement quickly. The doctor is very patient.", rating: 5, date: "1 month ago" },
  { name: "Amit Gupta", text: "First time I enjoyed visiting a dentist. Painless treatment!", rating: 5, date: "3 months ago" },
];

// --- Custom Icons ---
const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.938 3.659 1.435 5.63 1.436h.008c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-4 py-4 md:py-6",
      isScrolled ? "nav-blur py-3 md:py-4 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-emerald-200 group-hover:rotate-12 transition-transform">S</div>
          <div className="flex flex-col">
            <span className="font-extrabold text-xl tracking-tight text-slate-900 leading-none">{CLINIC_NAME}</span>
            <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest mt-0.5">Dental Excellence</span>
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors tracking-wide">
              {link.name}
            </a>
          ))}
          <a href="#contact" className="bg-slate-900 text-white px-7 py-3 rounded-full text-sm font-bold hover:bg-emerald-600 transition-all shadow-xl shadow-slate-200 btn-premium">
            Book Appointment
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-900 bg-white shadow-md rounded-xl border border-slate-100" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white rounded-3xl p-6 flex flex-col gap-4 md:hidden shadow-2xl border border-slate-100 z-50"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-bold text-slate-800 py-3 border-b border-slate-50 flex items-center justify-between group"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
                <ChevronRight className="text-slate-300 group-hover:text-emerald-500 transition-colors" />
              </a>
            ))}
            <a
              href="#contact"
              className="bg-emerald-500 text-white text-center py-4 rounded-2xl font-bold text-lg shadow-lg shadow-emerald-100 mt-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Appointment
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative pt-32 pb-20 md:pt-52 md:pb-40 overflow-hidden premium-gradient">
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left"
        >
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-1.5 rounded-full text-xs font-bold mb-8 uppercase tracking-widest border border-emerald-100">
            <ShieldCheck className="w-4 h-4" /> Trusted by 70+ Happy Patients
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-slate-900 leading-[0.95] mb-8 tracking-tighter">
            Modern Care, <br />
            <span className="text-emerald-500 italic">Timeless Smiles.</span>
          </h1>
          <p className="text-xl text-slate-600 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium">
            Experience Indore's most advanced, painless, and affordable dental clinic. We don't just treat teeth; we craft confidence.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-5 justify-center lg:justify-start">
            <a href="#contact" className="w-full sm:w-auto bg-emerald-500 text-white px-10 py-5 rounded-2xl font-extrabold text-lg hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-200 flex items-center justify-center gap-3 btn-premium">
              Book Appointment <ArrowRight className="w-5 h-5" />
            </a>
            <a href={`tel:${PHONE_NUMBER}`} className="w-full sm:w-auto bg-white text-slate-900 border border-slate-200 px-10 py-5 rounded-2xl font-extrabold text-lg hover:bg-slate-50 transition-all flex items-center justify-center gap-3 shadow-lg shadow-slate-100">
              <Phone className="w-5 h-5 text-emerald-500" /> Call Now
            </a>
          </div>
          <div className="mt-10 flex items-center justify-center lg:justify-start gap-6">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 overflow-hidden">
                  <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt="User" referrerPolicy="no-referrer" />
                </div>
              ))}
            </div>
            <div className="text-left">
              <div className="flex text-yellow-400 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
              </div>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">4.9/5 Average Rating</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 relative"
        >
          <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-3xl border-[12px] border-white/50 backdrop-blur-sm">
            <img
              src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=1000"
              alt="Premium Dental Care"
              className="w-full h-auto object-cover aspect-[4/5] lg:aspect-square"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
          </div>
          
          {/* Floating Stats */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                <Users size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">2k+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Happy Patients</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 -right-10 bg-white p-6 rounded-3xl shadow-2xl z-20 border border-slate-100 hidden md:block"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-600">
                <Award size={24} />
              </div>
              <div>
                <p className="text-2xl font-black text-slate-900 leading-none">10yr+</p>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Experience</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
        <div className="max-w-2xl">
          <div className="inline-block bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-4">Our Expertise</div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">World-Class <br /><span className="text-emerald-500">Dental Solutions.</span></h2>
        </div>
        <p className="text-slate-500 font-medium max-w-sm leading-relaxed">
          From routine checkups to complex surgeries, we provide a full spectrum of dental care using cutting-edge technology.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {SERVICES.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:shadow-emerald-100/50 hover:-translate-y-2 transition-all duration-500"
          >
            <div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center text-4xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 border border-slate-50">
              {service.icon}
            </div>
            <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{service.title}</h3>
            <p className="text-slate-500 font-medium leading-relaxed mb-6">{service.desc}</p>
            <a href="#contact" className="inline-flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-widest group-hover:gap-4 transition-all">
              Learn More <ArrowRight size={16} />
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-32 bg-slate-900 text-white overflow-hidden relative">
    <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-500/5 blur-[120px] rounded-full"></div>
    <div className="max-w-7xl mx-auto px-4 relative z-10">
      <div className="flex flex-col lg:flex-row items-center gap-20">
        <div className="flex-1 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-[10px] border-white/10">
            <img 
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800" 
              className="w-full h-auto" 
              alt="Dental Care" 
              referrerPolicy="no-referrer" 
            />
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-emerald-500 rounded-[3rem] -z-10 rotate-12"></div>
        </div>
        <div className="flex-1">
          <div className="inline-block bg-emerald-500/10 text-emerald-400 px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest mb-6">Why Shree Dental?</div>
          <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">Crafting Smiles with <span className="text-emerald-400 italic">Precision & Care.</span></h2>
          <p className="text-xl text-slate-400 mb-10 leading-relaxed font-medium">
            We believe everyone deserves a beautiful smile. Our Indore clinic combines luxury comfort with clinical excellence to provide an unmatched experience.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {[
              { title: "Advanced Tech", desc: "Latest digital diagnostics" },
              { title: "Painless Care", desc: "Gentle treatment protocols" },
              { title: "Affordable", desc: "Premium care, honest pricing" },
              { title: "Safe & Clean", desc: "100% Sterilization guarantee" }
            ].map((item) => (
              <div key={item.title} className="flex gap-4">
                <div className="w-10 h-10 bg-emerald-500/20 rounded-xl flex items-center justify-center text-emerald-400 shrink-0">
                  <CheckCircle2 size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12">
            <a href="#contact" className="inline-flex items-center gap-3 bg-white text-slate-900 px-8 py-4 rounded-2xl font-black hover:bg-emerald-500 hover:text-white transition-all">
              Experience the Difference <ChevronRight />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Reviews = () => (
  <section id="reviews" className="py-32 bg-white">
    <div className="max-w-7xl mx-auto px-4">
      <div className="text-center mb-20">
        <div className="flex items-center justify-center gap-2 mb-6">
          {[...Array(5)].map((_, i) => <Star key={i} className="text-amber-400 fill-current w-8 h-8" />)}
        </div>
        <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tight">Trusted by the <span className="text-emerald-500">Community.</span></h2>
        <p className="text-slate-500 font-bold uppercase tracking-widest text-sm">4.9 ⭐ Rating from 74 Verified Patients</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {REVIEWS.map((review, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 relative group hover:bg-white hover:shadow-2xl transition-all duration-500"
          >
            <div className="flex gap-1 text-amber-400 mb-6">
              {[...Array(review.rating)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
            </div>
            <p className="text-lg text-slate-700 font-medium italic mb-8 leading-relaxed">"{review.text}"</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center font-black text-emerald-600 text-xl">
                  {review.name[0]}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 leading-none">{review.name}</h4>
                  <p className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">Verified Patient</p>
                </div>
              </div>
              <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{review.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-slate-400 hover:text-emerald-600 font-bold transition-colors">
          View all 74 reviews on Google Maps <ArrowRight size={16} />
        </a>
      </div>
    </div>
  </section>
);

const ContactForm = () => {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
  const [submitted, setSubmitted] = useState(false);

  const onSubmit = async (data: any) => {
    await new Promise(resolve => setTimeout(resolve, 1500));
    console.log(data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-white rounded-[3.5rem] overflow-hidden shadow-3xl border border-slate-100 flex flex-col lg:flex-row">
          <div className="flex-1 bg-slate-900 p-12 md:p-20 text-white relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full bg-emerald-500/10 blur-[100px]"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tight">Let's Start Your <br /><span className="text-emerald-400">Journey.</span></h2>
              <p className="text-xl text-slate-400 mb-12 font-medium leading-relaxed">
                Book your visit today and experience Indore's most premium dental care.
              </p>
              
              <div className="space-y-10">
                <a href={`tel:${PHONE_NUMBER}`} className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <Phone size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Direct Line</p>
                    <p className="text-2xl font-black tracking-tight">{PHONE_NUMBER}</p>
                  </div>
                </a>
                <a href={MAP_LINK} target="_blank" rel="noopener noreferrer" className="flex items-center gap-6 group">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                    <MapPin size={28} />
                  </div>
                  <div className="max-w-xs">
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Our Location</p>
                    <p className="text-lg font-bold leading-tight group-hover:text-emerald-400 transition-colors">{ADDRESS}</p>
                  </div>
                </a>
                <div className="flex items-center gap-6">
                  <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-emerald-400">
                    <Clock size={28} />
                  </div>
                  <div>
                    <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Working Hours</p>
                    <p className="text-lg font-bold">Mon-Sat: 10AM-10PM</p>
                    <p className="text-sm text-slate-400">Sun: 10AM-2PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex-1 p-12 md:p-20">
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="h-full flex flex-col items-center justify-center text-center">
                <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[2rem] flex items-center justify-center mb-8">
                  <CheckCircle2 size={48} />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tight">Request Received!</h3>
                <p className="text-lg text-slate-500 font-medium">Our coordinator will call you within 15 minutes to confirm your slot.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                    <input
                      {...register("name", { required: "Name is required" })}
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-slate-900"
                      placeholder="John Doe"
                    />
                    {errors.name && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1 ml-1">{errors.name.message as string}</p>}
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Phone Number</label>
                    <input
                      {...register("phone", { required: "Phone is required", pattern: { value: /^[0-9+]{10,15}$/, message: "Invalid phone number" } })}
                      className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-slate-900"
                      placeholder="+91 00000 00000"
                    />
                    {errors.phone && <p className="text-red-500 text-[10px] font-black uppercase tracking-widest mt-1 ml-1">{errors.phone.message as string}</p>}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Preferred Treatment</label>
                  <select 
                    {...register("treatment")}
                    className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-slate-900 appearance-none"
                  >
                    <option value="">Select a service...</option>
                    {SERVICES.map(s => <option key={s.title} value={s.title}>{s.title}</option>)}
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-1">Message (Optional)</label>
                  <textarea
                    {...register("message")}
                    rows={4}
                    className="w-full px-6 py-5 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-emerald-500 focus:bg-white outline-none transition-all font-bold text-slate-900 resize-none"
                    placeholder="Tell us about your dental concern..."
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-emerald-500 text-white py-6 rounded-2xl font-black text-xl hover:bg-emerald-600 transition-all shadow-2xl shadow-emerald-200 disabled:opacity-70 btn-premium"
                >
                  {isSubmitting ? "Processing..." : "Confirm Appointment"}
                </button>
                <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-widest">✨ No payment required today</p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const Map = () => (
  <section className="w-full h-[500px] bg-slate-200 grayscale hover:grayscale-0 transition-all duration-1000">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14723.503800300303!2d75.81172268715818!3d22.6956614!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc4a9022aeb1%3A0x889e617e1cc6a1c2!2sShree%20Dental%20Clinic!5e0!3m2!1sen!2sin!4v1775137053695!5m2!1sen!2sin"
      width="100%"
      height="100%"
      style={{ border: 0 }}
      allowFullScreen
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  </section>
);

const Footer = () => (
  <footer className="bg-slate-900 text-white pt-32 pb-40 md:pb-20">
    <div className="max-w-7xl mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
        <div>
          <div className="flex items-center gap-2 mb-8">
            <div className="w-12 h-12 bg-emerald-500 rounded-2xl flex items-center justify-center text-white font-black text-2xl">S</div>
            <span className="font-black text-2xl tracking-tighter">{FULL_NAME}</span>
          </div>
          <p className="text-slate-400 font-medium leading-relaxed mb-8">
            Indore's premier dental destination. We combine advanced technology with a human touch to give you the smile you deserve.
          </p>
          <div className="flex gap-4">
            {[Facebook, Instagram, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-emerald-500 transition-all group">
                <Icon className="w-5 h-5 text-slate-400 group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-emerald-400">Quick Links</h4>
          <ul className="space-y-5 text-slate-400 font-bold">
            <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
            <li><a href="#services" className="hover:text-white transition-colors">Our Services</a></li>
            <li><a href="#about" className="hover:text-white transition-colors">About Clinic</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Patient Stories</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Book Slot</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-emerald-400">Contact</h4>
          <ul className="space-y-6 text-slate-400 font-bold">
            <li className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-emerald-500 shrink-0" />
              <span className="leading-tight">{ADDRESS}</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-emerald-500 shrink-0" />
              <span>{PHONE_NUMBER}</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-black text-lg mb-8 uppercase tracking-widest text-emerald-400">Hours</h4>
          <ul className="space-y-5 text-slate-400 font-bold">
            <li className="flex justify-between items-center bg-white/5 p-4 rounded-2xl">
              <span>Mon – Sat</span>
              <span className="text-white">10 AM – 10 PM</span>
            </li>
            <li className="flex justify-between items-center p-4">
              <span>Sunday</span>
              <span className="text-white">10 AM – 2 PM</span>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="pt-10 border-t border-white/5 text-center text-slate-500 text-xs font-bold uppercase tracking-widest">
        <p>© {new Date().getFullYear()} {FULL_NAME}. Designed for Excellence.</p>
      </div>
    </div>
  </footer>
);

const MobileBottomBar = () => (
  <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-white/90 backdrop-blur-xl border-t border-slate-100 px-6 py-4 flex items-center justify-between shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
    <a href={`tel:${PHONE_NUMBER}`} className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-600 transition-colors">
      <Phone size={20} />
      <span className="text-[10px] font-black uppercase tracking-widest">Call</span>
    </a>
    <a href="#contact" className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-sm shadow-xl shadow-slate-200 -mt-8 border-4 border-white">
      Book Now
    </a>
    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 text-slate-400 hover:text-emerald-600 transition-colors">
      <WhatsAppIcon className="w-5 h-5" />
      <span className="text-[10px] font-black uppercase tracking-widest">WhatsApp</span>
    </a>
  </div>
);

const FloatingWhatsApp = () => (
  <a
    href={WHATSAPP_LINK}
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-24 right-6 md:bottom-10 md:right-10 z-50 bg-whatsapp text-white p-5 rounded-[2rem] shadow-2xl hover:scale-110 active:scale-95 transition-all flex items-center justify-center group"
    aria-label="Chat on WhatsApp"
  >
    <WhatsAppIcon className="w-8 h-8" />
    <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-black whitespace-nowrap text-sm uppercase tracking-widest">Chat with us</span>
  </a>
);

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
    
    return () => lenis.destroy();
  }, []);

  return (
    <div className="min-h-screen selection:bg-emerald-100 selection:text-emerald-900 overflow-x-hidden">
      <Navbar />
      <Hero />
      <Services />
      <About />
      <Reviews />
      <ContactForm />
      <Map />
      <Footer />
      <FloatingWhatsApp />
      <MobileBottomBar />
    </div>
  );
}
