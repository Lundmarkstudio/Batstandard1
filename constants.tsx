
import { Product, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Нүүр', path: '/' },
  { label: 'Бүтээгдэхүүн', path: '/products' },
  { label: 'Бидний тухай', path: '/about' },
  { label: 'Холбоо барих', path: '/contact' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Анкер тулгуурын төмөр бетон суурь',
    category: 'tower-foundations',
    description: '35/110/220кВ-ын цахилгаан дамжуулах агаарын шугамын анкер тулгуурт зориулагдсан өндөр даацын суурь.',
    image: 'https://images.unsplash.com/photo-1544724569-5f546fd6f2b5?auto=format&fit=crop&q=80&w=800',
    specs: ['Стандарт: MNS 4225:2012', 'Материал: B25-B40 Ангиллын бетон', 'Хүйтэн тэсвэрлэлт: F200']
  },
  {
    id: '2',
    name: 'Дэд станцын тоноглолын суурь',
    category: 'substation-foundations',
    description: '35/110/220кВ-ын дэд станцын трансформатор, таслуур, холбогч тоноглолуудын суурь.',
    image: 'https://images.unsplash.com/photo-1516937941344-00b4e0337589?auto=format&fit=crop&q=80&w=800',
    specs: ['Даац: 50-200 тонн', 'Суурилуулалт: Хялбар', 'Насжилт: 50+ жил']
  },
  {
    id: '3',
    name: 'Кабелийн лотки болон таг',
    category: 'cable-systems',
    description: 'Цахилгааны кабель хамгаалах, угсралтын ажлыг хөнгөвчлөх зориулалттай лотки болон тагнууд.',
    image: 'https://images.unsplash.com/photo-1504307651254-35680f3366d4?auto=format&fit=crop&q=80&w=800',
    specs: ['Урт: 2000мм - 3000мм', 'Өргөн: 300мм - 1000мм', 'Хүчитгэсэн арматуртай']
  },
  {
    id: '4',
    name: 'Шугамын тулгуурын суурь (У-цуврал)',
    category: 'tower-foundations',
    description: 'Бүх төрлийн хөрсөнд тохиромжтой, ЦДАШ-ын тулгуурын суурь.',
    image: 'https://images.unsplash.com/photo-1589939705384-5185138a047a?auto=format&fit=crop&q=80&w=800',
    specs: ['Төрөл: У-1, У-2', 'Хөрсний усны хамгаалалттай']
  }
];
