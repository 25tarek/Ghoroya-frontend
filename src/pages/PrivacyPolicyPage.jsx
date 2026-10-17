import React from 'react';
import { Lock } from 'lucide-react';

export default function PrivacyPolicyPage({ lang }) {
  return (
    <div className="py-16 bg-slate-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-slate-100">
          <div className="flex items-center gap-4 mb-6 border-b pb-6">
            <Lock className="w-8 h-8 text-emerald-600" />
            <h1 className="text-3xl font-extrabold">{lang === 'bn' ? 'প্রাইভেসি পলিসি' : 'Privacy Policy'}</h1>
          </div>
          <div className="space-y-4 text-slate-600 leading-relaxed">
            <p>{lang === 'bn' ? 'Ghoroya.com গ্রাহকদের তথ্য সুরক্ষায় প্রতিশ্রুতিবদ্ধ।' : 'Ghoroya.com is committed to protecting user privacy.'}</p>
            <h3 className="font-bold text-slate-900">{lang === 'bn' ? '১. তথ্য সংগ্রহ' : '1. Data Collection'}</h3>
            <p>{lang === 'bn' ? 'আমরা আপনার নাম, ফোন নম্বর ও ডেলিভারি ঠিকানা সংগ্রহ করি।' : 'We collect your name, phone number, and delivery address.'}</p>
          </div>
        </div>
      </div>
    </div>
  );
}