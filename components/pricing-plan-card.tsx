import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

interface PricingPlanCardProps {
	name: string
	price: string
	description: string
	features: string[]
	cta: string
	popular?: boolean
}

export const PricingPlanCard = ({
	name,
	price,
	description,
	features,
	cta,
	popular,
}: PricingPlanCardProps) => {
	return (
		<Card
			className={`relative overflow-hidden h-full ${
				popular ? 'border-primary shadow-lg' : 'border-border/40 shadow-md'
			} bg-gradient-to-b from-background to-muted/10 backdrop-blur`}
		>
			{popular && (
				<div className='absolute top-0 right-0 bg-primary text-primary-foreground px-3 py-1 text-xs font-medium rounded-bl-lg'>
					Most Popular
				</div>
			)}
			<CardContent className='p-6 flex flex-col h-full'>
				<h3 className='text-2xl font-bold'>{name}</h3>
				<div className='flex items-baseline mt-4'>
					<span className='text-4xl font-bold'>{price}</span>
					<span className='text-muted-foreground ml-1'>/month</span>
				</div>
				<p className='text-muted-foreground mt-2'>{description}</p>
				<ul className='space-y-3 my-6 flex-grow'>
					{features.map((feature, j) => (
						<li key={j} className='flex items-center'>
							<Check className='mr-2 size-4 text-primary' />
							<span>{feature}</span>
						</li>
					))}
				</ul>
				<Button
					className={`w-full mt-auto rounded-full ${
						popular
							? 'bg-primary hover:bg-primary/90'
							: 'bg-muted hover:bg-muted/80'
					}`}
					variant={popular ? 'default' : 'outline'}
				>
					{cta}
				</Button>
			</CardContent>
		</Card>
	)
}
