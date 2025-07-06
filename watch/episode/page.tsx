// /app/watch/[episodeId]/page.tsx
import { getStreamUrl } from '@/lib/aniwatch';
import ReactPlayer from 'react-player';

export default async function WatchPage({ params }: { params: { episodeId: string } }) {
  const videoUrl = await getStreamUrl(params.episodeId);

  return (
    <main className="p-4">
      <h1 className="text-xl font-bold mb-4">再生ページ</h1>
      {videoUrl ? (
        <div className="aspect-video">
          <ReactPlayer url={videoUrl} controls width="100%" height="100%" playing />
        </div>
      ) : (
        <p className="text-red-500">動画が取得できませんでした。</p>
      )}
    </main>
  );
}
