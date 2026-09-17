export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface FeedItem {
  id: string;
  type: 'linkedin' | 'certificate' | 'article';
  author: {
    name: string;
    headline: string;
    avatar: string;
    connection?: string;
  };
  timeAgo: string;
  title: string;
  content: string;
  badge?: string;
  sourceUrl?: string;
  imageUrl?: string;
  likes?: number;
  comments?: number;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: 'current' | 'completed';
  description: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface PortfolioData {
  profile: {
    firstName: string;
    lastName: string;
    role: string;
    tagline: string;
    aboutSnippet: string;
    yearsExperience: string;
    location: string;
  };
  socials: SocialLink[];
  skills: {
    frontend: string;
    backend: string;
    styles: string;
    also: string;
  };
  languages: {
    language: string;
    level: string;
    flag: string;
  }[];
  feed: FeedItem[];
  projects: ProjectItem[];
  education: EducationItem[];
  experience: ExperienceItem[];
  footer: {
    years: string;
    handcrafted: string;
    designedBy: string;
    poweredBy: string;
  };
}

export const portfolioData: PortfolioData = {
  profile: {
    firstName: "Akankshya",
    lastName: "Mishra",
    role: "Full-stack developer",
    tagline: "My goal is to write maintainable, clean and understandable code to make development process enjoyable.",
    aboutSnippet: "Hello! I'm Akankshya, a full-stack developer. With more than 3 years experience.",
    yearsExperience: "3",
    location: "Odisha, India"
  },
  socials: [
    { name: "Github", url: "https://github.com/Akankshyamishra7", icon: "github" },
    { name: "Linkedin", url: "https://linkedin.com/in/akankshya-mishra", icon: "linkedin" },
    { name: "Telegram", url: "https://t.me/akankshyamishra", icon: "telegram" },
    { name: "Facebook", url: "https://facebook.com", icon: "facebook" },
    { name: "Instagram", url: "https://instagram.com/akankshyamishra", icon: "instagram" },
  ],
  skills: {
    frontend: "ReactJS 19  /  Next.js 14  /  TypeScript  /  HTML5, CSS3, and JavaScript (ES6+)  /  Server-side Rendering  /  Best SEO Principles  /  Frontend internationalization (I18N)  /  GraphQL: Apollo Client  /  shadcn/ui  /  TanStack Query & Table  /  Mermaid.js  /  D3.js  /  Virtualized Lists & Tables  /  Markdown Rendering  /  Storybook  /  Jest",
    backend: "NodeJS  /  NestJS  /  PostgreSQL  /  MongoDB  /  Express  /  GraphQL: Apollo Server  /  Groq Cloud (Llama 3.x)  /  Vercel AI SDK  /  Supabase (PostgreSQL)  /  REST APIs  /  npm Workspaces  /  AI / LLM APIs",
    styles: "Tailwind CSS  /  CSS3  /  SASS  /  PostCSS  /  Material UI  /  Styled Components",
    also: "Problem detection and troubleshooting  /  Fluent in English, Hindi, and Odia  /  GitHub, GitLab, and version control with GIT  /  Code documentation to promote maintainability  /  End-to-end testing  /  Attention to detail  /  Web Content Accessibility Guidelines (WCAG)"
  },
  languages: [
    { language: "English", level: "professional", flag: "🇺🇸" },
    { language: "Hindi", level: "native", flag: "🇮🇳" },
    { language: "Odia", level: "native", flag: "🇮🇳" }
  ],
  feed: [
    {
      id: "cert-web-dev",
      type: "certificate",
      author: {
        name: "Akankshya Mishra",
        headline: "Computer Science Engineering | Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      },
      timeAgo: "Recent",
      title: "Completion Certificate for Full-Stack Web Development & Modern JavaScript",
      content: "Successfully completed hands-on certification in Full-Stack Web Development, mastering React, TypeScript, asynchronous APIs, and responsive design systems.",
      badge: "coursera.org",
      sourceUrl: "https://coursera.org",
      imageUrl: "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=800&auto=format&fit=crop&q=80"
    },
    {
      id: "linkedin-hackathon",
      type: "linkedin",
      author: {
        name: "Akankshya Mishra",
        headline: "Computer Science Engineering | Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        connection: "1st"
      },
      timeAgo: "3mo",
      title: "Exciting Learnings from our Hackathon Sprint! 🚀",
      content: "Participating in competitive programming and hackathons has been one of the most rewarding parts of my engineering journey! 🌐💻\n\nCollaborating under tight time constraints pushed our team to think outside the box, prototype rapidly, and maintain high code quality.\n\nKey takeaways:\n1️⃣ Rapid Prototyping: Turning concepts into working interfaces under tight deadlines.\n2️⃣ Team Collaboration: Seamless git workflows and clear modular communication kept our velocity high.",
      likes: 184,
      comments: 26
    },
    {
      id: "linkedin-react-ecosystem",
      type: "linkedin",
      author: {
        name: "Akankshya Mishra",
        headline: "Computer Science Engineering | Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        connection: "1st"
      },
      timeAgo: "6mo",
      title: "Building Modern Interfaces with React & Tailwind CSS!",
      content: "Hey everyone!\n\nDeeply enjoying building frontend applications using React and Tailwind CSS! 🛠️📱\n\nComponent-based architecture coupled with utility-first styling allows us to craft interfaces that are not only visually stunning but also accessible, responsive, and maintainable.\n\nAlways striving to write clean, understandable code that makes the development process truly enjoyable! ✨",
      likes: 248,
      comments: 31
    },
    {
      id: "linkedin-python-quiz",
      type: "linkedin",
      author: {
        name: "Akankshya Mishra",
        headline: "Computer Science Engineering | Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
        connection: "1st"
      },
      timeAgo: "8mo",
      title: "Project Milestone: Interactive Quiz App",
      content: "Wrapped up my Interactive Quiz Application built with Python and Tkinter! 🐍\n\nFeatures include dynamic scoring, multiple category handling, robust error prevention, and clean file persistence. Loved diving deep into Object-Oriented Programming principles and algorithmic flow. Check out the project on my GitHub!",
      likes: 195,
      comments: 18
    }
  ],
  projects: [
    {
      id: "responsive-portfolio",
      title: "Responsive Developer Portfolio",
      subtitle: "Personal Web Showcase",
      description: "Crafted a personal developer portfolio using React, TypeScript, and modern UI architectures with focus on responsiveness, subtle animations, and high accessibility standards.",
      technologies: ["ReactJS", "TypeScript", "Tailwind CSS", "Vite", "GitHub"],
      githubUrl: "https://github.com/Akankshyamishra7",
      liveUrl: "https://akankshyamishra.dev",
      featured: true
    },
    {
      id: "quiz-application",
      title: "Interactive Quiz Application",
      subtitle: "Python & Tkinter Software",
      description: "Interactive Python quiz application featuring user interaction, dynamic score tracking, comprehensive error handling, and robust data persistence.",
      technologies: ["Python", "Tkinter", "JSON", "Data Structures", "File I/O"],
      githubUrl: "https://github.com/Akankshyamishra7",
      featured: true
    },
    {
      id: "ecommerce-system",
      title: "E-Commerce Web Application",
      subtitle: "Full-Stack Shopping Platform",
      description: "Full-stack e-commerce web platform featuring product catalogs, state-managed shopping cart, responsive filtering, and checkout flows.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
      githubUrl: "https://github.com/Akankshyamishra7",
      featured: false
    }
  ],
  education: [
    {
      degree: "Computer Science Engineering",
      institution: "ITER | Siksha 'O' Anusandhan University",
      location: "Odisha, India",
      period: "2022 - 2026",
      status: "current",
      description: "Pursuing undergraduate degree in Computer Science Engineering with focus on software development, algorithms, and distributed systems.",
      highlights: ["Data Structures & Algorithms", "Software Engineering", "Full-Stack Web Development", "Database Systems"]
    },
    {
      degree: "Diploma in Computer Science Engineering",
      institution: "Government Polytechnic, Rayagada",
      location: "Odisha, India",
      period: "2019 - 2022",
      status: "completed",
      description: "Completed diploma with strong foundation in programming fundamentals, operating systems, and database systems.",
      highlights: ["Programming Fundamentals", "Computer Systems", "Technical Leadership", "Project Management"]
    }
  ],
  experience: [
    {
      role: "Full-Stack Web Developer",
      company: "Independent & Open Source Projects",
      location: "Odisha, India",
      period: "2023 - Present",
      description: "Building responsive web applications, experimenting with modern React ecosystems, and crafting user-focused interfaces.",
      responsibilities: [
        "Architected and deployed responsive React applications with modern component patterns",
        "Engineered clean, accessible UI components adhering to WCAG guidelines",
        "Optimized frontend bundle sizes and assets for fast loading times across devices",
        "Utilized Git & GitHub for systematic version control and collaborative workflows"
      ],
      technologies: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "HTML5/CSS3", "Git"]
    },
    {
      role: "Computer Science Engineering Scholar",
      company: "ITER, SOA University",
      location: "Odisha, India",
      period: "2022 - 2026",
      description: "Specializing in core computer science, algorithm design, data structures, and hands-on software development.",
      responsibilities: [
        "Developed software projects spanning Python, web development, and database systems",
        "Participated in coding challenges, hackathons, and peer code reviews",
        "Maintained top academic standing with strong foundation in computing principles"
      ],
      technologies: ["Python", "C++", "Java", "SQL", "Web Development"]
    }
  ],
  footer: {
    years: "2024 - 2025",
    handcrafted: "Handcrafted by akankshya /",
    designedBy: "Designed by Taisia /",
    poweredBy: "Powered by React & Vite"
  }
};
