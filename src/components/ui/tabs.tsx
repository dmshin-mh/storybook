import * as React from 'react';

import * as TabsPrimitive from '@radix-ui/react-tabs';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

function Tabs({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Root>) {
	return (
		<TabsPrimitive.Root
			data-slot="tabs"
			className={cn('flex flex-col gap-2', className)}
			{...props}
		/>
	);
}

function TabsList({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.List>) {
	return (
		<TabsPrimitive.List
			data-slot="tabs-list"
			className={cn('border-b inline-flex', className)}
			{...props}
		/>
	);
}

const tabsTriggerVariant = cva(
	"inline-flex items-center justify-center gap-1.5 py-3 px-4 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
	{
		variants: {
			variant: {
				default:
					'data-[state=active]:text-gray900 text-gray600 data-[state=active]:border-b-2 data-[state=active]:border-b-gray900 border-b-gray200',
				secondary:
					'data-[state=active]:text-gray900 data-[state=active]:bg-secondary50 data-[state=active]:hover:bg-secondary50/80 border data-[state=active]:border-secondary600 border-gray400 text-gray600 hover:border-gray500',
			},
			size: {
				default: 'text-b4sb-16',
				'select-l': 'px-5 py-4 gap-8 text-b3m-18 rounded-[12px]',
				'select-m': 'px-3 py-1.5 gap-1.5 text-b5m-14 rounded-[8px]',
				'select-s': 'px-3 py-2 gap-1 text-b5m-14 rounded-[8px] h-[32px]',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

function TabsTrigger({
	className,
	variant,
	size,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Trigger> &
	VariantProps<typeof tabsTriggerVariant>) {
	return (
		<TabsPrimitive.Trigger
			data-slot="tabs-trigger"
			className={cn(tabsTriggerVariant({ variant, size, className }))}
			{...props}
		/>
	);
}

function TabsContent({
	className,
	...props
}: React.ComponentProps<typeof TabsPrimitive.Content>) {
	return (
		<TabsPrimitive.Content
			data-slot="tabs-content"
			className={cn('flex-1 outline-none', className)}
			{...props}
		/>
	);
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
