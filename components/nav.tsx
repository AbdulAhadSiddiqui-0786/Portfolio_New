"use client"

import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

export const Nav = () => {
  const [activeSection, setActiveSection] = useState("about")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.5 },
    )

    const sections = document.querySelectorAll("section[id]")
    sections.forEach((section) => observer.observe(section))

    return () => sections.forEach((section) => observer.unobserve(section))
  }, [])

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-16 w-max">
        {navItems.map((item) => (
          <li key={item.name}>
            <a
              className={cn(
                "group flex items-center py-3 active",
                activeSection === item.href.substring(1) ? "text-teal-300" : "text-slate-500 hover:text-slate-200",
              )}
              href={item.href}
            >
              <span
                className={cn(
                  "mr-4 h-px w-8 transition-all group-hover:w-16 group-hover:bg-slate-200",
                  activeSection === item.href.substring(1) ? "w-16 bg-teal-300" : "bg-slate-600",
                )}
              ></span>
              <span className="text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                {item.name}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
