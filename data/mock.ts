import { BarChart, Layers, Shield, Star, Users, Zap } from 'lucide-react'

export const plans = {
	monthly: [
		{
			name: 'Starter',
			price: '$29',
			description: 'Perfect for small teams and startups.',
			features: [
				'Up to 5 team members',
				'Basic analytics',
				'5GB storage',
				'Email support',
			],
			cta: 'Start Free Trial',
		},
		{
			name: 'Professional',
			price: '$79',
			description: 'Ideal for growing businesses.',
			features: [
				'Up to 20 team members',
				'Advanced analytics',
				'25GB storage',
				'Priority email support',
				'API access',
			],
			cta: 'Start Free Trial',
			popular: true,
		},
		{
			name: 'Enterprise',
			price: '$199',
			description: 'For large organizations with complex needs.',
			features: [
				'Unlimited team members',
				'Custom analytics',
				'Unlimited storage',
				'24/7 phone & email support',
				'Advanced API access',
				'Custom integrations',
			],
			cta: 'Contact Sales',
		},
	],
	annually: [
		{
			name: 'Starter',
			price: '$23',
			description: 'Perfect for small teams and startups.',
			features: [
				'Up to 5 team members',
				'Basic analytics',
				'5GB storage',
				'Email support',
			],
			cta: 'Start Free Trial',
		},
		{
			name: 'Professional',
			price: '$63',
			description: 'Ideal for growing businesses.',
			features: [
				'Up to 20 team members',
				'Advanced analytics',
				'25GB storage',
				'Priority email support',
				'API access',
			],
			cta: 'Start Free Trial',
			popular: true,
		},
		{
			name: 'Enterprise',
			price: '$159',
			description: 'For large organizations with complex needs.',
			features: [
				'Unlimited team members',
				'Custom analytics',
				'Unlimited storage',
				'24/7 phone & email support',
				'Advanced API access',
				'Custom integrations',
			],
			cta: 'Contact Sales',
		},
	],
}

export const testimonials = [
	{
		quote:
			'SaaSify has transformed how we manage our projects. The automation features have saved us countless hours of manual work.',
		author: 'Sarah Johnson',
		role: 'Project Manager, TechCorp',
	},
	{
		quote:
			"The analytics dashboard provides insights we never had access to before. It's helped us make data-driven decisions that have improved our ROI.",
		author: 'Michael Chen',
		role: 'Marketing Director, GrowthLabs',
	},
	{
		quote:
			"Customer support is exceptional. Any time we've had an issue, the team has been quick to respond and resolve it.",
		author: 'Emily Rodriguez',
		role: 'Operations Lead, StartupX',
	},
	{
		quote:
			"We've tried several similar solutions, but none compare to the ease of use and comprehensive features of SaaSify.",
		author: 'David Kim',
		role: 'CEO, InnovateNow',
	},
	{
		quote:
			"The collaboration tools have made remote work so much easier for our team. We're more productive than ever despite being spread across time zones.",
		author: 'Lisa Patel',
		role: 'HR Director, RemoteFirst',
	},
	{
		quote:
			'Implementation was seamless, and the ROI was almost immediate. We’ve reduced our operational costs by 30% since switching to SaaSify.',
		author: 'James Wilson',
		role: 'COO, ScaleUp Inc',
	},
]

export const steps = [
	{
		step: '01',
		title: 'Create Account',
		description:
			'Sign up in seconds with just your email. No credit card required to get started.',
	},
	{
		step: '02',
		title: 'Configure Workspace',
		description:
			"Customize your workspace to match your team's unique workflow and requirements.",
	},
	{
		step: '03',
		title: 'Boost Productivity',
		description:
			'Start using our powerful features to streamline processes and achieve your goals.',
	},
]

export const features = [
	{
		title: 'Smart Automation',
		description:
			'Automate repetitive tasks and workflows to save time and reduce errors.',
		icon: Zap,
	},
	{
		title: 'Advanced Analytics',
		description:
			'Gain valuable insights with real-time data visualization and reporting.',
		icon: BarChart,
	},
	{
		title: 'Team Collaboration',
		description:
			'Work together seamlessly with integrated communication tools.',
		icon: Users,
	},
	{
		title: 'Enterprise Security',
		description:
			'Keep your data safe with end-to-end encryption and compliance features.',
		icon: Shield,
	},
	{
		title: 'Seamless Integration',
		description:
			'Connect with your favorite tools through our extensive API ecosystem.',
		icon: Layers,
	},
	{
		title: '24/7 Support',
		description:
			'Get help whenever you need it with our dedicated support team.',
		icon: Star,
	},
]

export const faqData = [
	{
		question: 'How does the 14-day free trial work?',
		answer:
			'Our 14-day free trial gives you full access to all features of your selected plan. No credit card is required to sign up, and you can cancel at any time during the trial period with no obligation.',
	},
	{
		question: 'Can I change plans later?',
		answer:
			'Yes, you can upgrade or downgrade your plan at any time. If you upgrade, the new pricing will be prorated for the remainder of your billing cycle. If you downgrade, the new pricing will take effect at the start of your next billing cycle.',
	},
	{
		question: 'Is there a limit to how many users I can add?',
		answer:
			'The number of users depends on your plan. The Starter plan allows up to 5 team members, the Professional plan allows up to 20, and the Enterprise plan has no limit on team members.',
	},
	{
		question:
			'Do you offer discounts for nonprofits or educational institutions?',
		answer:
			'Yes, we offer special pricing for nonprofits, educational institutions, and open-source projects. Please contact our sales team for more information.',
	},
	{
		question: 'How secure is my data?',
		answer:
			'We take security very seriously. All data is encrypted both in transit and at rest. We use industry-standard security practices and regularly undergo security audits. Our platform is compliant with GDPR, CCPA, and other relevant regulations.',
	},
	{
		question: 'What kind of support do you offer?',
		answer:
			'Support varies by plan. All plans include email support, with the Professional plan offering priority email support. The Enterprise plan includes 24/7 phone and email support. We also have an extensive knowledge base and community forum available to all users.',
	},
]