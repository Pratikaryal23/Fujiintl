import React from "react";

const universities = {
  higherRanked: [
    {
      name: "University of Tokyo",
      url: "https://www.u-tokyo.ac.jp",
      img: "/tokiyo.png",
      location: "Tokyo",
    },
    {
      name: "Kyoto University",
      url: "https://www.kyoto-u.ac.jp",
      img: "/kyoto.png",
      location: "Kyoto",
    },
    {
      name: "Osaka University",
      url: "https://www.osaka-u.ac.jp",
      img: "/osaja.png",
      location: "Osaka",
    },
    {
      name: "Tohoku University",
      url: "https://www.tohoku.ac.jp",
      img: "/tohoku.png",
      location: "Sendai",
    },
    {
      name: "Nagoya University",
      url: "https://www.nagoya-u.ac.jp",
      img: "/nagoya.png",
      location: "Nagoya",
    },
  ],

  higherMid: [
    {
      name: "Hokkaido University",
      url: "https://www.hokudai.ac.jp",
      img: "/hokaido.png",
      location: "Sapporo",
    },
    {
      name: "Kyushu University",
      url: "https://www.kyushu-u.ac.jp",
      img: "/kyushu.png",
      location: "Fukuoka",
    },
    {
      name: "Waseda University",
      url: "https://www.waseda.jp",
      img: "/waseda.png",
      location: "Tokyo",
    },
    {
      name: "Keio University",
      url: "https://www.keio.ac.jp",
      img: "/keio.png",
      location: "Tokyo",
    },
  ],

  regional: [
    {
      name: "Kobe University",
      url: "https://www.kobe-u.ac.jp",
      img: "/kobe.png",
      location: "Kobe",
    },
    {
      name: "Tokyo Institute of Technology",
      url: "https://www.titech.ac.jp",
      img: "/tokiyoinstitute.svg",
      location: "Tokyo",
    },
    {
      name: "University of the Ryukyus",
      url: "https://www.u-ryukyu.ac.jp",
      img: "/ryukus.png",
      location: "Okinawa",
    },
  ],

  schools: [
    {
      name: "Tokyo International School",
      url: "https://www.tisjapan.org",
      img: "/tokiyoschool.jpeg",
      location: "Tokyo",
    },
    {
      name: "K. International School Tokyo",
      url: "https://www.kist.ed.jp",
      img: "/k.jpg",
      location: "Tokyo",
    },
    {
      name: "British School in Tokyo",
      url: "https://www.bst.ac.jp",
      img: "/british.png",
      location: "Tokyo",
    },
    {
      name: "Canadian International School Tokyo",
      url: "https://www.cistokyo.jp",
      img: "/canada.jpeg",
      location: "Tokyo",
    },
    {
      name: "American School in Japan",
      url: "https://www.asij.ac.jp",
      img: "/america.avif",
      location: "Chiba",
    },
  ],
};

const Card = ({ item }) => {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="h-52 w-full flex items-center justify-center bg-white overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-5 text-center">
        <h3 className="font-bold text-lg text-gray-800 group-hover:text-red-600 transition">
          {item.name}
        </h3>
        <p className="text-sm text-gray-500 mt-1">{item.location}</p>
      </div>
    </a>
  );
};

export default function Universities() {
  return (
    <div className="bg-black min-h-screen">
      {/* HEADER */}
      <div className="text-center pt-24 pb-10 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-white mt-10">
          Universities & Schools in Japan
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Explore top-ranked universities, mid-level institutions, and
          international schools in Japan.
        </p>
      </div>

      {/* UNIVERSITIES SECTION */}
      <div className="max-w-7xl mx-auto px-6 pb-20 space-y-20">

        {/* Higher Ranked */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">
            Higher Ranked Universities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {universities.higherRanked.map((u) => (
              <Card key={u.name} item={u} />
            ))}
          </div>
        </section>

        {/* Higher Mid */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">
            Higher–Mid Ranked Universities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {universities.higherMid.map((u) => (
              <Card key={u.name} item={u} />
            ))}
          </div>
        </section>

        {/* Regional */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">
            Regional & Specialist Universities
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {universities.regional.map((u) => (
              <Card key={u.name} item={u} />
            ))}
          </div>
        </section>

        {/* Schools */}
        <section>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 border-l-4 border-red-600 pl-4">
            International Schools
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
            {universities.schools.map((s) => (
              <Card key={s.name} item={s} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
}