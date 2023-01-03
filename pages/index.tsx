import Head from 'next/head';
import Image from 'next/image';
// import { Inter } from '@next/font/google';

// const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<Head>
				<title>Okafor JerryMark</title>
				<meta name="description" content="Okafor JerryMark" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* <link rel="icon" href="/favicon.ico" /> */}
			</Head>

			<h1 className="text-3xl font-bold underline">Let Build a Portfolio</h1>
		</>
	);
}
