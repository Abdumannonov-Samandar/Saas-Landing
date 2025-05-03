import React from 'react'
import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import TestimonialCard from '@/components/testimonial-card'
import { testimonials } from '@/data/mock'

const Testimonials = () => {
	return (
		<section id='testimonials' className='w-full py-20 md:py-32'>
			<div className='container px-4 md:px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='flex flex-col items-center justify-center space-y-4 text-center mb-12'
				>
					<Badge
						className='rounded-full px-4 py-1.5 text-sm font-medium'
						variant='secondary'
					>
						Testimonials
					</Badge>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
						Loved by Teams Worldwide
					</h2>
					<p className='max-w-[800px] text-muted-foreground md:text-lg'>
						Discover how teams across the globe are using our platform to
						transform their work and drive results.
					</p>
				</motion.div>

				<div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
					{testimonials.map((testimonial, i) => (
						<motion.div
							key={i}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: i * 0.05 }}
						>
							<TestimonialCard {...testimonial} />
						</motion.div>
					))}
				</div>
			</div>
		</section>
	)
}

export default Testimonials
