import Hero from '../components/Hero.jsx';
import ServiceCard from '../components/ServiceCard.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import TestimonialCard from '../components/TestimonialCard.jsx';
import BlogCard from '../components/BlogCard.jsx';
import SEOHead from '../components/SEOHead.jsx';
import { services } from '../data/services.js';
import { projects } from '../data/projects.js';
import { testimonials } from '../data/testimonials.js';
import { blogPosts } from '../data/blog.js';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Globe, TrendingUp } from 'lucide-react';

const Home = () => {
  const featuredServices = services.slice(0, 3);
  const featuredProjects = projects.slice(0, 3);
  const featuredBlogs = blogPosts.filter(post => post.featured);

  return (
    <>
      <SEOHead 
        title="AI & Machine Learning Solutions"
        description="Transform your business with cutting-edge AI solutions. Expert AI consulting, custom ML models, NLP solutions, and enterprise AI integration services."
        keywords="AI solutions, machine learning, artificial intelligence, AI consulting, custom AI development, NLP, computer vision"
      />
      
      <div className="pt-16">
        <Hero />
        
        {/* Company Introduction */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Leading AI Innovation for Enterprise Success
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                NeuronTechAi is a premier artificial intelligence consultancy specializing in transforming 
                businesses through cutting-edge AI and machine learning solutions. We partner with 
                organizations to unlock the power of intelligent automation and data-driven decision making.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">98%</h3>
                <p className="text-gray-600">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">25+</h3>
                <p className="text-gray-600">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">10x</h3>
                <p className="text-gray-600">Average ROI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our AI & ML Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive artificial intelligence solutions designed to drive innovation, 
                optimize operations, and accelerate business growth across industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/services" 
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Industries Served */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Transform</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI expertise spans across multiple industries, delivering tailored solutions 
                that address unique challenges and drive measurable results.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                'Healthcare & Life Sciences',
                'Financial Services & FinTech',
                'Retail & E-commerce',
                'Manufacturing & Industrial',
                'Energy & Utilities',
                'Transportation & Logistics',
                'Technology & Software',
                'Government & Public Sector'
              ].map((industry, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900">{industry}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover how we've helped organizations achieve breakthrough results with 
                innovative AI solutions and strategic implementation.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/projects" 
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                View All Projects
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">What Our Clients Say</h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Don't just take our word for it. Here's what industry leaders say about 
                working with NeuronTechAi and the impact of our AI solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial) => (
                <TestimonialCard key={testimonial.id} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Featured Blog Posts */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest AI Insights</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Stay ahead of the curve with our expert insights on AI trends, technologies, 
                and best practices shaping the future of business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredBlogs.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
            
            <div className="text-center">
              <Link 
                to="/blog" 
                className="inline-flex items-center px-6 py-3 bg-blue-900 text-white font-semibold rounded-lg hover:bg-blue-800 transition-colors"
              >
                Read More Articles
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
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

export default Home;