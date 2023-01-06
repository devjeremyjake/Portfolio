import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function BackgroundCircles({}: Props) {
	return (
		<>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{
					scale: [1, 2, 2, 3, 1],
					opacity: [0.1, 0.2, 0.3, 0.4, 0.8, 0.1, 1.0],
					borderRadius: ['20%', '20%', '50%', '80%', '20%'],
				}}
				transition={{
					duration: 2.5,
				}}
				className="relative flex justify-center items-center"
			>
				<div className="absolute border-2 border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping " />
				<div className="absolute border border-[#dfdcdc59]  rounded-full h-[300px] w-[300px] mt-52 dark:border-[#33333388] " />
				<div className="absolute border border-[#dfdcdc59] rounded-full h-[400px] w-[400px] mt-52 dark:border-[#33333388] " />
				<div className="absolute border border-[#ae561cb4] rounded-full h-[550px] w-[550px] mt-52 animate-pulse dark:border-[#AE561C]" />
				<div className="absolute border border-[#dfdcdc59] rounded-full h-[700px] w-[700px] mt-52 dark:border-[#33333388]" />
			</motion.div>
		</>
	);
}
