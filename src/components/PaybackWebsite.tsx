import React, { useState } from 'react';
import { ArrowLeft, CheckCircle, FileText, Clock, Calculator, MessageCircle } from 'lucide-react';
import { Popup } from "@typebot.io/react";

export default function PaybackWebsite() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openTypebot = () => {
    setIsPopupOpen(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans" dir="rtl">
      {/* Typebot Popup */}
      <Popup 
        typebot="lead-generation-q2jthkn" 
        isOpen={isPopupOpen} 
        onClose={() => setIsPopupOpen(false)} 
      />

      {/* Header */}
      <header className="bg-slate-100 shadow-sm">
        <div className="px-4 py-6">
          <h1 className="text-3xl font-bold text-blue-600">Payback</h1>
          <p className="text-gray-600 mt-2 font-medium">4 מכל 5 שכירים זכאים להחזר של אלפי שקלים. ואתם?</p>
          <p className="text-gray-800 mt-2 text-xl">קבלו את המס שמגיע לכם בחזרה</p>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white px-4 py-8">
        <h2 className="text-2xl font-bold mb-4">החזר מס בקליק</h2>
        <p className="text-lg mb-6">בדקו כמה מגיע לכם תוך 2 דקות</p>
        <button 
          onClick={openTypebot}
          className="bg-slate-100 text-blue-600 px-6 py-3 rounded-lg font-bold hover:bg-blue-50 transition-colors"
        >
          לבדיקת זכאות
        </button>
      </section>

      {/* Process Steps */}
      <section className="px-4 py-8 bg-slate-100">
        <h3 className="text-xl font-bold mb-6">איך זה עובד?</h3>
        
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <FileText className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold mb-1">1. ממלאים טופס קצר</h4>
              <p className="text-gray-600">ממלאים טופס ייפוי כח קצר</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Calculator className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold mb-1">2. אנו מחשבים את ההחזר</h4>
              <p className="text-gray-600">ענו על שאלות נוספות והמערכת תחשב את החזר המס עבורכם</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <CheckCircle className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold mb-1">3. אנו מטפלים בתהליך</h4>
              <p className="text-gray-600">אנחנו מטפלים בכל התהליך מול רשות המיסים</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-2 rounded-full">
              <Clock className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h4 className="font-bold mb-1">4. אתם מקבלים החזר</h4>
              <p className="text-gray-600">רשות המסים מפקידה את כל הכסף ישירות בחשבון הבנק</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-8 bg-slate-100">
        <h3 className="text-xl font-bold mb-4">מוכנים להתחיל?</h3>
        <p className="text-gray-600 mb-6">תהליך הבדיקה אורך כ-2 דקות</p>
        <button 
          onClick={openTypebot}
          className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-blue-700 transition-colors"
        >
          לבדיקת זכאות חינם
        </button>
      </section>

      {/* Benefits */}
      <section className="bg-slate-100 px-4 py-8">
        <h3 className="text-xl font-bold mb-6">למה כדאי לבחור ב-Payback?</h3>
        <div className="space-y-4">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">✓ תהליך דיגיטלי קל ומהיר</h4>
            <p className="text-gray-600">הכל נעשה באופן מקוון, ללא צורך בניירת</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">✓ הבירוקרטיה עלינו</h4>
            <p className="text-gray-600">המומחים של Payback מטפלים בבירוקרטיה בשבילך</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">✓ אלפי לקוחות מרוצים</h4>
            <p className="text-gray-600">אלפי ישראלים כבר קיבלו החזרי מס</p>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-bold mb-2">✓ ללא תשלום מראש</h4>
            <p className="text-gray-600">משלמים רק אם מקבלים החזר</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white px-4 py-8">
        <div className="mb-6">
          <button className="flex items-center justify-center w-full bg-green-600 text-white px-6 py-3 rounded-lg font-bold hover:bg-green-700 transition-colors gap-2">
            <MessageCircle className="w-5 h-5" />
            לשיחה עם נציג בוואטסאפ
          </button>
        </div>
        <div className="text-sm text-gray-400 text-center">
          <p>© Payback 2021 מבית סנדמן שרותים פיננסיים</p>
        </div>
      </footer>
    </div>
  );
}
