import React from "react";
import { Testimonial } from "../../data/testimonials";
import { Quote } from "lucide-react";

const TestimonialCard: React.FC<Testimonial> = ({ title, role, avatar, text }) => (
  <div
    className="
      relative bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200 shadow-md 
      hover:shadow-xl transition-all duration-300
      w-full max-w-xs sm:max-w-sm md:max-w-md p-5 sm:p-6 flex-shrink-0
      flex flex-col justify-start
    "
  >
    {/* Quote Icon */}
    <Quote className="absolute top-4 right-4 text-pink-500 w-8 h-8 opacity-80" />

    <div className="flex flex-col sm:flex-row gap-4">
      {/* Avatar + Salary */}
      <div className="flex-shrink-0 flex flex-col items-center sm:items-start sm:flex-none sm:w-auto">
        <div className="w-20 h-20 sm:w-28 sm:h-36 rounded-full sm:rounded-lg overflow-hidden shadow-md  sm:mb-0">
          <img src={avatar} alt={title} className="w-full h-full object-cover  " />
        </div>
        {/* <p className="text-orange-500 font-bold text-sm sm:text-base">4 LPA</p> */}
      </div>

      {/* Name, Role, Text */}
      <div className="flex flex-col flex-grow overflow-visible mt-1 sm:mt-0">
        {/* Name & Role next to avatar on small screens */}
        <div className="sm:mb-2 text-center sm:text-start sm:flex-none">
          <p className="font-bold text-gray-900 text-lg sm:text-xl">{title}</p>
          <p className="text-sm sm:text-base text-gray-500">{role}</p>
        </div>

        {/* Testimonial text below avatar + name/role on small screens */}
        <p className="text-sm sm:text-base text-gray-600 leading-relaxed mt-2 sm:mt-0 text-center sm:text-start">
          {text}
        </p>
      </div>
    </div>
  </div>
);

export default TestimonialCard;
