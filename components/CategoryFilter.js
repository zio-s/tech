import { categories } from '@/data/categories';

export default function CategoryFilter({ selected, onSelect, sortBy, setSortBy }) {
  return (
    <div className='flex flex-wrap gap-2 mb-6 justify-between items-center'>
      <div className=''>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => onSelect(cat.id)}
            className={`px-4 py-2 mr-2 rounded-full border text-sm 
              ${
                selected === cat.id
                  ? 'bg-black text-white dark:bg-white dark:text-black'
                  : 'bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300'
              }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
      <div className='flex gap-2'>
        <button
          onClick={() => setSortBy('latest')}
          className={`px-3 py-1 rounded ${sortBy === 'latest' ? 'bg-white text-black' : ' bg-gray-700'}`}
        >
          최신순
        </button>
        <button
          onClick={() => setSortBy('popular')}
          className={`px-3 py-1 rounded ${sortBy === 'popular' ? 'bg-white text-black' : ' bg-gray-700'}`}
        >
          인기순
        </button>
      </div>
    </div>
  );
}
