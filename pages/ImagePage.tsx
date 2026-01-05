
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getImageById, fetchImages } from '../services/imageService';
import { ImageItem } from '../types';
import { DownloadIcon } from '../constants';

const ImagePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [image, setImage] = useState<ImageItem | null>(null);
  const [related, setRelated] = useState<ImageItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    const loadData = async () => {
      setLoading(true);
      if (id) {
        const imgData = await getImageById(id);
        setImage(imgData);
        const relatedData = await fetchImages('', imgData.category, 'all', 1);
        setRelated(relatedData.slice(0, 8));
      }
      setLoading(false);
    };
    loadData();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!image) return <div className="p-20 text-center">Image not found</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumbs */}
      <nav className="text-sm text-gray-500 mb-6 flex items-center space-x-2">
        <Link to="/" className="hover:text-blue-600">Home</Link>
        <span>/</span>
        <Link to="/categories" className="hover:text-blue-600">Categories</Link>
        <span>/</span>
        <span className="text-gray-900 font-medium truncate">{image.title}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Image Preview */}
        <div className="lg:col-span-2">
          <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-sm flex items-center justify-center p-4">
            <img 
              src={image.url} 
              alt={image.title} 
              className="max-w-full h-auto rounded shadow-lg"
            />
          </div>
          
          <div className="mt-8 flex flex-wrap gap-2">
            {image.tags.map(tag => (
              <Link 
                key={tag} 
                to={`/search?q=${tag}`}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm transition"
              >
                #{tag}
              </Link>
            ))}
          </div>
        </div>

        {/* Sidebar Info */}
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
            <h1 className="text-2xl font-extrabold heading-font text-gray-900 mb-4">{image.title}</h1>
            
            <div className="space-y-4 mb-8">
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-500 text-sm">License</span>
                <span className="text-green-600 text-sm font-semibold">Free to use</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Resolution</span>
                <span className="text-gray-900 text-sm font-medium">{image.width} x {image.height}</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-gray-50">
                <span className="text-gray-500 text-sm">Creator</span>
                <span className="text-blue-600 text-sm font-semibold">{image.author}</span>
              </div>
            </div>

            <button 
              onClick={() => window.open(image.url, '_blank')}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center space-x-2 shadow-lg shadow-blue-500/30 transition"
            >
              <DownloadIcon />
              <span>Free Download</span>
            </button>
            <p className="text-[10px] text-center text-gray-400 mt-4 leading-tight uppercase tracking-wider font-bold">
              Royalty-free. Commercial use allowed.
            </p>
          </div>

          <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
            <h4 className="font-bold text-blue-900 mb-2">The PeterPics License</h4>
            <p className="text-sm text-blue-800/80 leading-relaxed">
              Our content can be used for free for commercial and non-commercial use across print and digital.
            </p>
            <ul className="mt-4 space-y-2 text-xs text-blue-900">
              <li className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>No attribution required</span>
              </li>
              <li className="flex items-center space-x-2">
                <span className="text-green-600">✓</span>
                <span>Modify as needed</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Related Images */}
      <section className="mt-20">
        <h2 className="text-2xl font-extrabold text-gray-900 heading-font mb-8">Related Images</h2>
        <div className="masonry-grid">
          {related.map((img) => (
            <div key={img.id} className="masonry-item">
              <Link to={`/image/${img.id}`} className="block group relative rounded-lg overflow-hidden bg-gray-200">
                <img 
                  src={img.thumbnail} 
                  alt={img.title} 
                  loading="lazy"
                  className="w-full h-auto object-cover transition duration-300 group-hover:opacity-90"
                />
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default ImagePage;
