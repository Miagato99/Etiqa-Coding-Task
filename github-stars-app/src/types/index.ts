export interface Owner {
    login: string;
    avatar_url: string;
}

export interface Repository {
    id : number;
    name: string;
    description: string | null;
    stargazers_count: number;
    owner: Owner;
    html_url: string;
}

export interface GitHubResponse {
    total_count: number;
    items: Repository[];
    incomplete_results: boolean;
}