/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";
import Tags from "./tags/Tags.tsx";
import { PROJECTS } from "../utils/data.ts";

type projectCardProps = {
  title: string;
  imgSrc: string;
  description: string;
  tags: string[];
  github?: string;
  docs?: string;
  website?: string;
};

export default function Projects() {
  return (
    <Container>
      <h3
        class={tw`text-2xl font-bold leading-7 mt-20 sm:text-3xl sm:truncate`}
      >
        💡 Personal Projects
      </h3>
      <p class={tw`text-base text-white m-2 mt-14 mb-10`}>
        Here are some of my biggest personal projects. I've worked on these 
        during my free time, and I'm very proud of them. I hope you like them too!

        <br />
        <br />

        You can find all of my projects on my{" "}
        <a
          href="https://github.com/hidanscript"
          rel="noopener noreferrer"
          target="_blank"
          class={tw`text-blue-400 hover:text-white font-bold`}
        >
          github
        </a>
      </p>
      <div class={tw`mt-20`}>
        {PROJECTS.map((project, id) => {
            return (
            <ProjectCard
                key={id}
                title={project.title}
                imgSrc={project.imgSrc}
                description={project.description}
                tags={project.tags}
                github={project.github}
                docs={project.docs}
                website={project.website}
            />
            );
        })}
      </div>
    </Container>
  );
}

function ProjectCard({
  title,
  imgSrc,
  description,
  tags,
  github,
  docs,
  website,
}: projectCardProps) {
  return (
    <div class={tw`project-card mt-10 mb-3`}>
      <span class={tw`text-lg font-bold m-2`}>{title}</span>
      <img src={imgSrc} alt={title} class={tw`w-full mt-4 mb-4`} />
      <Tags tags={tags} />
      <p class={tw`text-base dark:text-white m-2 mt-6 mb-6`}>{description}</p>
      {github && (
        <a
          href={github}
          rel="noopener noreferrer"
          target="_blank"
          class={tw`text-blue-400 hover:text-white m-2 text-sm font-bold`}
        >
          Repo
        </a>
      )}
      {docs && (
        <a
          href={docs}
          rel="noopener noreferrer"
          target="_blank"
          class={tw`text-blue-400 hover:text-white m-2 text-sm font-bold`}
        >
          Docs
        </a>
      )}
      {website && (
        <a
          href={website}
          rel="noopener noreferrer"
          target="_blank"
          class={tw`text-blue-400 hover:text-white m-2 text-sm font-bold`}
        >
          Website
        </a>
      )}
    </div>
  );
}
