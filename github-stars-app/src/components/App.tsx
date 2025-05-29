import React from "react";
import RepoList from "./RepoList";

const App: React.FC = () => {
  return (
    <div className="container">
      <h1>Trending Repos (The Last 10 Days)</h1>
      <RepoList />
    </div>
  );
};

export default App;