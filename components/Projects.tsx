import { motion } from 'framer-motion';
import React from 'react';
import { Project } from '../typings';
import Link from 'next/link';
import { urlFor } from '../sanity';

type Prop = {
	projects: Project[];
};
export default function Projects({ projects }: Prop) {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="flex h-full relative overflow-auto flex-col max-w-full px-10 justify-evenly mx-auto"
		>
			<h3 className="top-24 uppercase tracking-[20px] text-gray-500 text-2xl text-center">
				Projects
			</h3>
			<div className="relative w-full flex overflow-x-show overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#AE561C]/80">
				{projects?.map((project, index) => (
					<div
						key={project?._id}
						className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-10 md:p-44 h-screen"
					>
						<motion.img
							initial={{ y: -100, opacity: 0 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 1.2 }}
							viewport={{ once: true }}
							className="h-28 xl:h-80 md:h-72 object-contain"
							src={urlFor(project?.image).url()}
							alt=""
						/>

						<div className="space-y-5 md:space-y-10 px-0 md:px-10 max-w-6xl">
							<h4 className="text-lg md:text-2xl lg:text-4xl font-semibold text-center">
								<span className="underline decoration-[#AE561C]/50 ">
									Project {index} of {projects?.length}:
								</span>
								{project?.title}
							</h4>
							<div className="flex items-center space-x-2 justify-center ">
								{project?.technologies?.map((project) => (
									<img
										key={project?._id}
										className="h-10 w-10 rounded-full"
										src={urlFor(project?.image).url()}
										alt={project?.title}
									/>
								))}
							</div>

							<p className="text-sm md:text-md lg:text-lg text-justify ">
								{project?.summary}
							</p>
							<div className="flex flex-col items-center justify-center xl:flex-row">
								<Link href={project?.linkToGithub}>
									<button className="bg-[#AE561C] py-2 mx-1 md:py-4 px-10 rounded-lg text-white font-bold text-lg">
										Project Detail
									</button>
								</Link>
								<Link href={project?.linkToBuild}>
									<button className="bg-[#AE561C] py-2 md:py-4 px-10 rounded-lg text-white font-bold text-lg">
										Project Demo
									</button>
								</Link>
							</div>
						</div>
					</div>
				))}
			</div>
			<div className="w-full absolute top-[20%] md:top-[30%] bg-[#f7ab0a]/10 left-0 h-[400px] -skew-y-12" />
		</motion.div>
	);
}
