import React, { useState } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchNews } from '@/lib/api';
import NewsCard from '@/components/NewsCard';
import CategoryFilter from '@/components/CategoryFilter';
import Loader from '@/components/Loader';
import { categories } from '@/data/categories';

export default function Home() {
  const [category, setCategory] = useState('webdev');
  const [search, setSearch] = useState('');
  const [keyword, setKeyword] = useState('webdev');
  const [sortBy, setSortBy] = useState('latest');
  const selected = categories.find((c) => c.id === category);
  const tag = keyword || selected?.query || 'webdev';

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useInfiniteQuery({
    queryKey: ['news', tag, sortBy],
    queryFn: ({ pageParam = 1 }) => fetchNews({ tag, page: pageParam, sortBy }),
    getNextPageParam: (lastPage, allPages) => (lastPage.length === 10 ? allPages.length + 1 : undefined),
    staleTime: 1000 * 60 * 5,
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (search.trim()) {
      setKeyword(search.trim());
    }
  };

  return (
    <section className='p-4 max-w-7xl mx-auto bg-white text-black dark:bg-neutral-900 dark:text-white'>
      <h1 className='text-2xl font-bold mb-4'>IT 소식</h1>

      <form onSubmit={handleSearch} className='mb-4 flex gap-2'>
        <input
          type='text'
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder='검색어를 입력하세요 (예: react, ai, startup)'
          className='flex-1 border border-gray-300 dark:border-gray-700 bg-white dark:bg-neutral-800 text-black dark:text-white placeholder-gray-400 dark:placeholder-gray-500 px-4 py-2 rounded'
        />
        <button
          type='submit'
          className='bg-gray-900 text-white dark:bg-white dark:text-black px-4 py-2 rounded hover:opacity-90 transition'
        >
          검색
        </button>
      </form>

      <CategoryFilter
        sortBy={sortBy}
        setSortBy={setSortBy}
        selected={category}
        onSelect={(cat) => {
          setCategory(cat);
          setKeyword(cat);
          setSearch('');
        }}
      />

      {isLoading ? (
        <Loader />
      ) : (
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
          {data?.pages.map((page, i) => {
            const sortedPage =
              sortBy === 'popular'
                ? [...page].sort((a, b) => b.public_reactions_count - a.public_reactions_count)
                : page;

            return (
              <React.Fragment key={i}>
                {sortedPage.map((article, idx) => (
                  <NewsCard key={idx} article={article} />
                ))}
              </React.Fragment>
            );
          })}
        </div>
      )}

      {hasNextPage && (
        <div className='text-center mt-6'>
          <button
            onClick={() => fetchNextPage()}
            disabled={isFetchingNextPage}
            className='px-4 py-2 bg-gray-800 text-white dark:bg-white dark:text-black rounded hover:opacity-90 transition'
          >
            {isFetchingNextPage ? '불러오는 중...' : '더 보기'}
          </button>
        </div>
      )}
    </section>
  );
}
