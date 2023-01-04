import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import HeroImage from '../public/hero.jpg';
import Link from 'next/link';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			`👋 The Name's JerryMark`,
			'<ButLovesToCodeMore />',
			'SolutionExplorer.tsx',
		],
		loop: true,
		delaySpeed: 2000,
	});

	return (
		<div className="h-screen flex  flex-col space-y-8 items-center justify-center text-center overflow-hidden">
			{/* Background circles */}
			<BackgroundCircles />
			{/* Image section */}
			<Image
				src={HeroImage}
				alt="Picture of the author"
				// width={150}
				// height={150}
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
			/>
			<div>
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px] z-10">
					FrontEnd Engineer
				</h2>
			</div>
			<h1 className="text-5xl lg:text-6xl font-semibold px-10 z-20">
				<span>{text}</span>
				<Cursor cursorColor="#f7AB0A" cursorBlinking={true} />
			</h1>
			{/* Buttons */}
			<div className="pt-5 z-20">
				<Link href="#about">
					<button className="heroButton">About</button>
				</Link>
				<Link href="#experience">
					<button className="heroButton">Experience</button>
				</Link>
				<Link href="#skills">
					<button className="heroButton">Skills</button>
				</Link>
				<Link href="#projects">
					<button className="heroButton">Projects</button>
				</Link>
			</div>
		</div>
	);
}
