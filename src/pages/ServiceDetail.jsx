import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import { services } from '../data/services.js';
import { ArrowLeft, Check, Clock, DollarSign, Users, ArrowRight } from 'lucide-react';

const ServiceDetail = () => {
  const { serviceId } = useParams();
  const service = services.find(s => s.id === serviceId);

  if (!service) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
          <Link to="/services" className="text-blue-900 hover:text-blue-700">
            ← Back to Services
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={service.title}
        description={service.fullDescription}
        keywords={`${service.title.toLowerCase()}, ${service.technologies.join(', ').toLowerCase()}`}
        url={`/services/${service.id}`}
      />
      
      <div className="pt-16">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/services" className="text-gray-500 hover:text-gray-700">Services</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{service.title}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link 
                  to="/services"
                  className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Services
                </Link>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{service.title}</h1>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  {service.fullDescription}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <DollarSign className="h-5 w-5 mr-2" />
                    <span>{service.price}</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Clock className="h-5 w-5 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="relative">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Features */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">What's Included</h2>
                <div className="space-y-4">
                  {service.features.map((feature, index) => (
                    <div key={index} className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3 mt-1">
                        <Check className="h-4 w-4 text-green-600" />
                      </div>
                      <span className="text-gray-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Technologies */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8">Technologies & Tools</h2>
                <div className="grid grid-cols-2 gap-4">
                  {service.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg text-center border hover:border-blue-200 transition-colors">
                      <span className="font-medium text-gray-900">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Implementation Process</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure successful delivery and maximum value realization.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  step: '01',
                  title: 'Requirements Analysis',
                  description: 'Deep dive into your business needs, technical requirements, and success criteria.'
                },
                {
                  step: '02',
                  title: 'Solution Design',
                  description: 'Architect the optimal AI solution tailored to your specific use case and constraints.'
                },
                {
                  step: '03',
                  title: 'Development & Testing',
                  description: 'Build, train, and rigorously test the AI models and systems for accuracy and performance.'
                },
                {
                  step: '04',
                  title: 'Deployment & Support',
                  description: 'Deploy to production with comprehensive monitoring and ongoing optimization support.'
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

        {/* Success Metrics */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Expected Outcomes</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Based on our previous implementations, here's what you can expect from this service.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  metric: '85%',
                  title: 'Average Efficiency Gain',
                  description: 'Typical improvement in operational efficiency after implementation'
                },
                {
                  metric: '6-12mo',
                  title: 'ROI Timeline',
                  description: 'Time to achieve return on investment for most clients'
                },
                {
                  metric: '95%+',
                  title: 'Accuracy Rate',
                  description: 'Average accuracy achieved by our AI models in production'
                }
              ].map((outcome, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 text-center">
                  <div className="text-4xl font-bold text-blue-900 mb-4">{outcome.metric}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{outcome.title}</h3>
                  <p className="text-gray-600">{outcome.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Services</h2>
              <p className="text-xl text-gray-600">
                Explore other AI services that complement this solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services
                .filter(s => s.id !== service.id)
                .slice(0, 3)
                .map((relatedService) => (
                  <div key={relatedService.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedService.title}</h3>
                    <p className="text-gray-600 mb-4">{relatedService.shortDescription}</p>
                    <Link 
                      to={`/services/${relatedService.id}`}
                      className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how {service.title.toLowerCase()} can transform your business. 
              Schedule a free consultation to explore your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                <Users className="mr-2 h-5 w-5" />
                Schedule Consultation
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

export default ServiceDetail;