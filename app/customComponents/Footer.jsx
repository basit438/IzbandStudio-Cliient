import React from 'react';

const Footer = () => {
  const services = [
    {
      title: "User Experience design",
      items: [
        "Mobile App Design",
        "Web Design", 
        "Product Design",
        "UX Research",
        "CRO Audit"
      ]
    },
    {
      title: "Digital Product Development",
      items: [
        "Webflow development",
        "MVP development",
        "Development team service",
        "Web3",
        "Mobile app development",
        "SaaS development",
        "SPA development",
        "AI Development",
        "Website development",
        "eCommerce development"
      ]
    },
    {
      title: "Branding & Strategy",
      items: [
        "Rebranding",
        "Brand identity & positioning",
        "Brand messaging",
        "Visual language",
        "Brand strategy"
      ]
    },
    {
      title: "Graphic Design & Animation",
      items: [
        "Marketing materials",
        "Illustrations",
        "Video explainers",
        "Video production"
      ]
    },
    {
      title: "Digital Marketing",
      items: [
        "Marketing strategy",
        "SEO",
        "Content marketing",
        "PPC",
        "Social Media Marketing",
        "Pitch deck"
      ]
    },
    {
      title: "Shopify eCommerce",
      items: [
        "eCommerce apps development",
        "Payments and checkout",
        "SEO and data migration",
        "Systems integration",
        "Conversion rate optimization",
        "eCommerce migration",
        "Shopify headless development",
        "Online-to-offline strategy"
      ]
    }
  ];



  const partners = [
    { name: "Webflow", subtitle: "Certified Partner" },
    { name: "Google Partner", subtitle: "" },
    { name: "shopify experts", subtitle: "" },
    { name: "sortlist", subtitle: "" },
    { name: "Digital Agency Network", subtitle: "" }
  ];

  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-light">Our areas of expertise</h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-8 mb-16">
          {services.map((service, index) => (
            <div key={index} className="space-y-4">
              <h3 className="text-sm font-medium text-gray-300 flex items-center">
                {service.title}
                <span className="ml-2 text-gray-600">↗</span>
              </h3>
              <ul className="space-y-2">
                {service.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex justify-between items-end">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-white rounded mr-3 flex items-center justify-center">
              <div className="w-4 h-4 bg-black rounded-sm"></div>
            </div>
            <span className="text-2xl font-light">
              Fourmeta<sup className="text-xs">®</sup>
            </span>
          </div>

          {/* Partners */}
          <div className="flex gap-6 items-center">
            {partners.map((partner, index) => (
              <div key={index} className="bg-gray-900 px-4 py-2 rounded border border-gray-800 hover:border-gray-700 transition-colors">
                <div className="text-xs text-gray-300">{partner.name}</div>
                {partner.subtitle && (
                  <div className="text-xs text-gray-500">{partner.subtitle}</div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <div className="text-xs text-gray-500">
            © 2025, Fourmeta ltd. UK, London. All rights reserved.<br />
            Registered in England & Wales No.: 13044361
          </div>
          <div className="flex gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Terms and Conditions</a>
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;