import Link from 'next/link';
import InfoPost from '@components/InfoPost';

export default function CardPost({ thumbnail, ...infoPost }) {
  return (
    <article className="bg-surface rounded-lg shadow-lg overflow-hidden">
      <Link href="/detail">
        <a>
          <img src={thumbnail} className="w-full rounded-t-lg" alt={infoPost.title} />
        </a>
      </Link>
      <div className="p-4">
        <InfoPost {...infoPost} />
      </div>
    </article>
  );
}
