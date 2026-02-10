
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Visual Header */}
      <div className="h-[300px] bg-brand-dark relative overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 bg-grid opacity-10"></div>
        <div className="relative z-10 text-center">
          <h1 className="text-5xl font-black text-white uppercase italic tracking-tighter">Холбоо <span className="text-blue-500">барих</span></h1>
          <p className="text-slate-400 mt-4 font-bold uppercase text-xs tracking-widest">Get in touch with us</p>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 -mt-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            
            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 space-y-12">
              <div className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 border-l-2 border-blue-600 pl-4">Төв оффис</h3>
                <div className="space-y-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Хаяг</p>
                      <p className="text-slate-700 font-medium">Улаанбаатар хот, Баянгол дүүрэг, 20-р хороо, Үйлдвэрийн бүс</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Утас</p>
                      <p className="text-slate-700 font-bold">+976 9911-XXXX, 9905 9856</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-10 h-10 bg-slate-50 flex items-center justify-center border border-slate-100 shrink-0">
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                    </div>
                    <div>
                      <p className="text-[10px] text-slate-400 font-black uppercase mb-1">Имэйл</p>
                      <p className="text-slate-700 font-medium">info@batstandart.mn</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-slate-50 border border-slate-100">
                <h4 className="text-sm font-black uppercase mb-4 tracking-wider">Ажлын цаг</h4>
                <div className="space-y-2 text-sm text-slate-600">
                  <div className="flex justify-between border-b border-slate-200 pb-2 italic">
                    <span>Даваа - Баасан</span>
                    <span className="font-bold">09:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between border-b border-slate-200 pb-2 italic">
                    <span>Бямба</span>
                    <span className="font-bold">10:00 - 16:00</span>
                  </div>
                  <div className="flex justify-between pt-2 italic">
                    <span>Ням</span>
                    <span className="text-red-500 font-bold uppercase">Амарна</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="lg:col-span-2 bg-white p-12 shadow-2xl border border-slate-50">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-blue-600 mb-8 block">Inquiry Form</h3>
              <h2 className="text-3xl font-black text-slate-900 mb-10 uppercase italic tracking-tighter">Үнийн санал авах</h2>
              
              <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Нэр / Байгууллага</label>
                  <input 
                    type="text" 
                    className="w-full border-b-2 border-slate-100 focus:border-brand-blue outline-none py-3 px-1 transition-colors text-sm font-medium" 
                    placeholder="Жишээ: ТЭЦ-4 ТӨХК" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Холбоо барих утас</label>
                  <input 
                    type="tel" 
                    className="w-full border-b-2 border-slate-100 focus:border-brand-blue outline-none py-3 px-1 transition-colors text-sm font-medium" 
                    placeholder="99XXXXXX" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Имэйл хаяг</label>
                  <input 
                    type="email" 
                    className="w-full border-b-2 border-slate-100 focus:border-brand-blue outline-none py-3 px-1 transition-colors text-sm font-medium" 
                    placeholder="email@example.mn" 
                  />
                </div>
                <div className="md:col-span-2 space-y-2">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-400">Сонирхож буй бүтээгдэхүүн / Асуулт</label>
                  <textarea 
                    rows={4} 
                    className="w-full border-2 border-slate-100 focus:border-brand-blue outline-none p-4 transition-colors text-sm font-medium resize-none" 
                    placeholder="Таны сонирхож буй бүтээгдэхүүн болон техникийн шаардлагыг энд бичнэ үү..."
                  ></textarea>
                </div>
                <div className="md:col-span-2 pt-4">
                  <button className="bg-brand-blue text-white w-full py-5 font-black uppercase tracking-[0.2em] hover:bg-slate-900 transition-all shadow-xl hover:-translate-y-1">
                    Хүсэлт илгээх
                  </button>
                  <p className="text-[10px] text-slate-400 text-center mt-6 uppercase tracking-widest font-bold">
                    Бид таны хүсэлтэд 24 цагийн дотор хариулах болно.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
