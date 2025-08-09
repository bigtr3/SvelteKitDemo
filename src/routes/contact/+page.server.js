export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		const name = data.get('name');
		return { result: `${name}님, 폼이 전송되었습니다!` };
	}
};
