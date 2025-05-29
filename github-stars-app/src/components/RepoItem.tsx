import React, { FC } from "react";

interface RepoItemProps {
  name: string;
  description: string;
  stars: number;
  owner: {
    username: string;
    avatarUrl: string;
  };
}

const RepoItem: FC<RepoItemProps> = ({ name, description, stars, owner }) => {
  return (
    <div className="repo-item">
      <img
        src={owner.avatarUrl}
        alt={`${owner.username}'s avatar`}
        className="repo-avatar"
      />
      <div className="repo-details">
        <h2 className="repo-name">{name}</h2>
        <p className="repo-description">{description}</p>
        <p className="repo-stars">⭐ {stars}</p>
        <p className="repo-owner">By: {owner.username}</p>
      </div>
    </div>
  );
};

export default RepoItem;
