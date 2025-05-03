import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { PricingPlanCard } from '@/components/pricing-plan-card'
import { plans } from '@/data/mock'

const Pricing = () => {
	return (
		<section
			id='pricing'
			className='w-full py-20 md:py-32 bg-muted/30 relative overflow-hidden'
		>
			{/* Background grid pattern */}
			<div className='absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1f1f1f_1px,transparent_1px),linear-gradient(to_bottom,#1f1f1f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_40%,transparent_100%)]'></div>

			<div className='container px-4 md:px-6 relative'>
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
						Pricing
					</Badge>
					<h2 className='text-3xl md:text-4xl font-bold tracking-tight'>
						Simple, Transparent Pricing
					</h2>
					<p className='max-w-2xl mx-auto text-muted-foreground md:text-lg'>
						Choose the plan that fits your team. All plans include a 14-day free
						trial.
					</p>
				</motion.div>

				<Tabs defaultValue='monthly' className='w-full'>
					<div className='flex justify-center mb-8'>
						<TabsList className='rounded-full p-1'>
							<TabsTrigger value='monthly' className='rounded-full px-6'>
								Monthly
							</TabsTrigger>
							<TabsTrigger value='annually' className='rounded-full px-6'>
								Annually (Save 20%)
							</TabsTrigger>
						</TabsList>
					</div>

					{(['monthly', 'annually'] as const).map(cycle => (
						<TabsContent value={cycle} key={cycle}>
							<div className='grid gap-6 lg:grid-cols-3 lg:gap-8'>
								{plans[cycle].map((plan, i) => (
									<motion.div
										key={plan.name}
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ duration: 0.5, delay: i * 0.1 }}
									>
										<PricingPlanCard {...plan} />
									</motion.div>
								))}
							</div>
						</TabsContent>
					))}
				</Tabs>
			</div>
		</section>
	)
}

export default Pricing
