import React from 'react';
import { motion } from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';

type Prop = {
	skill: Skill;
};

export default function SkillCard({ skill }: Prop) {
	return (
		<div className="group relative flex cursor-pointer">
			<motion.img
				initial={{ x: -80, opacity: 0 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 1 }}
				className="rounded-full border-2 border-darkGreen object-cover w-20 h-20 md:w-20 md:h-20 lg:w-20 lg:h-20 xl:w-20 xl:h-20 2xl:w-28 2xl:h-28 filter group-hover:grayscale transition duration-300 ease-in-out"
				src={urlFor(skill?.image).url()}
				alt={skill?.title}
			/>
		</div>
	);
}
