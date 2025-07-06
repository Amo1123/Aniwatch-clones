const BASE_URL = 'https://chill-anime.vercel.app/'; // Aniwatch API をローカルで起動している場合

// 🔹 アニメIDからエピソード一覧を取得
export async function getEpisodes(animeId: string) {
  try {
    const res = await fetch(`${BASE_URL}/anime/episodes/${animeId}`);
    if (!res.ok) throw new Error('エピソード取得に失敗しました');
    const data = await res.json();
    return data; // 配列形式で返ってくる
  } catch (error) {
    console.error('getEpisodes error:', error);
    return [];
  }
}

// 🔹 エピソードIDから動画ストリームURLを取得
export async function getStreamUrl(episodeId: string) {
  try {
    const res = await fetch(`${BASE_URL}/anime/episode-src?id=${episodeId}`);
    if (!res.ok) throw new Error('動画URL取得に失敗しました');
    const data = await res.json();
    return data.sources?.[0]?.url || null;
  } catch (error) {
    console.error('getStreamUrl error:', error);
    return null;
  }
}
