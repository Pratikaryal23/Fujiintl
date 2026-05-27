import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useRef, useState } from "react";
import Achievements from "../components/Achivements";


const stats = [
  {
    number: 20,
    suffix: "+",
    title: "YEARS OF GUIDANCE",
  },
  {
    number: 100,
    suffix: "+",
    title: "SUCCESSFUL VISA ASSISTANCE",
  },
  {
    number: 50,
    suffix: "+",
    title: "PARTNER INSTITUTIONS",
  },
  {
    number: 95,
    suffix: "%",
    title: "CLIENT SATISFACTION",
  },
];


const services = [
  {
    icon: "🧭",
    title: "Clear Step-by-Step Process",
    description:
      "We simplify complex visa and admission processes into clear, guided steps so you always know what comes next.",
  },
  {
    icon: "🤝",
    title: "Personal Mentor Support",
    description:
      "Each applicant receives personalized guidance from experienced consultants throughout their journey.",
    featured: true,
  },
  {
    icon: "📈",
    title: "Proven Success Outcomes",
    description:
      "Our structured approach has helped many students successfully secure admissions and visa approvals in Japan.",
  },
];

export default function Home() {
  

 const sectionRef = useRef(null);
  const [startCount, setStartCount] = useState(false);

  const [counts, setCounts] = useState(
    stats.map(() => 0)
  );

  // Detect when section enters screen
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStartCount(true);
          observer.disconnect(); // run once
        }
      },
      {
        threshold: 0.3,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Counter Animation
  useEffect(() => {
    if (!startCount) return;

    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.number;
      const duration = 1000; // 2 seconds
      const stepTime = 16;
      const increment = end / (duration / stepTime);

      const timer = setInterval(() => {
        start += increment;

        if (start >= end) {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = end;
            return updated;
          });
          clearInterval(timer);
        } else {
          setCounts((prev) => {
            const updated = [...prev];
            updated[index] = Math.floor(start);
            return updated;
          });
        }
      }, stepTime);
    });
  }, [startCount]);


  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen overflow-hidden bg-black flex items-center justify-center px-6 py-28">
        {/* Background */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated Background */}
          <div
            className="absolute inset-0 bg-cover bg-center animate-[zoomHero_8s_ease-in-out_infinite]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.75)), url('/fuji bg.jpg')",
            }}
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>

        {/* Glow */}
        <div className="absolute top-[-20%] left-[-10%] w-[80vw] h-[80vw] rounded-full bg-red-600/10 blur-3xl" />

        <div className="relative z-10 max-w-5xl text-center">
          {/* Title */}
          <h1 className="text-white font-bold leading-tight text-5xl md:text-7xl mb-8">
            Your Journey
            <br />
            <span className="text-[#E60013]">To Study & Work</span>
            <br />
            In Japan
          </h1>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-white/60 text-lg leading-8 mb-10">
            FUJI International Consultancy helps students and professionals
            achieve their dream of studying and working in Japan through trusted
            guidance, visa support, and complete relocation assistance.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-5 mb-14">
            <Link
              to="/services"
              className="bg-[#E60013] hover:bg-red-700 transition px-12 py-5 text-white font-semibold"
            >
              Explore Services →
            </Link>

            <Link
              to="/about"
              className="border border-white/20 hover:bg-white hover:text-black transition px-12 py-5 text-white font-semibold"
            >
              Why Choose Us
            </Link>
          </div>

          {/* Trust */}
          <div className="flex flex-col items-center gap-2 text-white/50 text-sm text-center">
            <span>
              Trusted consultancy guiding your journey to study & work in Japan
            </span>

            <div className="flex flex-wrap justify-center gap-2 font-semibold text-white/70">
              <span>Verified Guidance</span>
              <span>•</span>
              <span>Visa Support</span>
              <span>•</span>
              <span>Career Abroad</span>
            </div>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
          <div className="w-[2px] h-14 bg-gradient-to-b from-white/50 to-transparent animate-bounce" />
        </div>
      </section>

      {/* STATS */}
      <section
      ref={sectionRef}
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Red Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,0,0,0.15),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,0,0,0.12),transparent_35%)]"></div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative rounded-[34px] border border-red-900/40 bg-white/5 backdrop-blur-md py-16 px-8 text-center overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:border-red-500 hover:shadow-[0_0_35px_rgba(255,0,0,0.25)]"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-red-500/10 via-transparent to-transparent"></div>

              {/* Number */}
              <h2 className="relative text-6xl font-bold text-red-600 mb-5 tracking-tight">
                {counts[index]}
                {stat.suffix}
              </h2>

              {/* Title */}
              <p className="relative text-sm tracking-[5px] text-gray-400 uppercase leading-7">
                {stat.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
      {/* SERVICES */}
      <section className="bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-16">
            <span className="uppercase tracking-widest text-[#E60013] text-sm font-semibold">
              Why Students Trust FUJI
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-black leading-tight mt-4">
              Built on Guidance,
              <br />
              Trust & Results
            </h2>

            <div className="w-16 h-1 bg-[#E60013] rounded-full my-6" />

            <p className="text-gray-500 leading-8">
              We are more than a consultancy — we are a support system for
              students and professionals who want to build their future in Japan
              with confidence.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className={`rounded-3xl p-8 border transition duration-300 hover:-translate-y-2 ${
                  service.featured
                    ? "bg-[#E60013] text-white border-[#E60013] shadow-2xl"
                    : "bg-white border-gray-200 hover:shadow-xl"
                }`}
              >
                <div className="text-5xl mb-6">{service.icon}</div>

                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

                <p
                  className={`leading-7 ${
                    service.featured ? "text-white/80" : "text-gray-500"
                  }`}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 hover:bg-red-600 transition"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="bg-black py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}
          <div>
            <span className="uppercase tracking-widest text-white/60 text-sm font-semibold">
              About FUJI
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mt-4 mb-6">
              Your Trusted Partner
              <br />
              <span className="text-[#E60013]">
                for Japan Opportunities
              </span>
            </h2>

            <div className="w-14 h-1 bg-[#E60013] rounded-full mb-8" />

            <p className="text-white/60 leading-8 mb-10 max-w-xl">
              FUJI International Consultancy is committed to helping students
              and professionals build successful futures in Japan. We provide
              expert support for study opportunities, employment pathways, visa
              processing, and relocation guidance every step of the way.
            </p>

            <Link
              to="/about"
              className="inline-flex items-center gap-2 border border-white/20 hover:bg-white hover:text-black transition px-8 py-4 rounded-full text-white font-semibold"
            >
              Learn More About Us →
            </Link>
          </div>

          {/* Right */}
          <div className="relative hidden lg:flex items-center justify-center">
            <div className="w-[280px] h-[380px] rounded-[32px] border border-white/10 bg-white/5 flex flex-col items-center justify-center gap-14">
              <img
                src="/fujibigbg.png"
                alt="FUJI Logo"
                className="w-40 object-contain"
              />

              <div className="space-y-3 w-32">
                <div className="h-[2px] bg-white/20 rounded-full" />
                <div className="h-[2px] w-3/4 bg-white/20 rounded-full" />
                <div className="h-[2px] w-1/2 bg-white/20 rounded-full" />
              </div>
            </div>

            {/* Badge */}
            <div className="absolute -bottom-5 right-10 bg-[#E60013] rounded-2xl px-6 py-4 shadow-2xl">
              <h3 className="text-3xl font-bold text-white">100+</h3>

              <p className="text-white/70 uppercase text-xs tracking-widest">
                Success Stories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section>
        <Achievements />
      </section>
      

      {/* CTA */}
      <section className="bg-[#E60013] py-20 px-6">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-10 justify-between items-center">
          <div>
            <h2 className="text-4xl font-bold text-white mb-3">
              Ready to Start Your Japan Journey?
            </h2>

            <p className="text-white/80 text-lg">
              Speak with our consultants and get professional guidance today.
            </p>
          </div>

          <Link
            to="/contact"
            className="border border-white text-white hover:bg-white hover:text-red-600 transition px-8 py-4 font-semibold"
          >
            Book a Consultation →
          </Link>
        </div>
      </section>

      {/* Animation Style */}
      <style>
        {`
          @keyframes zoomHero {
            0% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.08);
            }
            100% {
              transform: scale(1);
            }
          }
        `}
      </style>
    </>
  );
}