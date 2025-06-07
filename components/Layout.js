import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }) {
  return (
    <div className='flex flex-col min-h-screen bg-white text-black dark:bg-neutral-900 dark:text-white'>
      <Header />
      <main className='flex-1 w-full max-w-6xl mx-auto px-4 py-8'>{children}</main>
      <Footer />
    </div>
  );
}
