import React, { useState } from 'react';
import { ShoppingBag, Palette, ShieldCheck, Users } from 'lucide-react';

export default function Home({ lang }) {
  const appScreenshots = [
    { id: 0, title: lang === 'bn' ? "সহজ নেভিগেশন ও ড্যাশবোর্ড" : "Easy Navigation", img: "/screen1.png" },
    { id: 1, title: lang === 'bn' ? "ঘরোয়া খাবার ও ক্যাটাগরি" : "Food Categories", img: "/screen2.png" },
    { id: 2, title: lang === 'bn' ? "মেনু ও দ্রুত অর্ডার" : "Menu & Quick Order", img: "/screen3.png" }
  ];

  return (
    <div>
      <section className="pt-12 pb-20 bg-gradient-to-b from-emerald-50/60 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full inline-flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> 
              {lang === 'bn' ? '১০০% ঘরোয়া স্বাদের বিশ্বস্ত প্ল্যাটফর্ম' : '100% Homemade Quality Platform'}
            </span>
            <h1 className="text-4xl sm:text-6xl font-extrabold text-slate-900 leading-tight">
              {lang === 'bn' ? 'সবকিছু এখন আপনার' : 'Everything Now At Your'} <br />
              <span className="text-emerald-600">{lang === 'bn' ? 'হাতের মুঠোয় ঘরোয়া অ্যাপে' : 'Fingertips with Ghoroya App'}</span>
            </h1>
            <p className="text-lg text-slate-600">
              {lang === 'bn' ? 'স্বাদ ও শিল্পের অনন্য মিলনমেলা! স্বাস্থ্যকর ঘরোয়া খাবার ও আর্টস অ্যান্ড ক্রাফটস এক অ্যাপেই।' : 'Healthy homemade food and attractive arts & crafts all in one app.'}
            </p>
          </div>
          <div className="lg:col-span-5 flex justify-center">
            <div className="w-[320px] bg-white p-3 rounded-[36px] shadow-2xl border border-slate-200">
              <img src={appScreenshots[0].img} alt="App Screen" className="rounded-[28px] w-full" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold text-center mb-12 text-slate-900">{lang === 'bn' ? 'আমাদের সেবাসমূহ' : 'Our Services'}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <ShoppingBag className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Ghoroya Foods</h3>
              <p className="text-slate-600">{lang === 'bn' ? 'ঘরের তৈরি শতভাগ স্বাস্থ্যকর খাবার।' : 'Healthy homemade food.'}</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <Palette className="w-10 h-10 text-amber-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Arts & Crafts</h3>
              <p className="text-slate-600">{lang === 'bn' ? 'হাতে তৈরি নান্দনিক শিল্পকর্ম।' : 'Handcrafted items.'}</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100">
              <Users className="w-10 h-10 text-sky-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Ghoroya Experts</h3>
              <p className="text-slate-600">{lang === 'bn' ? 'দক্ষ সেবা প্রদানকারী সাহায্য।' : 'Expert assistance.'}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}