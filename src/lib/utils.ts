import { type ClassValue, clsx } from 'clsx';
import { extendTailwindMerge } from 'tailwind-merge';

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
