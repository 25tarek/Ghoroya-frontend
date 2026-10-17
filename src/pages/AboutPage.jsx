import React from 'react';
import { Zap, ShieldCheck } from 'lucide-react';

export default function AboutPage({ lang }) {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">{lang === 'bn' ? 'আমাদের গল্প' : 'OUR STORY'}</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">{lang === 'bn' ? 'আমাদের সম্পর্কে ও দৃষ্টিভঙ্গি' : 'About Us & Vision'}</h1>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="w-64 h-72 rounded-2xl overflow-hidden shadow-md border-4 border-slate-50">
              <img src="/founder.jpg" alt="Abdur Rahim" className="w-full h-full object-cover object-top" />
            </div>
          </div>
          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{lang === 'bn' ? 'প্রতিষ্ঠাতা ও সিইও-র বাণী' : "Founder & CEO's Message"}</h2>
            <h3 className="text-emerald-600 font-semibold">{lang === 'bn' ? 'আব্দুর রহিম' : 'Abdur Rahim'} — <span className="text-slate-500 text-sm">{lang === 'bn' ? 'প্রতিষ্ঠাতা, ঘরোয়া' : 'Founder, Ghoroya'}</span></h3>
            <p className="italic text-slate-600 bg-emerald-50 p-5 rounded-2xl border-l-4 border-emerald-500">
              "{lang === 'bn' ? 'আমাদের লক্ষ্য ঘরোয়া স্বাস্থ্যকর খাবার ও হস্তশিল্পকে সবার কাছে সহজে পৌঁছে দেওয়া।' : 'Our vision is to deliver authentic homemade food and crafts.'}"
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <Zap className="w-10 h-10 text-amber-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">{lang === 'bn' ? 'আমাদের দৃষ্টিভঙ্গি (Vision)' : 'Our Vision'}</h3>
            <p className="text-slate-600">{lang === 'bn' ? 'বাংলাদেশি উদ্যোক্তাদের স্বাবলম্বী করা।' : 'Empowering entrepreneurs.'}</p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
            <ShieldCheck className="w-10 h-10 text-emerald-600 mb-4" />
            <h3 className="text-xl font-bold mb-2">{lang === 'bn' ? 'আমাদের লক্ষ্য (Mission)' : 'Our Mission'}</h3>
            <p className="text-slate-600">{lang === 'bn' ? 'দ্রুততম সময়ে খাঁটি পণ্য পৌঁছানো।' : 'Delivering pure products fast.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}