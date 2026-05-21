import React, { useEffect } from "react";
import Button from "../components/Button";
import TestimonialSection from "../components/Testimonial";

const values = [
  {
    icon: "◈",
    title: "Integrity",
    desc:
      "We build relationships on transparency, honesty, and unwavering ethical standards in every engagement.",
  },
  {
    icon: "◉",
    title: "Commitment",
    desc:
      "We are dedicated to supporting our clients from the beginning until they achieve their goals. Our team ensures continuous guidance, timely updates, and reliable assistance throughout the entire visa process.",
  },
  {
    icon: "◇",
    title: "Excellence",
    desc:
      "We strive for the highest quality in our services. From documentation to counseling, we focus on accuracy, professionalism, and attention to detail to deliver the best possible outcomes.",
  },
  {
    icon: "◈",
    title: "Client-Centered Approach",
    desc:
      "Our clients are at the heart of everything we do. We listen, understand individual needs, and provide personalized solutions to help each person achieve their dreams of studying or working abroad.",
  },
];

const team = [
  {
    name: "Pradip Gharti",
    role: "Founder & CEO",
    region: "Nepal",
    photo: "",
  },
  {
    name: "Binod Bc",
    role: "Managing Director",
    region: "Nepal",
    photo: "",
  },
];

export default function About() {
  useEffect(() => {
    document.title = "About — FUJI International Consultancy";
  }, []);

  return (
    <>
      {/* HERO */}
      <div className="page-hero py-28 bg-[#131313] text-white">
          <div className="absolute  bg-red-800/20 blur-[140px] rounded-full pointer-events-none" />

        {/* SUBTLE GRADIENT */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(230,0,19,0.12),transparent_35%)] pointer-events-none" />
        <div className="container mx-auto px-6">
          <span className="eyebrow animate-fadeUp uppercase tracking-widest text-red-500 text-sm font-semibold">
            Who We Are
          </span>

          <h1 className="animate-fadeUp delay-1 text-5xl md:text-7xl font-bold leading-tight mt-4 mb-6">
            Built on Trust.
            <br />
            Driven by Results.
          </h1>

          <p className="animate-fadeUp delay-2 text-white/70 text-lg leading-8 max-w-3xl">
            For over two decades, FUJI International Consultancy has been the
            partner of choice for organizations navigating the complexities of
            global business.
          </p>
        </div>
      </div>

      {/* STORY SECTION */}
      <section className="section py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

            {/* LEFT */}
            <div>
              <span className="eyebrow uppercase tracking-widest text-red-600 text-sm font-semibold">
                Our Story
              </span>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-4 leading-tight">
                From Tokyo to the World
              </h2>

              <div className="w-16 h-1 bg-red-600 rounded-full my-6" />

              <p className="text-gray-700 leading-relaxed mb-5">
                Welcome to FUJI International Consultancy, your trusted partner
                for student and working visa services. We are dedicated to
                guiding individuals who aspire to build their future abroad,
                especially in countries like Japan. With expert knowledge and
                personalized support, we ensure a smooth and reliable process
                from consultation to visa approval. Our goal is to make your
                international journey simple, transparent, and successful.
              </p>

              <p className="text-gray-700 leading-relaxed">
                Our name — FUJI — reflects our philosophy: like Mount Fuji, we
                stand for permanence, clarity, and the ability to see farther
                than others. Every engagement is guided by a commitment to
                long-term value over short-term gain.
              </p>

              <div className="mt-9">
                <Button href="/contact" size="md" arrow>
                  Talk to Our Team
                </Button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="w-full">
              <div className="flex flex-col gap-5">

                {/* TOP IMAGE */}
                <div className="overflow-hidden rounded-[28px] shadow-xl">
                  <img
                    src="/image.png"
                    alt="FUJI International"
                    className="w-full h-72 md:h-80 lg:h-[360px] object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                {/* BOTTOM IMAGES */}
                <div className="flex gap-5">

                  {/* LEFT */}
                  <div className="w-1/2 h-44 md:h-52 overflow-hidden rounded-[28px] shadow-lg relative">
                    <img
                      src="/fujiimage1.jpg"
                      alt="Office Scene"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  {/* RIGHT */}
                  <div className="w-1/2 h-44 md:h-52 overflow-hidden rounded-[28px] shadow-lg relative">
                    <img
                      src="/fujiimage2.jpg"
                      alt="Office Scene"
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-24 bg-gradient-to-b from-[#fff7f7] to-[#f8f9fc] overflow-hidden">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="uppercase tracking-widest text-red-600 text-sm font-semibold">
              Our Purpose
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-4">
              Mission & Vision
            </h2>

            <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-6" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* Mission */}
            <div className="relative bg-white rounded-[28px] p-8 md:p-10 shadow-lg border border-red-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden">

              <div className="absolute top-0 right-0 w-40 h-40 bg-red-500/5 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
                  <span className="text-3xl text-red-600">◎</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-black mb-4">
                  Our Mission
                </h3>

                <div className="w-14 h-1 bg-red-600 rounded-full mb-5" />

                <p className="text-gray-600 leading-8 text-base">
                  Our mission is to empower students and professionals by
                  providing accurate guidance, ethical services, and complete
                  support throughout their visa journey. We bridge the gap
                  between dreams and opportunities through trusted counseling
                  and expert assistance.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="relative bg-[#111827] rounded-[28px] p-8 md:p-10 shadow-lg hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 overflow-hidden">

              <div className="absolute bottom-0 left-0 w-40 h-40 bg-red-500/10 rounded-full blur-3xl"></div>

              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-red-500/15 flex items-center justify-center mb-6">
                  <span className="text-3xl text-red-500">◈</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Our Vision
                </h3>

                <div className="w-14 h-1 bg-red-600 rounded-full mb-5" />

                <p className="text-gray-300 leading-8 text-base">
                  Our vision is to become a leading and trusted consultancy in
                  international education and employment, creating a future
                  where individuals can confidently access global opportunities
                  with the right guidance.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="uppercase tracking-widest text-red-600 text-sm font-semibold">
              What We Stand For
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-4">
              Our Core Values
            </h2>

            <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-6" />
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {values.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center min-h-[240px] flex flex-col justify-start"
                style={{
                  animationDelay: `${(i + 1) * 0.1}s`,
                }}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-red-500/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl text-red-600">
                    {icon}
                  </span>
                </div>

                {/* Title */}
                <h4 className="text-lg md:text-xl font-bold text-black mb-3 leading-snug">
                  {title}
                </h4>

                {/* Description */}
                <p className="text-sm md:text-base text-gray-600 leading-7">
                  {desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIAL */}
      <section>
        <TestimonialSection />
      </section>

      {/* TEAM */}
      <section className="py-24 bg-gray-100">
        <div className="container mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-14">
            <span className="uppercase tracking-widest text-red-600 text-sm font-semibold">
              Leadership
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mt-4">
              The People Behind FUJI
            </h2>

            <div className="w-16 h-1 bg-red-600 rounded-full mx-auto mt-6" />
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {team.map(({ name, role, region, photo }, i) => (
              <div
                key={name}
                className="text-center"
                style={{
                  animationDelay: `${(i + 1) * 0.1}s`,
                }}
              >
                {/* Avatar */}
                <div className="mx-auto mb-4 w-28 h-28 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">

                  {photo ? (
                    <img
                      src={photo}
                      alt={name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="text-sm text-gray-500">
                      Add photo
                    </span>
                  )}

                </div>

                {/* Info */}
                <div className="font-semibold text-lg mb-1 text-black">
                  {name}
                </div>

                <div className="text-sm text-gray-600 mb-3">
                  {role}
                </div>

                <div className="text-xs text-gray-500">
                  ◉ {region}
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}