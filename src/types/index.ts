import type { ComponentType, SVGProps } from "react";

export type IconType = ComponentType<SVGProps<SVGSVGElement>>;

export type Platform =
  | "tiktok"
  | "facebook"
  | "instagram"
  | "youtube"
  | "multiple"
  | "other";

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface Service {
  slug: string;
  name: string;
  shortName: string;
  icon: IconType;
  tagline: string;
  description: string;
  highlights: string[];
  covers: string[];
  suitableFor: string[];
  process: string[];
  faqs: ServiceFaq[];
  featured?: boolean;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface EngagementOption {
  title: string;
  description: string;
  scopeExamples: string[];
}

export interface Project {
  title: string;
  summary: string;
  platform: Platform;
}

export interface Testimonial {
  quote: string;
  author: string;
}
