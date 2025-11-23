import { Github, Linkedin, Mail } from "lucide-react"

export const SocialLinks = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-teal-300 text-slate-400 transition-colors"
          href="https://github.com/AbdulAhadSiddiqui-0786"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="GitHub (opens in a new tab)"
        >
          <span className="sr-only">GitHub</span>
          <Github className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-teal-300 text-slate-400 transition-colors"
          href="https://www.linkedin.com/in/abdulahadsiddiqui0786/"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="LinkedIn (opens in a new tab)"
        >
          <span className="sr-only">LinkedIn</span>
          <Linkedin className="h-6 w-6" />
        </a>
      </li>
      <li className="mr-5 text-xs shrink-0">
        <a
          className="block hover:text-teal-300 text-slate-400 transition-colors"
          href="mailto:abdulahadsiddiqui23@gmail.com"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Email"
        >
          <span className="sr-only">Email</span>
          <Mail className="h-6 w-6" />
        </a>
      </li>
    </ul>
  )
}
