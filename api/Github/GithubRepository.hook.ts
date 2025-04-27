import { useQuery } from "@tanstack/react-query";
import { GithubService } from "./GithubRepository.api";

export const useGithubRepositoriesQuery = () => {
  return useQuery({
    queryKey: ["github-repositories"],
    queryFn: GithubService.getRepositories,
  });
};
