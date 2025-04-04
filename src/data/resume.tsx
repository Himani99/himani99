import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Himani Sharma",
  initials: "HS",
  url: "https://himani99.github.io/",
  location: "Delhi, India",
  locationLink: "https://www.google.com/maps/place/delhi",
  description:
    "Technical Writer and Product Publication Engineer with expertise in documentation automation and DITA-XML. Passionate about leveraging AI for technical documentation.",
  summary:
    "I am a Technical Product Publication Engineer at Synopsys with experience in DITA-XML documentation, DevOps integration, and documentation automation. I hold a Master's degree in Informatics and a Bachelor's degree in Instrumentation. My technical skills include Python, JavaScript, and various frameworks like Next.js and React. I've worked on projects involving AI-based automation and text-to-diagram conversion.",
  avatarUrl: "/me.jpeg",
  skills: [
    "Python",
    "C++",
    "JavaScript",
    "SQL",
    "Bash",
    "XML",
    "Next.js",
    "Node.js",
    "React",
    "Tailwind CSS",
    "DITA-XML",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "himani.sharma2199@gmail.com",
    tel: "+919818395168",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Himani99",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/himani698/",
        icon: Icons.linkedin,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:himani.sharma2199@gmail.com",
        icon: Icons.email,
        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Synopsys, Inc.",
      href: "https://www.synopsys.com/",
      badges: [],
      location: "Delhi, India",
      title: "Technical Product Publication Engineer",
      logoUrl: "/synopsys.jpg",
      start: "September 2023",
      end: "Present",
      description:
        "Authored and managed structured documentation using DITA-XML in Oxygen XML Editor. Utilized Knowledge Assistant (AI-based tool) to generate structured drafts with precise prompts. Collaborated with DevOps engineers to integrate documentation and automate build generation processes. Managed documentation versions using Git and Markdown, ensuring seamless collaboration with development teams. Improved documentation accessibility by implementing structured content models, automated indexing, and metadata tagging.",
    },
  ],
  education: [
    {
      school: "University of Delhi - Institute of Informatics and Communication",
      href: "https://iic.ac.in/",
      degree: "Masters of Science - Informatics",
      logoUrl: "/delhi-university.png",
      start: "July 2021",
      end: "June 2023",
    },
    {
      school: "University of Delhi - Shaheed Rajguru College of Applied Sciences",
      href: "http://www.rajguru.du.ac.in/",
      degree: "Bachelors of Science (Hons.) - Instrumentation",
      logoUrl: "/delhi-university.png",
      start: "June 2017",
      end: "June 2020",
    },
  ],
  projects: [
    {
      title: "Automated Text-Based Exam Scoring",
      href: "#",
      dates: "December 2024 - January 2025",
      active: true,
      description:
        "Developed a Python script to automate exam scoring by extracting answers from text-based answer sheets. Used regular expressions (Regex) to match student responses with the answer key while accounting for variations in formatting. Implemented a flexible scoring system based on question-specific marking criteria. Reduced manual matching efforts and provided students with quick, accurate scores based on their corrections.",
      technologies: [
        "Python",
        "Regex",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "AI Text-to-Diagram",
      href: "#",
      dates: "October 2024 - December 2024",
      active: true,
      description:
        "Developed a web application that converts user text input into interactive diagrams using D3.js and Mermaid. Enabled exporting diagrams as images for seamless sharing and documentation. Designed a responsive and intuitive UI with TailwindCSS for an improved user experience. Deployed on Vercel, ensuring fast performance and scalability.",
      technologies: [
        "React.js",
        "JavaScript",
        "D3.js",
        "Mermaid",
        "HTML",
        "TailwindCSS",
        "Vercel",
      ],
      links: [
        {
          type: "Website",
          href: "#",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [],
} as const;