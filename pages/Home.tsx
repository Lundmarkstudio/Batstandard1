
import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import Logo from '../components/Logo';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[85vh] min-h-[700px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/60 to-transparent z-10" />
          <img 
            src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80" 
            alt="High Voltage Grid" 
            className="w-full h-full object-cover scale-100 animate-slow-zoom"
            loading="eager"
          />
        </div>

        <div className="container mx-auto px-6 relative z-20">
          <div className="max-w-4xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[2px] w-12 bg-blue-500"></div>
              <span className="text-blue-400 text-xs font-bold tracking-[0.5em] uppercase">
                ESTABLISHED QUALITY • SINCE 2012
              </span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 leading-[1.1] tracking-tighter uppercase italic">
              БАТ <br/>
              <span className="text-blue-500">СТАНДАРТ</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl border-l-2 border-blue-500/50 pl-6 font-medium">
              Эрчим хүчний дэд бүтцийн төмөр бетон хийцийн үндэсний тэргүүлэгч үйлдвэрлэгч. 
              Бид 35/110/220кВ-ын өндөр хүчдлийн системд зориулсан инженерийн нарийн шийдэл бүхий бүтээгдэхүүн нийлүүлдэг.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/products" 
                className="bg-brand-blue text-white px-10 py-4 font-bold text-center hover:bg-blue-700 transition-all uppercase tracking-widest text-sm"
              >
                Каталог
              </Link>
              <Link 
                to="/contact" 
                className="bg-white/5 backdrop-blur-md text-white border border-white/20 px-10 py-4 font-bold text-center hover:bg-white/20 transition-all uppercase tracking-widest text-sm"
              >
                Үнийн санал авах
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Stats Bar */}
      <section className="bg-brand-dark py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center border-r border-white/10 last:border-0">
              <div className="text-4xl font-black text-white mb-1">12+</div>
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Жилийн туршлага</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-0">
              <div className="text-4xl font-black text-white mb-1">50+</div>
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Хамтран ажилласан төсөл</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-0">
              <div className="text-4xl font-black text-white mb-1">220кВ</div>
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Инженерийн чадамж</div>
            </div>
            <div className="text-center border-r border-white/10 last:border-0">
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-[10px] text-blue-400 font-bold uppercase tracking-widest">Дотоодын үйвэрлэл</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Commitment Section */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 logo-stripes opacity-10 -z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1541888946425-d81bb19480c5?auto=format&fit=crop&w=1200&q=80" 
                className="shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 h-[600px] w-full object-cover border border-slate-200"
                alt="Industrial Facility"
                loading="lazy"
              />
              <div className="absolute bottom-6 right-6 bg-brand-blue text-white p-8 max-w-xs shadow-xl">
                <p className="text-xs font-bold uppercase tracking-widest mb-2 opacity-70">Quality Assurance</p>
                <p className="text-lg font-bold leading-snug">MNS 4225:2012 стандартын дагуу лабораторийн шинжилгээгээр баталгаажсан.</p>
              </div>
            </div>
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <Logo size={40} />
                <div className="h-[2px] flex-grow bg-slate-200"></div>
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 leading-tight uppercase tracking-tighter italic">Стандартаас <br/>давсан чанар</h2>
              <div className="space-y-6 text-slate-600 mb-10">
                <p className="leading-relaxed">
                  "Бат Стандарт" ХХК нь Монгол Улсын эрчим хүчний дэд бүтцийг бэхжүүлэх зорилготойгоор анкер тулгуурын болон дэд станцын суурийн үйлдвэрлэлийг олон улсын түвшинд гүйцэтгэж байна.
                </p>
                <p className="leading-relaxed">
                  Бид хамгийн сүүлийн үеийн бетон зуурмагийн технологи болон автоматжуулсан үйлдвэрлэлийн шугамыг ашиглан, эрс тэс уур амьсгалд тэсвэртэй, өндөр даацын хийцүүдийг үйлдвэрлэдэг.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="border border-slate-200 p-6 hover:border-brand-blue transition-colors group">
                  <div className="text-brand-blue font-black text-xl mb-1 group-hover:translate-x-1 transition-transform">ЦДАШ</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Анкер тулгуурын суурь</div>
                </div>
                <div className="border border-slate-200 p-6 hover:border-brand-blue transition-colors group">
                  <div className="text-brand-blue font-black text-xl mb-1 group-hover:translate-x-1 transition-transform">Дэд станц</div>
                  <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Тоноглолын бетон суурь</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Featured Products */}
      <section className="bg-white py-24 relative">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16">
            <div className="max-w-xl">
              <span className="text-brand-blue font-black text-xs uppercase tracking-[0.4em] mb-4 block">Product Categories</span>
              <h2 className="text-5xl font-black text-slate-900 mb-4 uppercase tracking-tighter italic leading-none">Үйлдвэрлэлийн шугам</h2>
              <p className="text-slate-500 text-sm">Инженерийн нарийн тооцоолол, стандарт нийцэл бүхий бүтээгдэхүүнүүд.</p>
            </div>
            <Link to="/products" className="mt-8 md:mt-0 border-2 border-brand-blue text-brand-blue px-8 py-3 font-bold hover:bg-brand-blue hover:text-white transition-all uppercase tracking-widest text-xs">Бүгдийг үзэх</Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {PRODUCTS.slice(0, 3).map(product => (
              <div key={product.id} className="group flex flex-col h-full border border-slate-100 hover:shadow-2xl transition-all duration-500 bg-white">
                <div className="aspect-[4/3] overflow-hidden relative">
                  <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-all z-10"></div>
                  <img src={product.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" alt={product.name} loading="lazy" />
                  <div className="absolute top-4 left-4 z-20 bg-brand-blue text-white text-[10px] font-bold px-3 py-1 uppercase tracking-widest">
                    {product.category.replace('-', ' ')}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                   <h3 className="text-xl font-black mb-4 uppercase tracking-tighter text-slate-900 leading-tight min-h-[3rem]">{product.name}</h3>
                   <p className="text-slate-500 text-sm leading-relaxed mb-8 line-clamp-3">{product.description}</p>
                   <div className="mt-auto pt-4 border-t border-slate-100 flex justify-between items-center group-hover:border-brand-blue/30 transition-colors">
                     <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600">Technical Details</span>
                     <svg className="w-5 h-5 text-blue-600 -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                   </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Message / Mission */}
      <section className="bg-brand-dark py-32 text-center relative overflow-hidden">
        <div className="absolute left-0 top-0 w-full h-full logo-stripes opacity-5 pointer-events-none"></div>
        <div className="container mx-auto px-6 max-w-4xl relative z-10">
          <Logo size={80} className="mx-auto mb-10 opacity-50 filter grayscale invert" />
          <h2 className="text-3xl md:text-5xl font-black text-white mb-10 uppercase italic tracking-tighter leading-tight">
            "Монгол Улсын эрчим хүчний сүлжээний найдвартай байдлыг хангах нь манай эрхэм зорилго юм"
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto"></div>
        </div>
      </section>
    </div>
  );
};

export default Home;
