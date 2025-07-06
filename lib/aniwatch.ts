export async function getEpisodes(animeId: string) {
  const res = await fetch(`http://localhost:4000/anime/episodes/${animeId}`);
  return res.json();
}

export async function getStreamUrl(episodeId: string) {
  const res = await fetch(`http://localhost:4000/anime/episode-src?id=${episodeId}`);
  const data = await res.json();
  return data.sources?.[0]?.url;
}
