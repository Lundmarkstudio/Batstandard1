
import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const Products: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialCategory = queryParams.get('cat') || 'all';
  
  const [filter, setFilter] = useState(initialCategory);

  useEffect(() => {
    setFilter(queryParams.get('cat') || 'all');
  }, [location.search]);

  const filteredProducts = filter === 'all' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === filter);

  const categories = [
    { id: 'all', label: 'Бүх бүтээгдэхүүн' },
    { id: 'tower-foundations', label: 'Тулгуурын суурь' },
    { id: 'substation-foundations', label: 'Дэд станцын суурь' },
    { id: 'cable-systems', label: 'Кабелийн систем' },
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        {/* Header Area */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-slate-200 pb-12">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-1 bg-brand-blue"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600">Bat Standart Technical Catalog</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 uppercase italic tracking-tighter">Бүтээгдэхүүний <span className="text-brand-blue">Каталог</span></h1>
            <p className="text-slate-500 mt-6 font-medium">
              Монгол Улсын эрчим хүчний салбарт ашиглагддаг MNS 4225:2012 стандартын шаардлага хангасан өндөр чанартай бетон хийцүүд.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-5 py-2 font-bold text-[10px] uppercase tracking-widest transition-all border ${
                  filter === cat.id 
                    ? 'bg-brand-blue text-white border-brand-blue shadow-lg' 
                    : 'bg-white text-slate-500 border-slate-200 hover:border-brand-blue hover:text-brand-blue'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProducts.map(product => (
            <div key={product.id} className="bg-white group border border-slate-100 hover:border-brand-blue/30 transition-all duration-500 shadow-sm hover:shadow-2xl overflow-hidden flex flex-col md:flex-row">
              <div className="md:w-2/5 aspect-square md:aspect-auto relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
                <div className="absolute top-0 left-0 bg-brand-blue text-white p-2 font-bold text-[9px] uppercase tracking-widest">
                  ID: #{product.id.padStart(3, '0')}
                </div>
              </div>
              <div className="p-8 md:w-3/5 flex flex-col justify-between">
                <div>
                  <span className="text-[9px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2 block opacity-70">
                    Category: {product.category.replace('-', ' ')}
                  </span>
                  <h3 className="text-xl font-black text-slate-900 mb-4 uppercase tracking-tight italic leading-tight">{product.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6 font-medium">
                    {product.description}
                  </p>
                  
                  {product.specs && (
                    <div className="mb-8 space-y-2">
                      <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-3">Specifications</p>
                      {product.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center text-[10px] font-bold text-slate-600 uppercase">
                          <div className="w-1.5 h-1.5 bg-blue-500 mr-3"></div>
                          {spec}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                
                <Link 
                  to="/contact" 
                  className="w-full bg-slate-900 text-white py-4 font-black text-[10px] uppercase tracking-[0.2em] text-center hover:bg-brand-blue transition-all"
                >
                  Үнийн санал авах
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-slate-400 font-bold uppercase tracking-widest italic">Энэ ангилалд бүтээгдэхүүн байхгүй байна.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Products;
