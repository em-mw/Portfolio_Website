import { Logo } from "@/once-ui/components";
//import { useMemo } from "react";

const person = {
  firstName: "Maximilian",
  lastName: "Werner",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Student at CRHS",
  avatar: "/images/Profile.png",
  email: "wermax2008@outlook.com",
  location: "America/Chicago", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Polish", "German"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: (
    <>
      I occasionally write about technology and share my thoughts about it
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "em-mw",
    icon: "github",
    link: "https://github.com/em-mw",
  },
  {
    name: "ErMax.Inc",
    icon: "github",
    link: "https://github.com/ErMax-Inc",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/company/once-ui/",
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
  //headline: , The Headline is generated in src/app/page.tsx
  featured: {
    display: true,
    title: <>Recent project: <strong className="ml-4">Air Purifier</strong></>,
    href: "/work/AirPurifier",
  },
  subline: (
    <>
      I'm {person.name}, a {person.role} at {person.company} where 
      <br />I am always inspired by technology.
      <br/><br/>After hours, I build like to build projects.
    </>
  ),
};

const about = {
  path: "/about",
  label: "About",
  title: `Learn more – About ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from ${person.location}`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: `mailto:${person.email}`,
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Hey, I am Max. I am mainly interested in programming and hardware projects. From an early age I have been always inspired
        by how things work and to this day I feel this is key aspect of who I am today.
      </>
    ),
  },

  work: {
    display: true, // set to false to hide this section
    title: "Work Experience",
    experiences: [
      {
        company: "Texas Childrens Hospital",
        timeframe: "June 2025 - July 2025",
        role: "Student Intern",
        achievements: [
          <>
            Designed and Fabricated Dip Coating Instrument
          </>,
          <>
            Researched and Developed 3D Vascular Sctructure Printing Method
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/PlaceHolder.png",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      //add more jobs here
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Education",
    institutions: [
      {
        name: "Cinco Ranch High School",
        description: <>2022 - 2026</>,
      },
      /*{
        name: "Build the Future",
        description: <>Studied online marketing and personal branding.</>,
      },*/
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Technical skills and Programming Languages",
    skills: [
      {
        title: "Python",
        description: <>One of my first languages and the language I am most comfortable with.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/about/pic2ascii.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/PlaceHolder.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
        imgDesc: [
          {
            imgText: "Learn More",
            imgLink: "https://github.com/ErMax-Inc/pic2ascii",
          },
          {
            imgText: "Main Project",
            imgLink: "https://github.com/ErMax-Inc/"
          }
        ],
      },
      {
        title: "Java",
        description: <>A language that I am still learning but somewhat proficent in</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/PlaceHolder.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
        imgDesc: [
          {
            imgText: "Learn More",
            imgLink: "https://github.com/ErMax-Inc/pic2ascii",
          },
          {
            imgText: "Main Project",
            imgLink: "https://github.com/ErMax-Inc/"
          }
        ],
      },
      {
        title: "Hardware Engineering",
        description: <>One of my latest hobbies that I hope to expand apon</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/PlaceHolder.png",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
        imgDesc: [
          {
            imgText: "Learn More",
            imgLink: "https://github.com/ErMax-Inc/pic2ascii",
          },
          {
            imgText: "Science Fair Project",
            imgLink: "https://github.com/ErMax-Inc/"
          }
        ],
      },
    ],
  },
};

const blog = {
  path: "/blog",
  label: "Blog",
  title: "My Posts:",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work = {
  path: "/work",
  label: "My Work",
  title: `Portfolio – ${person.name}`,
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
      src: "/images/PlaceHolder.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/PlaceHolder.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/PlaceHolder.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/PlaceHolder.png",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/PlaceHolder.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/PlaceHolder.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/PlaceHolder.png",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/PlaceHolder.png",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
