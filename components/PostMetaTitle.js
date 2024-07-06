import Link from 'next/link';

export default function PostMetaTitle({ category, title, date, center }) {
  return (
    <>
      <div className="flex items-center text-gray-500 space-x-4">
        <div className="uppercase font-semibold">
          {category}
        </div>
        <span>&bull;</span>
        <div>
          {date}
        </div>
      </div>
      <h2 className={`text-2xl mt-4 font-bold ${center ? 'text-center' : ''}`}>
        <Link href="/detail"><a className="text-primary hover:underline">{title}</a></Link>
      </h2>
    </>
  );
}
