import { useEffect, useState } from 'react';
import { fetchNews } from '@/lib/api';
import NewsCard from '@/components/NewsCard';

export default function Home() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchNews().then(setArticles);
  }, []);

  return (
    <section>
      <h1 className='text-2xl font-bold mb-4'>최신 테크 뉴스</h1>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {articles.map((article, index) => (
          <NewsCard key={index} article={article} />
        ))}
      </div>
    </section>
  );
}
