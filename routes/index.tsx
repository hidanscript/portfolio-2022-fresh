/** @jsx h */
import { h } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Repository } from "../utils/interface.ts";
import { mapRepositoryList } from "../utils/mapper.ts";
import { sortRepositoriesByStars } from "../utils/sorter.ts";

// Islands
import Hero from "../islands/Hero.tsx";
import AboutMe from "../islands/AboutMe.tsx";
import WorkExperience from "../islands/WorkExperience.tsx";
import Repositories from "../islands/Repositories.tsx";
import ContactForm from "../islands/ContactForm.tsx";
import Footer from "../islands/Footer.tsx";

export const handler: Handlers = {
  async GET(_, ctx) {
    const resp = await fetch('https://api.github.com/users/hidanscript/repos', {
      headers: {
        authorization: "token " + Deno.env.get("GITHUB_ACCESS_TOKEN")
      }
    });
    if (resp.status === 404) {
      return ctx.render(null);
    }
    let repos: Repository[] = await resp.json();
    repos = sortRepositoriesByStars(repos);
    repos = mapRepositoryList(repos.slice(0, 3));
    return ctx.render(repos);
  }
}

export default function Home({ data }: PageProps) {
  return (
    <div>
      <head>
        <title>Home</title>
        <link href="globals.css" rel="stylesheet" />
      </head>

      <Hero />
      <AboutMe />
      <WorkExperience />
      <Repositories repos={data} />
      <ContactForm />
      <Footer />

    </div>
  );
}
