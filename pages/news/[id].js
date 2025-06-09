import { fetchNewsDetail } from '@/lib/api';

export default function NewsDetailPage({ article }) {
  if (!article) return <p className='text-center mt-10'>뉴스 정보를 불러올 수 없습니다.</p>;

  return (
    <div className='max-w-3xl mx-auto p-6'>
      <h1 className='text-3xl font-bold mb-2'>{article.title}</h1>
      <p className='text-sm text-gray-500 mb-4'>
        {article.readable_publish_date} · {article.user?.name}
      </p>

      {article.cover_image && (
        <img src={article.cover_image} alt={article.title} className='w-full h-auto mb-6 rounded' />
      )}

      <div className='prose dark:prose-invert max-w-none' dangerouslySetInnerHTML={{ __html: article.body_html }} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;

  try {
    const article = await fetchNewsDetail(id);
    return { props: { article } };
  } catch (error) {
    console.error('상세 뉴스 로드 실패:', error);
    return { props: { article: null } };
  }
}
