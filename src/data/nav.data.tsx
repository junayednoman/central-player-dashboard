import {
  BadgeDollarSign,
  Bell,
  CircleAlert,
  Settings,
  UserRoundCog,
} from "lucide-react";

type TNavMain = {
  title: string;
  url: string;
  icon: React.ReactNode;
}[];

export const navItems: TNavMain = [
  {
    title: "User Management",
    url: "/dashboard/user-management",
    icon: <UserRoundCog />,
  },
  {
    title: "Subscription",
    url: "/dashboard/subscription",
    icon: <BadgeDollarSign />,
  },
  {
    title: "Moderation",
    url: "/dashboard/content-moderation",
    icon: <CircleAlert />,
  },
  {
    title: "Notifications",
    url: "/dashboard/notifications",
    icon: <Bell />,
  },
  {
    title: "Settings",
    url: "/dashboard/settings",
    icon: <Settings />,
  },
];
