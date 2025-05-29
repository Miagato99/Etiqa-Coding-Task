import axios from "axios";
import { Repository,GitHubResponse } from "../types";

const GITHUB_API_URL = "https://api.github.com/search/repositories";

export const fetchGitHubRepos = async (
  page: number,
  perPage: number = 10
): Promise<Repository[]> => {
  const baseDate = new Date("2024-07-05"); // This is 10 days before 2024-07-15
  const formattedDate = baseDate.toISOString().split("T")[0];

  const response = await axios.get<GitHubResponse>(
    `${GITHUB_API_URL}?q=created:>${formattedDate}&sort=stars&order=desc&page=${page}&per_page=${perPage}`
  );
  return response.data.items;
};
