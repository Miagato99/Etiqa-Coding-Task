import React from 'react';

const Header: React.FC = () => {
    return (
        <header className="app-header">
            <h1>Trending Repos (The Last 10 Days)</h1>
            <p className="subtitle">Discover the most starred GitHub repositories from the past 10 days</p>
        </header>
    )
};

export default Header;