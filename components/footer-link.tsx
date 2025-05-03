import Link from 'next/link'
import React from 'react'

const FooterLink = ({ href, label }: { href: string; label: string }) => (
	<Link
		href={href}
		className='text-muted-foreground hover:text-foreground transition-colors'
	>
		{label}
	</Link>
)

export default FooterLink