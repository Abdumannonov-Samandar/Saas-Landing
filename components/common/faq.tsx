
import React from 'react'
import { motion } from 'framer-motion'
import { Accordion } from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { faqData } from '@/data/mock'
import { FaqItem } from '@/components/faq-item'

const Faq = () => {
	return (
		<section
			id='faq'
			aria-labelledby='faq-heading'
			className='w-full py-20 md:py-32 bg-muted/20'
		>
			<div className='container px-4 md:px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='text-center mb-12 space-y-4'
				>
					<Badge
						className='rounded-full px-4 py-1.5 text-sm font-medium'
						variant='secondary'
					>
						FAQ
					</Badge>
					<h2
						id='faq-heading'
						className='text-3xl md:text-4xl font-bold tracking-tight'
					>
						Frequently Asked Questions
					</h2>
					<p className='max-w-2xl mx-auto text-muted-foreground md:text-lg'>
						Find answers to common questions about our platform.
					</p>
				</motion.div>

				<div className='mx-auto max-w-3xl'>
					<Accordion
						type='single'
						collapsible
						className='w-full'
						aria-label='Frequently Asked Questions'
					>
						{faqData.map((faq, i) => (
							<motion.div
								key={faq.question}
								initial={{ opacity: 0, y: 10 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.3, delay: i * 0.05 }}
							>
								<FaqItem
									value={`item-${i}`}
									question={faq.question}
									answer={faq.answer}
								/>
							</motion.div>
						))}
					</Accordion>
				</div>
			</div>
		</section>
	)
}

export default Faq
