import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Clock, User } from 'lucide-react';

const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group border border-gray-100">
      <div className="relative">
        <img 
          src={post.image} 
          alt={post.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
            {post.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors line-clamp-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center gap-1">
            <User className="h-4 w-4" />
            <span>{post.author}</span>
          </div>
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{new Date(post.publishDate).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>{post.readTime}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {post.tags.slice(0, 2).map((tag, index) => (
              <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
                {tag}
              </span>
            ))}
          </div>
          
          <Link 
            to={`/blog/${post.id}`}
            className="inline-flex items-center text-blue-900 font-medium hover:text-blue-700 transition-colors group-hover:translate-x-1 transform duration-300"
          >
            Read More
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;