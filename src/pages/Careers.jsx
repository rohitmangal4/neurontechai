import { useState } from 'react';
import SEOHead from '../components/SEOHead.jsx';
import { MapPin, Clock, DollarSign, Users, Send, CheckCircle, Upload } from 'lucide-react';

const Careers = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    resume: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const jobs = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$150,000 - $200,000',
      description: 'Join our engineering team to develop cutting-edge AI solutions for enterprise clients. You\'ll work on machine learning models, deep learning architectures, and scalable AI systems.',
      requirements: [
        'MS/PhD in Computer Science, AI, or related field',
        '5+ years of experience in machine learning and AI',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      responsibilities: [
        'Design and implement machine learning models',
        'Collaborate with cross-functional teams on AI projects',
        'Optimize model performance and scalability',
        'Mentor junior engineers and contribute to best practices',
        'Stay current with latest AI research and technologies'
      ]
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$160,000 - $220,000',
      description: 'Lead research initiatives in artificial intelligence and machine learning. Publish papers, develop novel algorithms, and translate research into practical applications.',
      requirements: [
        'PhD in AI, Machine Learning, or related field',
        '3+ years of research experience in AI/ML',
        'Strong publication record in top-tier conferences',
        'Expertise in deep learning, NLP, or computer vision',
        'Experience with research tools and methodologies'
      ],
      responsibilities: [
        'Conduct cutting-edge AI research',
        'Publish research findings in academic conferences',
        'Collaborate with academic institutions and industry partners',
        'Develop prototypes and proof-of-concepts',
        'Present research to internal and external stakeholders'
      ]
    },
    {
      id: 3,
      title: 'Machine Learning Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$130,000 - $170,000',
      description: 'Build and deploy machine learning systems at scale. Work on data pipelines, model training, and production deployment of AI solutions.',
      requirements: [
        'BS/MS in Computer Science or related field',
        '3+ years of ML engineering experience',
        'Strong programming skills in Python and SQL',
        'Experience with MLOps tools and practices',
        'Knowledge of containerization and orchestration'
      ],
      responsibilities: [
        'Build and maintain ML pipelines',
        'Deploy models to production environments',
        'Monitor and optimize model performance',
        'Collaborate with data scientists and engineers',
        'Implement MLOps best practices'
      ]
    },
    {
      id: 4,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$140,000 - $180,000',
      description: 'Drive product strategy for AI solutions. Work with engineering, design, and business teams to deliver innovative AI products that solve real customer problems.',
      requirements: [
        'BS/MS in Business, Engineering, or related field',
        '4+ years of product management experience',
        'Understanding of AI/ML technologies and applications',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      responsibilities: [
        'Define product roadmap and strategy for AI solutions',
        'Gather and prioritize customer requirements',
        'Work with engineering teams on product development',
        'Analyze market trends and competitive landscape',
        'Collaborate with sales and marketing teams'
      ]
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$120,000 - $160,000',
      description: 'Analyze complex datasets to extract insights and build predictive models. Work on diverse projects across multiple industries and domains.',
      requirements: [
        'MS in Data Science, Statistics, or related field',
        '3+ years of data science experience',
        'Proficiency in Python, R, and SQL',
        'Experience with statistical analysis and modeling',
        'Strong business acumen and communication skills'
      ],
      responsibilities: [
        'Analyze large datasets to identify patterns and insights',
        'Build predictive models and statistical analyses',
        'Create data visualizations and reports',
        'Collaborate with business stakeholders',
        'Present findings to technical and non-technical audiences'
      ]
    },
    {
      id: 6,
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'San Francisco, CA',
      type: 'Full-time',
      salary: '$160,000 - $200,000',
      description: 'Design end-to-end AI solutions for enterprise clients. Lead technical discussions, create architecture blueprints, and ensure successful implementation.',
      requirements: [
        'MS in Computer Science or related field',
        '6+ years of solution architecture experience',
        'Deep understanding of AI/ML technologies',
        'Experience with enterprise software and cloud platforms',
        'Strong client-facing and presentation skills'
      ],
      responsibilities: [
        'Design comprehensive AI solution architectures',
        'Lead technical discussions with clients',
        'Create detailed implementation plans',
        'Collaborate with engineering and consulting teams',
        'Ensure solutions meet scalability and security requirements'
      ]
    }
  ];

  const handleJobSelect = (job) => {
    setSelectedJob(job);
    setFormData({ ...formData, message: `I am interested in the ${job.title} position.` });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with actual key
          subject: `Job Application: ${selectedJob?.title || 'General Application'}`,
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          resume: formData.resume,
          message: formData.message,
          position: selectedJob?.title || 'General Application'
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setFormData({ fullName: '', email: '', phone: '', resume: '', message: '' });
      }
    } catch (error) {
      console.error('Error submitting application:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead 
        title="Careers - Join Our AI Innovation Team"
        description="Join NeuronTechAi and help shape the future of artificial intelligence. Explore exciting career opportunities in AI engineering, research, data science, and more."
        keywords="ai careers, machine learning jobs, ai engineer jobs, data scientist careers, ai research positions"
        url="/careers"
      />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Shape the Future of 
                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"> Artificial Intelligence</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Join our team of world-class AI experts and work on cutting-edge projects that 
                transform industries and improve lives. Build your career at the forefront of AI innovation.
              </p>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose NeuronTechAi?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer more than just a job – we provide a platform for growth, innovation, and impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: '🚀',
                  title: 'Cutting-Edge Projects',
                  description: 'Work on the latest AI technologies and solve complex real-world problems'
                },
                {
                  icon: '🎓',
                  title: 'Continuous Learning',
                  description: 'Access to conferences, courses, and research opportunities to grow your skills'
                },
                {
                  icon: '💰',
                  title: 'Competitive Benefits',
                  description: 'Excellent compensation, equity, health benefits, and flexible work arrangements'
                },
                {
                  icon: '🌟',
                  title: 'Impact & Recognition',
                  description: 'Make a meaningful impact and get recognized for your contributions'
                }
              ].map((benefit, index) => (
                <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Open Positions</h2>
              <p className="text-xl text-gray-600">
                Explore exciting opportunities to join our growing team
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobs.map((job) => (
                <div key={job.id} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <span className="bg-blue-100 text-blue-900 px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-4 leading-relaxed">{job.description}</p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 text-sm">
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center text-gray-500">
                      <DollarSign className="h-4 w-4 mr-2" />
                      <span>{job.salary}</span>
                    </div>
                  </div>
                  
                  <button
                    onClick={() => handleJobSelect(job)}
                    className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                  >
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        {selectedJob && (
          <section className="py-16">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    Apply for {selectedJob.title}
                  </h2>
                  <p className="text-gray-600">
                    Fill out the form below to submit your application
                  </p>
                </div>

                {/* Job Details */}
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Position Details</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                      <ul className="space-y-1">
                        {selectedJob.requirements.map((req, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-blue-900 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium text-gray-900 mb-2">Responsibilities</h4>
                      <ul className="space-y-1">
                        {selectedJob.responsibilities.map((resp, index) => (
                          <li key={index} className="text-sm text-gray-600 flex items-start">
                            <span className="w-2 h-2 bg-blue-900 rounded-full mr-2 mt-2 flex-shrink-0"></span>
                            {resp}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Application Submitted!</h3>
                    <p className="text-gray-600">
                      Thank you for your interest in the {selectedJob.title} position. 
                      We'll review your application and get back to you soon.
                    </p>
                    <button
                      onClick={() => {
                        setSelectedJob(null);
                        setIsSubmitted(false);
                      }}
                      className="mt-4 px-6 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      Apply for Another Position
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="fullName"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium text-gray-700 mb-2">
                        Resume/CV Link *
                      </label>
                      <div className="relative">
                        <Upload className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                        <input
                          type="url"
                          id="resume"
                          name="resume"
                          value={formData.resume}
                          onChange={handleChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="https://drive.google.com/... or LinkedIn profile"
                        />
                      </div>
                      <p className="text-sm text-gray-500 mt-1">
                        Please provide a link to your resume, portfolio, or LinkedIn profile
                      </p>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        Cover Letter / Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                      ></textarea>
                    </div>
                    
                    <div className="flex gap-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex-1 bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                            Submitting...
                          </>
                        ) : (
                          <>
                            Submit Application
                            <Send className="ml-2 h-5 w-5" />
                          </>
                        )}
                      </button>
                      <button
                        type="button"
                        onClick={() => setSelectedJob(null)}
                        className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Company Culture */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Culture & Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe in creating an environment where innovation thrives and everyone can do their best work.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Innovation First',
                  description: 'We encourage experimentation, creative thinking, and pushing the boundaries of what\'s possible with AI.',
                  image: 'https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg'
                },
                {
                  title: 'Collaborative Environment',
                  description: 'Work with brilliant minds from diverse backgrounds in a supportive, inclusive environment.',
                  image: 'https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg'
                },
                {
                  title: 'Work-Life Balance',
                  description: 'Flexible schedules, remote work options, and comprehensive benefits to support your well-being.',
                  image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg'
                }
              ].map((culture, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden">
                  <img 
                    src={culture.image} 
                    alt={culture.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{culture.title}</h3>
                    <p className="text-gray-600">{culture.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Careers;