// 글 수정 서버 로직
import { prisma } from '$lib/prisma.js';
import { redirect } from '@sveltejs/kit';

// GET 요청 처리
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

// POST 요청 처리 (폼 제출)
export const actions = {
	update: async ({ request, params }) => {
		const postId = parseInt(params.id);
		const data = await request.formData();
		const title = data.get('title');
		const content = data.get('content');
		const author = data.get('author');

		// 유효성 검사
		if (!title || !content || !author) {
			return {
				error: '모든 필드를 입력해주세요.'
			};
		}

		try {
			// 데이터베이스에 새 게시글 생성
			await prisma.post.update({
				where: { id: postId },
				data: {
					title: title.toString(),
					content: content.toString(),
					author: author.toString()
				}
			});

			// 성공시 홈페이지로 리다이렉트
			throw redirect(303, '/');
		} catch (error) {
			if (error.status === 303) {
				throw error; // 리다이렉트 에러는 그대로 throw
			}
			return {
				error: '게시글 수정 중 오류가 발생했습니다.'
			};
		}
	}
};
