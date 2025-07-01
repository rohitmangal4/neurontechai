import { Link } from 'react-router-dom';
import { ArrowRight, Target, Code, Brain, MessageSquare, Eye, Zap } from 'lucide-react';

const iconMap = {
  Target,
  Code,
  Brain,
  MessageSquare,
  Eye,
  Zap
};

const ServiceCard = ({ service }) => {
  const IconComponent = iconMap[service.icon] || Target;
  
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 group">
      <div className="flex items-center justify-between mb-4">
        <div className="bg-blue-100 p-3 rounded-lg group-hover:bg-blue-900 group-hover:text-white transition-colors duration-300">
          <IconComponent className="h-6 w-6 text-blue-900 group-hover:text-white" />
        </div>
        <span className="text-sm font-medium text-blue-900 bg-blue-50 px-3 py-1 rounded-full">
          {service.duration}
        </span>
      </div>
      
      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
        {service.title}
      </h3>
      
      <p className="text-gray-600 mb-4 leading-relaxed">
        {service.shortDescription}
      </p>
      
      <div className="flex items-center justify-between">
        <span className="text-lg font-semibold text-blue-900">
          {service.price}
        </span>
        <Link 
          to={`/services/${service.id}`}
          className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-300"
        >
          Learn More
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
      
      {/* Tech Stack Preview */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          {service.technologies.slice(0, 3).map((tech, index) => (
            <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {tech}
            </span>
          ))}
          {service.technologies.length > 3 && (
            <span className="text-xs text-gray-500">+{service.technologies.length - 3} more</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;