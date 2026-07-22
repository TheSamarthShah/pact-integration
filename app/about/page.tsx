import { aboutData } from "@/config/aboutContent";
import React from "react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-slate-900 selection:text-white">
      <main className="max-w-5xl mx-auto px-8 lg:px-16 py-20 lg:py-32">
        {/* Header Section */}
        <section className="mb-24">
          <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-6">
            {aboutData.header.title}
          </h1>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl leading-relaxed">
            {aboutData.header.subtitle}
          </p>
        </section>

        {/* Core Philosophy Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 border-t border-slate-200 pt-16">
          <div>
            <h2 className="text-2xl font-bold mb-4">
              {aboutData.mandate.title}
            </h2>
            {aboutData.mandate.content.map((paragraph, index) => (
              <p
                key={index}
                className="text-slate-600 leading-relaxed mb-6 last:mb-0"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="bg-slate-50 p-8 border border-slate-200">
            <h3 className="text-lg font-bold mb-6 uppercase tracking-wider text-slate-900">
              {aboutData.methodology.title}
            </h3>
            <ul className="space-y-6">
              {aboutData.methodology.items.map((item) => (
                <li key={item.id} className="flex items-start">
                  <span className="w-2 h-2 mt-2 mr-4 bg-slate-900 rounded-full shrink-0"></span>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.heading}</h4>
                    <p className="text-sm text-slate-600 mt-1">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="mb-24 border-t border-slate-200 pt-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-12">
            {aboutData.leadership.title}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {aboutData.leadership.team.map((leader) => (
              <div key={leader.id} className="border-l-4 border-slate-900 pl-6">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">
                  {leader.name}
                </h3>
                <p className="text-sm font-bold text-slate-500 mb-4 tracking-widest uppercase">
                  {leader.role}
                </p>
                <p className="text-slate-600 leading-relaxed text-sm">
                  {leader.bio}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact / CTA Section */}
        <section className="border-t border-slate-900 pt-16">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-2">
                {aboutData.contact.heading}
              </h2>
              <p className="text-slate-600">{aboutData.contact.subheading}</p>
            </div>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=pactintegration@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 md:mt-0 inline-block bg-slate-900 text-white px-8 py-4 font-bold text-sm uppercase tracking-widest hover:bg-slate-800 transition-colors"
            >
              {aboutData.contact.cta}
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
