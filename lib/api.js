export async function fetchNews({ tag = '', page = 1, sortBy = 'latest' }) {
  const url = tag
    ? `https://dev.to/api/articles?tag=${tag}&page=${page}&per_page=10`
    : `https://dev.to/api/articles?page=${page}&per_page=10`;

  const res = await fetch(url);
  if (!res.ok) throw new Error('Failed to fetch');
  return res.json();
}

export async function fetchNewsDetail(id) {
  const res = await fetch(`https://dev.to/api/articles/${id}`);
  if (!res.ok) throw new Error('뉴스 상세 불러오기 실패');
  return res.json();
}
