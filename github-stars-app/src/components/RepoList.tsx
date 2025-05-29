import React, { FC, UIEvent, useCallback } from "react";
import RepoItem from "./RepoItem";
import LoadingIndicator from "./Loading";
import ErrorMessage from "./ErrorMessage";
import useGitHubRepos from "../hooks/useGitHubRepos";

const RepoList: FC = () => {
  const { repos, loading, error, loadMore } = useGitHubRepos();

  const handleScroll = useCallback(
    (event: UIEvent<HTMLDivElement>) => {
      const { scrollTop, scrollHeight, clientHeight } = event.currentTarget;
      if (scrollHeight - scrollTop <= clientHeight + 100 && !loading) {
        loadMore();
      }
    },
    [loading, loadMore]
  );
  return (
    <div
      onScroll={handleScroll}
      style={{ overflowY: "auto", maxHeight: "80vh" }}
    >
      <div className="repo-list">
        {repos.map((repo) => (
          <RepoItem key={repo.id} repo={repo} />
        ))}
      </div>

      {loading && <LoadingIndicator />}
      {error && <ErrorMessage message={error} />}
    </div>
  );
};

export default RepoList;
