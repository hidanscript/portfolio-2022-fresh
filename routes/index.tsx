/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { Handlers, PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import { Repository } from "../utils/interface.ts";
import { mapRepositoryList } from "../utils/mapper.ts";
import { sortRepositoriesByStars } from "../utils/sorter.ts";

// Islands
import Hero from "../components/Hero.tsx";
import AboutMe from "../components/AboutMe.tsx";
import WorkExperience from "../components/WorkExperience.tsx";
import Repositories from "../components/Repositories.tsx";
import ContactForm from "../islands/ContactForm.tsx";
import Footer from "../components/Footer.tsx";

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

const TITLE = "Home";
const DESCRIPTION = "David Marcano - Full-stack developer";

export default function Home({ data, url }: PageProps) {
  return (
    <>
      <Head>
        <title>Home</title>
        <link href="globals.css" rel="stylesheet" />
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url.href} />
      </Head>

      <div class={tw`flex flex-col min-h-screen`}>
        <Hero />
        <AboutMe />
        <WorkExperience />
        <Repositories repos={data} />
        <ContactForm />
        <Footer />
      </div>
    </>
  );
}
