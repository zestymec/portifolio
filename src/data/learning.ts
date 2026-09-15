import type { LearningTrack } from "@/types";

export const LEARNING_TRACKS: LearningTrack[] = [
  {
    id: "python-bootcamp",
    title: "100 Days of Code: Python Pro Bootcamp",
    platform: "Angela Yu — Udemy",
    status: "active",
    period: "In Progress (Day 21/100)",
    topics: [
      "Python fundamentals & OOP principles",
      "Algorithmic problem solving & automation scripts",
      "Backend architecture & API integration",
      "Data manipulation & project engineering",
    ],
    progress: 21,
  },
  {
    id: "ml-specialization",
    title: "Machine Learning Specialization",
    platform: "Andrew Ng — DeepLearning.AI / Coursera",
    status: "active",
    period: "In Progress (~Week 2)",
    topics: [
      "Supervised learning algorithms & regression models",
      "Cost functions & gradient descent optimization",
      "Model evaluation, regularization & tuning",
      "Foundational neural network theory",
    ],
    progress: 25,
  },
  {
    id: "mlops-engineering",
    title: "MLOps Specialization & Data Systems",
    platform: "DeepLearning.AI & DataTalks.Club",
    status: "active",
    period: "In Progress",
    topics: [
      "Machine learning model deployment pipelines",
      "Data engineering concepts & pipeline automation",
      "Active participant in DataTalks.Club community",
      "Kaggle competitions & LeetCode problem solving",
    ],
    progress: 20,
  },
  {
    id: "fullstack-mastery",
    title: "MERN, Next.js & React Native Systems",
    platform: "Chai aur Code & Code with Harry",
    status: "completed",
    period: "Completed & Shipped",
    topics: [
      "Production React 19 & Next.js App Router",
      "Cross-platform React Native CLI & Hermes optimization",
      "Node.js, Express.js & MongoDB aggregation pipelines",
      "Tailwind CSS responsive design & state management",
    ],
    progress: 100,
  },
];
