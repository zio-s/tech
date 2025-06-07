export default function NewsCard({ article }) {
  const { title, description, image, publishedAt, source, url } = article;

  return (
    <a
      href={url}
      target='_blank'
      rel='noopener noreferrer'
      className='block border border-gray-200 dark:border-neutral-700 rounded-xl overflow-hidden hover:shadow-md transition'
    >
      {image && <img src={image} alt={title} className='w-full h-48 object-cover' />}
      <div className='p-4'>
        <h2 className='font-semibold text-lg mb-2 line-clamp-2'>{title}</h2>
        <p className='text-sm text-gray-600 dark:text-gray-400 line-clamp-3'>{description}</p>
        <div className='mt-2 text-xs text-gray-500'>
          {source.name} · {new Date(publishedAt).toLocaleDateString()}
        </div>
      </div>
    </a>
  );
}
