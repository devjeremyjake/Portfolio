import React from 'react';
import Image from 'next/image';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from './BackgroundCircles';
import Link from 'next/link';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';

interface Props {
	pageInfo: PageInfo[];
}

export default function Hero({ pageInfo }: Props) {
	const [text, count] = useTypewriter({
		words: [
			`👋 The Name's ${pageInfo?.[0]?.title}`,
			'Frontend Engineer',
			'<React Native.tsx, React.tsx, Redux, Jest, Testing Library. />',
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
				src={urlFor(pageInfo?.[0]?.heroImage).url()}
				alt="Picture of the author"
				width="128"
				height="128"
				className="relative rounded-full h-32 w-32 mx-auto object-cover"
			/>
			<div className="z-20">
				<h2 className="text-sm uppercase text-gray-500 pb-2 tracking-[15px]">
					{pageInfo?.[0]?.role}
				</h2>
				<h1 className="text-5xl lg:text-6xl font-semibold px-10">
					<span>{text}</span>
					<Cursor cursorColor="#f7AB0A" cursorBlinking={true} />
				</h1>
				{/* Buttons */}
				<div className="pt-5">
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
		</div>
	);
}
