// /app/anime/[id]/page.tsx
import { getEpisodes } from '@/lib/aniwatch';
import Link from 'next/link';

export default async function AnimeDetailPage({ params }: { params: { id: string } }) {
  const episodes = await getEpisodes(params.id);

  return (
    <main className="p-4">
      <h1 className="text-2xl font-bold mb-4">エピソード一覧</h1>
      <ul className="space-y-2">
        {episodes.map((ep: any) => (
          <li key={ep.id}>
            <Link href={`/watch/${ep.id}`} className="text-blue-500 hover:underline">
              {ep.title || `Episode ${ep.number}`}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
