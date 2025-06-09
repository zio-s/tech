// components/NewsCard.js

import Image from 'next/image';
import Link from 'next/link';

export default function NewsCard({ article }) {
  const imageUrl = article.cover_image || '/default-image.png';

  return (
    <Link href={`/news/${article.id}`} className='block border rounded p-4 '>
      <Image
        src={imageUrl}
        alt={article.title}
        width={600}
        height={300}
        className='w-full h-48 object-cover mb-4 rounded'
      />

      <h2 className='text-xl font-semibold'>{article.title}</h2>
      <p className='text-sm text-gray-500 mt-1'>{article.description}</p>
    </Link>
  );
}
