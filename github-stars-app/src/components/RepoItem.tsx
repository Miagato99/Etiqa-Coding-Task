import React, { FC } from "react";
import { Repository } from "../types";
import { formatStarCount, formatRepoDescription } from "../utils/formatters";

interface RepoItemProps {
  repo: Repository;
}

const RepoItem: FC<RepoItemProps> = ({ repo }) => {
  return (
    <div className="repo-item">
      <img
        src={repo.owner.avatar_url}
        alt={`${repo.owner.login}'s avatar`}
        className="repo-avatar"
      />
      <div className="repo-details">
        <h2 className="repo-name">{repo.name}</h2>
        <p className="repo-description">{formatRepoDescription(repo.description)}</p>
        <p className="repo-stars">⭐ {formatStarCount(repo.stargazers_count)}</p>
        <p className="repo-owner">By:{repo.owner.login}</p>
        <a
         href={repo.html_url}
         target="_blank"
         rel="noopener noreferrer"
         className="repo-link">
          View on GitHub

        </a>
      </div>
    </div>
  );
};

export default RepoItem;
