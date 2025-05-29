import React, { useEffect, useState } from "react";
import RepoList from "./RepoList";
import LoadingIndicator from "./Loading";
import ErrorMessage from "./ErrorMessage";
import { fetchGitHubRepos } from "../services/githubAPI";

const App: React.FC = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        setLoading(true);
        const data = await fetchGitHubRepos();
        setRepos(data);
      } catch (err) {
        setError("Failed to fetch repositories");
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  if (loading) {
    return <LoadingIndicator />;
  }

  if (error) {
    return <ErrorMessage message={error} />;
  }
  return (
    <div className="app">
      <h1>Most Starred GitHub Repositories (Last 10 Days)</h1>
      <RepoList repos={repos} />
    </div>
  );
};

export default App;
