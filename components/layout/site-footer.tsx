import React from 'react'
import Link from 'next/link'
import { FacebookIcon, LinkedInIcon, TwitterIcon } from '@/components/icons'
import FooterLink from '@/components/footer-link'

const currentYear = new Date().getFullYear()

const SiteFooter = () => {
	return (
		<footer
			className='w-full border-t bg-background/95 backdrop-blur-sm sticky top-[100vh] z-50'
			aria-label='Site Footer'
		>
			<div className='container flex flex-col gap-8 px-4 py-10 md:px-6 lg:py-16'>
				{/* Logo & Description */}
				<div className='grid gap-8 sm:grid-cols-2 md:grid-cols-4'>
					<section className='space-y-4' aria-labelledby='footer-brand'>
						<div
							className='flex items-center gap-2 font-bold'
							id='footer-brand'
						>
							<div className='size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground'>
								S
							</div>
							<span>SaaSify</span>
						</div>
						<p className='text-sm text-muted-foreground'>
							Streamline your workflow with our all-in-one SaaS platform. Boost
							productivity and scale your business.
						</p>
						<nav className='flex gap-4' aria-label='Social media'>
							<Link
								href='#'
								className='text-muted-foreground hover:text-foreground transition-colors'
								aria-label='Facebook'
							>
								<FacebookIcon />
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-foreground transition-colors'
								aria-label='Twitter'
							>
								<TwitterIcon />
							</Link>
							<Link
								href='#'
								className='text-muted-foreground hover:text-foreground transition-colors'
								aria-label='LinkedIn'
							>
								<LinkedInIcon />
							</Link>
						</nav>
					</section>

					{/* Product Links */}
					<section className='space-y-4' aria-labelledby='footer-product'>
						<h2 className='text-sm font-bold' id='footer-product'>
							Product
						</h2>
						<ul className='space-y-2 text-sm'>
							<li>
								<FooterLink href='#features' label='Features' />
							</li>
							<li>
								<FooterLink href='#pricing' label='Pricing' />
							</li>
							<li>
								<FooterLink href='#' label='Integrations' />
							</li>
							<li>
								<FooterLink href='#' label='API' />
							</li>
						</ul>
					</section>

					{/* Resources Links */}
					<section className='space-y-4' aria-labelledby='footer-resources'>
						<h2 className='text-sm font-bold' id='footer-resources'>
							Resources
						</h2>
						<ul className='space-y-2 text-sm'>
							<li>
								<FooterLink href='#' label='Documentation' />
							</li>
							<li>
								<FooterLink href='#' label='Guides' />
							</li>
							<li>
								<FooterLink href='#' label='Blog' />
							</li>
							<li>
								<FooterLink href='#' label='Support' />
							</li>
						</ul>
					</section>

					{/* Company Links */}
					<section className='space-y-4' aria-labelledby='footer-company'>
						<h2 className='text-sm font-bold' id='footer-company'>
							Company
						</h2>
						<ul className='space-y-2 text-sm'>
							<li>
								<FooterLink href='#' label='About' />
							</li>
							<li>
								<FooterLink href='#' label='Careers' />
							</li>
							<li>
								<FooterLink href='#' label='Privacy Policy' />
							</li>
							<li>
								<FooterLink href='#' label='Terms of Service' />
							</li>
						</ul>
					</section>
				</div>

				{/* Bottom Bar */}
				<div className='flex flex-col gap-4 sm:flex-row justify-between items-center border-t border-border/40 pt-8'>
					<p className='text-xs text-muted-foreground'>
						&copy; {currentYear} SaaSify. All rights reserved.
					</p>
					<nav className='flex gap-4 text-xs' aria-label='Legal'>
						<FooterLink href='#' label='Privacy Policy' />
						<FooterLink href='#' label='Terms of Service' />
						<FooterLink href='#' label='Cookie Policy' />
					</nav>
				</div>
			</div>
		</footer>
	)
}

export default SiteFooter
