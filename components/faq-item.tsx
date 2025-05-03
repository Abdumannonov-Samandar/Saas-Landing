import {
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion'

interface FaqItemProps {
	value: string
	question: string
	answer: string
}

export const FaqItem = ({ value, question, answer }: FaqItemProps) => (
	<AccordionItem value={value} className='border-b border-border/40 py-2'>
		<AccordionTrigger className='text-left font-medium hover:no-underline'>
			{question}
		</AccordionTrigger>
		<AccordionContent className='text-muted-foreground'>
			{answer}
		</AccordionContent>
	</AccordionItem>
)
