import React from 'react';
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import { Experience } from '../typings';

type Prop = {
	experiences: Experience[];
};

export default function WorkExperience({ experiences }: Prop) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex h-full relative overflow-auto flex-col max-w-full px-10 justify-evenly mx-auto"
		>
			<h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
				Expreience
			</h3>
			<motion.div className="text-lft md:flex-row  items-center">
				<div className="w-full h-full flex spac-x-5 gap-10 overflow-x-auto scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#AE561C]/80 z-0 p-10 snap-x snap-mandatory">
					{experiences?.map((experience) => (
						<ExperienceCard key={experience?._id} experience={experience} />
					))}
				</div>
			</motion.div>
		</motion.div>
	);
}
