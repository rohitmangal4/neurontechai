import { useParams, Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead.jsx';
import { blogPosts } from '../data/blog.js';
import { ArrowLeft, Calendar, Clock, User, Tag } from 'lucide-react';

const BlogPost = () => {
  const { postId } = useParams();
  const post = blogPosts.find(p => p.id === postId);

  if (!post) {
    return (
      <>
        <SEOHead 
          title="Post Not Found"
          description="The blog post you're looking for could not be found."
          url={`/blog/${postId}`}
        />
        <div className="pt-16 min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">The blog post you're looking for doesn't exist.</p>
            <Link 
              to="/blog" 
              className="inline-flex items-center text-blue-900 hover:text-blue-700 font-medium"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </>
    );
  }

  return (
    <>
      <SEOHead 
        title={post.title}
        description={post.excerpt}
        keywords={post.tags.join(', ')}
        url={`/blog/${post.id}`}
        type="article"
      />
      
      <div className="pt-16">
        {/* Breadcrumb */}
        <section className="py-4 bg-gray-50 border-b">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <nav className="flex items-center space-x-2 text-sm">
              <Link to="/" className="text-gray-500 hover:text-gray-700">Home</Link>
              <span className="text-gray-400">/</span>
              <Link to="/blog" className="text-gray-500 hover:text-gray-700">Blog</Link>
              <span className="text-gray-400">/</span>
              <span className="text-gray-900 truncate">{post.title}</span>
            </nav>
          </div>
        </section>

        {/* Article Header */}
        <article className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <header className="mb-12">
              <Link 
                to="/blog"
                className="inline-flex items-center text-blue-900 hover:text-blue-700 mb-6 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blog
              </Link>
              
              <div className="mb-6">
                <span className="bg-blue-900 text-white px-3 py-1 rounded-full text-sm font-medium">
                  {post.category}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                {post.excerpt}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{new Date(post.publishDate).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{post.readTime}</span>
                </div>
              </div>
              
              <img 
                src={post.image} 
                alt={post.title}
                className="w-full h-64 md:h-96 object-cover rounded-xl shadow-lg"
              />
            </header>

            {/* Article Content */}
            <div className="prose prose-lg max-w-none">
              <div 
                className="text-gray-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: post.content.replace(/\n/g, '<br />') }}
              />
            </div>

            {/* Tags */}
            <footer className="mt-12 pt-8 border-t border-gray-200">
              <div className="flex items-center gap-2 mb-6">
                <Tag className="h-5 w-5 text-gray-400" />
                <span className="text-sm font-medium text-gray-700">Tags:</span>
              </div>
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag, index) => (
                  <span 
                    key={index} 
                    className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </footer>
          </div>
        </article>

        {/* Related Posts */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts
                .filter(p => p.id !== post.id && p.category === post.category)
                .slice(0, 3)
                .map((relatedPost) => (
                  <article key={relatedPost.id} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <img 
                      src={relatedPost.image} 
                      alt={relatedPost.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <div className="mb-3">
                        <span className="bg-blue-100 text-blue-900 px-2 py-1 rounded text-xs font-medium">
                          {relatedPost.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-900 transition-colors">
                        <Link to={`/blog/${relatedPost.id}`}>
                          {relatedPost.title}
                        </Link>
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span>{relatedPost.author}</span>
                        <span>{relatedPost.readTime}</span>
                      </div>
                    </div>
                  </article>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gradient-to-r from-blue-900 to-blue-800 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Business with AI?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our AI expertise can drive innovation and growth for your organization.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-white text-blue-900 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
            >
              Get Free Consultation
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogPost;