import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'

interface CtaButtonProps {
	href: string
	children: React.ReactNode
	variant?: 'primary' | 'outline'
}

export const CtaButton = ({
	href,
	children,
	variant = 'primary',
}: CtaButtonProps) => {
	const baseStyle =
		'rounded-full h-12 px-8 text-base flex items-center justify-center gap-2'
	const variants = {
		primary: 'variant-secondary',
		outline:
			'variant-outline bg-transparent border-white text-white hover:bg-white/10',
	}

	return (
		<Button
			asChild
			size='lg'
			className={`${baseStyle} ${
				variant === 'outline'
					? 'bg-transparent border border-white text-white hover:bg-white/10'
					: ''
			}`}
		>
			<Link href={href}>
				{children}
				<ArrowRight className='ml-2 size-4' />
			</Link>
		</Button>
	)
}
