import { Repository } from "./interface.ts";

export function sortRepositoriesByStars (repositories: Repository[]): Repository[] {
    return repositories.sort((a, b) => b.stargazers_count - a.stargazers_count);
}