
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SearchIcon, CATEGORIES } from '../constants';
import { fetchImages } from '../services/imageService';
import { ImageItem } from '../types';

const Home: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const loadFeatured = async () => {
      setLoading(true);
      const data = await fetchImages('', '', 'all', 1);
      setImages(data);
      setLoading(false);
    };
    loadFeatured();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center bg-gray-900 overflow-hidden">
        <div className="absolute inset-0 opacity-50">
          <img 
            src="https://picsum.photos/id/10/1920/1080" 
            alt="Hero background" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative z-10 max-w-3xl w-full px-4 text-center text-white">
          <h1 className="text-4xl md:text-6xl font-extrabold heading-font mb-4 drop-shadow-lg">
            Free High-Quality Stock Images
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200 drop-shadow-md">
            Over 500,000+ professional photos for everyone. Free for personal and commercial use.
          </p>
          
          <form onSubmit={handleSearch} className="relative max-w-2xl mx-auto shadow-2xl">
            <input 
              type="text" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search for free photos (e.g. 'warehouse', 'nature')..."
              className="w-full py-4 pl-6 pr-16 rounded-full text-gray-900 focus:outline-none focus:ring-4 focus:ring-blue-500/50 text-lg"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 bg-blue-600 hover:bg-blue-700 p-3 rounded-full transition">
              <SearchIcon />
            </button>
          </form>

          <div className="mt-6 flex flex-wrap justify-center gap-3 text-sm">
            <span className="text-gray-300">Popular:</span>
            {['Logistics', 'Nature', 'Business', 'Abstract', 'Jobs'].map(tag => (
              <Link 
                key={tag} 
                to={`/search?q=${tag.toLowerCase()}`}
                className="hover:underline text-white font-medium"
              >
                {tag}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Horizontal Scroll */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl font-extrabold text-gray-900 heading-font">Popular Categories</h2>
              <p className="text-gray-500 mt-1">Browse our most sought-after collections</p>
            </div>
            <Link to="/categories" className="text-blue-600 font-semibold hover:underline">View All</Link>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {CATEGORIES.slice(0, 10).map((cat) => (
              <Link 
                key={cat.id} 
                to={`/category/${cat.slug}`}
                className="group relative h-40 rounded-xl overflow-hidden"
              >
                <img src={cat.imageUrl} alt={cat.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-bold text-lg heading-font drop-shadow-md">{cat.name}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Image Feed */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-extrabold text-gray-900 heading-font mb-8">Trending Stock Photos</h2>
          
          {loading ? (
            <div className="flex justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
            </div>
          ) : (
            <div className="masonry-grid">
              {images.map((img) => (
                <div key={img.id} className="masonry-item">
                  <Link to={`/image/${img.id}`} className="block group relative rounded-lg overflow-hidden bg-gray-200">
                    <img 
                      src={img.thumbnail} 
                      alt={img.title} 
                      loading="lazy"
                      className="w-full h-auto object-cover transition duration-300 group-hover:opacity-90"
                    />
                    <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition text-white">
                      <p className="text-sm font-semibold truncate">{img.title}</p>
                      <p className="text-xs opacity-80">{img.category}</p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          )}

          <div className="mt-12 text-center">
            <button 
              onClick={() => navigate('/search?q=latest')}
              className="bg-gray-900 text-white px-8 py-3 rounded-full font-bold hover:bg-gray-800 transition shadow-lg"
            >
              Discover More Free Images
            </button>
          </div>
        </div>
      </section>

      {/* Feature Promo */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold heading-font mb-6">High Resolution. Zero Strings Attached.</h2>
          <p className="text-lg opacity-90 mb-8 leading-relaxed">
            All photos on PeterPics can be used for free. We have made them available for both 
            commercial and personal use. Attribution is not required but always appreciated!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">📸</div>
              <h3 className="font-bold text-xl mb-2">500k+ Images</h3>
              <p className="text-sm opacity-80">A massive library covering every niche imaginable.</p>
            </div>
            <div>
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">⚡</div>
              <h3 className="font-bold text-xl mb-2">Fast & Easy</h3>
              <p className="text-sm opacity-80">One-click downloads. No registration, no login, no limits.</p>
            </div>
            <div>
              <div className="bg-white/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">⚖️</div>
              <h3 className="font-bold text-xl mb-2">Safe to Use</h3>
              <p className="text-sm opacity-80">Clear license terms. Safe for your clients and projects.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
