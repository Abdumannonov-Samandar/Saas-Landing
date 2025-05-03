import { Card, CardContent } from '@/components/ui/card'

const FeatureCard = ({
	title,
	description,
	Icon,
}: {
	title: string
	description: string
	Icon: React.ElementType
}) => {
	return (
		<Card className='h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md'>
			<CardContent className='p-6 flex flex-col h-full'>
				<div className='size-10 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary mb-4'>
					<Icon className='size-5' />
				</div>
				<h3 className='text-xl font-semibold mb-2'>{title}</h3>
				<p className='text-muted-foreground'>{description}</p>
			</CardContent>
		</Card>
	)
}

export default FeatureCard