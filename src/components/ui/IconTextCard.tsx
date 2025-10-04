// src/components/ui/IconTextBanner.tsx
import React from "react";
import { LucideIcon } from "lucide-react";

export interface IconTextItem {
  text: string;
  icon: LucideIcon;
}

const IconTextBanner: React.FC<IconTextItem> = ({ text, icon: Icon }) => (
  <span className="flex items-center mx-5 my-3">
    <Icon className="w-7 h-7 text-blue-600 mr-2" />
    <span className="text-orange-500 font-semibold text-lg">{text}</span>
  </span>
);

export default IconTextBanner;
