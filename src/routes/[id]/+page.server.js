// 상세보기 서버 로직
import { prisma } from '$lib/prisma.js';
import { error } from '@sveltejs/kit';

// 동적 라우팅: [id] 부분이 params.id로 전달됨
export async function load({ params }) {
	const postId = parseInt(params.id);

	// 유효한 숫자인지 확인
	if (isNaN(postId)) {
		throw error(404, '게시글을 찾을 수 없습니다.');
	}

	// 해당 ID의 게시글 찾기
	const post = await prisma.post.findUnique({
		where: {
			id: postId
		}
	});

	// 게시글이 없으면 404 에러
	if (!post) {
		throw error(404, '게시글을 찾을 수 없습니다.');
	}

	return {
		post
	};
}
