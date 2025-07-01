import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Building } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {project.shortDescription}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <Building className="h-4 w-4" />
            <span>{project.client}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{project.year}</span>
          </div>
        </div>
        
        {/* Key Results Preview */}
        <div className="space-y-2 mb-4">
          {project.results.slice(0, 2).map((result, index) => (
            <div key={index} className="flex items-center text-sm">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-gray-700">{result}</span>
            </div>
          ))}
        </div>
        
        <Link 
          to={`/projects/${project.id}`}
          className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-300"
        >
          Read Case Study
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
        
        {/* Tech Stack */}
        <div className="mt-4 pt-4 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {tech}
              </span>
            ))}
            {project.technologies.length > 3 && (
              <span className="text-xs text-gray-500">+{project.technologies.length - 3} more</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;