
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NAV_ITEMS } from '../constants';
import Logo from './Logo';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-white border-b-4 border-brand-blue sticky top-0 z-50 shadow-md">
        <div className="container mx-auto px-4 py-3 flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center space-x-4 mb-4 md:mb-0 group">
            <Logo size={64} className="group-hover:scale-105 transition-transform" />
            <div className="border-l-2 border-slate-200 pl-4">
              <h1 className="text-2xl font-black text-brand-blue leading-none tracking-tight uppercase group-hover:text-brand-dark transition-colors">БАТ СТАНДАРТ</h1>
              <p className="text-[10px] text-slate-500 tracking-[0.1em] uppercase font-bold mt-1 text-nowrap">Төмөр бетон эдлэл үйлдвэрлэл</p>
            </div>
          </Link>
          <nav className="flex space-x-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm font-bold transition-all hover:text-brand-blue relative py-2 ${
                  location.pathname === item.path 
                  ? 'text-brand-blue after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-full after:h-1 after:bg-brand-blue' 
                  : 'text-slate-600'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <main className="flex-grow">
        {children}
      </main>

      <footer className="bg-[#050810] text-white pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-12 mb-16">
            {/* Logo and Contact Section */}
            <div className="lg:col-span-4 space-y-8">
              <div className="flex items-start space-x-4">
                <Logo size={60} />
                <div className="pt-1">
                  <h3 className="text-2xl font-black tracking-tight leading-none uppercase">БАТ СТАНДАРТ</h3>
                  <p className="text-blue-500 text-sm font-bold tracking-widest mt-1">ТӨМӨР БЕТОН ЭДЛЭЛ</p>
                </div>
              </div>
              
              <div className="space-y-4 text-slate-400 text-sm">
                <div className="flex items-start space-x-3">
                  <svg className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  <p>Сонгинохайрхан дүүрэг 32-р хороо, Ulaanbaatar, Mongolia, 976</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                  <p>+976 9905 9856</p>
                </div>
                <div className="flex items-center space-x-3">
                  <svg className="w-5 h-5 text-blue-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                  <p>batstandart@gmail.com</p>
                </div>
              </div>

              <div className="flex space-x-4">
                {[
                  { name: 'linkedin', url: '#', path: 'M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z' },
                  { name: 'twitter', url: '#', path: 'M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z' },
                  { name: 'facebook', url: 'https://www.facebook.com/profile.php?id=100054413862816', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' }
                ].map((social) => (
                  <a 
                    key={social.name} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    title={social.name.charAt(0).toUpperCase() + social.name.slice(1)}
                    className="w-10 h-10 bg-slate-800/50 flex items-center justify-center rounded hover:bg-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>

            {/* Menu Section */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-l-2 border-blue-600 pl-3">Цэс</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-bold">
                <li><Link to="/" className="hover:text-white transition-colors">Нүүр хуудас</Link></li>
                <li><Link to="/products" className="hover:text-white transition-colors">Бүтээгдэхүүн</Link></li>
                <li><Link to="/services" className="hover:text-white transition-colors">Үйлчилгээ</Link></li>
                <li><Link to="/about" className="hover:text-white transition-colors">Бидний тухай</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Холбоо барих</Link></li>
              </ul>
            </div>

            {/* Products Quick Access Section */}
            <div className="lg:col-span-2">
              <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-l-2 border-blue-600 pl-3">Бүтээгдэхүүн</h4>
              <ul className="space-y-4 text-slate-400 text-sm font-bold">
                <li><Link to="/products?cat=tower-foundations" className="hover:text-white transition-colors">Б-цуврал суурь</Link></li>
                <li><Link to="/products?cat=cable-systems" className="hover:text-white transition-colors">ЛТ кабелийн суваг</Link></li>
                <li><Link to="/products?cat=cable-systems" className="hover:text-white transition-colors">ПТ сувгийн таг</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Үнийн санал авах</Link></li>
              </ul>
            </div>

            {/* Information Section */}
            <div className="lg:col-span-4">
              <h4 className="text-sm font-black uppercase tracking-widest mb-8 border-l-2 border-blue-600 pl-3">Мэдээлэл авах</h4>
              <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                Шинэ бүтээгдэхүүн болон техникийн шинэчлэлийн мэдээллийг имэйлээр аваарай.
              </p>
              <form className="relative flex items-center">
                <input 
                  type="email" 
                  placeholder="Имэйл хаяг" 
                  className="w-full bg-[#0E1525] border border-slate-800 rounded px-4 py-3 text-sm focus:outline-none focus:border-blue-600 pr-12"
                />
                <button type="submit" className="absolute right-1 top-1 bottom-1 w-10 bg-blue-600 rounded flex items-center justify-center hover:bg-blue-500 transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </form>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center text-[10px] font-black tracking-widest uppercase text-slate-500">
            <p>© 2026 "БАТ СТАНДАРТ" ХХК. БҮХ ЭРХ ХУУЛИАР ХАМГААЛАГДСАН.</p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-white transition-colors">Нууцлалын бодлого</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Үйлчилгээний нөхцөл</Link>
              <Link to="/standard" className="hover:text-white transition-colors">Стандарт</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
