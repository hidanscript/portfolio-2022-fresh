/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import { CODE_COLORS } from "../utils/constants.ts";
import { Repository } from "../utils/interface.ts";
import Container from "./Container.tsx";

type RepositoriesProps = {
  repos: Repository[];
};

export default function Repositories({ repos }: RepositoriesProps) {
  return (
    <Container>
      <h3
        class={tw`text-2xl font-bold leading-7 mt-20 sm:text-3xl sm:truncate`}
      >
        ✨ Repositories
      </h3>

      {repos &&
        repos.map((repo: Repository) => (
          <a
            href={repo.html_url}
            target="_blank"
            rel="noopener noreferrer"
            class={tw`block flex  p-6 mt-6 max-w-screen bg-gray-800 rounded-lg border border-gray-900 shadow-md hover:bg-gray-900`}
            style={styles.repoCard}
          >
            <div class={tw`flex justify-between items-center`}>
              <h5
                class={tw`mb-2 text-2xl font-bold tracking-tight dark:text-white md:max-w-sm`}
              >
                {repo.name}
              </h5>
              <p
                class={tw`text-sm text-black py-1 px-4 rounded-full ${
                  CODE_COLORS[repo.language] || CODE_COLORS["default"]
                }`}
              >
                {repo.language}
              </p>
            </div>
            <p class={tw`font-normal text-gray-200`}>{repo.description}</p>
            <p class={tw`font-normal text-md mt-2 text-gray-400`}>
              ⭐ {repo.stargazers_count}
            </p>
          </a>
        ))}

      <p class={tw`text-center hover:text-underline`} style={styles.showMore}>
        <a
          href="https://github.com/hidanscript?tab=repositories"
          target="_blank"
        >
          show more
        </a>
      </p>
    </Container>
  );
}

const styles = {
  showMore: {
    cursor: "pointer",
    color: "#F8D03F",
    fontSize: "1.2rem",
    fontWeight: "bold",
    marginTop: 30,
  },
  repoCard: {
    backgroundColor: "#121212",
  },
};
