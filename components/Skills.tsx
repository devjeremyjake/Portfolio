import { motion } from 'framer-motion';
import React from 'react';
import SkillCard from './Skill';
import { Skill } from '../typings';

type Prop = {
	skills: Skill[];
};

export default function Skills({ skills }: Prop) {
	console.log(skills);
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
		>
			<h3 className="absolute top-20 md:top-24 uppercase tracking-[20px] text-gray-500 text-xl md:text-2xl">
				Skills
			</h3>
			<div className="grid grid-cols-4 gap-4 md:gap-5">
				{skills?.map((skill) => (
					<SkillCard key={skill?._id} skill={skill} />
				))}
			</div>
		</motion.div>
	);
}
