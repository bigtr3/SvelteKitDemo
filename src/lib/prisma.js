import { PrismaClient } from '@prisma/client';
import { dev } from '$app/environment';

// 개발 모드에서는 전역 변수 사용하여 핫 리로드시 연결 재사용
const globalForPrisma = globalThis;

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (dev) globalForPrisma.prisma = prisma;
