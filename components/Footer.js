// components/Footer.js
export default function Footer() {
  return (
    <footer className='w-full border-t border-gray-200 dark:border-neutral-700 mt-12 py-4 text-center text-sm text-gray-500 dark:text-gray-400'>
      © {new Date().getFullYear()} TechScope. 모든 권리 보유.
    </footer>
  );
}
