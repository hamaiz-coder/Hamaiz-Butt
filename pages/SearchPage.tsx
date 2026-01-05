
import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { fetchImages } from '../services/imageService';
import { ImageItem, Orientation } from '../types';
import { CATEGORIES } from '../constants';

const SearchPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  const category = searchParams.get('cat') || '';
  const orientationParam = searchParams.get('o') || 'all';

  const [images, setImages] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  const orientations: {label: string, value: Orientation}[] = [
    { label: 'All Orientations', value: 'all' },
    { label: 'Horizontal', value: 'horizontal' },
    { label: 'Vertical', value: 'vertical' },
    { label: 'Square', value: 'square' },
  ];

  useEffect(() => {
    const loadResults = async () => {
      setLoading(true);
      const data = await fetchImages(query, category, orientationParam as Orientation, page);
      setImages(data);
      setLoading(false);
    };
    loadResults();
  }, [query, category, orientationParam, page]);

  const updateFilter = (type: 'cat' | 'o', value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value && value !== 'all') {
      newParams.set(type, value);
    } else {
      newParams.delete(type);
    }
    setSearchParams(newParams);
    setPage(1);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Search Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-extrabold heading-font text-gray-900">
          {query ? `Search results for "${query}"` : category ? `${category.replace('-', ' ')} Images` : 'Library'}
        </h1>
        <p className="text-gray-500 mt-2">{images.length}+ free images found</p>
      </div>

      {/* Filters Bar */}
      <div className="flex flex-wrap items-center gap-4 mb-10 pb-4 border-b border-gray-100">
        <div className="flex items-center space-x-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Orientation:</label>
          <select 
            value={orientationParam}
            onChange={(e) => updateFilter('o', e.target.value)}
            className="text-sm border-none bg-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            {orientations.map(o => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
        </div>

        <div className="flex items-center space-x-2">
          <label className="text-xs font-bold uppercase tracking-wider text-gray-400">Category:</label>
          <select 
            value={category}
            onChange={(e) => updateFilter('cat', e.target.value)}
            className="text-sm border-none bg-gray-100 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 cursor-pointer"
          >
            <option value="">All Categories</option>
            {CATEGORIES.map(cat => (
              <option key={cat.slug} value={cat.slug}>{cat.name}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Results */}
      {loading ? (
        <div className="flex justify-center py-40">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
        </div>
      ) : images.length > 0 ? (
        <>
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
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          <div className="mt-12 flex justify-center space-x-4">
            <button 
              disabled={page === 1}
              onClick={() => setPage(p => Math.max(1, p - 1))}
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </button>
            <span className="flex items-center text-sm font-bold text-gray-500">Page {page}</span>
            <button 
              onClick={() => setPage(p => p + 1)}
              className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium hover:bg-gray-50"
            >
              Next Page
            </button>
          </div>
        </>
      ) : (
        <div className="text-center py-40">
          <p className="text-xl text-gray-500">No images found for this search.</p>
        </div>
      )}
    </div>
  );
};

export default SearchPage;
