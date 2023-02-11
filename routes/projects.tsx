/** @jsx h */
/** @jsxFrag Fragment */
import { h, Fragment } from "preact";
import { PageProps } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";
import { tw } from "@twind";
import Hero from "../components/Hero.tsx";
import Arrow from "../components/Arrow.tsx";
import Projects from "../components/Projects.tsx";
import Footer from "../components/Footer.tsx";

const TITLE = "David Marcano - Full-stack developer - Portfolio";
const DESCRIPTION = "David Marcano - Fullstack developer";

export default function Home({ data, url }: PageProps) {
  return (
    <>
      <Head>
        <title>{TITLE}</title>
        <link href="globals.css" rel="stylesheet" />
        <meta name="description" content={DESCRIPTION} />
        <meta property="og:title" content={TITLE} />
        <meta property="og:description" content={DESCRIPTION} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url.href} />
      </Head>

      <div class={tw`flex flex-col min-h-screen`}>
        <Hero minimal={true} />
        <Arrow />
        <Projects />
        <Footer />
      </div>
    </>
  );
}
