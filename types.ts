
export interface Product {
  id: string;
  name: string;
  category: 'tower-foundations' | 'substation-foundations' | 'cable-systems';
  description: string;
  image: string;
  specs?: string[];
}

export interface NavItem {
  label: string;
  path: string;
}
