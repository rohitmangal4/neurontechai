import { Link } from 'react-router-dom';
import { Brain, Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8" />
              <span className="text-xl font-bold">NeuronTechAi</span>
            </div>
            <p className="text-blue-100">
              Leading AI & Machine Learning solutions provider, transforming businesses 
              with cutting-edge artificial intelligence technology.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-blue-100 hover:text-white transition-colors">Services</Link></li>
              <li><Link to="/projects" className="text-blue-100 hover:text-white transition-colors">Projects</Link></li>
              <li><Link to="/careers" className="text-blue-100 hover:text-white transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><Link to="/services/ai-strategy" className="text-blue-100 hover:text-white transition-colors">AI Strategy</Link></li>
              <li><Link to="/services/custom-ai-development" className="text-blue-100 hover:text-white transition-colors">Custom AI Development</Link></li>
              <li><Link to="/services/machine-learning" className="text-blue-100 hover:text-white transition-colors">Machine Learning</Link></li>
              <li><Link to="/services/nlp-solutions" className="text-blue-100 hover:text-white transition-colors">NLP Solutions</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100">1725 Ocean Ave #315, Santa Monica, CA 90401</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100">+1 (310) 902-9806</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-100" />
                <span className="text-blue-100">info@neurontechai.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 NeuronTechAi. All rights reserved. | Privacy Policy | Terms of Service
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;