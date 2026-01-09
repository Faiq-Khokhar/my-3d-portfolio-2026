"use client";
import React, { useEffect, useState } from "react";
import { DiMongodb, DiNginx, DiNpm, DiPostgresql, DiVim } from "react-icons/di";
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaEnvelope,
  FaGit,
  FaGithub,
  FaHtml5,
  FaLinkedin,
  FaLinux,
  FaNodeJs,
  FaPhone,
  FaReact,
  FaVuejs,
  FaYarn,
} from "react-icons/fa6";
import { RiFirebaseFill, RiTailwindCssFill } from "react-icons/ri";
import {
  SiExpress,
  SiJavascript,
  SiKubuntu,
  SiPrettier,
  SiTypescript,
  SiVercel,
  SiVscodium,
} from "react-icons/si";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
// @ts-ignore
import "@splidejs/react-splide/css";
import { TbTerminal2 } from "react-icons/tb";

const CONTACT_LINKS = [
  {
    name: "Email",
    content: "faiq.khokhar06@gmail.com",
    href: "mailto:faiq.khokhar06@gmail.com",
    icon: <FaEnvelope />,
  },
  {
    name: "Phone",
    content: "+923249419774",
    href: "https://wa.me/923249419774",
    icon: <FaPhone />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/m-faiq-khokhar/",
    content: "/m-faiq-khokhar",
    icon: <FaLinkedin />,
  },
  {
    name: "GitHub",
    href: "https://github.com/Faiq-Khokhar",
    content: "/Faiq-Khokhar",
    icon: <FaGithub />,
  },
];

const TOOLS = [
  { name: "JavaScript", content: "High-level language I bend to my will.", icon: <SiJavascript size={50} color="#f0db4f" /> },
  { name: "TypeScript", content: "Safety net for large builds.", icon: <SiTypescript size={50} color="#007acc" /> },
  { name: "HTML", content: "Semantic foundations first.", icon: <FaHtml5 size={50} color="#e34c26" /> },
  { name: "CSS", content: "Layouts without the tears.", icon: <FaCss3 size={50} color="#563d7c" /> },
  { name: "Nodejs", content: "APIs and tooling backbone.", icon: <FaNodeJs size={50} color="#6cc24a" /> },
  { name: "React.js", content: "Componentized everything.", icon: <FaReact size={50} color="#61dafb" /> },
  { name: "Docker", content: "Parity across machines.", icon: <FaDocker size={50} color="#2496ed" /> },
  { name: "NginX", content: "Lean edge routing.", icon: <DiNginx size={50} color="#008000" /> },
  { name: "Vue.js", content: "When the job fits Vue.", icon: <FaVuejs size={50} color="#41b883" /> },
  { name: "Express.js", content: "Minimal APIs in minutes.", icon: <SiExpress size={50} color="#fff" /> },
  { name: "PostgreSQL", content: "Relational workhorse.", icon: <DiPostgresql size={50} color="#336791" /> },
  { name: "MongoDB", content: "Documents when flexible schema wins.", icon: <DiMongodb size={50} color="#4db33d" /> },
  { name: "Tailwind CSS", content: "Utility-first speed.", icon: <RiTailwindCssFill size={50} color="#06b6d4" /> },
  { name: "Firebase", content: "Fast prototypes with auth + data.", icon: <RiFirebaseFill size={50} color="#FFCA28" /> },
  { name: "Git", content: "History without regrets.", icon: <FaGit size={50} color="#f05032" /> },
  { name: "GitHub", content: "Home base for collab.", icon: <FaGithub size={50} color="#fff" /> },
  { name: "VS Code", content: "Everyday editor muscle memory.", icon: <SiVscodium size={50} color="#007acc" /> },
  { name: "VIM", content: "When modal editing is faster.", icon: <DiVim size={50} color="#fff" /> },
  { name: "Prettier", content: "Keep the bikeshedding away.", icon: <SiPrettier size={50} color="#f7b93c" /> },
  { name: "NPM", content: "Packages all day.", icon: <DiNpm size={50} color="#CB3837" /> },
  { name: "Yarn", content: "Lockfile serenity.", icon: <FaYarn size={50} color="#2C8EBB" /> },
  { name: "Vercel", content: "Ship frontends fast.", icon: <SiVercel size={50} color="#fff" /> },
  { name: "Linux", content: "Stable dev base.", icon: <FaLinux size={50} color="#fff" /> },
  { name: "Kubuntu", content: "Clean KDE workflows.", icon: <SiKubuntu size={50} color="#0077C4" /> },
  { name: "Terminal", content: "CLI first mindset.", icon: <TbTerminal2 size={50} color="#fff" /> },
  { name: "AWS", content: "Infra that scales.", icon: <FaAws size={50} color="#3f51b5" /> },
];

function Page() {
  const [toolsLoaded, setToolsLoaded] = useState(false);

  useEffect(() => {
    setToolsLoaded(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 text-zinc-200 pt-20 lg:pt-24 pb-16">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 lg:gap-9">
        <aside className="w-full xl:max-w-1/3 xl:col-span-1 xl:justify-self-start">
          <div className="p-5 sm:p-7 lg:p-8 rounded-2xl border border-zinc-700/70 bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md shadow-lg">
            <div className="flex flex-col sm:flex-row xl:flex-col items-center gap-4 sm:gap-6">
              <div className="flex justify-center items-center w-full max-w-[180px] bg-zinc-800 rounded-xl p-4 sm:p-5">
                <img
                  className="rounded-full w-[110px] sm:w-[130px] md:w-[150px] xl:w-[170px] aspect-square bg-zinc-800 shadow-inner"
                  alt="me"
                  src="/assets/me.jpg"
                />
              </div>
              <div className="flex flex-col gap-2 items-center text-center sm:items-start sm:text-left xl:items-center xl:text-center">
                <p className="text-lg sm:text-xl md:text-2xl">M. Faiq Khokhar</p>
                <div className="text-[11px] sm:text-xs bg-zinc-700 w-fit px-3 py-1 rounded-full">
                  Sr. Full Stack Engineer
                </div>
              </div>
            </div>
            <div className="mt-8">
              <hr className="my-6 border-zinc-700" />
              <ul className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-1 gap-3">
                {CONTACT_LINKS.map((link) => (
                  <li key={link.name}>
                    <a
                      className="flex items-center px-3 gap-3 w-full h-14 border-zinc-700 bg-zinc-800 hover:border-zinc-600 border rounded-md transition-all hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-500"
                      href={link.href}
                    >
                      <div className="w-8 flex items-center justify-center text-lg">
                        {link.icon}
                      </div>
                      <div className="flex flex-col">
                        <div className="text-sm sm:text-base">{link.name}</div>
                        <div className="text-xs text-zinc-500 truncate">
                          {link.content}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </aside>

        <main className="w-full xl:max-w-2/3 xl:col-span-2 xl:justify-self-end">
          <div className="p-4 sm:p-6 lg:p-8 border border-zinc-700/70 rounded-2xl bg-gradient-to-b from-zinc-900/70 via-black/50 to-black/30 backdrop-blur-md shadow-lg space-y-6 sm:space-y-8">
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl">About me</h1>
              <p className="leading-relaxed text-sm sm:text-base text-zinc-200">
                Hey there! I&apos;m Faiq K., a Fullstack developer passionate about creating meaningful digital experiences. With great in Web development, I thrive on turning ideas into reality through coding and design. My journey began with a fascination for technology and a drive to make a positive impact.
              </p>
              <p className="leading-relaxed text-sm sm:text-base text-zinc-200">
                When I&apos;m not coding, you can find me playing games, cricket, football, exploring new technologies, or sipping coffee while brainstorming my next project.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl">Stuff I use</h2>
              <div>
                {!toolsLoaded ? (
                  <div className="h-[120px] bg-zinc-800/40 rounded-lg animate-pulse" />
                ) : (
                  <Splide
                  options={{
                    type: "loop",
                    interval: 2200,
                    autoplay: true,
                    pagination: false,
                    speed: 1200,
                    perPage: 4,
                    perMove: 1,
                    gap: "1.25rem",
                    breakpoints: {
                      1280: { perPage: 3 },
                      1024: { perPage: 2 },
                      768: { perPage: 2 },
                      640: { perPage: 1 },
                    },
                    rewind: true,
                    easing: "cubic-bezier(0.25, 1, 0.5, 1)",
                    arrows: false,
                  }}
                    aria-label="Tools"
                  >
                    {TOOLS.map((tool) => (
                      <SplideSlide key={tool.name}>
                        <div className="flex flex-col rounded-lg border border-zinc-700 bg-zinc-800 p-4 sm:p-5 justify-center items-center h-[170px] sm:h-[190px] md:h-[200px] text-center gap-2 shadow-md">
                          <div className="mb-2">{tool.icon}</div>
                          <div className="text-base sm:text-lg">{tool.name}</div>
                          <div className="text-xs sm:text-sm text-zinc-500 leading-snug">
                            {tool.content}
                          </div>
                        </div>
                      </SplideSlide>
                    ))}
                  </Splide>
                )}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default Page;
