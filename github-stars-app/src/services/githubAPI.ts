import axios from "axios";
import { Repository, GitHubResponse } from "../types";
import { getLastTenDaysDateRange } from "../utils/dateUtils";

const GITHUB_API_URL = "https://api.github.com/search/repositories";

export const fetchGitHubRepos = async (
  page: number = 1,
  perPage: number = 10
): Promise<Repository[]> => {
  const { startDate } = getLastTenDaysDateRange();

  const response = await axios.get<GitHubResponse>(
    `${GITHUB_API_URL}?q=created:>${startDate}&sort=stars&order=desc&page=${page}&per_page=${perPage}`
  );
  return response.data.items;
};
