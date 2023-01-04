import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion';

type Props = {};

export default function Header({}: Props) {
	return (
		<header className="sticky top-0 p-5 flex justify-between items-start max-w-7xl mx-auto z-20 xl:items-center">
			{/*Social icons*/}
			<motion.div
				initial={{
					x: -700,
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
				className="flex flex-row items-center"
			>
				<SocialIcon
					url="https://twitter.com/jaketrent"
					fgColor="grey"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://github.com/jaketrent"
					fgColor="grey"
					bgColor="transparent"
				/>
			</motion.div>

			{/* Right section */}
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
				className="flex flex-row items-center text-gray-400 cursor-pointer"
			>
				<SocialIcon
					className="cursor-pointer"
					network="email"
					fgColor="grey"
					bgColor="transparent"
				/>
				<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
					Get in Touch
				</p>
			</motion.div>
		</header>
	);
}
