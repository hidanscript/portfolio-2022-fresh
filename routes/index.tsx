/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";

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
    let repos = await resp.json();
    console.log(repos);
    repos.sort((a: any, b: any) => {
      if (a.created_at > b.created_at) {
        return -1;
      }
      if (a.created_at < b.created_at) {
        return 1;
      }
      return 0;
    });
    repos = repos.slice(0, 3);
    return ctx.render(repos);
  }
}


export default function Home({ data }: PageProps) {
  return (
    <div>
      <head>
        <title>Home</title>
      </head>
      <div style={styles.navbar}>
        <button class={tw`bg-teal-500 hover:bg-white text-black py-2 px-4 rounded`} style={styles.button}>
          Documentation
        </button>
      </div>
      <div class={tw`p-4 mx-auto mb-10 bg-sky-500/50 text-xl h-screen bg-emerald-200`} style={styles.hero}>
        <div class={tw`p-4 mx-auto max-w-screen-lg bg-sky-500/50 text-xl`}>
          <h1 class={tw`text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate`}>David Marcano</h1>
          <p class={tw`text-base dark:text-white`}>Hello this is a text message on a ´fresh´ app.</p>          
        </div>
      </div>
      <div class={tw`p-4 mx-auto max-w-screen-sm mt-6 bg-sky-500/50 text-xl`}>
          <h3 class={tw`text-2xl font-bold leading-7 mt-6 text-gray-900 sm:text-3xl sm:truncate`}>About me</h3>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            Hi I'm David Ortiz Marcano, a software developer base in Argentina,
            I'm a passionate and hard-working person who loves to learn new things.
          </p>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            I'm a full-stack developer with a passion for building web applications.
            High proficiency in JavaScript, TypeScript, React, NodeJS, and MongoDB.
          </p>

          <h3 class={tw`text-2xl font-bold leading-7 mt-10 text-gray-900 sm:text-3xl sm:truncate`}>About me</h3>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            Hi I'm David Ortiz Marcano, a software developer base in Argentina,
            I'm a passionate and hard-working person who loves to learn new things.
          </p>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            I'm a full-stack developer with a passion for building web applications.
            High proficiency in JavaScript, TypeScript, React, NodeJS, and MongoDB.
          </p>

          <h3 class={tw`text-2xl font-bold leading-7 mt-10 text-gray-900 sm:text-3xl sm:truncate`}>Repositories</h3>
          { data && data.map((repo: any) => (
            <a href="#" class={tw`block p-6 mt-6 max-w-screen bg-gray-100 rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
              <h5 class={tw`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>{repo.name}</h5>
              <p class={tw`font-normal text-gray-700 dark:text-gray-400`}>{repo.description}</p>
              <p class={tw`font-normal text-md mt-2 text-gray-400 dark:text-gray-400`}>⭐ {repo.stargazers_count}</p>
            </a>            
          )) }

      </div>
    </div>
  );
}

const styles = {
  hero: {
    backgroundColor: '#86efac',
    display: 'flex',
    height: '50vh',
    justifyContent: 'center',
    alignItems: 'center',
  },
  navbar: {
    padding: '0.5rem 1rem',
    backgroundColor: '#86efac',
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  button: {
    border: '1px solid black'
  },
  text: {
    marginTop: '1rem'
  }
};