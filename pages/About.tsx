
import React from 'react';
import Logo from '../components/Logo';

const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Header */}
      <section className="bg-brand-dark py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid opacity-5"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase italic tracking-tighter">Бидний <span className="text-blue-500">тухай</span></h1>
          <div className="h-1 w-20 bg-blue-500 mx-auto"></div>
          <p className="text-slate-400 mt-8 max-w-2xl mx-auto font-medium text-lg">
            Монгол Улсын эрчим хүчний бие даасан байдал, дэд бүтцийн найдвартай ажиллагааг хангах бидний аялал.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="py-24 container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start mb-32">
            <div className="space-y-8">
              <div className="flex items-center space-x-4">
                <Logo size={40} />
                <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Company History</span>
              </div>
              <h2 className="text-4xl font-black text-slate-900 uppercase italic tracking-tighter leading-tight">Түүхэн замнал ба <br/>Чанарын эрхэмлэл</h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                "Бат Стандарт" ХХК нь 2012 онд байгуулагдсан бөгөөд Монгол Улсын эрчим хүчний дэд бүтцийн салбарт төмөр бетон хийцийн үйлдвэрлэлээр тэргүүлэгч компаниудын нэг болон төлөвшөөд байна.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Бид 35кВ, 110кВ болон 220кВ-ын ЦДАШ болон дэд станцын төслүүдэд зориулсан тусгай зориулалтын бетон суурь, хийцүүдийг үйлдвэрлэдэг. Манай үйлдвэрлэлийн бааз нь Улаанбаатар хотын Сонгинохайрхан дүүрэгт байрлах ба хамгийн сүүлийн үеийн тоног төхөөрөмжөөр тоноглогдсон.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="p-6 border-l-4 border-brand-blue bg-slate-50">
                  <div className="text-3xl font-black text-brand-blue">B25-B40</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Бетон ангилал</div>
                </div>
                <div className="p-6 border-l-4 border-brand-blue bg-slate-50">
                  <div className="text-3xl font-black text-brand-blue">ISO</div>
                  <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mt-1">Нийцэл</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-brand-blue/5 -z-10 translate-x-4 translate-y-4"></div>
              <img 
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1200&q=80" 
                alt="Engineering Office" 
                className="w-full h-[600px] object-cover shadow-2xl grayscale hover:grayscale-0 transition-all"
                loading="lazy"
              />
            </div>
          </div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-32">
            <div className="p-10 border border-slate-100 hover:border-brand-blue transition-colors group">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors">
                <span className="font-black">01</span>
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight italic mb-4">Чанарын удирдлага</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Бүх бүтээгдэхүүн лабораторийн шинжилгээний сертификаттайгаар нийлүүлэгддэг.</p>
            </div>
            <div className="p-10 border border-slate-100 hover:border-brand-blue transition-colors group">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors">
                <span className="font-black">02</span>
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight italic mb-4">Инженерийн шийдэл</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Захиалагчийн өгөгдсөн зураг төсөл, техникийн даалгаврын дагуу тусгай хийц хийх чадамж.</p>
            </div>
            <div className="p-10 border border-slate-100 hover:border-brand-blue transition-colors group">
              <div className="w-12 h-12 bg-slate-900 text-white flex items-center justify-center mb-8 group-hover:bg-brand-blue transition-colors">
                <span className="font-black">03</span>
              </div>
              <h4 className="text-xl font-black uppercase tracking-tight italic mb-4">Найдвартай байдал</h4>
              <p className="text-slate-500 text-sm leading-relaxed">Бидний хийцүүд 50-иас дээш жилийн насжилт, эрс тэс уур амьсгалыг тэсвэрлэхээр тооцоологдсон.</p>
            </div>
          </div>

          {/* Mission CTA */}
          <section className="bg-brand-blue p-16 text-white flex flex-col items-center text-center">
            <span className="text-[10px] font-black uppercase tracking-[0.5em] mb-6 opacity-70">Our Vision</span>
            <h2 className="text-3xl md:text-5xl font-black mb-8 italic uppercase tracking-tighter leading-tight max-w-4xl">
              "Эх орны эрчим хүчний дэд бүтцийн <br/>бат бөх үндэс суурийг бид бүтээнэ"
            </h2>
            <div className="h-1 w-20 bg-white opacity-30"></div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
