import SEOHead from '../components/SEOHead.jsx';
import { Users, Award, Globe, TrendingUp, Target, Lightbulb, Shield, Zap } from 'lucide-react';

const About = () => {
  const team = [
    {
      name: 'Dr. Alex Chen',
      role: 'CEO & Co-Founder',
      bio: 'Former AI researcher at Stanford with 15+ years in machine learning and enterprise AI solutions.',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
      expertise: ['AI Strategy', 'Deep Learning', 'Computer Vision']
    },
    {
      name: 'Sarah Rodriguez',
      role: 'CTO & Co-Founder',
      bio: 'Ex-Google AI engineer specializing in large-scale ML systems and cloud architecture.',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg',
      expertise: ['MLOps', 'Cloud Architecture', 'System Design']
    },
    {
      name: 'Dr. Michael Johnson',
      role: 'Head of Research',
      bio: 'PhD in AI from MIT, published researcher in NLP and reinforcement learning.',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg',
      expertise: ['NLP', 'Research', 'Algorithm Development']
    },
    {
      name: 'Emily Wang',
      role: 'Head of Engineering',
      bio: 'Senior software architect with expertise in building scalable AI-powered applications.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg',
      expertise: ['Software Architecture', 'AI Integration', 'Team Leadership']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation-Driven',
      description: 'We push the boundaries of what\'s possible with AI, constantly exploring new technologies and methodologies.'
    },
    {
      icon: Shield,
      title: 'Ethical AI',
      description: 'We prioritize responsible AI development, ensuring fairness, transparency, and privacy in all our solutions.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Your success is our success. We work closely with clients to understand their unique challenges and goals.'
    },
    {
      icon: Lightbulb,
      title: 'Continuous Learning',
      description: 'We stay at the forefront of AI advancement through continuous research and professional development.'
    }
  ];

  const milestones = [
    { year: '2019', event: 'Founded NeuronTechAi with a vision to democratize AI' },
    { year: '2020', event: 'Delivered first major healthcare AI project, achieving 95% diagnostic accuracy' },
    { year: '2021', event: 'Expanded to serve 100+ enterprise clients across 15 countries' },
    { year: '2022', event: 'Launched AI Ethics Initiative and open-source contributions' },
    { year: '2023', event: 'Achieved $50M in client cost savings through AI automation' },
    { year: '2024', event: 'Recognized as "AI Company of the Year" by Tech Innovation Awards' }
  ];

  return (
    <>
      <SEOHead 
        title="About Us - Leading AI & ML Experts"
        description="Learn about NeuronTechAi's mission, leadership team, and commitment to transforming businesses through ethical and innovative AI solutions."
        keywords="about neurontech ai, ai company, machine learning experts, ai leadership team, ai mission"
        url="/about"
      />
      
      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pioneering the Future of 
                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"> Artificial Intelligence</span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                At NeuronTechAi, we're not just building AI solutions – we're crafting the intelligent 
                systems that will define the next generation of business innovation and human progress.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">500+</h3>
                <p className="text-blue-200">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">98%</h3>
                <p className="text-blue-200">Client Satisfaction</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">25+</h3>
                <p className="text-blue-200">Countries Served</p>
              </div>
              <div className="text-center">
                <div className="bg-white/10 backdrop-blur-sm w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-2">$50M+</h3>
                <p className="text-blue-200">Client Savings Generated</p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To democratize artificial intelligence by making cutting-edge AI technologies 
                  accessible, practical, and impactful for businesses of all sizes. We believe 
                  AI should augment human capability, not replace it.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Our mission extends beyond technology – we're committed to developing ethical, 
                  transparent, and responsible AI solutions that create positive impact for 
                  society while driving unprecedented business value.
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  To be the global leader in AI innovation, setting the standard for how 
                  artificial intelligence transforms industries and improves lives worldwide.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We envision a future where intelligent systems seamlessly integrate with 
                  human expertise, creating unprecedented opportunities for growth, efficiency, 
                  and innovation across every sector of the economy.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide every decision we make and every solution we develop.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    <value.icon className="h-6 w-6 text-blue-900" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionaries and experts driving AI innovation at NeuronTechAi.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-900 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">{member.bio}</p>
                    <div className="space-y-1">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="inline-block bg-blue-50 text-blue-900 text-xs px-2 py-1 rounded mr-2">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company History */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Journey</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From startup to industry leader – key milestones in our AI innovation journey.
              </p>
            </div>
            
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200"></div>
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                    <div className={`bg-white p-6 rounded-lg shadow-sm max-w-md ${index % 2 === 0 ? 'mr-8' : 'ml-8'}`}>
                      <div className="flex items-center mb-2">
                        <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-bold mr-3">
                          {milestone.year}
                        </span>
                      </div>
                      <p className="text-gray-700">{milestone.event}</p>
                    </div>
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-900 rounded-full border-4 border-white"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Technology Stack</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We leverage the most advanced AI frameworks and cloud platforms to deliver 
                robust, scalable solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
              {[
                'TensorFlow', 'PyTorch', 'Python', 'React', 'Node.js', 'Docker',
                'Kubernetes', 'AWS', 'Azure', 'Google Cloud', 'MongoDB', 'PostgreSQL'
              ].map((tech, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-lg font-semibold text-gray-800">{tech}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Join Our AI Revolution?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Whether you're looking to transform your business with AI or join our team of 
              innovators, we'd love to hear from you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Start Your AI Journey
                <Zap className="ml-2 h-5 w-5" />
              </a>
              <a 
                href="/careers" 
                className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-colors"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;