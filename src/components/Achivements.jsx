import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

const VISA_STUDENTS = [
  {
    name: "Priya Sharma",
    country: "India",
    university: "Osaka University",
    visaType: "Student Visa 500",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    course: "Master of Data Science",
  },
  {
    name: "Ahmed Al-Rashid",
    country: "Nepal",
    university: "Kyoto University",
    visaType: "Study Permit",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
    course: "MBA – Finance",
  },
  {
    name: "Li Wei",
    country: "China",
    university: "Tokyo University",
    visaType: "Student Visa",
    year: "2025",
    photo: "https://randomuser.me/api/portraits/men/65.jpg",
    course: "BSc Computer Science",
  },
  {
    name: "Aarav Singh",
    country: "Nepal",
    university: "Nagoya University",
    visaType: "Student Visa",
    year: "2025",
    photo: "https://randomuser.me/api/portraits/men/41.jpg",
    course: "Hospitality Management",
  },
  {
    name: "Sakura Tan",
    country: "Malaysia",
    university: "Waseda University",
    visaType: "Study Permit",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
    course: "Business Administration",
  },
  {
    name: "Rohan Adhikari",
    country: "Nepal",
    university: "Hokkaido University",
    visaType: "Student Visa",
    year: "2025",
    photo: "https://randomuser.me/api/portraits/men/54.jpg",
    course: "Computer Engineering",
  },
  {
    name: "Emily Wong",
    country: "Singapore",
    university: "Keio University",
    visaType: "Student Visa",
    year: "2024",
    photo: "https://randomuser.me/api/portraits/women/30.jpg",
    course: "International Relations",
  },
  {
    name: "Bibek Thapa",
    country: "Nepal",
    university: "Tokyo Institute of Technology",
    visaType: "Study Permit",
    year: "2025",
    photo: "https://randomuser.me/api/portraits/men/73.jpg",
    course: "Artificial Intelligence",
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
            Real students who successfully received visas and started their journey abroad.
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
    <div className="border rounded-2xl p-6 shadow-sm hover:shadow-lg transition bg-white h-full">

      <div className="flex justify-center mb-4">
        <img
          src={student.photo}
          alt={student.name}
          className="w-24 h-24 rounded-full object-cover border"
        />
      </div>

      <h3 className="text-center text-xl font-bold">{student.name}</h3>
      <p className="text-center text-gray-500 text-sm">
        {student.flag} {student.country}
      </p>

      <div className="mt-4 bg-gray-50 p-4 rounded-xl text-center">
        <p className="text-red-600 text-xs font-semibold uppercase">
          {student.universityFlag} University
        </p>

        <h4 className="font-semibold">{student.university}</h4>
        <p className="text-sm text-gray-600">{student.course}</p>
      </div>

      <div className="flex justify-center gap-2 mt-4">
        <span className="text-xs bg-red-100 text-red-600 px-3 py-1 rounded-full">
          {student.visaType}
        </span>

        <span className="text-xs bg-gray-100 px-3 py-1 rounded-full">
          {student.year}
        </span>
      </div>
    </div>
  );
}