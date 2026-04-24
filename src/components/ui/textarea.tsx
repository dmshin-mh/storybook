import * as React from 'react';

import { cn } from '@/lib/utils';

function Textarea({ className, ...props }: React.ComponentProps<'textarea'>) {
	return (
		<textarea
			data-slot="textarea"
			className={cn(
				'rounded-none placeholder:text-gray400 aria-invalid:border-destructive flex min-h-16 w-full bg-transparent px-3 py-2 text-b5m-14 transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50',
				className,
			)}
			{...props}
		/>
	);
}

export { Textarea };
