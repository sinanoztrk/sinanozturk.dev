import axios from "axios";
import { GithubRepository } from "./GithubRepository.types";

export const GithubService = {
  getRepositories: async (): Promise<GithubRepository[]> => {
    const response = await axios.get<GithubRepository[]>(
      "https://api.github.com/users/sinanoztrk/repos"
    );
    return response.data;
  },
};
