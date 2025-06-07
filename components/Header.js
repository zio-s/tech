import Link from 'next/link';

export default function Header() {
  return (
    <header className='w-full border-b border-gray-200 dark:border-neutral-700'>
      <div className='max-w-6xl mx-auto px-4 py-4 flex justify-between items-center'>
        <Link href='/' className='text-xl font-bold'>
          TechScope
        </Link>
        <nav className='space-x-4'>
          <Link href='/'>홈</Link>
          <Link href='/about'>소개</Link>
        </nav>
      </div>
    </header>
  );
}
