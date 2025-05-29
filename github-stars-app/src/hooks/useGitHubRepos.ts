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
    } catch (err) {
      setError("Failed to fetch repositories");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepos(page);
  }, [page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  }

  return {repos, loading, error, loadMore, page}
};

export default useGitHubRepos;