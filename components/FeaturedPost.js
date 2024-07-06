import Link from 'next/link';
import InfoPost from '@components/InfoPost';

export default function FeaturedPost() {
  return (
    <article className="bg-surface rounded-lg shadow-lg overflow-hidden">
      <div className="flex flex-wrap items-center">
        <div className="w-full lg:w-8/12">
          <Link href="/detail">
            <a>
              <img src="/featured-thumbnail.png" className="rounded-t-lg w-full" alt="Featured Post" />
            </a>
          </Link>
        </div>
        <div className="w-full lg:w-4/12 p-4">
          <InfoPost
            category="Education"
            date="July 2, 2021"
            title="Understanding color theory: the color wheel and finding complementary colors"
            shortDescription="Learn the basics of color theory and how to use the color wheel to create stunning designs."
            authorAvatar="/author-1.png"
            authorName="Leslie Alexander"
            authorJob="Art Teacher"
          />
        </div>
      </div>
    </article>
  );
}
