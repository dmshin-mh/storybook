import { Cookies, useCookies } from 'react-cookie';

import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

import { financialInstitutions } from '@/models/Common';
import {
	CounselingRoomHistoryDto,
	RoomHistoryCategory,
} from '@/models/Schedule';

const customeTwMerge = extendTailwindMerge({
	extend: {
		classGroups: {
			'font-size': [
				'text-t1b-24',
				'text-t1sb-24',
				'text-t3sb-2b',
				'text-t4sb-18',
				'text-t5sb-16',
				'text-t5m-16',
				'text-b2m-20',
				'text-b3m-18',
				'text-b4m-16',
				'text-b4m-16-link',
				'text-b4sb-16',
				'text-b5m-14',
				'text-b5sb-14',
				'text-b6m-12',
				'text-b6r-12',
				'text-b6sb-12',
			],
		},
	},
});

export function cn(...inputs: ClassValue[]) {
	return customeTwMerge(clsx(inputs));
}

export const useCookieToken = () => {
	const [cookies, setCookie, removeCookie] = useCookies(['mind-token']);

	return {
		cookies,
		setCookie,
		removeCookie,
	};
};

const cookies = new Cookies();

export const getAccessToken = () => {
	return cookies.get('mind-c-token');
};

export const setAccessToken = (token: string) => {
	// cookies.set('mind-c-token', token);
	cookies.set('mind-c-token', token, { path: '/' });
};

export const removeAccessToken = () => {
	cookies.remove('mind-c-token');
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function findIntersectionByKey(arr1: any[], arr2: any[], key: string) {
	return arr1.filter((item1) =>
		arr2.some((item2) => item2[key] === item1[key]),
	);
}

export const removeDuplicatesByNestedKey = <T>(array: T[], path: string) => {
	const seen = new Set();
	return array.filter((item) => {
		const value = getNestedValue(item, path);
		if (seen.has(value)) {
			return false;
		}
		seen.add(value);
		return true;
	});
};

// 중첩된 객체에서 값 가져오기
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const getNestedValue = (obj: any, path: string) => {
	return path.split('.').reduce((current, key) => current?.[key], obj);
};

// 은행사 카테고리별로 분류한 객체
export const financialInstitutionsByCategory = {
	domesticCards: financialInstitutions.filter(
		(item) => item.category === '국내 카드사',
	),
	internationalCards: financialInstitutions.filter(
		(item) => item.category === '해외 카드사',
	),
	banksAndSecurities: financialInstitutions.filter(
		(item) => item.category === '은행 & 증권사',
	),
	easyPayment: financialInstitutions.filter(
		(item) => item.category === '간편결제사',
	),
	telecom: financialInstitutions.filter((item) => item.category === '통신사'),
};

export const calculateMyPresenceTime = (
	logs: CounselingRoomHistoryDto[],
	counselingStartedAt: string | Date,
	now: Date = new Date(),
) => {
	const sortedLogs = logs
		.slice()
		.sort(
			(a, b) =>
				new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime(),
		);

	const sessions: { start: Date; end: Date | null }[] = [];
	const enterQueue: Date[] = [];

	for (let i = 0; i < sortedLogs.length; i += 1) {
		const log = sortedLogs[i];
		const logTime = new Date(log.createdAt);

		if (log.category === RoomHistoryCategory.PARTICIPANT_ENTER) {
			enterQueue.push(logTime);
			continue;
		}

		if (
			log.category === RoomHistoryCategory.PARTICIPANT_DISCONNECT ||
			log.category === RoomHistoryCategory.PARTICIPANT_EXIT
		) {
			const isDisconnect =
				log.category === RoomHistoryCategory.PARTICIPANT_DISCONNECT;
			const adjustedEndTime = isDisconnect
				? new Date(logTime.getTime() - 60_000) // 1분 보정
				: logTime;

			let matched = false;

			while (enterQueue.length > 0) {
				const enterTime = enterQueue[0];
				// 매칭은 항상 enter가 먼저여야 함
				if (enterTime <= adjustedEndTime) {
					enterQueue.shift(); // 소모
					sessions.push({ start: enterTime, end: adjustedEndTime });
					matched = true;
					break;
				} else {
					// 미래의 enter이므로 더 이상 유효한 매칭 없음
					break;
				}
			}

			if (!matched) {
				// 매칭 안 됐으면 skip
			}
		}
	}

	// 남아 있는 enter 처리
	if (enterQueue.length > 0) {
		// 같은 1분 이내 중복 enter는 마지막만 유효
		const condensedEnters: Date[] = [];

		for (let i = 0; i < enterQueue.length; i++) {
			const current = enterQueue[i];
			if (
				i === enterQueue.length - 1 ||
				new Date(enterQueue[i + 1]).getTime() - current.getTime() > 60_000
			) {
				condensedEnters.push(current);
			}
		}

		for (const remainEnter of condensedEnters) {
			sessions.push({ start: remainEnter, end: now });
		}
	}

	// 세션 정리 및 총 시간 계산
	let totalMs = 0;

	for (const s of sessions) {
		if (!s.end || s.end <= s.start) continue;
		totalMs += s.end.getTime() - s.start.getTime();
	}

	const counselingStart = new Date(counselingStartedAt);
	const firstEnter = sessions.find((s) => s.start >= counselingStart)?.start;

	return {
		totalSeconds: Math.floor(totalMs / 1000),
		isOver10Minutes: totalMs >= 10 * 60 * 1000,
		remainingMs: Math.max(10 * 60 * 1000 - totalMs, 0),
		willReach10MinAt: new Date(
			now.getTime() + Math.max(10 * 60 * 1000 - totalMs, 0),
		),
		enteredWithin10Min:
			!!firstEnter &&
			firstEnter.getTime() - counselingStart.getTime() <= 10 * 60 * 1000,
		firstEnterTime: firstEnter ?? null,
		sessions, // 디버깅용
	};
};
