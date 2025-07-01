import { Helmet } from 'react-helmet-async';

const SEOHead = ({ 
  title, 
  description, 
  keywords = '', 
  image = '/og-image.jpg',
  url = '/',
  type = 'website'
}) => {
  const fullTitle = title ? `${title} | NeuronTechAi` : 'NeuronTechAi - AI & Machine Learning Solutions';
  const fullUrl = `https://neurontechai.com${url}`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:image" content={image} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={fullUrl} />
    </Helmet>
  );
};

export default SEOHead;