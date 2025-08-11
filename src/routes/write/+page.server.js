// 글쓰기 서버 로직
import { prisma } from '$lib/prisma.js';
import { redirect } from '@sveltejs/kit';

// POST 요청 처리 (폼 제출)
export const actions = {
	create: async ({ request }) => {
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
			await prisma.post.create({
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
				error: '게시글 작성 중 오류가 발생했습니다.'
			};
		}
	}
};
