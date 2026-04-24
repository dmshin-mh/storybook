import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
	return (
		<input
			type={type}
			data-slot="input"
			className={cn(
				'placeholder:text-gray400 py-3 border-b border-gray400 focus:border-primary600 text-b5m-14 outline-none w-full',
				className,
			)}
			{...props}
		/>
	);
}

export { Input };
