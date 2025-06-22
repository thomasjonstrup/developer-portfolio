import { motion } from 'motion/react';
import { SunIcon, MoonIcon } from 'lucide-react';

import { Button } from '../ui/button';
import { cn } from '@/lib/utils';
import { Link } from './link';
import { SITE } from '@/consts';

/**
 *	Navbar
 * -
 * A responsive navigation bar component that includes links to home, about, and contact pages,
 *
 * @return {JSX.Element}
 */
export const Navbar = () => {

const handleThemeToggle = () => {
	const element = document.documentElement;

	element.classList.add('disable-transitions');
	element.classList.toggle('dark');

	window.getComputedStyle(element).opacity; // Trigger reflow to reset transitions

	requestAnimationFrame(() => {
		element.classList.remove('disable-transitions');
	});

	const isDarkMode = element.classList.contains('dark');

	localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}

	return (
		<motion.header
			className={cn(
				'fixed left-1/2 z-30 -translate-x-1/2 transform backdrop-blur-lg',
				'bg-background/80 border-0',
				'rounded-none shadow-none transition-all duration-300 ease-in-out',
				'border border-transparent w-full'
			)}
		>
			<div className='mx-auto flex max-w-7xl items-center justify-between gap-4 p-4'>
				<Link
					href='/'
					className='font-custom flex shrink-0 items-center gap-2 text-xl font-bold'
					aria-label='Home'
					title='Home'
				>
					<span
						className={
							'transition-opacity duration-200 ease-in-out text-foreground/90 dark:text-white'
						}
					>
						{SITE.title}
					</span>
				</Link>
				<nav className='flex items-center gap-2 md:gap-4'>
					<ul className='flex flex-wrap items-center gap-4 text-sm font-medium text-foreground'>
						<li>
							<Link
								href='/'
								className='text-foreground hover:text-primary transition-colors'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								href='/about'
								className='text-foreground hover:text-primary transition-colors'
							>
								About
							</Link>
						</li>
						<li>
							<Link
								href='/contact'
								className='text-foreground hover:text-primary transition-colors'
							>
								Contact
							</Link>
						</li>
						<li>
							<Button
								id='theme-toggle'
								variant='secondary'
								size='icon'
								title='Toggle theme'
								onClick={( ) => handleThemeToggle()}
							>
								<SunIcon className='size-4 scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90' />
								<MoonIcon className='absolute size-4 scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0' />
								<span className='sr-only'>Toggle theme</span>
							</Button>
						</li>
					</ul>
				</nav>
			</div>
		</motion.header>
	);
};
