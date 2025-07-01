import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import { projects } from '../data/projects.js';
import { ArrowLeft, Calendar, Building, Users, CheckCircle, ArrowRight } from 'lucide-react';

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projects.find(p => p.id === projectId);

  if (!project) {
    return (
      <div className="pt-16 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Project Not Found</h1>
          <Link to="/projects" className="text-blue-900 hover:text-blue-700">
            ← Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <SEOHead 
        title={project.title}
        description={project.shortDescription}
        keywords={`${project.title.toLowerCase()}, ${project.technologies.join(', ').toLowerCase()}, ${project.category.toLowerCase()}`}
        url={`/projects/${project.id}`}
      />
      
      <div className="pt-16">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/projects" className="text-gray-500 hover:text-gray-700">Projects</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900">{project.title}</span>
            </nav>
          </div>
        </section>

        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Link 
                  to="/projects"
                  className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors"
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Projects
                </Link>
                
                <div className="mb-4">
                  <span className="bg-blue-700 text-white px-3 py-1 rounded-full text-sm font-medium">
                    {project.category}
                  </span>
                </div>
                
                <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                <p className="text-xl text-blue-100 leading-relaxed mb-8">
                  {project.shortDescription}
                </p>
                
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Building className="h-5 w-5 mr-2" />
                    <span>{project.client}</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Calendar className="h-5 w-5 mr-2" />
                    <span>{project.year}</span>
                  </div>
                  <div className="flex items-center bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                    <Users className="h-5 w-5 mr-2" />
                    <span>{project.duration}</span>
                  </div>
                </div>
                
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
                >
                  Start Similar Project
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
              
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Challenge */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed">{project.challenge}</p>
              </div>
              
              {/* Solution */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Solution</h2>
                <p className="text-gray-700 leading-relaxed">{project.solution}</p>
              </div>
              
              {/* Technologies */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Technologies Used</h2>
                <div className="grid grid-cols-2 gap-3">
                  {project.technologies.map((tech, index) => (
                    <div key={index} className="bg-gray-50 p-3 rounded-lg text-center border hover:border-blue-200 transition-colors">
                      <span className="font-medium text-gray-900 text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Results</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Measurable outcomes and business impact achieved through our AI solution.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {project.results.map((result, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start">
                  <div className="bg-green-100 rounded-full p-2 mr-4 mt-1">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-gray-900">{result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Timeline */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Project Timeline</h2>
              <p className="text-xl text-gray-600">
                How we delivered this project from concept to completion
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  phase: 'Discovery',
                  duration: '2 weeks',
                  description: 'Requirements gathering, data analysis, and solution architecture design.'
                },
                {
                  phase: 'Development',
                  duration: '8 weeks',
                  description: 'Model development, training, testing, and iterative improvements.'
                },
                {
                  phase: 'Integration',
                  duration: '4 weeks',
                  description: 'System integration, API development, and user interface creation.'
                },
                {
                  phase: 'Deployment',
                  duration: '2 weeks',
                  description: 'Production deployment, monitoring setup, and team training.'
                }
              ].map((phase, index) => (
                <div key={index} className="text-center">
                  <div className="bg-blue-900 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-lg font-bold">
                    {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{phase.phase}</h3>
                  <p className="text-blue-900 font-medium mb-3">{phase.duration}</p>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Testimonial */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl font-light leading-relaxed mb-8">
              "The AI solution delivered by NeuronTechAi has transformed our operations. 
              The results exceeded our expectations and the team's expertise was evident 
              throughout the entire project."
            </blockquote>
            <div className="flex items-center justify-center">
              <div className="text-center">
                <div className="font-semibold text-lg">Project Stakeholder</div>
                <div className="text-blue-200">{project.client}</div>
              </div>
            </div>
          </div>
        </section>

        {/* Related Projects */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Related Projects</h2>
              <p className="text-xl text-gray-600">
                Explore other successful AI implementations in similar domains.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {projects
                .filter(p => p.id !== project.id && p.category === project.category)
                .slice(0, 3)
                .map((relatedProject) => (
                  <div key={relatedProject.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden border border-gray-100">
                    <img 
                      src={relatedProject.image} 
                      alt={relatedProject.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                          {relatedProject.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{relatedProject.title}</h3>
                      <p className="text-gray-600 mb-4">{relatedProject.shortDescription}</p>
                      <Link 
                        to={`/projects/${relatedProject.id}`}
                        className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors"
                      >
                        View Case Study
                        <ArrowRight className="ml-1 h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your AI Project?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how we can help you achieve similar results with a custom AI solution 
              tailored to your specific business needs.
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
                to="/services" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                View Our Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ProjectDetail;