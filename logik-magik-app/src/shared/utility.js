export const sortChapters = unsortedChapters => {
    if(!unsortedChapters || !unsortedChapters.length)
        return [];
    unsortedChapters.sort((a, b) => a.index-b.index);
    return unsortedChapters;       
}