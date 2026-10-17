import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  Download, 
  ShoppingBag, 
  Palette, 
  Bike, 
  Store, 
  ChevronRight, 
  ShieldCheck, 
  Zap, 
  Users, 
  Globe, 
  Lock, 
  ArrowRight,
  User,
  ArrowLeft,
  Menu,
  X
} from 'lucide-react';

// Custom Navigation Link Component for Smooth Scroll Across Pages
function NavHashLink({ to, sectionId, children, className, onClick }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) onClick();

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <a href={`/#${sectionId}`} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}

function Home({ lang }) {
  const [activeScreen, setActiveScreen] = useState(0);

  const t = {
    bn: {
      hero: {
        badge: "১০০% ঘরোয়া স্বাদের বিশ্বস্ত প্ল্যাটফর্ম",
        titleMain: "সবকিছু এখন আপনার",
        titleSub: "হাতের মুঠোয় ঘরোয়া অ্যাপে",
        desc: "স্বাদ ও শিল্পের অনন্য মিলনমেলা! স্বাস্থ্যকর ঘরোয়া খাবার এবং আকর্ষণীয় আর্টস ও ক্রাফটস এখন এক অ্যাপেই পাবেন সবচেয়ে দ্রুততম সময়ে।",
        satisfiedCustomers: "সন্তুষ্ট গ্রাহক",
        fastDelivery: "দ্রুততম ডেলিভারি",
        playStoreRating: "প্লে-স্টোর রেটিং",
        deliveryBadgeTitle: "ডেলিভারি টাইম",
        deliveryBadgeValue: "১ ঘণ্টার মধ্যে!"
      },
      services: {
        tag: "আমাদের সেবাসমূহ",
        title: "একটি অ্যাপে আপনার দৈনন্দিন সব প্রয়োজনীয় সার্ভিস",
        foodTitle: "Ghoroya Foods",
        foodDesc: "ঘরের তৈরি শতভাগ স্বাস্থ্যকর ও সুস্বাদু খাবার আপনার দোরগোড়ায় পৌঁছে দেবে আমাদের নিবেদিত রাইডার দল।",
        foodAction: "অর্ডার করুন",
        craftTitle: "Arts & Crafts",
        craftDesc: "স্থানীয় হস্তশিল্পীদের হাতে তৈরি নান্দনিক শিল্পকর্ম ও গিফটের সেরা কালেকশন এক ক্লিকেই পেয়ে যান।",
        craftAction: "কালেকশন দেখুন",
        expertTitle: "Ghoroya Experts",
        expertDesc: "দক্ষ ও অভিজ্ঞ সেবাদাতাদের সাহায্য নিন সরাসরি আপনার গৃহস্থালি বা ব্যবসায়িক কাজের প্রয়োজনে।",
        expertAction: "বিস্তারিত জানুন"
      },
      showcase: {
        tag: "অ্যাপ গ্যালারি",
        title: "সহজ ও আধুনিক মোবাইল অ্যাপ ইন্টারফেস",
        desc: "ঘরোয়া অ্যাপ ব্যবহারে খুব সহজে অর্ডার করুন, পেমেন্ট ট্র্যাকিং করুন এবং কেনাকাটা উপভোগ করুন।"
      },
      join: {
        title: "ঘরোয়া প্ল্যাটফর্মে যুক্ত হয়ে আয় করুন",
        subTitle: "আমাদের সাথে যুক্ত হোন মার্চেন্ট কিংবা ডেলিভারি পার্টনার হিসেবে",
        riderTitle: "রাইডার হিসেবে যোগ দিন",
        riderDesc: "নিজের সুবিধাজনক সময়ে ডেলিভারি দিন এবং নিশ্চিত করুন আকর্ষণীয় উপার্জন। আজই যুক্ত হোন আমাদের ডেলিভারি টিম-এ।",
        riderBtn: "রাইডার রেজিস্টার",
        merchantTitle: "মার্চেন্ট হিসেবে ব্যবসা বাড়ান",
        merchantDesc: "আপনার ঘরের তৈরি খাবার বা হ্যান্ডিক্রাফট বিক্রি করুন হাজারও কাস্টমারের কাছে। জিরো ইনভেস্টমেন্টে শুরু করুন আজই।",
        merchantBtn: "মার্চেন্ট রেজিস্টার"
      }
    },
    en: {
      hero: {
        badge: "100% Homemade Quality Platform",
        titleMain: "Everything Now At Your",
        titleSub: "Fingertips with Ghoroya App",
        desc: "A unique blend of taste and crafts! Get healthy homemade food and attractive arts & crafts all in one app with the fastest delivery.",
        satisfiedCustomers: "Satisfied Customers",
        fastDelivery: "Fastest Delivery",
        playStoreRating: "Play Store Rating",
        deliveryBadgeTitle: "Delivery Time",
        deliveryBadgeValue: "Within 1 Hour!"
      },
      services: {
        tag: "OUR SERVICES",
        title: "All Your Daily Needed Services In One Single App",
        foodTitle: "Ghoroya Foods",
        foodDesc: "100% healthy and delicious homemade food delivered right to your doorstep by our dedicated riders.",
        foodAction: "Order Now",
        craftTitle: "Arts & Crafts",
        craftDesc: "Get the finest collection of handcrafted items and unique gifts made by local artisans in just one click.",
        craftAction: "Explore Collection",
        expertTitle: "Ghoroya Experts",
        expertDesc: "Get help from skilled and experienced service providers directly for your household or business needs.",
        expertAction: "Learn More"
      },
      showcase: {
        tag: "APP GALLERY",
        title: "Simple & Modern Mobile App Interface",
        desc: "Order effortlessly, track payments, and enjoy shopping with the Ghoroya app."
      },
      join: {
        title: "Join Ghoroya Platform & Earn",
        subTitle: "Join us today as a Merchant or a Delivery Partner",
        riderTitle: "Join as a Rider",
        riderDesc: "Deliver at your own convenient time and ensure attractive earnings. Join our rider network today.",
        riderBtn: "Rider Register",
        merchantTitle: "Grow Business as Merchant",
        merchantDesc: "Sell your homemade food or handicrafts to thousands of customers. Start today with zero investment.",
        merchantBtn: "Merchant Register"
      }
    }
  };

  const content = t[lang];

  const appScreenshots = [
    {
      id: 0,
      title: lang === 'bn' ? "সহজ নেভিগেশন ও ড্যাশবোর্ড" : "Easy Navigation & Dashboard",
      desc: lang === 'bn' ? "ঘরোয়া খাবার ও হস্তশিল্প নির্বাচন করুন খুব সহজেই এক প্ল্যাটফর্মে।" : "Select homemade foods and crafts easily on a single platform.",
      img: "/screen1.png"
    },
    {
      id: 1,
      title: lang === 'bn' ? "ঘরোয়া খাবার ও ক্যাটাগরি" : "Homemade Food & Categories",
      desc: lang === 'bn' ? "আপনার পছন্দের সেরা মানসম্মত ও সুস্বাদু ঘরোয়া খাবার বেছে নিন।" : "Choose your favorite quality homemade meals effortlessly.",
      img: "/screen2.png"
    },
    {
      id: 2,
      title: lang === 'bn' ? "মেনু ও দ্রুত অর্ডার" : "Restaurant Menu & Quick Order",
      desc: lang === 'bn' ? "পছন্দের রেস্টুরেন্ট বা হোম কিচেন থেকে মুহূর্তেই অর্ডার কনফার্ম করুন।" : "Confirm your order instantly from your favorite home kitchens.",
      img: "/screen3.png"
    }
  ];

  return (
    <div>
      {/* HERO SECTION */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 bg-gradient-to-b from-emerald-50/60 via-white to-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-emerald-100/80 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full border border-emerald-200 shadow-sm">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>{content.hero.badge}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {content.hero.titleMain} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-green-600 to-amber-500">
                  {content.hero.titleSub}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
                {content.hero.desc}
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4" id="download">
                <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-2xl shadow-xl transition-all hover:-translate-y-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Play Store" className="h-8" />
                </a>
                <a href="#" className="w-full sm:w-auto flex items-center justify-center gap-3 bg-slate-900 hover:bg-slate-800 text-white px-7 py-3.5 rounded-2xl shadow-xl transition-all hover:-translate-y-1">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg" alt="App Store" className="h-8" />
                </a>
              </div>

              <div className="pt-6 grid grid-cols-3 gap-4 border-t border-slate-200/80 max-w-lg mx-auto lg:mx-0">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900">{lang === 'bn' ? '২,০০০+' : '2,000+'}</h4>
                  <p className="text-xs sm:text-sm text-slate-500">{content.hero.satisfiedCustomers}</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-emerald-600">{lang === 'bn' ? '১ ঘণ্টায়' : '1 Hour'}</h4>
                  <p className="text-xs sm:text-sm text-slate-500">{content.hero.fastDelivery}</p>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-amber-500">4.8 ★</h4>
                  <p className="text-xs sm:text-sm text-slate-500">{content.hero.playStoreRating}</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center relative">
              <div className="relative w-[340px] sm:w-[400px] hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src={appScreenshots[0].img} 
                  alt="App Main Screen" 
                  className="w-full h-auto object-contain block drop-shadow-2xl"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"; }}
                />

                <div className="absolute bottom-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-slate-100 flex items-center gap-3 animate-bounce">
                  <div className="w-9 h-9 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-bold">
                    <Zap className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500">{content.hero.deliveryBadgeTitle}</p>
                    <p className="text-sm font-bold text-slate-800">{content.hero.deliveryBadgeValue}</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CORE SERVICES GRID */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-sm font-semibold tracking-wider text-emerald-600 uppercase mb-2">{content.services.tag}</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900">{content.services.title}</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group relative bg-slate-50 hover:bg-emerald-600 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-emerald-600 group-hover:bg-white group-hover:text-emerald-600 flex items-center justify-center mb-6 transition-colors">
                <ShoppingBag className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3">{content.services.foodTitle}</h4>
              <p className="text-slate-600 group-hover:text-emerald-50 leading-relaxed mb-6">{content.services.foodDesc}</p>
              <div className="flex items-center gap-2 font-semibold text-emerald-600 group-hover:text-white">
                <span>{content.services.foodAction}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group relative bg-slate-50 hover:bg-emerald-600 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-amber-100 text-amber-600 group-hover:bg-white group-hover:text-emerald-600 flex items-center justify-center mb-6 transition-colors">
                <Palette className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3">{content.services.craftTitle}</h4>
              <p className="text-slate-600 group-hover:text-emerald-50 leading-relaxed mb-6">{content.services.craftDesc}</p>
              <div className="flex items-center gap-2 font-semibold text-emerald-600 group-hover:text-white">
                <span>{content.services.craftAction}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>

            <div className="group relative bg-slate-50 hover:bg-emerald-600 p-8 rounded-3xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border border-slate-100">
              <div className="w-14 h-14 rounded-2xl bg-sky-100 text-sky-600 group-hover:bg-white group-hover:text-emerald-600 flex items-center justify-center mb-6 transition-colors">
                <Users className="w-7 h-7" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 group-hover:text-white mb-3">{content.services.expertTitle}</h4>
              <p className="text-slate-600 group-hover:text-emerald-50 leading-relaxed mb-6">{content.services.expertDesc}</p>
              <div className="flex items-center gap-2 font-semibold text-emerald-600 group-hover:text-white">
                <span>{content.services.expertAction}</span>
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* APP INTERFACE SHOWCASE */}
      <section id="app-showcase" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-400 font-semibold tracking-wider text-sm uppercase">{content.showcase.tag}</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold mt-2">{content.showcase.title}</h2>
            <p className="text-slate-400 mt-4">{content.showcase.desc}</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 space-y-4">
              {appScreenshots.map((item, idx) => (
                <div 
                  key={item.id}
                  onClick={() => setActiveScreen(idx)}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 border ${
                    activeScreen === idx 
                      ? 'bg-slate-800 border-emerald-500 shadow-lg shadow-emerald-500/10' 
                      : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800/50'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm shrink-0 ${
                      activeScreen === idx ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                    }`}>
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-7 flex justify-center">
              <div className="relative w-[340px] sm:w-[400px]">
                <img 
                  src={appScreenshots[activeScreen].img} 
                  alt={appScreenshots[activeScreen].title}
                  className="w-full h-auto object-contain transition-all duration-500 block drop-shadow-2xl"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"; }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RIDER & MERCHANT JOIN SECTION */}
      <section id="rider-merchant" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-extrabold text-slate-900">{content.join.title}</h2>
            <p className="text-slate-600 mt-2">{content.join.subTitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <Bike className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{content.join.riderTitle}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{content.join.riderDesc}</p>
              </div>
              <div className="pt-8 relative z-10">
                <a href="#" className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold px-6 py-3 rounded-full transition-all">
                  <span>{content.join.riderBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-emerald-700 to-green-800 rounded-3xl p-8 sm:p-10 text-white relative overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="space-y-4 relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/20 text-white flex items-center justify-center">
                  <Store className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold">{content.join.merchantTitle}</h3>
                <p className="text-emerald-100 text-sm leading-relaxed">{content.join.merchantDesc}</p>
              </div>
              <div className="pt-8 relative z-10">
                <a href="#" className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-emerald-900 font-bold px-6 py-3 rounded-full transition-all">
                  <span>{content.join.merchantBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function AboutPage({ lang }) {
  const t = {
    bn: {
      tag: "আমাদের প্রতিষ্ঠাতা ও গল্প",
      title: "ঘরোয়া-র পেছনের অনুপ্রেরণা",
      founderName: "আব্দুর রহিম",
      founderRole: "প্রতিষ্ঠাতা ও সিইও, ঘরোয়া",
      bio: "আমাদের লক্ষ্য অত্যন্ত স্পষ্ট—প্রতিটি ঘরের স্বাস্থ্যকর খাবার এবং স্থানীয় উদ্যোক্তাদের তৈরি হস্তশিল্পকে আধুনিক প্রযুক্তির মাধ্যমে সবার কাছে সহজে পৌঁছে দেওয়া। ঘরোয়া প্ল্যাটফর্মের মাধ্যমে আমরা ক্ষুদ্র ও মাঝারি উদ্যোক্তা, বিশেষ করে নারী উদ্যোক্তাদের অর্থনৈতিক স্বাবলম্বিতা তৈরিতে কাজ করে যাচ্ছি।",
      missionTitle: "আমাদের লক্ষ্য",
      missionDesc: "গুণগত মান বজায় রেখে দ্রুততম সময়ে খাঁটি ঘরোয়া পণ্য কাস্টমারের কাছে পৌঁছে দেওয়া এবং কর্মসংস্থান সৃষ্টি করা।"
    },
    en: {
      tag: "FOUNDER & STORY",
      title: "The Vision Behind Ghoroya",
      founderName: "Abdur Rahim",
      founderRole: "Founder & CEO, Ghoroya",
      bio: "Our vision is very clear—to deliver authentic homemade food and local handcrafted goods to everyone through modern technology. Through the Ghoroya platform, we empower small and medium entrepreneurs, especially women, toward financial independence.",
      missionTitle: "Our Mission",
      missionDesc: "Delivering pure homemade products with top quality in the fastest time while generating sustainable employment."
    }
  };

  const content = t[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-semibold mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'bn' ? 'হোমে ফিরে যান' : 'Back to Home'}</span>
        </Link>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-emerald-600 font-semibold text-sm uppercase tracking-wider">{content.tag}</span>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 mt-2">{content.title}</h1>
        </div>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100 mb-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 flex justify-center">
            <div className="relative">
              <div className="w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden shadow-lg border-4 border-slate-50">
                <img 
                  src="/founder.jpg" 
                  alt="Abdur Rahim - Founder" 
                  className="w-full h-full object-cover object-top"
                  onError={(e) => { e.target.onerror = null; e.target.src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80"; }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-3 rounded-xl shadow-lg flex items-center gap-2">
                <User className="w-5 h-5 text-amber-300" />
                <span className="text-xs font-bold">{content.founderName}</span>
              </div>
            </div>
          </div>

          <div className="md:col-span-7 space-y-4">
            <h2 className="text-2xl font-bold text-slate-900">{content.founderName}</h2>
            <p className="text-emerald-600 font-semibold">{content.founderRole}</p>
            <blockquote className="italic text-slate-600 bg-emerald-50/50 p-5 rounded-2xl border-l-4 border-emerald-500 leading-relaxed text-base">
              "{content.bio}"
            </blockquote>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100">
          <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900 mb-2">{content.missionTitle}</h3>
          <p className="text-slate-600 leading-relaxed">{content.missionDesc}</p>
        </div>

      </div>
    </div>
  );
}

function PrivacyPolicyPage({ lang }) {
  const t = {
    bn: {
      title: "প্রাইভেসি পলিসি (Privacy Policy)",
      lastUpdated: "সর্বশেষ আপডেট: অক্টোবর ২০২৬",
      intro: "Ghoroya.com গ্রাহকদের তথ্য গোপনীয়তা ও সুরক্ষায় প্রতিশ্রুতিবদ্ধ। এই পলিসি ব্যাখ্যা করে আমরা কীভাবে আপনার তথ্য সংগ্রহ ও ব্যবহার করি।",
      sec1Title: "১. তথ্য সংগ্রহ (Data Collection)",
      sec1Desc: "অ্যাপ বা ওয়েবসাইট ব্যবহারের সময় আমরা আপনার নাম, ফোন নম্বর, ডেলিভারি ঠিকানা এবং অর্ডারের বিবরণ সংগ্রহ করে থাকি যাতে সঠিক সময়ে সেবা প্রদান সম্ভব হয়।",
      sec2Title: "২. তথ্যের ব্যবহার (Use of Information)",
      sec2Item1: "আপনার খাবারের অর্ডার ও হ্যান্ডিক্রাফট ডেলিভারি সম্পন্ন করার জন্য।",
      sec2Item2: "কাস্টমার সাপোর্ট সার্ভিস প্রদান এবং সেবা সংক্রান্ত আপডেট পাঠানোর জন্য।",
      sec3Title: "৩. তথ্য সুরক্ষা (Data Security)",
      sec3Desc: "আপনার ব্যক্তিগত ও পেমেন্ট সংক্রান্ত তথ্য আধুনিক এনক্রিপশন প্রযুক্তির মাধ্যমে নিরাপদ রাখা হয়। আপনার অনুমতি ছাড়া কোনো তৃতীয় পক্ষের কাছে তথ্য শেয়ার করা হয় না।",
      sec4Title: "৪. যোগাযোগ (Contact Us)",
      sec4Desc: "প্রাইভেসি পলিসি সংক্রান্ত কোনো প্রশ্ন থাকলে ইমেইল করুন: privacy@ghoroya.com"
    },
    en: {
      title: "Privacy Policy",
      lastUpdated: "Last Updated: October 2026",
      intro: "Ghoroya.com is committed to protecting customer data privacy and security. This policy explains how we collect and use your information.",
      sec1Title: "1. Data Collection",
      sec1Desc: "When using our app or website, we collect your name, phone number, delivery address, and order details to ensure smooth service delivery.",
      sec2Title: "2. Use of Information",
      sec2Item1: "To process and deliver your food and handicraft orders efficiently.",
      sec2Item2: "To provide customer support and send important service-related updates.",
      sec3Title: "3. Data Security",
      sec3Desc: "Your personal and payment information is kept secure using advanced encryption technology. Information is never shared with third parties without your consent.",
      sec4Title: "4. Contact Us",
      sec4Desc: "If you have any questions regarding this Privacy Policy, please email us at: privacy@ghoroya.com"
    }
  };

  const content = t[lang];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-semibold mb-8 hover:underline">
          <ArrowLeft className="w-4 h-4" />
          <span>{lang === 'bn' ? 'হোমে ফিরে যান' : 'Back to Home'}</span>
        </Link>

        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100">
          
          <div className="flex items-center gap-4 mb-6 border-b pb-6 border-slate-100">
            <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center">
              <Lock className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">{content.title}</h1>
              <p className="text-xs text-slate-500 mt-1">{content.lastUpdated}</p>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 text-base leading-relaxed">
            <p className="font-medium text-slate-700">{content.intro}</p>

            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{content.sec1Title}</h3>
              <p>{content.sec1Desc}</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{content.sec2Title}</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>{content.sec2Item1}</li>
                <li>{content.sec2Item2}</li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{content.sec3Title}</h3>
              <p>{content.sec3Desc}</p>
            </div>

            <div>
              <h3 className="font-bold text-slate-900 text-lg mb-1">{content.sec4Title}</h3>
              <p>{content.sec4Desc}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [lang, setLang] = useState('bn');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col justify-between bg-slate-50 font-sans text-slate-800 antialiased selection:bg-emerald-500 selection:text-white">
        
        {/* NAVBAR */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              
              <Link to="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-3 py-2">
                <img 
                  src="/logoGhoroya.png" 
                  alt="Ghoroya Logo" 
                  className="h-14 sm:h-16 w-auto object-contain transition-all hover:scale-105"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/logo.png"; }}
                />
              </Link>

              {/* DESKTOP NAV LINKS */}
              <div className="hidden md:flex items-center gap-8 font-medium text-slate-600">
                <Link to="/" className="hover:text-emerald-600 transition-colors">{lang === 'bn' ? 'হোম' : 'Home'}</Link>
                <NavHashLink sectionId="features" className="hover:text-emerald-600 transition-colors">
                  {lang === 'bn' ? 'সার্ভিসসমূহ' : 'Services'}
                </NavHashLink>
                <NavHashLink sectionId="app-showcase" className="hover:text-emerald-600 transition-colors">
                  {lang === 'bn' ? 'অ্যাপ ইন্টারফেস' : 'App Interface'}
                </NavHashLink>
                <Link to="/about" className="hover:text-emerald-600 transition-colors">{lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}</Link>
                <NavHashLink sectionId="rider-merchant" className="hover:text-emerald-600 transition-colors">
                  {lang === 'bn' ? 'রাইডার/মার্চেন্ট হন' : 'Join as Partner'}
                </NavHashLink>
              </div>

              {/* DESKTOP LANGUAGE & DOWNLOAD BUTTON */}
              <div className="hidden md:flex items-center gap-4">
                <button 
                  onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')} 
                  className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-3.5 py-2 rounded-full border border-slate-200 text-sm transition-all"
                >
                  <Globe className="w-4 h-4 text-emerald-600" />
                  <span>{lang === 'bn' ? 'English' : 'বাংলা'}</span>
                </button>

                <NavHashLink 
                  sectionId="download" 
                  className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-emerald-600/20 transition-all hover:scale-105"
                >
                  <Download className="w-4 h-4" />
                  <span>{lang === 'bn' ? 'অ্যাপ ডাউনলোড' : 'Download App'}</span>
                </NavHashLink>
              </div>

              {/* MOBILE HAMBURGER BUTTON */}
              <div className="md:hidden flex items-center gap-3">
                <button 
                  onClick={() => setLang(lang === 'bn' ? 'en' : 'bn')}
                  className="flex items-center gap-1 bg-slate-100 text-slate-700 font-semibold px-2.5 py-1.5 rounded-full text-xs border border-slate-200"
                >
                  <Globe className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{lang === 'bn' ? 'EN' : 'BN'}</span>
                </button>

                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
                >
                  {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>

            </div>
          </div>

          {/* MOBILE DROPDOWN DRAWER */}
          {isMenuOpen && (
            <div className="md:hidden bg-white border-b border-slate-100 px-4 pt-2 pb-6 space-y-3 shadow-lg">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2 text-slate-600 hover:text-emerald-600 font-medium"
              >
                {lang === 'bn' ? 'হোম' : 'Home'}
              </Link>

              <NavHashLink 
                sectionId="features" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-slate-600 hover:text-emerald-600 font-medium"
              >
                {lang === 'bn' ? 'সার্ভিসসমূহ' : 'Services'}
              </NavHashLink>

              <NavHashLink 
                sectionId="app-showcase" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-slate-600 hover:text-emerald-600 font-medium"
              >
                {lang === 'bn' ? 'অ্যাপ ইন্টারফেস' : 'App Interface'}
              </NavHashLink>

              <Link 
                to="/about" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2 text-slate-600 hover:text-emerald-600 font-medium"
              >
                {lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}
              </Link>

              <NavHashLink 
                sectionId="rider-merchant" 
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-slate-600 hover:text-emerald-600 font-medium"
              >
                {lang === 'bn' ? 'রাইডার/মার্চেন্ট হন' : 'Join as Partner'}
              </NavHashLink>

              <Link 
                to="/privacy-policy" 
                onClick={() => setIsMenuOpen(false)} 
                className="block py-2 text-slate-600 hover:text-emerald-600 font-medium"
              >
                {lang === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}
              </Link>

              <NavHashLink 
                sectionId="download" 
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-3 rounded-xl shadow-md mt-2"
              >
                <Download className="w-4 h-4" />
                <span>{lang === 'bn' ? 'অ্যাপ ডাউনলোড' : 'Download App'}</span>
              </NavHashLink>
            </div>
          )}
        </nav>

        {/* ROUTES */}
        <Routes>
          <Route path="/" element={<Home lang={lang} />} />
          <Route path="/about" element={<AboutPage lang={lang} />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage lang={lang} />} />
        </Routes>

        {/* FOOTER */}
        <footer className="bg-slate-950 text-slate-400 pt-16 pb-8 border-t border-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
              
              <div className="space-y-4 md:col-span-1">
                <img 
                  src="/logoGhoroya.png" 
                  alt="Ghoroya Logo" 
                  className="h-14 w-auto bg-white/10 p-1.5 rounded-lg object-contain"
                  onError={(e) => { e.target.onerror = null; e.target.src = "/logo.png"; }}
                />
                <p className="text-sm text-slate-400 leading-relaxed">
                  {lang === 'bn' ? 'ঘরোয়া ফুড, আর্টস এন্ড ক্রাফটস এবং এক্সপার্টদের সেরা সেবা পাওয়ার একমাত্র নির্ভরযোগ্য প্ল্যাটফর্ম।' : 'The ultimate trusted platform for homemade food, arts & crafts, and expert services.'}
                </p>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">{lang === 'bn' ? 'কুইক লিংক' : 'Quick Links'}</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'হোম' : 'Home'}</Link></li>
                  <li><NavHashLink sectionId="features" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'সার্ভিসসমূহ' : 'Services'}</NavHashLink></li>
                  <li><Link to="/about" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'আমাদের সম্পর্কে' : 'About Us'}</Link></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">{lang === 'bn' ? 'পলিসি ও শর্তাবলী' : 'Policy & Terms'}</h4>
                <ul className="space-y-2 text-sm">
                  <li><Link to="/privacy-policy" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}</Link></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'টার্মস অব সার্ভিস' : 'Terms of Service'}</a></li>
                  <li><a href="#" className="hover:text-emerald-400 transition-colors">{lang === 'bn' ? 'ট্রেড লাইসেন্স' : 'Trade License'}</a></li>
                </ul>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">{lang === 'bn' ? 'যোগাযোগ' : 'Contact Us'}</h4>
                <p className="text-sm leading-relaxed mb-2">{lang === 'bn' ? 'শেখ মুজিব রোড, দেওয়ানহাট, চট্টগ্রাম, বাংলাদেশ।' : 'Sheikh Mujib Road, Dewanhat, Chattogram, Bangladesh.'}</p>
                <p className="text-sm text-emerald-400 font-medium">info@ghoroya.com</p>
                <p className="text-sm text-slate-300 font-medium mt-1">+8801815-503745</p>
              </div>

            </div>

            <div className="pt-8 text-center text-xs text-slate-500">
              <p>Copyright © {new Date().getFullYear()} Ghoroya.com All rights reserved.</p>
            </div>
          </div>
        </footer>

      </div>
    </Router>
  );
}