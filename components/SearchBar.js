export default function SearchBar({ keyword, onChange, onSearch }) {
  return (
    <div className='flex gap-2 mb-6'>
      <input
        value={keyword}
        onChange={(e) => onChange(e.target.value)}
        placeholder='검색어 입력 (예: react, ai)'
        className='border p-2 flex-1 rounded'
      />
      <button onClick={onSearch} className='bg-black text-white px-4 rounded'>
        검색
      </button>
    </div>
  );
}
