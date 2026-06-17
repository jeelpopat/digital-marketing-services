import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blogData } from '../data/blogData'; 

const BlogPost = () => {
  const { id } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const post = blogData.find((p) => p.id === parseInt(id));
  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#F8F8F8]">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-blue-600 hover:underline">Return to Blogs</Link>
        </div>
      </div>
    );
  }

  // Get 3 suggestions
  const suggestedPosts = blogData.filter((p) => p.id !== post.id).slice(0, 3);

  return (
    <main className="w-full min-h-screen pt-10 pb-24 bg-[#F8F8F8]">
      
      {/* 1. Main Blog Content */}
      <article className="max-w-4xl mx-auto px-6 md:px-12 lg:px-14">
        
        {/* Title & Header */}
        <div className="text-center mb-10">
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-semibold text-black leading-tight mb-8">
            {post.title}
          </h1>
        </div>

        {/* Hero Image */}
        <div className="w-full aspect-16/9 md:h-[450px] rounded-2xl overflow-hidden mb-6 shadow-lg">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="prose prose-lg text-lg leading-6 text-justify max-w-3xl mx-auto px-30 text-gray-700 font-normal">
          <p className="mb-6">
            {post.description}
          </p>
          <p className="mb-6">
            In the digital information era, you can learn from the world's greatest advertising experts with a couple of clicks. By following up top trends in marketing, digital media, mobile, design, user experience and public relations you can fulfill the expectancy of your clients and also understand their needs.
          </p>

          <h2 className="text-2xl md:text-3xl font-bold text-black mb-3">
            {post.title}
          </h2>
          
          <p className="mb-6">
            To stay ahead of the marketing competition, you should be one of the bests. If you run a marketing agency, digital marketing agency blogs can help you to generate fresh ideas. 
          </p>
          <p className="mb-6">
            By following up top trends in marketing, digital media, mobile, design, user experience and public relations you can fulfill the expectancy of your clients and also understand their needs. In the digital information era, you can learn from the world's greatest advertising experts with a couple of clicks.
          </p>

          {/* Secondary Image */}
          <div className="w-full h-64 md:h-[350px] rounded-2xl overflow-hidden mb-10">
            <img 
              src={post.image} 
              alt={`${post.title} secondary`} 
              className="w-full h-full object-cover"
            />
          </div>

          <p className="mb-6 leading-relaxed">
            To stay ahead of the marketing competition, you should be one of the bests. If you run a marketing agency, digital marketing agency blogs can help you to generate fresh ideas. By following up top trends in marketing, digital media, mobile, design, user experience and public relations you can fulfill the expectancy of your clients and also understand their needs.
          </p>
        </div>
      </article>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 mb-16">
        <hr className="border-gray-200" />
      </div>

      {/* Suggested Blogs Section */}
      <section className="max-w-7xl mx-auto px-6 md:px-12 lg:px-16">
        <div className="flex items-center justify-end mb-6">
          <Link to="/blog" className="text-[#3DE073] font-medium hover:text-green-600 transition-colors">
            View More →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {suggestedPosts.map((suggestion) => (
            <Link 
              to={`/blog/${suggestion.id}`} 
              key={suggestion.id} 
              className="bg-white p-5 rounded-[2rem] shadow-sm hover:shadow-md transition-all duration-300 group flex flex-col h-full"
            >
              {/* Card Image */}
              <div className="w-full h-56 rounded-2xl overflow-hidden mb-5 bg-gray-100 shrink-0">
                <img 
                  src={suggestion.image} 
                  alt={suggestion.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              
              {/* Card Title */}
              <h3 className="text-lg md:text-xl font-bold text-black leading-tight flex-grow">
                {suggestion.title}
              </h3>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default BlogPost;