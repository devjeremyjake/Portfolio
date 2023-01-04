import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';

type Props = {};

export default function Hero({}: Props) {
	const [text, count] = useTypewriter({
		words: [
			`👋 The Name's JerryMark`,
			'FrontEnd Engineer.tsx',
			'<ButLovesToCodeMore />',
			'<SolutionExplorer />',
		],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<>
			{/* Background circles */}
			<BackgroundCircles />
			{/* Text section */}
			<h1>
				<span>{text}</span>
				<Cursor cursorColor="#f7AB0A" cursorBlinking={true} />
			</h1>
		</>
	);
}
