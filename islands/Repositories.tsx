/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Container from "./Container.tsx";
import { CODE_COLORS } from "../utils/constants.ts";
import { Repository } from "../utils/interface.ts";

type RepositoriesProps = {
    repos: Repository[];
}

export default function Repositories ({ repos }: RepositoriesProps) {
    return (
        <Container>
            <h3 class={tw`text-2xl font-bold leading-7 mt-20 text-gray-900 sm:text-3xl sm:truncate`}>✨ Repositories</h3>
            
            { repos && repos.map((repo: Repository) => (
                <a
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                class={tw`block flex flex-col p-6 mt-6 max-w-screen bg-gray-100 rounded-lg border border-gray-200 shadow-md hover:bg-gray-200 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700`}
                >
                <div class={tw`flex justify-between items-center`}>
                    <h5 class={tw`mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white md:max-w-sm`}>{repo.name}</h5>
                    <p class={tw`text-sm dark:text-white py-1 px-4 rounded-full ${ CODE_COLORS[repo.language] || CODE_COLORS['default'] }`}>{repo.language}</p>
                </div>
                <p class={tw`font-normal text-gray-700 dark:text-gray-400`}>{repo.description}</p>
                <p class={tw`font-normal text-md mt-2 text-gray-400 dark:text-gray-400`}>⭐ {repo.stargazers_count}</p>
                </a>            
            )) }

            <p class={tw`text-center`} style={styles.showMore}><a href="https://github.com/hidanscript?tab=repositories" target="_blank">show more</a></p>            
        </Container>
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
    higherText: {
      marginTop: '2rem'
    },
    showMore: {
      cursor: 'pointer',
      color: '#86efac',
      fontSize: '1.2rem',
      fontWeight: 'bold',
      marginTop: 30,
    }
};