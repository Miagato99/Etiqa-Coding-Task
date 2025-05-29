export  const formatStarCount = (count:number): string => {
    if (count >= 1000) {
        return `${(count / 1000).toFixed(1)}k`;
    }
    return count.toString();
}

export const formatRepoDescription = (description: string | null): string => {
    return description ? description : "No description available";
}