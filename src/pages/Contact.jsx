// import { useState } from 'react';
// import SEOHead from '../components/SEOHead.jsx';
// import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     subject: '',
//     message: ''
//   });
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setIsSubmitting(true);

//     try {
//       const response = await fetch('https://api.web3forms.com/submit', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with actual key
//           name: formData.name,
//           email: formData.email,
//           subject: formData.subject,
//           message: formData.message,
//         }),
//       });

//       if (response.ok) {
//         setIsSubmitted(true);
//         setFormData({ name: '', email: '', subject: '', message: '' });
//       }
//     } catch (error) {
//       console.error('Error submitting form:', error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <>
//       <SEOHead
//         title="Contact Us - Get Your Free AI Consultation"
//         description="Contact NeuronTechAi for expert AI and machine learning consulting. Get a free consultation to discuss your AI transformation needs. Located in San Francisco, serving clients globally."
//         keywords="contact neurontech ai, ai consultation, machine learning consulting, ai experts contact, free ai consultation"
//         url="/contact"
//       />

//       <div className="pt-16">
//         {/* Hero Section */}
//         <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center">
//               <h1 className="text-4xl md:text-5xl font-bold mb-6">
//                 Let's Start Your
//                 <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent"> AI Journey</span>
//               </h1>
//               <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
//                 Ready to transform your business with AI? Get in touch with our experts for a
//                 free consultation and discover how artificial intelligence can drive your success.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Contact Section */}
//         <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//               {/* Contact Form */}
//               <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
//                 <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>

//                 {isSubmitted ? (
//                   <div className="text-center py-8">
//                     <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
//                     <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
//                     <p className="text-gray-600">
//                       Thank you for reaching out. We'll get back to you within 24 hours.
//                     </p>
//                   </div>
//                 ) : (
//                   <form onSubmit={handleSubmit} className="space-y-6">
//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                       <div>
//                         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
//                           Full Name *
//                         </label>
//                         <input
//                           type="text"
//                           id="name"
//                           name="name"
//                           value={formData.name}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                           placeholder="Your full name"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
//                           Email Address *
//                         </label>
//                         <input
//                           type="email"
//                           id="email"
//                           name="email"
//                           value={formData.email}
//                           onChange={handleChange}
//                           required
//                           className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                           placeholder="your@company.com"
//                         />
//                       </div>
//                     </div>

//                     <div>
//                       <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
//                         Subject *
//                       </label>
//                       <select
//                         id="subject"
//                         name="subject"
//                         value={formData.subject}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
//                       >
//                         <option value="">Select a subject</option>
//                         <option value="AI Strategy Consultation">AI Strategy Consultation</option>
//                         <option value="Custom AI Development">Custom AI Development</option>
//                         <option value="Machine Learning Project">Machine Learning Project</option>
//                         <option value="NLP Solutions">NLP Solutions</option>
//                         <option value="Computer Vision">Computer Vision</option>
//                         <option value="AI Integration">AI Integration</option>
//                         <option value="General Inquiry">General Inquiry</option>
//                         <option value="Partnership">Partnership Opportunity</option>
//                       </select>
//                     </div>

//                     <div>
//                       <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
//                         Message *
//                       </label>
//                       <textarea
//                         id="message"
//                         name="message"
//                         rows={6}
//                         value={formData.message}
//                         onChange={handleChange}
//                         required
//                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
//                         placeholder="Tell us about your project, goals, and how we can help..."
//                       ></textarea>
//                     </div>

//                     <button
//                       type="submit"
//                       disabled={isSubmitting}
//                       className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
//                     >
//                       {isSubmitting ? (
//                         <>
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                           Sending...
//                         </>
//                       ) : (
//                         <>
//                           Send Message
//                           <Send className="ml-2 h-5 w-5" />
//                         </>
//                       )}
//                     </button>
//                   </form>
//                 )}
//               </div>

//               {/* Contact Information */}
//               <div className="space-y-8">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
//                   <p className="text-lg text-gray-600 leading-relaxed mb-8">
//                     Ready to explore how AI can transform your business? Our team of experts
//                     is here to help. Reach out to us through any of the channels below.
//                   </p>
//                 </div>

//                 <div className="space-y-6">
//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                       <MapPin className="h-6 w-6 text-blue-900" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1">Office Address</h3>
//                       <p className="text-gray-600">
//                         123 AI Valley, Tech District<br />
//                         San Francisco, CA 94105<br />
//                         United States
//                       </p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                       <Phone className="h-6 w-6 text-blue-900" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
//                       <p className="text-gray-600">+1 (555) 123-4567</p>
//                       <p className="text-sm text-gray-500">Mon-Fri 9AM-6PM PST</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                       <Mail className="h-6 w-6 text-blue-900" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
//                       <p className="text-gray-600">info@neurontechai.com</p>
//                       <p className="text-sm text-gray-500">We respond within 24 hours</p>
//                     </div>
//                   </div>

//                   <div className="flex items-start">
//                     <div className="bg-blue-100 p-3 rounded-lg mr-4">
//                       <Clock className="h-6 w-6 text-blue-900" />
//                     </div>
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
//                       <div className="text-gray-600 space-y-1">
//                         <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
//                         <p>Saturday: 10:00 AM - 2:00 PM PST</p>
//                         <p>Sunday: Closed</p>
//                       </div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Social Links */}
//                 <div className="pt-8 border-t border-gray-200">
//                   <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
//                   <div className="flex space-x-4">
//                     <a href="#" className="bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors">
//                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
//                       </svg>
//                     </a>
//                     <a href="#" className="bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors">
//                       <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
//                         <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
//                       </svg>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </section>

//         {/* Map Section */}
//         <section className="py-16 bg-gray-50">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Visit Our Office</h2>
//               <p className="text-xl text-gray-600">
//                 Located in the heart of San Francisco's tech district
//               </p>
//             </div>

//             <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
//               <iframe
//                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0197327113716!2d-122.39492668468208!3d37.78808797975647!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807cc8234b1b%3A0x8c8b8b8b8b8b8b8b!2sSan%20Francisco%2C%20CA%2094105%2C%20USA!5e0!3m2!1sen!2sus!4v1635959999999!5m2!1sen!2sus"
//                 width="100%"
//                 height="400"
//                 style={{ border: 0 }}
//                 allowFullScreen=""
//                 loading="lazy"
//                 referrerPolicy="no-referrer-when-downgrade"
//                 title="NeuronTechAi Office Location"
//               ></iframe>
//             </div>
//           </div>
//         </section>

//         {/* FAQ Section */}
//         <section className="py-16">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="text-center mb-12">
//               <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
//               <p className="text-xl text-gray-600">
//                 Quick answers to common questions about our AI services
//               </p>
//             </div>

//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {[
//                 {
//                   question: "How long does a typical AI project take?",
//                   answer: "Project timelines vary based on complexity, but most projects range from 4-16 weeks. We provide detailed timelines during our initial consultation."
//                 },
//                 {
//                   question: "Do you work with small businesses?",
//                   answer: "Yes! We work with organizations of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to your budget and needs."
//                 },
//                 {
//                   question: "What industries do you serve?",
//                   answer: "We serve multiple industries including healthcare, finance, retail, manufacturing, logistics, and more. Our AI expertise adapts to various sector-specific challenges."
//                 },
//                 {
//                   question: "Do you provide ongoing support?",
//                   answer: "Absolutely. We offer comprehensive support packages including monitoring, optimization, updates, and technical assistance to ensure your AI systems perform optimally."
//                 }
//               ].map((faq, index) => (
//                 <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                   <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
//                   <p className="text-gray-600">{faq.answer}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </section>
//       </div>
//     </>
//   );
// };

// export default Contact;

import { useState } from "react";
import SEOHead from "../components/SEOHead.jsx";
import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formPayload = {
      access_key: "382c2154-8588-4d96-8f23-2ec3be9fd29e", // 🔑 Replace with your real key
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formPayload),
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Please check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us - Get Your Free AI Consultation"
        description="Contact NeuronTechAi for expert AI and machine learning consulting. Get a free consultation to discuss your AI transformation needs. Located in San Francisco, serving clients globally."
        keywords="contact neurontech ai, ai consultation, machine learning consulting, ai experts contact, free ai consultation"
        url="/contact"
      />

      <div className="pt-16">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-blue-900 to-blue-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Let's Start Your
                <span className="bg-gradient-to-r from-blue-300 to-white bg-clip-text text-transparent">
                  {" "}
                  AI Journey
                </span>
              </h1>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Ready to transform your business with AI? Get in touch with our
                experts for a free consultation and discover how artificial
                intelligence can drive your success.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  Send us a Message
                </h2>

                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      Message Sent Successfully!
                    </h3>
                    <p className="text-gray-600">
                      Thank you for reaching out. We'll get back to you within
                      24 hours.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <input
                          type="hidden"
                          name="from_name"
                          value="Contact us"
                        />
                        <input
                          type="hidden"
                          name="subject"
                          value="Mail for Contact as our team"
                        />

                        <label
                          htmlFor="name"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700 mb-2"
                        >
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
                          placeholder="your@company.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      >
                        <option value="">Select a subject</option>
                        <option value="AI Strategy Consultation">
                          AI Strategy Consultation
                        </option>
                        <option value="Custom AI Development">
                          Custom AI Development
                        </option>
                        <option value="Machine Learning Project">
                          Machine Learning Project
                        </option>
                        <option value="NLP Solutions">NLP Solutions</option>
                        <option value="Computer Vision">Computer Vision</option>
                        <option value="AI Integration">AI Integration</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Partnership">
                          Partnership Opportunity
                        </option>
                      </select>
                    </div>

                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-gray-700 mb-2"
                      >
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and how we can help..."
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-900 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-5 w-5" />
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>

              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Get in Touch
                  </h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-8">
                    Ready to explore how AI can transform your business? Our
                    team of experts is here to help. Reach out to us through any
                    of the channels below.
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <MapPin className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Office Address
                      </h3>
                      <p className="text-gray-600">
                        1725 Ocean Ave #315
                        <br />
                        Santa Monica, CA 90401
                        <br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Phone className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Phone
                      </h3>
                      <p className="text-gray-600">+1 (310) 902-9806</p>
                      <p className="text-sm text-gray-500">
                        Mon-Fri 9AM-6PM PST
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Mail className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Email
                      </h3>
                      <p className="text-gray-600">info@neurontechai.com</p>
                      <p className="text-sm text-gray-500">
                        We respond within 24 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-blue-900" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Business Hours
                      </h3>
                      <div className="text-gray-600 space-y-1">
                        <p>Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                        <p>Saturday: 10:00 AM - 2:00 PM PST</p>
                        <p>Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div className="pt-8 border-t border-gray-200">
                  <h3 className="font-semibold text-gray-900 mb-4">
                    Follow Us
                  </h3>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="bg-blue-900 text-white p-3 rounded-lg hover:bg-blue-800 transition-colors"
                    >
                      <svg
                        className="h-5 w-5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Visit Our Office
              </h2>
              <p className="text-xl text-gray-600">
                Located in the heart of Santa Monica's business district
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3301.045148137585!2d-118.49749912452646!3d34.01114761935378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d65feaa1b3%3A0xf6b91ff4087f03cb!2s1725%20Ocean%20Ave%20%23315%2C%20Santa%20Monica%2C%20CA%2090401%2C%20USA!5e0!3m2!1sen!2sin!4v1719769243874!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="NeuronTechAi Office Location - Santa Monica"
              ></iframe>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Quick answers to common questions about our AI services
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "How long does a typical AI project take?",
                  answer:
                    "Project timelines vary based on complexity, but most projects range from 4-16 weeks. We provide detailed timelines during our initial consultation.",
                },
                {
                  question: "Do you work with small businesses?",
                  answer:
                    "Yes! We work with organizations of all sizes, from startups to Fortune 500 companies. Our solutions are scalable and tailored to your budget and needs.",
                },
                {
                  question: "What industries do you serve?",
                  answer:
                    "We serve multiple industries including healthcare, finance, retail, manufacturing, logistics, and more. Our AI expertise adapts to various sector-specific challenges.",
                },
                {
                  question: "Do you provide ongoing support?",
                  answer:
                    "Absolutely. We offer comprehensive support packages including monitoring, optimization, updates, and technical assistance to ensure your AI systems perform optimally.",
                },
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-sm border border-gray-100"
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
