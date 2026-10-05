import { Logo } from "@/once-ui/components";

const person = {
  firstName: "Gurnain",
  lastName: "Saini",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Software Engineer",
  avatar: "/images/avatar.jpg",
  email: "gurnaindeepsingh@gmail.com",
  location: "America/Vancouver", // IANA time zone identifier, used for the clock only
  locationLabel: "Vancouver, BC", // what visitors actually read
  languages: ["English", "Punjabi", "Hindi"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/gurnain",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/gurnain-saini",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

const home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Software engineer building AI agents and cloud infrastructure</>,
  featured: {
    display: false,
    title: <></>,
    href: "/about",
  },
  subline: (
    <>
      I'm {person.firstName}, a {person.role} at Amazon Web Services in
      Vancouver.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `${person.name} is a ${person.role} at Amazon Web Services in ${person.locationLabel}, building AI agents and cloud infrastructure.`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://calendly.com/gurnaindeepsingh/30min",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I'm a Software Development Engineer at Amazon Web Services in
        Vancouver. Right now I build autonomous AI agents for internal teams,
        along with the evaluation harnesses that tell us whether they can be
        trusted. Before that I worked on autoscaling and on the infrastructure
        behind AWS software migration tools. I like owning a service from the
        design document through to production.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Amazon Web Services (AWS)",
        timeframe: "2021 - Present",
        role: "Software Development Engineer II",
        achievements: [
          <>
            Develop reliable autonomous AI agents for internal teams using the
            AWS Strands and LangChain frameworks.
          </>,
          <>
            Build validation and evaluation harnesses for agentic workflows.
          </>,
          <>
            Manage scalable internal infrastructure for software migration
            tools using TypeScript, Python and the CDK framework.
          </>,
          <>
            Earlier, built autoscaling features focused on cost efficiency and
            scalability, owning services from design to deployment.
          </>,
          <>
            Write clear, detailed design documents that keep development
            aligned across the team.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/work/aws/amazon_web_services_logo.jpg",
            alt: "Amazon Web Services",
            width: 9,
            height: 7,
          },
        ],
      },
      {
        company: "Amazon Web Services (AWS)",
        timeframe: "May 2020 - Sep 2020",
        role: "Software Development Engineer Intern",
        achievements: [
          <>
            Developed and shipped an important customer-facing feature that
            reduced deployment risk and improved workflow performance by 70%.
          </>,
          <>
            Took ownership of a second project to fix bugs and onboard an
            improved version of an existing service used by big AWS customers.
          </>,
        ],
        images: [],
      },
      {
        company: "Advanced Micro Devices (AMD)",
        timeframe: "2019 - 2020",
        role: "Software Engineer Intern",
        achievements: [
          <>
            Handled full-stack development (using React and Java) of an
            Analytics and Visualization Dashboard Web App that is used by
            various teams.
          </>,
          <>
            Created another Web App used for data aggregation using latest
            front-end technologies such as, React, Redux and back-end using
            FastAPI and MySQL.
          </>,
          <>
            Applied Machine Learning models to existing data and built guided ML
            libraries in Python to help identify patterns.
          </>,
          <>
            Created a full stack ML automation Web Application for Managers,
            that handles most of the usual Machine Learning tasks and makes
            doing ML 10x easier compared to coding solutions.
          </>,
        ],
        images: [
          {
            src: "/images/work/amd/amd_logo.jpg",
            alt: "Advanced Micro Devices",
            width: 9,
            height: 7,
          },
        ],
      },
      {
        company: "Catalytics Inc.",
        timeframe: "2018",
        role: "Jr. Health Data Scientist",
        achievements: [
          <>
            Collect, organize, manage, analyze and visualize large health
            datasets.
          </>,
          <>
            Apply and compare Machine Learning algorithms to do high cost
            patient predictive analysis after extrapolating useful information
            from datasets.
          </>,
          <>
            Created RESTful API for the backend using Node.js and UI for the
            frontend using HTML, CSS and JavaScript.
          </>,
          <>
            Created and managed MySQL Databases for use, throughout the project.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "McMaster University",
        description: (
          <>
            B.Eng., Software and Embedded Systems Engineering. Graduated April
            2021, GPA 3.9 / 4.0.
          </>
        ),
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Projects",
    skills: [
      {
        title: "ScreenIt",
        description: (
          <>
            A contactless customer screening and contact tracing system for
            businesses. An offline embedded temperature screener and entry
            processor is managed through a web app that tracks how many
            customers are inside, and an image processing and machine learning
            subsystem checks for a mask before screening starts.
          </>
        ),
        images: [],
      },
      {
        title: "FixIt",
        description: (
          <>
            Terminal based python application that identifies incorrect terminal
            commands and typos entered by the user and automatically fixes them.
            It helps new terminal users by explaining the errors in their
            commands.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/fixit/cover-01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Speech-Assist",
        description: (
          <>
            A predictive text-to-speech keyboard that helps people with speech
            impairment communicate. It suggests the next three words as you
            type, has one-click greetings and yes/no, and reads the sentence
            out loud. Third place at the McMaster Engineering Competition, 2018.
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/speech-assist/cover-01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Test Your Reaction!",
        description: (
          <>
            A reaction game created in native JavaScript, HTML and CSS. Time
            your reaction!
          </>
        ),
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/reaction-game/cover-01.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const skills = {
  display: true,
  title: "Skills",
  groups: [
    { label: "Languages", items: ["Python", "TypeScript", "Java", "JavaScript", "Ruby", "C", "C++"] },
    { label: "AI and agents", items: ["AWS Strands", "LangChain", "Agent evaluation harnesses", "Machine learning"] },
    { label: "Cloud and infrastructure", items: ["AWS", "CDK", "Linux"] },
    { label: "Web and data", items: ["React", "Redux", "Node.js", "FastAPI", "MySQL"] },
    { label: "Tools", items: ["Git", "GitHub", "GitLab", "JIRA"] },
  ],
};

const awards = {
  display: true,
  title: "Honours",
  items: [
    { year: "2018", text: "Third place, McMaster Engineering Competition, for a predictive text keyboard built with AI." },
    { year: "2017", text: "Provost's Honour Roll Medal, McMaster University." },
    { year: "2017", text: "Anna Marie Hibbard Scholarship, for a 4.0 GPA in first year." },
  ],
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: `Writing – ${person.name}`,
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery, skills, awards };
