// /app/page.tsx
import { fetchAnimeList } from '@/lib/anilist';
import Link from 'next/link';

export default async function HomePage() {
  const animeList = await fetchAnimeList();

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">人気アニメ</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {animeList.map((anime) => (
          <Link key={anime.id} href={`/anime/${anime.id}`}>
            <div className="border rounded shadow hover:shadow-lg transition">
              <img
                src={anime.coverImage.large}
                alt={anime.title.romaji}
                className="w-full object-cover"
              />
              <p className="p-2 text-center font-semibold">{anime.title.romaji}</p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
