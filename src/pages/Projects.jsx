import { useState } from 'react';
import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';
import { Filter, Search } from 'lucide-react';

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Healthcare', 'Fintech', 'Retail', 'Manufacturing', 'Logistics', 'Energy'];

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.client.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <SEOHead 
        title="AI & ML Project Case Studies"
        description="Explore our successful AI and machine learning project implementations across healthcare, finance, retail, and manufacturing. Real results from custom AI solutions."
        keywords="AI case studies, machine learning projects, AI implementation examples, custom AI solutions, AI success stories"
        url="/projects"
      />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                AI Success Stories &
                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"> Case Studies</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Discover how we've helped organizations across industries achieve breakthrough results 
                with innovative AI solutions. Real projects, measurable outcomes, transformative impact.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">500+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">95%</div>
                <div className="text-gray-600">Average Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">$50M+</div>
                <div className="text-gray-600">Client Savings Generated</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-900 mb-2">25+</div>
                <div className="text-gray-600">Industries Served</div>
              </div>
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
                  placeholder="Search projects..."
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

        {/* Projects Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Case Studies</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Explore our portfolio of successful AI implementations that have delivered 
                measurable business value and competitive advantages.
              </p>
            </div>
            
            {filteredProjects.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project) => (
                  <ProjectCard key={project.id} project={project} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-xl text-gray-600">No projects found matching your criteria.</p>
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

        {/* Industries Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We've Transformed</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI expertise spans across multiple sectors, delivering tailored solutions 
                that address industry-specific challenges and opportunities.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: 'Healthcare', count: '85+ projects' },
                { name: 'Financial Services', count: '120+ projects' },
                { name: 'Retail & E-commerce', count: '95+ projects' },
                { name: 'Manufacturing', count: '75+ projects' },
                { name: 'Logistics', count: '60+ projects' },
                { name: 'Energy & Utilities', count: '45+ projects' },
                { name: 'Technology', count: '110+ projects' },
                { name: 'Government', count: '30+ projects' }
              ].map((industry, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm text-center hover:shadow-md transition-shadow">
                  <h3 className="font-semibold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-sm text-blue-900">{industry.count}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Technologies We Master</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage cutting-edge AI frameworks and platforms to build robust, 
                scalable solutions that drive real business value.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {[
                'TensorFlow', 'PyTorch', 'Scikit-learn', 'OpenCV', 'Hugging Face',
                'AWS SageMaker', 'Google AI Platform', 'Azure ML', 'Docker', 'Kubernetes',
                'Apache Spark', 'MLflow', 'Airflow', 'FastAPI', 'React', 'Node.js'
              ].map((tech, index) => (
                <div key={index} className="bg-gray-50 p-3 rounded-lg text-center text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-900 transition-colors">
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Create Your Success Story?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve similar breakthrough results with AI. 
              Schedule a consultation to explore your specific challenges and opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your Project
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

export default Projects;