import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const VISA_STUDENTS = [
  {
    name: "Bishnu Maya Bhattarai",
    country: "Nepal",
    year: "2026",
    photo: "/a Bishnu maya bhattarai.jpeg",
  },
  {
    name: "Dilip Sanani",
    country: "Nepal",

    year: "2026",
    photo: "/a dilip sanani.jpeg",
  },
  {
    name: "Sada Gharti Magar",
    country: "Nepal",

    year: "2026",
    photo: "/a sada gharti magar.jpeg",
  },
  {
    name: "Sonu G.C",
    country: "Nepal",

    year: "2026",
    photo: "/a sonu G.c.jpeg",
  },
  {
    name: "Athar Kamal",
    country: "Nepal",

    year: "2026",
    photo: "/Athar Kamal.jpeg",
  },
];

export default function Achievements() {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-red-600 uppercase text-sm font-semibold">
            Success Stories
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-3">
            Visa Approved Students
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Real students who successfully received visas and started their
            journey abroad.
          </p>
        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={20}
          loop
          speed={800}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            el: ".custom-pagination",
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        >
          {VISA_STUDENTS.map((student, i) => (
            <SwiperSlide key={i}>
              {({ isActive }) => (
                <div
                  className={`transition duration-300 ${
                    isActive ? "scale-100 opacity-100" : "scale-95 opacity-80"
                  }`}
                >
                  <StudentCard student={student} />
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination */}
        <div className="custom-pagination flex justify-center mt-8 gap-2" />

        {/* Navigation */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="w-10 h-10 border rounded-full"
          >
            ←
          </button>

          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="w-10 h-10 border rounded-full"
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

/* ================= CARD ================= */

function StudentCard({ student }) {
  return (
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 bg-white h-full overflow-hidden">
      {/* Student Image */}
      <div className="flex justify-center">
        <div className="relative">
          <img
            src={student.photo}
            alt={student.name}
            className="w-32 h-32 rounded-full object-cover border-[5px] border-red-100 shadow-lg"
          />

          {/* Approved Badge */}
          {/* Premium Badge */}
          {/* Verified Seal */}
          <div className="absolute bottom-0 right-1">
            <div className="w-10 h-10 rounded-full bg-green-500 border-4 border-white shadow-lg flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={3}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Name */}
      <h3 className="text-center text-xl font-bold mt-8">{student.name}</h3>

      {/* Country */}
      <p className="text-center text-gray-500 text-sm mt-1">
        {student.country}
      </p>

      {/* Congratulations */}
      <div className="mt-6 bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-5 text-center">
        <div
          className="text-4xl text-red-600"
          style={{ fontFamily: "'Great Vibes', cursive" }}
        >
          Congratulations!
        </div>

        <div className="text-3xl mt-2">🎉</div>

        <p className="text-gray-600 text-sm mt-3 leading-6">
          Wishing you success as you begin your exciting journey abroad. Your
          dedication has paid off!
        </p>
      </div>

      {/* Bottom Badges */}
      <div className="flex justify-center gap-2 mt-5">
        <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full font-medium">
         Vis Granted
        </span>

        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full font-medium">
          {student.year}
        </span>
      </div>
    </div>
  );
}
