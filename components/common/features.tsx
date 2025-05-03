'use client'

import { motion } from 'framer-motion'
import React from 'react'
import { Badge } from '@/components/ui/badge'
import FeatureCard from '@/components/feature-card'
import { features } from '@/data/mock'

const container = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
		},
	},
}

const item = {
	hidden: { opacity: 0, y: 20 },
	show: { opacity: 1, y: 0 },
}


const Features = () => {
	return (
		<section
			id='features'
			aria-labelledby='features-heading'
			className='w-full py-20 md:py-32'
		>
			<div className='container px-4 md:px-6'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className='flex flex-col items-center text-center space-y-4 mb-12'
				>
					<Badge
						variant='secondary'
						className='rounded-full px-4 py-1.5 text-sm font-medium'
					>
						Features
					</Badge>
					<h2
						id='features-heading'
						className='text-3xl md:text-4xl font-bold tracking-tight'
					>
						Everything You Need to Succeed
					</h2>
					<p className='max-w-[800px] text-muted-foreground md:text-lg'>
						Our comprehensive platform provides all the tools you need to
						streamline your workflow, boost productivity, and achieve your
						goals.
					</p>
				</motion.div>

				<motion.div
					variants={container}
					initial='hidden'
					whileInView='show'
					viewport={{ once: true }}
					className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'
				>
					{features.map((feature, i) => (
						<motion.div key={i} variants={item}>
							<FeatureCard
								title={feature.title}
								description={feature.description}
								Icon={feature.icon}
							/>
						</motion.div>
					))}
				</motion.div>
			</div>
		</section>
	)
}

export default Features
