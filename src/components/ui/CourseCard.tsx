"use client";

import { Button } from "@/components/ui/button";

export interface CourseCardProps {
  title: string;
  audience: string;
  duration: string;
  projects: string;
  online?: boolean;
  slug?: string;
  offline?: boolean;
  image: string;
  brochureUrl: string;
  onExplore?: () => void;
  onBrochureClick?: () => void;
}

export default function CourseCard({
  title,
  audience,
  duration,
  projects,
  online = true,
  offline = true,
  image,
  onExplore,
  onBrochureClick,
}: CourseCardProps) {
  return (
    <div className="w-full border bg-white rounded-2xl shadow-xl overflow-hidden flex flex-col h-full transform hover:scale-[1.02] transition-transform duration-200">

      {/* Header Image */}
      <div className="h-36 overflow-hidden bg-purple-500 flex items-center justify-center">
        <img src={image} alt={`${title} Icon`} className="w-full h-full object-cover" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3 flex-1">
        <h3 className="text-xl font-semibold text-gray-800">{title}</h3>

        <div className="text-base text-gray-500 space-y-1 leading-relaxed">
          <p>
            For: <span className="text-gray-700">{audience}</span>
          </p>
          <p>
            Duration: <span className="text-gray-700">{duration}</span>
          </p>
          <p>
            Projects: <span className="text-gray-700">{projects}</span>
          </p>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {online && (
            <span className="px-3 py-1 bg-pink-100 text-pink-700 text-xs rounded-full">
              Online Classes
            </span>
          )}
          {offline && (
            <span className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
              Offline Classes
            </span>
          )}
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3 mt-1">
          <Button
            variant="outline"
            className="w-full py-3 flex items-center justify-center gap-2"
            onClick={onExplore}
            shine={true}
          >
            <span>GO TO PROGRAM</span>
          </Button>

          <Button
            className="w-full py-3 text-white bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center gap-2 rounded-lg shadow-md hover:opacity-90 transition"
            onClick={onBrochureClick}
          >
            <span>DOWNLOAD BROCHURE</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
