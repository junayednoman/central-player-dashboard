export type ModerationCategory =
  | "all"
  | "premium"
  | "featured"
  | "challenges"
  | "reported";

export type ModerationContentItem = {
  id: string;
  authorName: string;
  authorEmail?: string;
  description: string;
  hashtags: string[];
  views: string;
  timeAgo: string;
  imageUrl: string;
  videoUrl?: string;
  isReported: boolean;
  category: Exclude<ModerationCategory, "all" | "reported">;
  violationReasons?: string[];
};

export const moderationCategoryOptions: {
  label: string;
  value: ModerationCategory;
}[] = [
  { label: "All", value: "all" },
  { label: "Premium", value: "premium" },
  { label: "Featured", value: "featured" },
  { label: "Challenges", value: "challenges" },
  { label: "Reported", value: "reported" },
];

export const moderationMockData: ModerationContentItem[] = [
  {
    id: "cm-1",
    authorName: "Micheal Epkot",
    authorEmail: "michealepkot@mail.com",
    description:
      "Working on my first touch and passing under pressure today! Coach said I'm improving fast ⚽🔥",
    hashtags: ["#U12Boys", "#TrainingDrills", "#GrassrootsFootball"],
    views: "105K Views",
    timeAgo: "30 mins",
    imageUrl:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?q=80&w=1200&auto=format&fit=crop",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4",
    isReported: true,
    category: "featured",
    violationReasons: [
      "Harmful language toward another user",
      "Personal attack in content description",
      "Violates respectful communication policy",
      "Repeated abusive behavior after warning",
    ],
  },
  {
    id: "cm-2",
    authorName: "Sarah Johnson",
    authorEmail: "sarah.johnson@mail.com",
    description:
      "One-touch control routine before match day. Consistency over everything.",
    hashtags: ["#Players", "#Drills", "#Football"],
    views: "84K Views",
    timeAgo: "1 hr",
    imageUrl:
      "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?q=80&w=1200&auto=format&fit=crop",
    isReported: false,
    category: "premium",
  },
  {
    id: "cm-3",
    authorName: "Alex Brooks",
    authorEmail: "alex.brooks@mail.com",
    description: "Challenge day: 100 passes in 3 minutes. Who can beat this?",
    hashtags: ["#Challenge", "#PassMaster", "#GrassrootsFootball"],
    views: "56K Views",
    timeAgo: "2 hrs",
    imageUrl:
      "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?q=80&w=1200&auto=format&fit=crop",
    isReported: true,
    category: "challenges",
    violationReasons: [
      "Unsafe challenge encouragement",
      "Potentially harmful activity",
      "Missing safety disclaimer",
      "Violates youth training safety guideline",
    ],
  },
  {
    id: "cm-4",
    authorName: "Daniel Roy",
    authorEmail: "daniel.roy@mail.com",
    description: "Featured match highlights from this weekend academy game.",
    hashtags: ["#Featured", "#Academy", "#MatchDay"],
    views: "132K Views",
    timeAgo: "4 hrs",
    imageUrl:
      "https://images.unsplash.com/photo-1543357480-c60d400e2ef9?q=80&w=1200&auto=format&fit=crop",
    isReported: false,
    category: "featured",
  },
  {
    id: "cm-5",
    authorName: "Priya Khan",
    authorEmail: "priya.khan@mail.com",
    description: "Premium finishing tutorial - weak foot focus session.",
    hashtags: ["#Premium", "#Finishing", "#PlayerGrowth"],
    views: "49K Views",
    timeAgo: "5 hrs",
    imageUrl:
      "https://images.unsplash.com/photo-1521412644187-c49fa049e84d?q=80&w=1200&auto=format&fit=crop",
    isReported: false,
    category: "premium",
  },
  {
    id: "cm-6",
    authorName: "Liam Scott",
    authorEmail: "liam.scott@mail.com",
    description:
      "Fast break transition drill with focus on positioning and decision making.",
    hashtags: ["#Challenges", "#Transition", "#YouthFootball"],
    views: "62K Views",
    timeAgo: "6 hrs",
    imageUrl:
      "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?q=80&w=1200&auto=format&fit=crop",
    isReported: false,
    category: "challenges",
  },
];
