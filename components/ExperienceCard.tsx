import React from 'react';
import { motion } from 'framer-motion';
import { Experience } from '../typings';
import { urlFor } from '../sanity';

type Prop = {
	experience: Experience;
};

export default function ExperienceCard({ experience }: Prop) {
	return (
		<article className="flex flex-col rounded-1 items-center space-y-7 flex-shrink-0 w-[900px] md:w-[500px] xl:w-[500px] snap-center bg-[#ededed71] p-5 md:p-10 cursor-pointer transition-opacity duration-200 overflow-y-auto dark:bg-[#292929]">
			<motion.img
				initial={{ y: -100, opacity: 0 }}
				transition={{ duration: 1.2 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[100px] xl:h-[100px] object-cover object-center"
				src={urlFor(experience?.companyImage).url()}
				alt={experience?.company}
			/>
			<div className="px-0 md:px-10">
				<h4 className="text-4xl font-light">{experience?.role}</h4>
				<p className="font-bold text-2xl mt-1">{experience?.company}</p>
				<div className="flex space-x-2 my-2">
					{experience?.technologies?.map((technology) => (
						<img
							key={technology?._id}
							className="h-10 w-10 rounded-full"
							src={urlFor(technology?.image).url()}
							alt={technology?.title}
						/>
					))}
				</div>
				<p className="uppercase py-2 md:py-5 text-gray-500 text-sm md:text-lg">
					{new Date(experience?.dateStarted).toDateString()} -{' '}
					{experience?.isCurrentlyWorkingHere
						? 'Present'
						: new Date(experience?.dateEnded).toDateString()}
				</p>
				<ul className="list-disc space-y-4 ml-5 text-lg overflow-y-scroll">
					{experience?.points?.map((point, index) => (
						<li className="text-[#292929] dark:text-[#b0afaf]" key={index}>
							{point}
						</li>
					))}
				</ul>
			</div>
		</article>
	);
}
