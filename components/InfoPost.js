import PostMetaTitle from '@components/PostMetaTitle';
import PostAuthor from '@components/PostAuthor';

export default function InfoPost({
  category,
  date,
  title,
  shortDescription,
  authorAvatar,
  authorName,
  authorJob
}) {
  return (
    <>
      <PostMetaTitle 
        category={category} 
        date={date}
        title={title}
      />
      <p className="text-gray-600 mt-5">
        {shortDescription}
      </p>
      <PostAuthor
        authorName={authorName}
        authorJob={authorJob}
        authorAvatar={authorAvatar}
      />
    </>
  );
}
