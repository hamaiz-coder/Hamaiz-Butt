
import React from 'react';
import { Link } from 'react-router-dom';
import { CATEGORIES } from '../constants';

const CategoriesPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-extrabold heading-font text-gray-900 mb-4">Explore Our Collections</h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          From lush landscapes to professional warehouse environments, find exactly what you need in our curated categories.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {CATEGORIES.map((cat) => (
          <Link 
            key={cat.id} 
            to={`/category/${cat.slug}`}
            className="group block"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden mb-4 shadow-sm border border-gray-100">
              <img 
                src={cat.imageUrl} 
                alt={cat.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition" />
            </div>
            <h3 className="text-xl font-bold heading-font text-gray-900 group-hover:text-blue-600 transition">
              {cat.name}
            </h3>
            <p className="text-sm text-gray-500 mt-1">Free high-quality {cat.name.toLowerCase()} photos</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
