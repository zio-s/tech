// lib/api.js
const API_KEY = '8da43b34054640b1db08139546fcfa97'; // ex: abc1234567890xyz
const BASE_URL = 'https://gnews.io/api/v4';

export async function fetchNews(query = 'technology') {
  try {
    const res = await fetch(`${BASE_URL}/search?q=${query}&lang=ko&token=${API_KEY}`);
    const data = await res.json();
    return data.articles || [];
  } catch (error) {
    console.error('뉴스 불러오기 실패:', error);
    return [];
  }
}
