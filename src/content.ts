// Everything the site says lives here. Edit this file to update the page.

export const site = {
  url: "https://gurnain.squre.org",
  path: "/about",
};

export const person = {
  name: "Gurnain Saini",
  role: "Software Engineer",
  employer: "Amazon Web Services",
  location: "Vancouver, BC",
  languages: ["English", "Punjabi", "Hindi"],
  photo: "/images/avatar-v3.jpg",
  email: "gurnaindeepsingh@hotmail.com",
  calendar: "https://calendly.com/gurnaindeepsingh/30min",
};

export type IconName =
  | "github"
  | "linkedin"
  | "email"
  | "calendar"
  | "chevron"
  | "globe"
  | "person"
  | "moon"
  | "sun"
  | "external";

export const profiles: { label: string; icon: IconName; href: string }[] = [
  { label: "GitHub", icon: "github", href: "https://github.com/gurnain" },
  { label: "LinkedIn", icon: "linkedin", href: "https://www.linkedin.com/in/gurnain-saini" },
  { label: "Email", icon: "email", href: `mailto:${person.email}` },
];

export const meta = {
  title: `About – ${person.name}`,
  description: `${person.name} is a ${person.role} at ${person.employer} in ${person.location}, building AI agents and cloud infrastructure.`,
  tagline: "Building AI agents and cloud infrastructure.",
};

export const intro =
  "I'm a Software Development Engineer at Amazon Web Services in Vancouver, with specialized skills in cloud computing and architecture design on the AWS platform. Since 2021 I have built autoscaling solutions that improve cost efficiency and scalability, with full ownership of services from conception to deployment. Today I develop autonomous AI agents for internal teams, the evaluation harnesses that validate them, and the infrastructure behind internal core software migration tools.";

export const experience = [
  {
    company: "Amazon Web Services (AWS)",
    dates: "Aug 2021 - Present",
    role: "Software Development Engineer",
    points: [
      "Develop reliable autonomous AI agents for internal teams using the AWS Strands and LangChain frameworks.",
      "Build validation and evaluation harnesses for agentic workflows.",
      "Manage scalable internal infrastructure for software migration tools using TypeScript, Python and the CDK framework.",
      "Developed solutions in unexplored areas of autoscaling, improving cost efficiency and scalability.",
      "Took full ownership of services from conception to deployment, delivering reliable, high-quality software.",
      "Write clear, detailed design documents that keep development aligned across the team.",
    ],
  },
  {
    company: "Amazon Web Services (AWS)",
    dates: "May 2020 - Sep 2020",
    role: "Software Development Engineer Intern",
    points: [
      "Developed and shipped an important customer-facing feature that reduced deployment risk and improved workflow performance by 70%.",
      "Took ownership of a second project to fix bugs and onboard an improved version of an existing service used by big AWS customers.",
    ],
  },
  {
    company: "Advanced Micro Devices (AMD)",
    dates: "May 2019 - Apr 2020",
    role: "Software Developer and Machine Learning Intern",
    points: [
      "Handled full-stack development (using React and Java) of an Analytics and Visualization Dashboard Web App that is used by various teams.",
      "Created another Web App used for data aggregation using latest front-end technologies such as, React, Redux and back-end using FastAPI and MySQL.",
      "Applied Machine Learning models to existing data and built guided ML libraries in Python to help identify patterns.",
      "Created a full stack ML automation Web Application for Managers, that handles most of the usual Machine Learning tasks and makes doing ML 10x easier compared to coding solutions.",
    ],
  },
  {
    company: "Catalytics Inc.",
    dates: "May 2018 - Aug 2018",
    role: "Jr. Health Data Scientist",
    points: [
      "Collect, organize, manage, analyze and visualize large health datasets.",
      "Apply and compare Machine Learning algorithms to do high cost patient predictive analysis after extrapolating useful information from datasets.",
      "Created RESTful API for the backend using Node.js and UI for the frontend using HTML, CSS and JavaScript.",
      "Created and managed MySQL Databases for use, throughout the project.",
    ],
  },
];

export const education = [
  {
    school: "McMaster University",
    detail: "B.Eng., Software and Embedded Systems Engineering. Graduated April 2021, GPA 3.9 / 4.0.",
  },
];

export const projects: {
  name: string;
  summary: string;
  links: { label: string; icon: IconName; href: string }[];
}[] = [
  {
    name: "ScreenIt",
    summary:
      "A contactless customer screening and contact tracing system for businesses. An offline embedded temperature screener and entry processor is managed through a web app that tracks how many customers are inside, and an image processing and machine learning subsystem checks for a mask before screening starts.",
    links: [{ label: "View on GitHub", icon: "github", href: "https://github.com/ScreenIt-Inc/ScreenIt" }],
  },
  {
    name: "FixIt",
    summary:
      "Terminal based python application that identifies incorrect terminal commands and typos entered by the user and automatically fixes them. It helps new terminal users by explaining the errors in their commands.",
    links: [{ label: "View on GitHub", icon: "github", href: "https://github.com/gurnain/FixIt" }],
  },
  {
    name: "Speech-Assist",
    summary:
      "A predictive text-to-speech keyboard that helps people with speech impairment communicate. It suggests the next three words as you type, has one-click greetings and yes/no, and reads the sentence out loud. Third place at the McMaster Engineering Competition, 2018.",
    links: [{ label: "View on GitHub", icon: "github", href: "https://github.com/tasmainian/Speech-Assist" }],
  },
  {
    name: "Test Your Reaction!",
    summary: "A reaction game created in native JavaScript, HTML and CSS. Time your reaction!",
    links: [
      { label: "Play it", icon: "external", href: "https://gurnain.github.io/" },
      { label: "View on GitHub", icon: "github", href: "https://github.com/gurnain/gurnain.github.io" },
    ],
  },
];

export const skills = [
  { group: "Languages", items: ["Python", "TypeScript", "Java", "JavaScript", "Ruby", "C", "C++"] },
  { group: "AI and agents", items: ["AWS Strands", "LangChain", "Agent evaluation harnesses", "Machine learning"] },
  { group: "Cloud and architecture", items: ["AWS", "Cloud architecture design", "Autoscaling", "CDK", "Linux"] },
  { group: "Web and data", items: ["React", "Redux", "Node.js", "FastAPI", "MySQL"] },
  { group: "Tools", items: ["Git", "GitHub", "GitLab", "JIRA"] },
];

export const honours = [
  { year: "2018", text: "Third place, McMaster Engineering Competition, for a predictive text keyboard built with AI." },
  { year: "2017", text: "Provost's Honour Roll Medal, McMaster University." },
  { year: "2017", text: "Anna Marie Hibbard Scholarship, for a 4.0 GPA in first year." },
];

// Section anchors, in page order. Used by the side index and the headings.
export const sections = [
  { id: "introduction", label: "Introduction" },
  { id: "work", label: "Work Experience" },
  { id: "education", label: "Education" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "honours", label: "Honours" },
];
