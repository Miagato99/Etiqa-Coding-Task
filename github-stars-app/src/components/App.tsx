import React from "react";
import RepoList from "./RepoList";
import Header from "./Header";
import ErrorBoundary from "./ErrorBoundary";

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <div className="container">
        <Header />
        <main>
          <RepoList />
        </main>
      </div>
    </ErrorBoundary>
  );
};

export default App;