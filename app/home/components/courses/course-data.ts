export const courseCategories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];
export const courses = [
  {
    id: "figma",
    title: "Learn Figma from Basic",
    image: "course-figma",
    categories: ["UI/UX Design", "Design", "Graphic Design"],
    description:
      "Build your design foundation with Figma. Explore the tools and techniques behind clear, thoughtful digital experiences.",
  },
  {
    id: "assets",
    title: "Build Digital Asset",
    image: "course-assets",
    categories: [
      "Graphic Design",
      "Design",
      "Digital Illustration",
      "Creative Marketing",
    ],
    description:
      "Turn creative ideas into a collection of digital assets. Learn to develop a consistent visual language for your projects.",
  },
  {
    id: "data",
    title: "The Power of Big Data",
    image: "course-data",
    categories: ["Data Science", "IT & Software", "Development"],
    description:
      "Discover how data becomes insight and explore the foundations of making informed, data-driven decisions.",
  },
  {
    id: "productivity",
    title: "Balancing Productivity and Self-Care",
    image: "course-productivity",
    categories: ["Productivity", "Business"],
    description:
      "Build sustainable routines that make room for focused work, personal growth, and your wellbeing.",
  },
  {
    id: "finance",
    title: "Mastering Money Management",
    image: "course-finance",
    categories: ["Business", "Finance"],
    description:
      "Explore practical financial habits and strengthen your understanding of planning, budgeting, and managing money.",
  },
  {
    id: "startup",
    title: "From Idea to Startup Success",
    image: "course-startup",
    categories: ["Freelance & Entrepreneurship", "Business", "Marketing"],
    description:
      "Shape your idea into a business. Explore the early steps of building a startup and sharing your vision with the world.",
  },
];
export type Course = (typeof courses)[number];
