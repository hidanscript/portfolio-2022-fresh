/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { Handlers, PageProps } from "$fresh/server.ts";
import ContactForm from "../islands/ContactForm.tsx";

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
    repos.sort((a: any, b: any) => {
      if (a.stargazers_count > b.stargazers_count) {
        return -1;
      }
      if (a.stargazers_count < b.stargazers_count) {
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
        <a href="https://github.com/hidanscript" target="_blank" class={tw`bg-teal-500 hover:bg-white text-black py-2 px-4 rounded`} style={styles.button}>
          Github
        </a>
        <a href="https://linkedin.com/in/david-marcano/" target="_blank" class={tw`bg-teal-500 hover:bg-white text-black py-2 px-4 rounded ml-4`} style={styles.button}>
          Linkedin
        </a>
      </div>
      <div class={tw`p-4 mx-auto mb-10 bg-sky-500/50 text-xl h-screen bg-emerald-200`} style={styles.hero}>
        <div class={tw`p-4 mx-auto max-w-screen-lg bg-sky-500/50 text-xl`}>
          <h1 class={tw`text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate`}>David Marcano</h1>
          <p class={tw`text-base dark:text-white`}>Full-stack developer</p>
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

          <h3 class={tw`text-2xl font-bold leading-7 mt-10 text-gray-900 sm:text-3xl sm:truncate`}>Work experience</h3>

          <h4 class={tw`text-md font-bold mt-10 text-gray-900 m-0`}>👜 Alchemy (March, 2021 - July, 2022)</h4>
          <p class={tw`text-sm dark:text-white m-0`}>NodeJS Developer</p>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            Development, and implementation in NodeJS, MongoDB and Express.JS backend on FinTech applications, managing and processing loans, credit scores, payment schedules, etc.        
          </p>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            Development of frontend views with Nunjucks and SailsJS
          </p>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            Server mainteinance and linux oriented development.
          </p>

          <h4 class={tw`text-md font-bold mt-10 text-gray-900 m-0`}>👜 Wisboo (July, 2020 - March, 2021)</h4>
          <p class={tw`text-sm dark:text-white m-0`}>Fullstack Developer</p>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            Development and integration of views, templates, bug fixes, optimization, scalability and logic in Angular.js, using Javascript, SCSS and HTML, making requests with an REST API to the backend.
          </p>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            Development and integration of new modules, classes, bug fixes, query optimization and new functionalities using Ruby on Rails and Postgresql, creating and updating unit tests with RSpec
          </p>

          <h4 class={tw`text-md font-bold mt-10 text-gray-900 m-0`}>👜 Clarity S.A (July, 2019 - July, 2020)</h4>
          <p class={tw`text-sm dark:text-white m-0`}>Fullstack Developer</p>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            Development and maintenance of ERP system, laying out the whole software in ASP (Front-end) and managing queries, stored procedures, and performance in Microsoft SQL Server,
          </p>
          <p class={tw`text-base dark:text-white`} style={styles.text}>
            Scrum methodology to support the team effectively and quickly.
          </p>

          <h3 class={tw`text-2xl font-bold leading-7 mt-10 text-gray-900 sm:text-3xl sm:truncate`}>Repositories</h3>
          { data && data.map((repo: any) => (
            <a href={repo.html_url} target="_blank" class={tw`block flex flex-col p-6 mt-6 max-w-screen bg-gray-100 rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}>
              <div class={tw`flex justify-between items-center`}>
                <h5 class={tw`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white`}>{repo.name}</h5>
                <p class={tw`text-sm dark:text-white py-1 px-4 rounded-full ${ repo.language == 'JavaScript' ? 'bg-yellow-200' : 'bg-blue-200'}`}>{repo.language}</p>
              </div>
              <p class={tw`font-normal text-gray-700 dark:text-gray-400`}>{repo.description}</p>
              <p class={tw`font-normal text-md mt-2 text-gray-400 dark:text-gray-400`}>⭐ {repo.stargazers_count}</p>
            </a>            
          )) }

          <h3 class={tw`text-2xl font-bold leading-7 mt-20 text-gray-900 text-center sm:text-3xl sm:truncate`}>Contact</h3>
          <div class={tw`flex justify-center mt-10`}>
            <ContactForm />
          </div>
      </div>

      <footer class={tw`p-4 bg-gray-100 mt-6 rounded-lg shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800`}>
          <span class={tw`text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com/" class="hover:underline`}>David Marcano 2022<a />. All Rights Reserved.
          </span>
          <ul class={tw`flex flex-wrap items-center mt-3 text-sm text-gray-500 dark:text-gray-400 sm:mt-0`}>
              <li>
                  <a href="#" class={tw`mr-4 hover:underline md:mr-6`}>Contact</a>
              </li>
              <li>
                  <a href="#" class={tw`mr-4 hover:underline md:mr-6`}>Github</a>
              </li>
          </ul>
      </footer>
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
  },
};