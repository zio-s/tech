import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

export default function NewsModal({ article, onClose }) {
  useEffect(() => {
    document.body.style.overflow = article ? 'hidden' : 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [article]);

  return (
    <AnimatePresence>
      {article && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className='fixed inset-0 bg-black/50 z-50 flex justify-center items-center px-4'
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className='bg-white dark:bg-neutral-900 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto p-6 relative'
          >
            <button
              onClick={onClose}
              className='absolute top-4 right-5 text-2xl text-gray-400 hover:text-black dark:hover:text-white'
            >
              ×
            </button>
            <h2 className='text-2xl font-bold mb-2'>{article.title}</h2>
            <p className='text-sm text-gray-500 mb-4'>{new Date(article.publishedAt).toLocaleString()}</p>
            {article.image && (
              <img src={article.image} alt={article.title} className='w-full h-64 object-cover rounded mb-4' />
            )}
            <p className='text-base leading-relaxed text-gray-700 dark:text-gray-300 whitespace-pre-wrap'>
              {article.content || article.description || '내용이 없습니다.'}
            </p>
            <a
              href={article.url}
              target='_blank'
              rel='noopener noreferrer'
              className='inline-block mt-6 text-sm text-blue-600 dark:text-blue-400 underline'
            >
              원문 보기 →
            </a>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
