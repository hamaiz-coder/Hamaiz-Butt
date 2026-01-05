
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LogoIcon, SearchIcon, CATEGORIES } from '../constants';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <Link to="/" className="flex items-center space-x-2 text-gray-900">
              <span className="text-gray-900">
                <LogoIcon />
              </span>
              <span className="text-xl font-extrabold heading-font tracking-tight">PeterPics</span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center space-x-8">
              <Link to="/categories" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">Categories</Link>
              <Link to="/about" className="text-sm font-medium text-gray-600 hover:text-blue-600 transition">About</Link>
              <form onSubmit={handleSearch} className="relative">
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search images..."
                  className="bg-gray-100 border-none rounded-full py-2 pl-4 pr-10 text-sm focus:ring-2 focus:ring-blue-500 w-64"
                />
                <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                  <SearchIcon />
                </button>
              </form>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 p-2"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-4">
            <Link to="/categories" className="block text-base font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>Categories</Link>
            <Link to="/about" className="block text-base font-medium text-gray-600" onClick={() => setIsMenuOpen(false)}>About</Link>
            <form onSubmit={handleSearch} className="relative">
              <input 
                type="text" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search images..."
                className="bg-gray-100 border-none rounded-full py-2 pl-4 pr-10 text-sm w-full"
              />
              <button type="submit" className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400">
                <SearchIcon />
              </button>
            </form>
          </div>
        )}
      </nav>

      <main className="flex-grow">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 text-white mb-4">
                <LogoIcon />
                <span className="text-xl font-extrabold heading-font tracking-tight">PeterPics</span>
              </div>
              <p className="max-w-sm text-sm leading-relaxed mb-6">
                PeterPics is your premier destination for high-quality, free stock images. 
                Whether you're a designer, developer, or marketer, our royalty-free library 
                has everything you need to bring your projects to life.
              </p>
              <p className="text-xs text-gray-500">© 2024 PeterPics Platform. No rights reserved (Public Domain).</p>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Library</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/category/nature" className="hover:text-white">Nature</Link></li>
                <li><Link to="/category/business" className="hover:text-white">Business</Link></li>
                <li><Link to="/category/warehouse-logistics" className="hover:text-white">Logistics</Link></li>
                <li><Link to="/category/technology" className="hover:text-white">Technology</Link></li>
                <li><Link to="/categories" className="hover:text-white font-semibold">View All Categories</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-bold mb-4 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/license" className="hover:text-white">License</Link></li>
                <li><Link to="/terms" className="hover:text-white">Terms of Use</Link></li>
                <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
                <li><Link to="/dmca" className="hover:text-white">DMCA Policy</Link></li>
                <li><Link to="/contact" className="hover:text-white">Contact Support</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
