import { Helmet } from "react-helmet-async";
import Button from "../components/Button";

const services = [
  {
    icon: "🎓",
    title: "Study Visa Guidance",
    description:
      "Course selection, university application support and admission counselling.",
  },
  {
    icon: "💼",
    title: "Working Visa Guidance",
    description:
      "Employer matching and work visa support.",
  },
  {
    icon: "🛂",
    title: "Visa Documentation & Submission",
    description:
      "Document preparation, translation and filing support.",
  },
  {
    icon: "🏠",
    title: "Pre-departure & Arrival Support",
    description:
      "Orientation and settlement support after arrival.",
    featured: true,
  },
];

const industries = [
  "Agriculture & Farming",
  "Caregiving & Healthcare",
  "Manufacturing & Skilled Trades",
  "Hospitality & Service",
  "Construction",
  "IT & Technical",
];

export default function Services() {
  return (
    <>
      {/* ✅ REPLACED next/head */}
      <Helmet>
        <title>Services — FUJI International Consultancy</title>
      </Helmet>

      {/* HERO */}
      <section className="bg-black text-white py-24 text-center">
        <span className="text-red-500 uppercase text-sm tracking-widest">
          What We Offer
        </span>

        <h1 className="text-5xl font-bold mt-4">
          Your Gateway to Japan
        </h1>

        <p className="text-white/60 mt-6 max-w-xl mx-auto">
          Visa support, placement and relocation assistance.
        </p>
      </section>

      {/* SERVICES */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto">

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className={`p-8 rounded-2xl border transition hover:-translate-y-2 ${
                  s.featured
                    ? "bg-red-600 text-white border-red-600"
                    : "bg-white border-gray-200"
                }`}
              >
                <div className="text-4xl mb-4">{s.icon}</div>

                <h3 className="text-xl font-bold mb-3">{s.title}</h3>

                <p className={s.featured ? "text-white/80" : "text-gray-500"}>
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-24 bg-gray-50 text-center">
        <h2 className="text-4xl font-bold">
          Sectors Available in Japan
        </h2>

        <div className="flex flex-wrap justify-center gap-3 mt-10">
          {industries.map((ind) => (
            <span
              key={ind}
              className="px-5 py-2 bg-white border rounded-full text-sm"
            >
              {ind}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-24 text-center">
        <h2 className="text-4xl font-bold">
          Ready to Start Your Journey?
        </h2>

        <div className="mt-8">
          <Button href="/contact" className="bg-red-600 px-8 py-3">
            Request Consultation
          </Button>
        </div>
      </section>
    </>
  );
}