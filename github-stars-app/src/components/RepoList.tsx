import React, { FC, useEffect, useState, UIEvent } from "react";
import RepoItem from "./RepoItem";
import LoadingIndicator from "./Loading";
import ErrorMessage from "./ErrorMessage";
import useGitHubRepos from "../hooks/useGitHubRepos";

const RepoList: FC = () => {
  const { repos, loading, error, fetchMoreRepos } = useGitHubRepos();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (page > 1) {
      fetchMoreRepos(page);
    }
  }, [page, fetchMoreRepos]);

  const handleScroll = (event: UIEvent<HTMLDivElement>) => {
    const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
    if (scrollHeight - scrollTop <= clientHeight + 100 && !loading) {
      setPage((prevPage) => prevPage + 1);
    }
  };
  return (
    <div
      onScroll={handleScroll}
      style={{ overflowY: "auto", maxHeight: "80vh" }}
    >
      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
      {repos.map((repo) => (
        <RepoItem
          key={repo.id}
          repo = {repo}
        />
      ))}
    </div>
  );
};

export default RepoList;
