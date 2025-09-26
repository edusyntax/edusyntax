// src/components/CompanyLogoCard.tsx
import React from "react";



export interface CompanyLogo {
  name: string;
  src: string;
  alt?: string;
}

const CompanyLogoCard: React.FC<CompanyLogo> = ({ src, alt, name }) => (
  
  <div className="flex items-center justify-center flex-shrink-0 w-24 sm:w-32 md:w-36 h-10 sm:h-16 bg-secondary-beige rounded-md p-2">
    <img
      src={src}
      alt={alt || name}
      className="h-5 sm:h-8 md:h-10 object-contain w-auto"
    />
  </div>
);

export default CompanyLogoCard;
