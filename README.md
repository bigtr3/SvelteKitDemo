# 게시판 프로젝트

![alt text](<스크린샷 2025-08-11 141158-1.png>)

## Creating a project

If you're seeing this, you've probably already done this step. Congrats!

1. SvelteKit 프로젝트 생성

```bash
npm create svelte@latest my-board
cd my-board
npm install
```

2. 필요한 패키지 설치

```bash
npm install @prisma/client prisma
npm install --save-dev @types/node
```

3. 데이터베이스 설정 (Prisma 사용)

- Prisma 초기화

```bash
npx prisma init --datasource-provider sqlite
```

- 데이터베이스 마이그레이션

```bash
npx prisma migrate dev --name init
npx prisma generate
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```sh
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```sh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment.
