import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import BlogCard from '../components/BlogCard.jsx';
import { blogPosts } from '../data/blog.js';
import { Filter, Search, ArrowRight } from 'lucide-react';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Finance', 'Technology', 'Manufacturing'];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead 
        title="AI & Machine Learning Blog"
        description="Stay updated with the latest insights on artificial intelligence, machine learning, and emerging technologies. Expert articles on AI trends, implementation strategies, and industry best practices."
        keywords="AI blog, machine learning articles, artificial intelligence insights, AI trends, ML best practices, technology blog"
        url="/blog"
      />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI & Machine Learning 
                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"> Insights</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Stay ahead of the curve with expert insights on artificial intelligence trends, 
                implementation strategies, and the latest developments shaping the future of technology.
              </p>
            </div>
          </div>
        </section>

        {/* Filters Section */}
        <section className="py-8 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              {/* Category Filter */}
              <div className="flex items-center gap-2">
                <Filter className="h-5 w-5 text-gray-600" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Articles</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our most popular and impactful articles on AI and machine learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {blogPosts.filter(post => post.featured).map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Articles</h2>
              <p className="text-xl text-gray-600">
                Explore our complete collection of AI and technology insights.
              </p>
            </div>
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPosts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No articles found matching your criteria.</p>
                <button 
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('All');
                  }}
                  className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-blue-900 rounded-2xl p-8 md:p-12 text-white text-center">
              <h2 className="text-3xl font-bold mb-4">Stay Updated with AI Insights</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Subscribe to our newsletter and get the latest AI trends, case studies, 
                and expert insights delivered to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-blue-300 focus:outline-none"
                />
                <button className="px-6 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Categories Overview */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Explore by Category</h2>
              <p className="text-xl text-gray-600">
                Dive deeper into specific areas of AI and machine learning.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  category: 'Healthcare',
                  description: 'AI applications in medical diagnosis, drug discovery, and patient care.',
                  count: blogPosts.filter(post => post.category === 'Healthcare').length
                },
                {
                  category: 'Finance',
                  description: 'Machine learning in fintech, fraud detection, and algorithmic trading.',
                  count: blogPosts.filter(post => post.category === 'Finance').length
                },
                {
                  category: 'Technology',
                  description: 'Latest developments in AI frameworks, tools, and methodologies.',
                  count: blogPosts.filter(post => post.category === 'Technology').length
                },
                {
                  category: 'Manufacturing',
                  description: 'Industrial AI, automation, and quality control systems.',
                  count: blogPosts.filter(post => post.category === 'Manufacturing').length
                }
              ].map((cat, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{cat.category}</h3>
                  <p className="text-gray-600 mb-4">{cat.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{cat.count} articles</span>
                    <button
                      onClick={() => setSelectedCategory(cat.category)}
                      className="text-blue-900 font-medium hover:text-blue-700 transition-colors"
                    >
                      Explore →
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Implement AI in Your Business?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Turn insights into action. Let our AI experts help you transform your business 
              with cutting-edge artificial intelligence solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/services" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Blog;