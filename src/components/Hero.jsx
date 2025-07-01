import { Link } from 'react-router-dom';
import { ArrowRight, Play } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 text-white py-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent transform -skew-y-12"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transform Your Business with 
                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"> AI Intelligence</span>
              </h1>
              <p className="text-xl text-blue-100 leading-relaxed">
                Unlock the power of artificial intelligence and machine learning to drive innovation, 
                optimize operations, and accelerate growth. Partner with NeuronTechAi for 
                cutting-edge AI solutions tailored to your business needs.
              </p>
            </div>
            
            {/* Key Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Custom AI Development</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>Enterprise Integration</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-300 rounded-full"></div>
                <span>24/7 Support</span>
              </div>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                to="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Start Your AI Journey
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                to="/projects" 
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-blue-900 transition-all duration-200"
              >
                <Play className="mr-2 h-5 w-5" />
                View Case Studies
              </Link>
            </div>
            
            {/* Trust Indicators */}
            <div className="pt-8 border-t border-blue-700">
              <p className="text-sm text-blue-200 mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap items-center gap-8 opacity-70">
                <div className="text-lg font-semibold">HealthTech Solutions</div>
                <div className="text-lg font-semibold">SecureBank Corp</div>
                <div className="text-lg font-semibold">ShopSmart Inc</div>
                <div className="text-lg font-semibold">TechManufacturing</div>
              </div>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg" 
                alt="AI Technology Visualization" 
                className="rounded-2xl shadow-2xl"
              />
              {/* Floating Stats */}
              <div className="absolute -top-4 -left-4 bg-white text-blue-900 p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-sm">Projects Delivered</div>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-white text-blue-900 p-4 rounded-lg shadow-lg">
                <div className="text-2xl font-bold">98%</div>
                <div className="text-sm">Client Satisfaction</div>
              </div>
            </div>
            
            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl transform rotate-6 scale-105 opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;