import { DashboardIcon, SocialIcon, ScheduleIcon, TeamIcon } from "@/icons";
import {
  PlusCircle,
  Mail,
  Bookmark,
  FileImage,
  Workflow,
  Radio,
} from "lucide-react";

export const menuItems = [
  {
    icon: <DashboardIcon height={20} width={20} />,
    label: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: <SocialIcon height={20} width={20} />,
    label: "Social",
    href: "/dashboard/social",
  },
  {
    icon: <PlusCircle size={20} />,
    label: "Create Post",
    href: "/dashboard/create-post",
  },
  {
    icon: <Mail height={20} width={20} />,
    label: "Inbox",
    href: "/dashboard/inbox",
  },
  {
    icon: <ScheduleIcon height={20} width={20} />,
    label: "Schedule Post",
    href: "/dashboard/schedule",
  },
  {
    icon: <Bookmark height={20} width={20} />,
    label: "Notifications",
    href: "/dashboard/notifications",
  },
  {
    icon: <FileImage height={20} width={20} />,
    label: "Content Library",
    href: "/dashboard/content-library",
  },
  {
    icon: <TeamIcon height={20} width={20} />,
    label: "Team",
    href: "/dashboard/team",
  },
  {
    icon: <Workflow height={20} width={20} />,
    label: "Automation",
    href: "/dashboard/automation",
  },
  {
    icon: <Radio height={20} width={20} />,
    label: "Live Studio",
    href: "/dashboard/live-studio",
  },
];
