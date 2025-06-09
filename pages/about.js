import Head from 'next/head';

export default function About() {
  return (
    <>
      <Head>
        <title>About | TechScope</title>
      </Head>
      <section className='max-w-3xl mx-auto px-4 py-12'>
        <h1 className='text-4xl font-bold mb-6'>About TechScope</h1>

        <p className='text-lg text-gray-700 leading-relaxed mb-4'>
          TechScope는 프론트엔드, 백엔드, AI, 디자인 등 다양한 기술 분야의 트렌드를 한눈에 볼 수 있도록 만들어진{' '}
          <strong className='font-semibold'>기술 뉴스 큐레이션 플랫폼</strong>입니다.
        </p>

        <p className='text-lg text-gray-700 leading-relaxed mb-4'>
          다양한 개발자 커뮤니티와 블로그의 최신 글을 모아서,
          <strong className='font-semibold'>카테고리별로 쉽게</strong> 탐색하고 읽을 수 있게 도와줍니다.
        </p>

        <p className='text-lg text-gray-700 leading-relaxed mb-4'>
          기술의 흐름을 놓치지 않고 싶은 개발자들을 위해 만들어졌으며, 매일 아침 10분이면{' '}
          <strong className='font-semibold'>업계의 최신 동향을 파악</strong>할 수 있도록 설계되었습니다.
        </p>

        <div className='mt-10 border-t pt-6'>
          <p className='text-gray-500 text-sm'>
            이 프로젝트는 프론트엔드 개발자로 성장하기 위한 포트폴리오 목적으로 제작되었으며, Next.js, Tailwind CSS,
            React Query 등 최신 기술 스택을 기반으로 개발되었습니다.
          </p>
        </div>
      </section>
    </>
  );
}
