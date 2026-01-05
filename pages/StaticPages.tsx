
import React from 'react';

const StaticPageWrapper: React.FC<{title: string, children: React.ReactNode}> = ({title, children}) => (
  <div className="max-w-4xl mx-auto px-4 py-20">
    <h1 className="text-4xl font-extrabold heading-font text-gray-900 mb-8">{title}</h1>
    <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
      {children}
    </div>
  </div>
);

export const AboutPage = () => (
  <StaticPageWrapper title="About PeterPics">
    <p>PeterPics is a dedicated platform providing the highest quality stock images to creators worldwide. We believe that professional imagery should be accessible to everyone, regardless of their budget or project scale.</p>
    <p>Our library features over 500,000 photos across diverse categories, ranging from high-tech manufacturing and logistics to the serene beauty of the natural world. Every image is hand-vetted to ensure it meets our standards of resolution and composition.</p>
    <h2 className="text-2xl font-bold text-gray-900 mt-8">Our Mission</h2>
    <p>To empower the creative community by providing a frictionless, high-speed, and free-to-use image repository that enables better storytelling for designers, educators, and businesses everywhere.</p>
  </StaticPageWrapper>
);

export const LicensePage = () => (
  <StaticPageWrapper title="The PeterPics License">
    <p className="font-semibold text-gray-900">What is allowed?</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>All photos on PeterPics can be used for free.</li>
      <li>Commercial and non-commercial purposes are permitted.</li>
      <li>Attribution is not required. Giving credit to the contributor or PeterPics is not necessary but always appreciated.</li>
      <li>You can make modifications to the photos from PeterPics.</li>
    </ul>
    <p className="font-semibold text-gray-900 mt-8">What is NOT allowed?</p>
    <ul className="list-disc pl-6 space-y-2">
      <li>Identifiable people may not appear in a bad light or in a way that is offensive.</li>
      <li>Don't sell unaltered copies of a photo, e.g. as a poster, print or on a physical product without adding value.</li>
      <li>Don't imply endorsement of your product by people or brands on the imagery.</li>
      <li>Don't redistribute or sell the photos on other stock photo or wallpaper platforms.</li>
    </ul>
  </StaticPageWrapper>
);

export const ContactPage = () => {
  const [submitted, setSubmitted] = React.useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <StaticPageWrapper title="Contact Us">
      {submitted ? (
        <div className="bg-green-50 text-green-800 p-8 rounded-2xl border border-green-100 text-center">
          <h3 className="text-xl font-bold mb-2">Message Received!</h3>
          <p>Thank you for reaching out. We'll get back to you within 24-48 hours.</p>
          <button onClick={() => setSubmitted(false)} className="mt-4 text-green-900 underline">Send another message</button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <p className="mb-6">Have questions about our license, want to report a copyright issue, or just want to say hello? Fill out the form and our team will be in touch.</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📧</span>
                <span>support@peterpics.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-2xl">📍</span>
                <span>Creative Hub, Photo District, NY</span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Full Name</label>
              <input required type="text" className="w-full border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Email Address</label>
              <input required type="email" className="w-full border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
              <textarea required rows={4} className="w-full border-gray-300 rounded-lg p-3 focus:ring-blue-500 focus:border-blue-500"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition shadow-lg">Send Message</button>
          </form>
        </div>
      )}
    </StaticPageWrapper>
  );
};
