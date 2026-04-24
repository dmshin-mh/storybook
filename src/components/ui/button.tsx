import * as React from 'react';

import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive cursor-pointer",
	{
		variants: {
			variant: {
				default:
					'bg-primary600 text-white hover:bg-primary700 active:bg-primary800 disabled:bg-gray200 disabled:text-gray400',
				outline:
					'border border-primary600 text-primary600 hover:border-primary700 hover:text-primary800 active:border-primary800 disabled:border-gray400 disabled:text-gray400',
				'outline-gray':
					'border border-gray400 text-gray600 hover:border-gray500 active:text-gray500 active:border-gray600 disabled:border-gray400 disabled:text-gray400',
				gray: 'bg-gray200 text-gray600 hover:bg-gray300 active:bg-gray500 active:text-white disabled:bg-gray200 disabled:text-gray400',
				destructive:
					'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
				'outline-destructive':
					'border border-destructive text-destructive shadow-xs hover:bg-destructive/10 hover:border-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
				secondary:
					'bg-secondary50 hover:bg-secondary50/80 border border-secondary600',
				success: 'bg-success500 hover:bg-success50/80 text-white',
				ghost: 'hover:bg-gray200 hover:text-gray600',
				link: 'text-primary underline-offset-4 hover:underline',
				'page-select': 'bg-gray700 text-white hover:bg-gray900',
				page: 'hover:bg-gray200 text-gray500 ',
				schedule: 'hover:bg-gray50 active:bg-gray200',
				'schedule-more':
					'text-gray400 hover:bg-gray50 active:bg-gray200 hover:text-gray600',
				'popover-select':
					"aria-[expanded=true]:[&_svg]:rotate-180 aria-[expanded=true]:border-secondary600 aria-[expanded=true]:bg-secondary50 border-gray200 [&_svg:not([class*='text-'])]:text-muted-foreground aria-invalid:border-destructive pr-2 border whitespace-nowrap shadow-xs transition-[color,box-shadow] outline-none disabled:cursor-not-allowed disabled:opacity-50  *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
			},
			size: {
				social: 'py-[14px] px-4 rounded-xl text-b4m-16',
				xl: 'py-4 px-6 rounded-[12px] text-b3m-18',
				default: 'py-3 px-5 rounded-[12px] text-b3m-18',
				md: 'py-3 px-4 rounded-[10px] text-b5m-14',
				sm: 'py-2 px-3 rounded-md text-b5m-14',
				xs: 'py-[7px] px-[10px] rounded-md text-b6m-12',
				'tab-l': 'px-5 py-4 gap-8 text-b3m-18',
				'tab-m': 'px-3 py-1.5 gap-1.5 text-b5m-14',
				'tab-s': 'px-3 py-2 gap-1 text-b5m-14',
				icon: 'p-2',
				page: 'p-2 h-[36px] w-[36px] gap-2.5 text-b6m-12 rounded-[8px]',
				schedule: 'py-1 px-1.5 gap-0.5 text-b6r-12 rounded-[8px] gap-2',
				'popover-select-s': 'py-1 pl-3 pr-2 text-b5m-14',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

function Button({
	className,
	variant,
	size,
	asChild = false,
	...props
}: React.ComponentProps<'button'> &
	VariantProps<typeof buttonVariants> & {
		asChild?: boolean;
	}) {
	const Comp = asChild ? Slot : 'button';

	return (
		<Comp
			data-slot="button"
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}

export { Button, buttonVariants };
