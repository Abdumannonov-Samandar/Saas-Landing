'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Button } from '../ui/button'
import { ChevronRight, Menu, Moon, Sun, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
	{ name: 'Features', href: '#features' },
	{ name: 'Testimonials', href: '#testimonials' },
	{ name: 'Pricing', href: '#pricing' },
	{ name: 'FAQ', href: '#faq' },
]

const SiteHeader = () => {
	const [isScrolled, setIsScrolled] = useState(false)
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
	const { theme, setTheme } = useTheme()
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)

		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10)
		}

		window.addEventListener('scroll', handleScroll)
		return () => window.removeEventListener('scroll', handleScroll)
	}, [])

	const toggleTheme = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark')
	}

	return (
		<header
			className={`sticky top-0 z-50 w-full backdrop-blur-lg transition-all duration-300 ${
				isScrolled ? 'bg-background/80 shadow-sm' : 'bg-transparent'
			}`}
			role='banner'
		>
			<div className='container px-4 md:px-6 flex h-16 items-center justify-between'>
				{/* Logo */}
				<Link
					href='/'
					className='flex items-center gap-2 font-bold text-foreground'
				>
					<div className='size-8 rounded-lg bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-primary-foreground'>
						S
					</div>
					<span>SaaSify</span>
				</Link>

				{/* Desktop Nav */}
				<nav className='hidden md:flex gap-8' aria-label='Main navigation'>
					{navLinks.map(link => (
						<Link
							key={link.name}
							href={link.href}
							className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
							aria-label={`Go to ${link.name}`}
						>
							{link.name}
						</Link>
					))}
				</nav>

				{/* Desktop Actions */}
				<div className='hidden md:flex gap-4 items-center'>
					<Button
						variant='ghost'
						size='icon'
						onClick={toggleTheme}
						className='rounded-full'
						aria-label='Toggle theme'
					>
						{mounted && theme === 'dark' ? (
							<Sun className='size-[18px]' />
						) : (
							<Moon className='size-[18px]' />
						)}
					</Button>
					<Link
						href='#'
						className='text-sm font-medium text-muted-foreground transition-colors hover:text-foreground'
						aria-label='Log in'
					>
						Log in
					</Link>
					<Button className='rounded-full'>
						Get Started
						<ChevronRight className='ml-1 size-4' />
					</Button>
				</div>

				{/* Mobile Menu Button */}
				<div className='flex items-center gap-2 md:hidden'>
					<Button
						variant='ghost'
						size='icon'
						onClick={toggleTheme}
						className='rounded-full'
						aria-label='Toggle theme'
					>
						{mounted && theme === 'dark' ? (
							<Sun className='size-[18px]' />
						) : (
							<Moon className='size-[18px]' />
						)}
					</Button>
					<Button
						variant='ghost'
						size='icon'
						onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
						aria-label='Toggle mobile menu'
					>
						{mobileMenuOpen ? (
							<X className='size-5' />
						) : (
							<Menu className='size-5' />
						)}
					</Button>
				</div>
			</div>

			{/* Mobile Nav */}
			<AnimatePresence>
				{mobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: -20 }}
						className='md:hidden absolute top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b z-40'
					>
						<div className='container py-4 flex flex-col gap-4'>
							{navLinks.map(link => (
								<Link
									key={link.name}
									href={link.href}
									className='py-2 text-sm font-medium'
									onClick={() => setMobileMenuOpen(false)}
									aria-label={`Go to ${link.name}`}
								>
									{link.name}
								</Link>
							))}
							<div className='flex justify-between items-center gap-2 pt-4 border-t'>
								<Link
									href='#'
									className='py-2 text-sm font-medium'
									onClick={() => setMobileMenuOpen(false)}
									aria-label='Log in'
								>
									Log in
								</Link>
								<Button className='rounded-full w-fit'>
									Get Started
									<ChevronRight className='ml-1 size-4' />
								</Button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	)
}

export default SiteHeader
