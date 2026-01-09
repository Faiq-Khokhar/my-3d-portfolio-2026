"use client";

import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { SectionHeader } from "./section-header";
import { cn } from "@/lib/utils";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { PROJECTS, SimpleProject } from "@/data/projects";

const tiltOptions = {
  max: 5,
  speed: 400,
  glare: true,
  "max-glare": 0.2,
  gyroscope: false,
};

const ProjectsSection = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsDesktop(
        e instanceof MediaQueryListEvent ? e.matches : media.matches
      );
    handler(media);
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const setup = () => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const distance = track.scrollWidth - section.clientWidth;
        ScrollTrigger.getById("projects-horizontal")?.kill();
        gsap.set(track, { x: 0 });
        if (distance <= 0) return;

        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            id: "projects-horizontal",
            trigger: section,
            start: "top 30%",
            end: () => `+=${distance + window.innerHeight}`,
            scrub: true,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      };

      setup();
      ScrollTrigger.addEventListener("refreshInit", setup);

      return () => {
        ScrollTrigger.removeEventListener("refreshInit", setup);
        ScrollTrigger.getById("projects-horizontal")?.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      className="relative max-w-7xl mx-auto px-4 md:px-8 py-16 md:py-24"
    >
      <SectionHeader
        id="projects"
        title="Projects"
        desc="Quick hits from my 69+ build lists."
      />
      <div
        ref={sectionRef}
        className="mt-10 overflow-x-hidden w-screen max-w-none -mx-[calc(50vw-50%)]"
      >
        <div
          ref={trackRef}
          className="flex gap-8 overflow-visible pb-6 snap-x snap-mandatory w-max"
        >
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.name}
              project={project}
              isDesktop={isDesktop}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

type ProjectCardProps = {
  project: SimpleProject;
  isDesktop: boolean;
};

const imageExtensions: Record<string, string> = {
  jiniz: "jpg",
};

const ProjectCard = ({ project, isDesktop }: ProjectCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    import("vanilla-tilt").then(({ default: VanillaTilt }: any) => {
      VanillaTilt.init(cardRef.current, tiltOptions);
    });
  }, []);

  const imageSrc = `/assets/projects-screenshots/${project.imageKey}.${
    imageExtensions[project.imageKey] ?? "png"
  }`;

  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "overflow-hidden rounded-3xl snap-start link",
        "flex-shrink-0"
      )}
      style={{
        width: "min(90vw, 38rem)",
        maxWidth: isDesktop ? "calc(100vw - 2rem)" : "calc(100vw - 4rem)",
        minWidth: "260px",
        flex: "1 0 auto",
        WebkitMaskImage: "-webkit-radial-gradient(white, black)",
      }}
    >
      <div
        ref={cardRef}
        className={cn(
          "relative p-6 flex flex-col justify-between max-w-full rounded-3xl",
          "h-[20rem] sm:h-[22rem] md:h-[26rem]",
          "shadow-lg transition-transform duration-300 hover:-translate-y-2",
          "[transform-style:preserve-3d] [transform:perspective(1000px)] overflow-hidden"
        )}
        style={{
          background: `linear-gradient(90deg, ${project.gradient[0]} 0%, ${project.gradient[1]} 100%)`,
        }}
      >
        <Image
          src="/assets/project-bg.svg"
          alt="project"
          className="absolute top-0 left-0 w-full h-full opacity-20 rounded-3xl object-cover pointer-events-none"
          fill
        />
        <Image
          src={imageSrc}
          alt={project.name}
          className={cn(
            "absolute top-0 bottom-auto left-auto rounded-xl shadow-xl object-contain",
            "w-[12rem] sm:w-[15rem] md:w-[17rem]",
            "rotate-[-22.5deg]",
            "h-auto min-w-0 max-h-none",
            "z-0"
          )}
          sizes="(min-width: 1024px) 272px, (min-width: 640px) 240px, 192px"
          priority={false}
          style={{ right: "1.5rem" }}
          width={400}
          height={400}
        />
        {!isDesktop && (
          <div
            className="absolute bottom-0 left-0 w-full h-20"
            style={{
              background: `linear-gradient(0deg, ${project.gradient[0]} 10%, rgba(0,0,0,0) 100%)`,
            }}
          />
        )}
        <h1
          className="z-10 text-xl font-medium sm:text-2xl text-white"
          style={{ transform: "translateZ(3rem)" }}
        >
          {project.name}
        </h1>
        <div
          className={cn(
            "w-1/2 h-full absolute left-24 top-0 sm:flex items-center hidden",
            "rotate-[-22.5deg]"
          )}
          style={{ transform: "rotate(-22.5deg) translateZ(3rem)" }}
        >
          <div className="flex flex-col pb-8">
            {project.tech.map((el, i) => (
              <Image
                className={`${i % 2 === 0 && "ml-16"} mb-4`}
                src={`/assets/tech/${el}.svg`}
                alt={el}
                height={45}
                width={45}
                key={el}
              />
            ))}
          </div>
        </div>
        <h2
          className="z-10 text-sm font-normal tracking-wide text-white"
          style={{ transform: "translateZ(0.8rem)" }}
        >
          {project.description}
        </h2>
      </div>
    </a>
  );
};

export default ProjectsSection;
