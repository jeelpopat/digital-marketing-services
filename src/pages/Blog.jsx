import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { blogData } from '../data/blogData'; 

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full min-h-screen py-12 px-6 md:px-12 lg:px-16 bg-[#F8F8F8]">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 space-y-6">
          <span className="px-5 py-2 mb-8 border border-green-200 text-gray-500 rounded-full text-sm font-medium tracking-wide bg-white shadow-sm hover:shadow-md transition-shadow cursor-default">
            News & Blogs
          </span>
          
          <h1 className="text-xl md:text-2xl lg:text-2xl font-medium text-black max-w-3xl leading-snug">
            All the latest news and updates about AMW the product, the company, and the team
          </h1>
          
          <h2 className="text-xl md:text-2xl text-gray-500 font-medium pt-4">
            Latest Updates
          </h2>
        </div>

        {/* Blog Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
          {blogData.map((post) => (
            <Link 
              to={`/blog/${post.id}`} 
              key={post.id} 
              className="bg-white p-7 rounded-[1rem] shadow-sm hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 bg-gray-100 shrink-0">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Card Title */}
              <h3 className="text-lg md:text-xl font-bold text-black leading-tight flex-grow">
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Blog;