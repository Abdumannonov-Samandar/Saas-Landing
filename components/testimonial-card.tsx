import { Star } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type Props = {
	quote: string
	author: string
	role: string
	rating?: number
}

const TestimonialCard = ({ quote, author, role, rating = 5 }: Props) => {
	return (
		<Card className='h-full overflow-hidden border-border/40 bg-gradient-to-b from-background to-muted/10 backdrop-blur transition-all hover:shadow-md'>
			<CardContent className='p-6 flex flex-col h-full'>
				<div className='flex mb-4'>
					{Array(rating)
						.fill(0)
						.map((_, i) => (
							<Star
								key={i}
								className='size-4 text-yellow-500 fill-yellow-500'
							/>
						))}
				</div>
				<p className='text-lg mb-6 flex-grow'>{quote}</p>
				<div className='flex items-center gap-4 mt-auto pt-4 border-t border-border/40'>
					<div className='size-10 rounded-full bg-muted flex items-center justify-center text-foreground font-medium'>
						{author.charAt(0)}
					</div>
					<div>
						<p className='font-medium'>{author}</p>
						<p className='text-sm text-muted-foreground'>{role}</p>
					</div>
				</div>
			</CardContent>
		</Card>
	)
}

export default TestimonialCard
