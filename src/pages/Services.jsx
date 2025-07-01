import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import { services } from '../data/services.js';
import { Filter, Search } from 'lucide-react';

const Services = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Strategy', 'Development', 'Analytics', 'Integration'];

  const filteredServices = services.filter(service => {
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          service.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || 
                           service.title.toLowerCase().includes(selectedCategory.toLowerCase());
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead 
        title="AI & Machine Learning Services"
        description="Comprehensive AI and ML services including strategy consulting, custom development, NLP solutions, computer vision, and AI integration. Transform your business with our expert AI services."
        keywords="AI services, machine learning services, AI consulting, custom AI development, NLP solutions, computer vision, AI integration"
        url="/services"
      />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Comprehensive AI & ML 
                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"> Services</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                From strategic AI consulting to custom model development, we offer end-to-end 
                artificial intelligence solutions that drive innovation and accelerate business growth.
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
                  placeholder="Search services..."
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

        {/* Services Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI Solutions Portfolio</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Choose from our comprehensive range of AI services designed to address 
                your specific business challenges and objectives.
              </p>
            </div>
            
            {filteredServices.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service) => (
                  <ServiceCard key={service.id} service={service} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No services found matching your criteria.</p>
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

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Proven Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a systematic approach to ensure successful AI implementation 
                and maximum value realization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Discovery & Assessment',
                  description: 'We analyze your business needs, data landscape, and technical infrastructure to identify AI opportunities.'
                },
                {
                  step: '02',
                  title: 'Strategy & Planning',
                  description: 'Develop a comprehensive AI strategy with clear roadmap, timelines, and success metrics.'
                },
                {
                  step: '03',
                  title: 'Development & Implementation',
                  description: 'Build and deploy custom AI solutions using best practices and cutting-edge technologies.'
                },
                {
                  step: '04',
                  title: 'Optimization & Support',
                  description: 'Continuous monitoring, optimization, and support to ensure sustained performance and ROI.'
                }
              ].map((process, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose NeuronTechAi?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our expertise, methodology, and commitment to excellence set us apart 
                in the AI consulting landscape.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Deep Expertise',
                  description: 'Our team combines advanced academic research with practical industry experience across multiple domains.',
                  metrics: '50+ PhD & MS degrees'
                },
                {
                  title: 'Proven Track Record',
                  description: 'Successfully delivered 500+ AI projects with measurable business impact and high client satisfaction.',
                  metrics: '98% client satisfaction rate'
                },
                {
                  title: 'End-to-End Support',
                  description: 'From initial strategy to deployment and ongoing optimization, we support you throughout your AI journey.',
                  metrics: '24/7 support available'
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{benefit.description}</p>
                  <div className="text-blue-900 font-semibold">{benefit.metrics}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI expertise can drive innovation and growth for your organization. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Schedule Free Consultation
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;