import { useEffect, useState } from "react";
import { Repository } from "../types";
import { fetchGitHubRepos } from "../services/githubAPI";
const useGitHubRepos = () => {
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState<number>(1);
  const loadRepos = async (page: number) => {
    setLoading(true);
    setError(null);

    try {
      const fetchRepos = await fetchGitHubRepos(page);
      setRepos((prevRepos) => [...prevRepos, ...fetchRepos]);
    } catch (err: unknown) {
      console.error("Error fetching repositories:", err);

      //Type guard for axios error
      if (err && typeof err === "object" && "response" in err) {
        const axiosError = err as {
          response?: { status?: number };
          message?: string;
        };
        if (axiosError.response?.status === 403) {
          setError("GitHub API rate limit exceeded. Please try again later.");
        } else {
          setError("Failed to load repositories." + (axiosError.message || ""));
        }
      } else if (err instanceof Error) {
        setError ("Failed to load repositories: " + err.message);
      } else {
        setError("An unknown error occurred while fetching repositories.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepos(page);
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return { repos, loading, error, loadMore, page };
};

export default useGitHubRepos;
