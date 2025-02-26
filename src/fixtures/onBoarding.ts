// Enum Definitions for Step Keys
enum StepKey {
  GOALS = "goals",
  PLATFORMS = "platforms",
  FEATURES = "features",
}

// Enum Definitions for Option Values
enum GoalOption {
  BRAND_GROWTH = "brand_growth",
  AUDIENCE_ENGAGEMENT = "audience_engagement",
  CONTENT_ORGANIZATION = "content_organization",
  PERFORMANCE_TRACKING = "performance_tracking",
  MULTI_ACCOUNT_MANAGEMENT = "multi_account_management",
}

enum PlatformOption {
  INSTAGRAM = "instagram",
  FACEBOOK = "facebook",
  YOUTUBE = "youtube",
  LINKEDIN = "linkedin",
  TIKTOK = "tiktok",
  OTHER = "other",
}

enum FeatureOption {
  POST_SCHEDULING = "post_scheduling",
  ANALYTICS = "analytics",
  DM_MANAGEMENT = "dm_management",
  TEAM_COLLABORATION = "team_collaboration",
  HASHTAG_TRACKING = "hashtag_tracking",
  CONTENT_REPURPOSING = "content_repurposing",
}

// Interface for onboarding steps
interface OnboardingStep {
  key: StepKey;
  label?: string;
  options: {
    label: string;
    value: GoalOption | PlatformOption | FeatureOption;
  }[];
  image: string;
}

// Onboarding Steps Data
export const onboardingSteps: OnboardingStep[] = [
  {
    key: StepKey.GOALS,
    label: "Understanding Your Goals",
    options: [
      { label: "Growing my brand or business", value: GoalOption.BRAND_GROWTH },
      {
        label: "Engaging with my audience more effectively",
        value: GoalOption.AUDIENCE_ENGAGEMENT,
      },
      {
        label: "Organizing and scheduling content",
        value: GoalOption.CONTENT_ORGANIZATION,
      },
      {
        label: "Tracking performance and analytics",
        value: GoalOption.PERFORMANCE_TRACKING,
      },
      {
        label: "Managing multiple accounts with ease",
        value: GoalOption.MULTI_ACCOUNT_MANAGEMENT,
      },
    ],
    image: "/images/onBoardingScreen/account1.png",
  },
  {
    key: StepKey.PLATFORMS,
    label: "Platform Selection",
    options: [
      { label: "Instagram", value: PlatformOption.INSTAGRAM },
      { label: "Facebook", value: PlatformOption.FACEBOOK },
      { label: "YouTube", value: PlatformOption.YOUTUBE },
      { label: "LinkedIn", value: PlatformOption.LINKEDIN },
      { label: "TikTok", value: PlatformOption.TIKTOK },
      { label: "Other", value: PlatformOption.OTHER },
    ],
    image: "/images/onBoardingScreen/account2.png",
  },
  {
    key: StepKey.FEATURES,
    label: "Key Features You Need",
    options: [
      { label: "Post Scheduling", value: FeatureOption.POST_SCHEDULING },
      { label: "Analytics & Insights", value: FeatureOption.ANALYTICS },
      { label: "Comment & DM Management", value: FeatureOption.DM_MANAGEMENT },
      { label: "Team Collaboration", value: FeatureOption.TEAM_COLLABORATION },
      {
        label: "Hashtag & Trend Tracking",
        value: FeatureOption.HASHTAG_TRACKING,
      },
      {
        label: "Content Repurposing",
        value: FeatureOption.CONTENT_REPURPOSING,
      },
    ],
    image: "/images/onBoardingScreen/account3.png",
  },
];
