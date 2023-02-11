import { Repository } from "./interface.ts";

export function mapRepository(repository: Repository): Repository {
  return {
    stargazers_count: repository.stargazers_count,
    html_url: repository.html_url,
    name: repository.name,
    description: repository.description,
    language: repository.language,
  };
}

export function mapRepositoryList(repositories: Repository[]): Repository[] {
  return repositories.map(mapRepository);
}
