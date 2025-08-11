// 홈페이지 서버 로직
import { prisma } from '$lib/prisma.js';

// 페이지 로드시 실행되는 함수
export async function load() {
	// 게시글을 최신순으로 가져오기
	const posts = await prisma.post.findMany({
		orderBy: {
			createdAt: 'desc'
		}
	});

	return {
		posts
	};
}
