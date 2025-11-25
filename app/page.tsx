"use client"

import { useState } from "react"
import Link from "next/link"
import { Nav } from "@/components/nav"
import { SocialLinks } from "@/components/social-links"
import { ContactModal } from "@/components/contact-modal"
import { ArrowUpRight, LinkIcon } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Rugas-ORM",
    description:
      "A production-ready Order & Resource Management system built with the MERN stack. Features include user authentication, dark/light mode toggle, real-time dashboard UI, and CRUD operations for products, customers, and orders.",
    imageUrl: "/images/rugas_orm.png",
    tags: ["MERN", "MongoDB", "React", "Express.js", "Tailwind CSS", "JWT"],
    demoLink: "https://rugas-orm-demo-abdul.vercel.app/",
    detailsLink: "https://github.com/AbdulAhadSiddiqui-0786/rugas-orm-demo/blob/main/README.md",
  },
  {
    id: 2,
    title: "YouTube Clone",
    description:
      "A full-stack video sharing platform inspired by YouTube. Features include user authentication, video uploads via URL, channel management, likes, comments, and subscriptions.",
    imageUrl: "/images/youtube-clone-banner.png",
    tags: ["React", "Vite", "Tailwind CSS", "Node.js", "Express", "MongoDB", "JWT"],
    demoLink: "https://ytcloneabd.vercel.app",
    detailsLink: "https://github.com/AbdulAhadSiddiqui-0786/Youtube-clone/blob/main/README.md",
  },
  {
    id: 3,
    title: "Shoppy-globe",
    description:
      "A full-stack e-commerce web app where users can browse products from a dynamic API, add items to the cart, and view real-time total pricing. Built for smooth shopping experience.",
    imageUrl: "/images/shoppy-globe-banne.png",
    tags: ["React", "Redux", "Tailwind CSS", "REST API", "react-router-dom"],
    demoLink: "https://shoppy-globe-gray-five.vercel.app",
    detailsLink: "https://github.com/AbdulAhadSiddiqui-0786/ShoppyGlobe/blob/main/README.md",
  },
  {
    id: 4,
    title: "Object Detection",
    description:
      "An object detection project creates a system to identify and classify objects in images or video using machine learning models like CNNs.",
    imageUrl: "/images/Object_Detection.png",
    tags: ["Python", "Tkinter", "Open-cv", "Numpy"],
    demoLink: "https://drive.google.com/uc?export=download&id=1F4RVgsaiE9MpSlRLyxQ1v9meY5C84LjV",
    detailsLink: "https://github.com/AbdulAhadSiddiqui-0786/Object-Detection/blob/main/README.md",
  },
  {
    id: 5,
    title: "Treasured Fragrances – Product Showcase & Admin Panel",
    description:
      "A MERN-based product showcase website built for a paid client, featuring a modern UI with Tailwind CSS and shadcn/ui. Users can browse fragrance products and directly redirect to WhatsApp for purchase inquiries. Includes a secure admin dashboard where the client can add, update, and delete products with real-time updates.",
    imageUrl: "/images/Treasured_Fragrances.png",
    tags: ["MERN", "React", "Tailwind CSS", "shadcn/ui", "Node.js", "Express", "MongoDB"],
    demoLink: "https://treasuredfragrances.in/",
    detailsLink: "https://github.com/AbdulAhadSiddiqui-0786/treasuredfragrances"
  }
]

const skills = [
  "JavaScript (ES6+)",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Express",
  "MongoDB",
  "Tailwind CSS",
  "Python",
  "Django",
  "Git",
]

const certifications = [
  {
    title: "Artificial Intelligence - AI",
    issuer: "United University,IBM",
    link: "https://uniteduniversity.skillsnetwork.site/certificates/403ffded-3768-4155-99cd-9bf50bead0ba",
    date: "2025",
  },
  {
    title: "NSDC Full Stack Development",
    issuer: "SCHOLIVERSE EDUCARE PRIVATE LIMITED",
    link: "https://trainings.internshala.com/s/v/3636441/b5222566",
    date: "2025",
  },

  {
    title: "Full Stack Development" ,
    issuer: "Internshala",
    link: "https://trainings.internshala.com/s/v/3635996/b7878ef5",
    date: "2025",
  },
  {
    title: "Data Visualization",
    issuer: "IBM",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/89e25240266c48f78cd2385c40b6db28",
    date: "2025",
  },

  {
    title: "Data Science Foundations",
    issuer: "Great Learning",
    link: "https://olympus.mygreatlearning.com/courses/13680/certificate?pb_id=581",
    date: "2023",
  },
  {
    title: "Data Science 101",
    issuer: "IBM",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/b10624f3f6b948d18754ecf9a6dd1184#",
    date: "2022",
  },

  {
    title: "Introduction to Python",
    issuer: "IBM",
    link: "https://courses.ibmcep.cognitiveclass.ai/certificates/5537ea7b4d724fa286f81f3947e5a11b",
    date: "2022",
  },
]

export default function Home() {
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <ContactModal open={contactOpen} onOpenChange={setContactOpen} />

      <div className="lg:flex lg:justify-between lg:gap-4">
        {/* Header / Sidebar */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
              <Link href="/">Abdul Ahad Siddiqui</Link>
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-200 sm:text-xl">
              Full Stack Web Developer
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-400">
              I build accessible, pixel-perfect, and performant web experiences using the MERN stack.
            </p>
            <Nav />
          </div>
          <SocialLinks />
        </header>

        {/* Main Content */}
        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          {/* About Section */}
          <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">About</h2>
            </div>
            <div className="space-y-4 text-slate-400">
              <p>
                Hello! I’m <span className="text-slate-200">Abdul Ahad Siddiqui</span>, a passionate Full Stack Web
                Developer. My journey began with a curiosity for how things work on the web, which evolved into a career
                building robust applications using the <span className="font-medium text-slate-200">MERN stack</span>{" "}
                (MongoDB, Express, React, Node.js).
              </p>
              <p>
                I thrive on solving complex problems and creating intuitive, user-friendly interfaces. Whether it's
                deploying a <span className="text-teal-300">scalable backend</span> or crafting a{" "}
                <span className="text-teal-300">beautiful frontend</span> with Tailwind CSS, I enjoy every step of the
                development process.
              </p>
              <p>
                When I'm not coding, you'll find me exploring AI tools, experimenting with new UI libraries, or learning
                about the latest developments in tech.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Skills">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Skills</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 border border-teal-400/20 hover:border-teal-300/50 hover:bg-teal-400/15 transition-all duration-200"
                >
                  {skill}
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section
            id="projects"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Selected projects"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Projects</h2>
            </div>
            <div className="group/list">
              {projects.map((project) => (
                <div
                  key={project.id}
                  className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50 mb-12 last:mb-0"
                >
                  <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                  <header
                    className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                    aria-label="Project Image"
                  >
                    <div className="relative aspect-video w-full overflow-hidden rounded border border-slate-200/10 bg-slate-800 shadow-lg group-hover:shadow-xl group-hover:border-slate-200/20 transition-all duration-300">
                      <img
                        src={project.imageUrl || "/placeholder.svg"}
                        alt={project.title}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                  </header>
                  <div className="z-10 sm:col-span-6">
                    <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                        <a
                          className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors duration-200"
                          href={project.demoLink}
                          target="_blank"
                          rel="noreferrer noopener"
                          aria-label={`${project.title} (opens in a new tab)`}
                        >
                          <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                          <span>
                            {project.title}
                            <span className="inline-block">
                              <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1" />
                            </span>
                          </span>
                        </a>
                      </div>
                    </h3>
                    <p className="mt-2 text-sm leading-normal text-slate-400">{project.description}</p>
                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                      {project.tags.map((tag) => (
                        <li key={tag} className="mr-1.5 mt-2">
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 border border-teal-400/20 transition-all duration-200">
                            {tag}
                          </div>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex gap-4">
                      <a
                        href={project.detailsLink}
                        target="_blank"
                        rel="noreferrer"
                        className="text-xs font-medium text-slate-300 hover:text-teal-300 flex items-center gap-1 z-20 relative transition-colors duration-200"
                      >
                        <LinkIcon className="w-3 h-3" /> Source Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <a
                className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold group transition-colors duration-200"
                aria-label="View Full Project Archive"
                href="https://github.com/AbdulAhadSiddiqui-0786"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View Full Project Archive
                  </span>
                  <span className="whitespace-nowrap">
                    <ArrowUpRight className="ml-1 inline-block h-4 w-4 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                  </span>
                </span>
              </a>
            </div>
          </section>

          {/* Certifications Section */}
          <section
            id="certifications"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
            aria-label="Certifications"
          >
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Certifications</h2>
            </div>
            <div>
              <ol className="group/list">
                {certifications.map((cert, index) => (
                  <li key={index} className="mb-12">
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:drop-shadow-lg"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label={cert.date}
                      >
                        {cert.date}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-base transition-colors duration-200"
                              href={cert.link}
                              target="_blank"
                              rel="noreferrer noopener"
                              aria-label={`${cert.title} (opens in a new tab)`}
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {cert.title}
                                <span className="inline-block">
                                  <ArrowUpRight className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 motion-reduce:transition-none ml-1" />
                                </span>
                              </span>
                            </a>
                          </div>
                          <div className="text-slate-500">{cert.issuer}</div>
                        </h3>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Contact">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
              <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">Contact</h2>
            </div>
            <div className="text-center md:text-left">
              <p className="mb-4 text-slate-400">
                I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll
                try my best to get back to you!
              </p>
              <button
                onClick={() => setContactOpen(true)}
                className="inline-flex items-center justify-center rounded border border-teal-300 px-6 py-3 text-sm font-medium text-teal-300 transition-all duration-200 hover:bg-teal-300/10 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900"
              >
                Say Hello
              </button>
            </div>
          </section>

          <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
            <p>
              Designed and built with <span className="text-slate-200">Next.js</span> and{" "}
              <span className="text-slate-200">Tailwind CSS</span>.
            </p>
            <p className="text-gray-600">
              &copy; 2025 Abdul'Portfolio  All rights reserved.
            </p>
          </footer>
        </main>
      </div>
    </div>
  )
}
