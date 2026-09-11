import { Megaphone, BadgeCheck, CalendarClock } from "lucide-react";
import { TikTokIcon, FacebookIcon, InstagramIcon, YouTubeIcon } from "@/components/ui/icons";
import type { Service } from "@/types";

export const services: Service[] = [
  {
    slug: "tiktok-growth-monetization",
    name: "TikTok Growth & Monetization",
    shortName: "TikTok Growth",
    icon: TikTokIcon,
    featured: true,
    tagline: "Turn your TikTok account into a consistent growth channel.",
    description:
      "A structured approach to growing your TikTok presence and understanding what it takes to become monetization-ready, backed by content strategy and targeted advertising rather than shortcuts.",
    highlights: [
      "Profile and account review",
      "Content and growth strategy",
      "Monetization eligibility guidance",
    ],
    covers: [
      "Profile and account review to identify quick wins and gaps",
      "Content and account growth strategy tailored to your niche",
      "Audience engagement and visibility planning",
      "Support for likes, views, and follower growth through content strategy and advertising",
      "Monetization eligibility guidance based on platform requirements",
      "Consultation on UK/USA account-related inquiries",
    ],
    suitableFor: [
      "Creators building a TikTok following from scratch",
      "Existing accounts that have plateaued and need a fresh strategy",
      "Creators exploring TikTok monetization requirements",
    ],
    process: [
      "Share your current account and goals",
      "Receive a review of your profile and content",
      "Agree on a growth and content plan",
      "Implement, promote, and review progress together",
    ],
    faqs: [
      {
        question: "Can you guarantee follower or view counts?",
        answer:
          "No. Growth outcomes depend on content, niche, and platform algorithms, so specific numbers are never guaranteed. The focus is on a sound strategy that supports genuine growth over time.",
      },
      {
        question: "Can I ask about a UK or USA TikTok account?",
        answer:
          "Yes — these inquiries are handled individually. Account availability, ownership, and monetization eligibility depend on the specific circumstances and platform review, so each case needs its own assessment.",
      },
      {
        question: "Does changing my account region unlock monetization?",
        answer:
          "Not automatically. Monetization access depends on meeting TikTok's own eligibility requirements, which are reviewed by the platform, not guaranteed by a region change.",
      },
    ],
  },
  {
    slug: "facebook-marketing",
    name: "Facebook Marketing",
    shortName: "Facebook Marketing",
    icon: FacebookIcon,
    tagline: "Build a Facebook page that grows and converts.",
    description:
      "Page setup, content planning, and advertising support to help your Facebook presence reach the right audience and stay consistent.",
    highlights: [
      "Page setup and optimization",
      "Content planning and management",
      "Advertising campaign management",
    ],
    covers: [
      "Page setup and optimization",
      "Content planning and ongoing page management",
      "Audience growth planning",
      "Monetization guidance where applicable",
      "Advertising campaign management",
    ],
    suitableFor: [
      "Businesses launching or relaunching a Facebook page",
      "Creators looking to grow a Facebook audience alongside other platforms",
      "Brands wanting page management handled consistently",
    ],
    process: [
      "Share your business and page goals",
      "Review your current page and audience",
      "Agree on a content and advertising plan",
      "Manage, post, and review results",
    ],
    faqs: [
      {
        question: "Do you manage Facebook ads too?",
        answer:
          "Yes, advertising campaign management is included. Ad spend is billed separately from the management fee.",
      },
      {
        question: "Can you help with Facebook monetization?",
        answer:
          "Guidance is available based on your page's situation, but approval always depends on Facebook's own review and eligibility requirements.",
      },
    ],
  },
  {
    slug: "instagram-growth-marketing",
    name: "Instagram Growth & Marketing",
    shortName: "Instagram Growth",
    icon: InstagramIcon,
    tagline: "Grow an engaged Instagram audience with a clear content plan.",
    description:
      "Profile optimization, Reels strategy, and advertising support designed to build steady, genuine engagement.",
    highlights: [
      "Profile optimization",
      "Reels and content strategy",
      "Follower growth strategy",
    ],
    covers: [
      "Profile optimization",
      "Reels and content strategy",
      "Audience engagement planning",
      "Follower growth strategy",
      "Advertising support",
    ],
    suitableFor: [
      "Creators wanting a clearer Reels and content strategy",
      "Small businesses building an Instagram presence",
      "Brands looking to run Instagram ads alongside organic content",
    ],
    process: [
      "Share your account and objectives",
      "Review your profile and recent content",
      "Agree on a content and growth plan",
      "Execute and review engagement over time",
    ],
    faqs: [
      {
        question: "Will you guarantee a certain number of followers?",
        answer:
          "No — growth depends on content quality, consistency, and the platform's algorithm. The strategy is built to support genuine, lasting growth rather than promise fixed numbers.",
      },
    ],
  },
  {
    slug: "youtube-growth-monetization",
    name: "YouTube Growth & Monetization",
    shortName: "YouTube Growth",
    icon: YouTubeIcon,
    tagline: "Build a channel with discoverable content and a monetization-ready foundation.",
    description:
      "Channel setup, content planning, and discoverability guidance to help your channel grow toward monetization readiness.",
    highlights: [
      "Channel setup and optimization",
      "Content planning",
      "Monetization readiness support",
    ],
    covers: [
      "Channel setup and optimization",
      "Content planning",
      "Video discoverability guidance",
      "Audience development",
      "Monetization readiness support",
    ],
    suitableFor: [
      "New channels needing a solid setup and content plan",
      "Existing channels working toward monetization eligibility",
      "Creators wanting clearer video discoverability practices",
    ],
    process: [
      "Share your channel and content goals",
      "Review your channel setup and recent uploads",
      "Agree on a content and growth plan",
      "Publish, promote, and review progress",
    ],
    faqs: [
      {
        question: "Can you guarantee YouTube monetization approval?",
        answer:
          "No. Monetization approval is decided by YouTube based on its own eligibility requirements and review process. The support provided focuses on getting your channel ready for that review.",
      },
    ],
  },
  {
    slug: "paid-advertising-management",
    name: "Paid Advertising Management",
    shortName: "Paid Advertising",
    icon: Megaphone,
    tagline: "Plan and manage campaigns that reach the right audience.",
    description:
      "End-to-end campaign planning and management across social platforms, from audience research to performance review.",
    highlights: [
      "Campaign planning and targeting",
      "Creative direction",
      "Performance review",
    ],
    covers: [
      "Campaign planning",
      "Audience research and targeting",
      "Campaign setup and optimization",
      "Creative direction",
      "Performance review",
    ],
    suitableFor: [
      "Businesses ready to invest in paid social advertising",
      "Creators wanting to boost content to a targeted audience",
      "Brands needing ongoing campaign management",
    ],
    process: [
      "Share your advertising goals and budget range",
      "Review your audience and past campaigns, if any",
      "Agree on a campaign plan and quotation",
      "Launch, monitor, and review performance",
    ],
    faqs: [
      {
        question: "Is ad spend included in the management fee?",
        answer:
          "No. Advertising spend paid to the platform is always separate from the service fee for planning and managing your campaigns.",
      },
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    shortName: "SMM",
    icon: CalendarClock,
    tagline: "Keep every platform consistent, active, and on-brand.",
    description:
      "Multi-platform content planning and community engagement so your social presence stays consistent without you managing it day to day.",
    highlights: [
      "Multi-platform content planning",
      "Brand consistency",
      "Performance reporting",
    ],
    covers: [
      "Multi-platform content planning",
      "Posting strategy",
      "Brand consistency across platforms",
      "Community engagement planning",
      "Performance reporting",
    ],
    suitableFor: [
      "Businesses managing several platforms at once",
      "Brands wanting a consistent posting schedule",
      "Teams without time to manage social media in-house",
    ],
    process: [
      "Share your platforms and brand guidelines",
      "Review current presence and gaps",
      "Agree on a content calendar and scope",
      "Post, engage, and report on progress",
    ],
    faqs: [
      {
        question: "Which platforms can be managed together?",
        answer:
          "TikTok, Facebook, Instagram, and YouTube can be planned and managed together under one consistent content strategy.",
      },
    ],
  },
  {
    slug: "monetization-account-consultation",
    name: "Monetization & Account Consultation",
    shortName: "Consultation",
    icon: BadgeCheck,
    tagline: "Get clear, individual guidance on your account and monetization questions.",
    description:
      "A consultation-based service covering account review, monetization readiness, and platform-specific eligibility questions, including custom requests.",
    highlights: [
      "Account review",
      "Monetization readiness",
      "Custom social media requests",
    ],
    covers: [
      "Account review",
      "Monetization readiness assessment",
      "Platform-specific eligibility guidance",
      "Account setup and management inquiries",
      "Custom social media requests",
    ],
    suitableFor: [
      "Anyone unsure whether their account meets monetization requirements",
      "Creators with account-specific or region-specific questions",
      "Businesses with a request that doesn't fit neatly into one service",
    ],
    process: [
      "Share your account details and questions",
      "Receive an individual review",
      "Discuss options and next steps",
      "Proceed with the agreed plan, if applicable",
    ],
    faqs: [
      {
        question: "What if my request doesn't match any listed service?",
        answer:
          "Reach out on WhatsApp with the details — custom social media requests are reviewed individually.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((service) => service.slug === slug);
}

export function getRelatedServices(slug: string, count = 3): Service[] {
  return services.filter((service) => service.slug !== slug).slice(0, count);
}
