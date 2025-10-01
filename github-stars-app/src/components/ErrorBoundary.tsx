import React, { ReactNode, useState, useEffect } from 'react';

interface Props {
    children: ReactNode;
    fallback?: ReactNode;
}

const ErrorBoundary: React.FC<Props> = ({ children, fallback }) => {
    const [hasError, setHasError] = useState(false);
    // Set up a global error listener
    useEffect(() => {
        const handleError = (_error: ErrorEvent) => {
            setHasError(true);
        };

        window.addEventListener('error', handleError);
        return () => window.removeEventListener('error', handleError);
    }, []);

    if (hasError) {
        return fallback ? (
            <>{fallback}</>
        ) : (
            <div className="error-boundary">
                <h2>Something went wrong</h2>
                <button onClick={() => window.location.reload()}>Reload Page</button>
            </div>
        )
    }

    return <>{children}</>;
};

export default ErrorBoundary;