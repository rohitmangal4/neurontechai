import { Star } from 'lucide-react';

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
      <div className="flex items-center mb-4">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
        ))}
      </div>
      
      <blockquote className="text-lg text-white mb-6 leading-relaxed">
        "{testimonial.content}"
      </blockquote>
      
      <div className="flex items-center">
        <img 
          src={testimonial.image} 
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <div className="font-semibold text-white">{testimonial.name}</div>
          <div className="text-blue-200 text-sm">{testimonial.title}</div>
          <div className="text-blue-300 text-sm">{testimonial.company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;