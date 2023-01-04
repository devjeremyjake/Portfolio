import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { FiSun } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const { theme, setTheme } = useTheme();

	// button toggle handler
	const handleToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	return (
		<div className="dark:bg-[rgb(36,36,36)] dark:text-white transition duration-1000 h-screen">
			<Head>
				<title>Okafor JerryMark</title>
				<meta name="description" content="Okafor JerryMark" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>
			<Header />
			{/* Hero Section */}
			<section>
				<Hero />
			</section>
			{/* About Section */}
			{/* Experience */}
			{/* Skills */}
			{/* Projects */}
			{/* Contact Me */}

			{/* Floating button */}
			<motion.div
				initial={{
					x: 700,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.6,
				}}
				onClick={handleToggle}
				className="fixed bottom-10 right-5  p-3 rounded-full flex items-center justify-center h-14 w-14 shadow-2xl cursor-pointer xl:right-10"
			>
				{theme === 'light' ? (
					<BsMoonStars fontSize="1.7em" color="grey" />
				) : (
					<FiSun fontSize="1.7em" color="grey" />
				)}
			</motion.div>
		</div>
	);
}
