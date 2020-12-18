export const getGifs = async (category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=qxxZiEOz8o7LPihZELKl0OutELiBkbU3&q=${encodeURI(category)}&limit=10`;
    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    })
    return gifs;
}