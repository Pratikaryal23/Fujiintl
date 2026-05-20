export default function Universities() {
  return (
    <div>
      {/* PAGE TITLE (React replacement for Next Head) */}
      {/* <Helmet>
        <title>Universities & Schools - FUJI International Consultancy</title>
      </Helmet> */}

      {/* ================= UNIVERSITIES SECTION ================= */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Universities in Japan
            </h1>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              Higher-ranked institutions appear first. Click any card to visit the official website.
            </p>
          </div>

          {/* Higher Ranked */}
          <Section title="Higher Ranked Universities" data={universities.higherRanked} />

          {/* Mid Ranked */}
          <Section title="Higher–Mid Ranked Universities" data={universities.higherMid} />

          {/* Regional */}
          <Section title="Regional & Specialist Universities" data={universities.regional} />

        </div>
      </section>

      {/* ================= SCHOOLS ================= */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              International Schools
            </h1>

            <p className="text-gray-500 text-lg max-w-2xl mx-auto">
              A curated list of international schools in Japan.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {universities.schools.map((item) => (
              <Card key={item.name} item={item} />
            ))}
          </div>

        </div>
      </section>
    </div>
  );
}

/* ================= DATA ================= */

const universities = {
  higherRanked: [
    { name: "University of Tokyo", url: "https://www.u-tokyo.ac.jp", img: "/tokiyo.png", location: "Tokyo" },
    { name: "Kyoto University", url: "https://www.kyoto-u.ac.jp", img: "/kyoto.png", location: "Kyoto" },
    { name: "Osaka University", url: "https://www.osaka-u.ac.jp", img: "/osaja.png", location: "Osaka" },
  ],

  higherMid: [
    { name: "Hokkaido University", url: "https://www.hokudai.ac.jp", img: "/hokaido.png", location: "Sapporo" },
    { name: "Kyushu University", url: "https://www.kyushu-u.ac.jp", img: "/kyushu.png", location: "Fukuoka" },
    { name: "Waseda University", url: "https://www.waseda.jp", img: "/waseda.png", location: "Tokyo" },
  ],

  regional: [
    { name: "Kobe University", url: "https://www.kobe-u.ac.jp", img: "/kobe.png", location: "Kobe" },
    { name: "Tokyo Tech", url: "https://www.titech.ac.jp", img: "/tokiyoinstitute.svg", location: "Tokyo" },
    { name: "University of Ryukyus", url: "https://www.u-ryukyu.ac.jp", img: "/ryukus.png", location: "Okinawa" },
  ],

  schools: [
    { name: "Tokyo International School", url: "https://www.tisjapan.org", img: "/tokiyoschool.jpeg", location: "Tokyo" },
    { name: "K. International School Tokyo", url: "https://www.kist.ed.jp", img: "/k.jpg", location: "Tokyo" },
    { name: "British School in Tokyo", url: "https://www.bst.ac.jp", img: "/british.png", location: "Tokyo" },
  ],
};

/* ================= SECTION COMPONENT ================= */

function Section({ title, data }) {
  return (
    <div className="mb-20">

      <h2 className="text-2xl md:text-3xl font-bold mb-8">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {data.map((item) => (
          <Card key={item.name} item={item} />
        ))}
      </div>

    </div>
  );
}

/* ================= CARD ================= */

function Card({ item }) {
  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-white border rounded-2xl overflow-hidden hover:shadow-xl transition hover:-translate-y-1"
    >
      <div className="h-52 flex items-center justify-center bg-white overflow-hidden">
        <img
          src={item.img}
          alt={item.name}
          className="h-full w-full object-contain p-5 group-hover:scale-105 transition"
        />
      </div>

      <div className="p-5">
        <h3 className="font-bold text-lg group-hover:text-red-500 transition">
          {item.name}
        </h3>

        <p className="text-sm text-gray-500">
          {item.location}
        </p>
      </div>
    </a>
  );
}

