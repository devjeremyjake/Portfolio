import Head from 'next/head';
import Header from '../components/Header';
import Hero from '../components/Hero';
import { FiSun } from 'react-icons/fi';
import { BsMoonStars } from 'react-icons/bs';
import { useTheme } from 'next-themes';
import { motion } from 'framer-motion';
import About from '../components/About';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import ContactMe from '../components/ContactMe';
import Link from 'next/link';
import { HomeIcon } from '@heroicons/react/24/solid';
import { GetStaticProps } from 'next';
import { Experience, PageInfo, Project, Skill, Social } from '../typings';
import { fetchPageInfo } from '../utils/fetchPageInfo';
import { fetchExperiences } from '../utils/fetchExperiences';
import { fetchSkills } from '../utils/fetchSkills';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchSocial } from '../utils/fetchSocials';

interface Props {
	pageInfo: PageInfo[];
	experiences: Experience[];
	skills: Skill[];
	projects: Project[];
	socials: Social[];
}

export default function Home({
	pageInfo,
	experiences,
	skills,
	projects,
	socials,
}: Props) {
	const { theme, setTheme } = useTheme();

	// button toggle handler
	const handleToggle = () => {
		setTheme(theme === 'light' ? 'dark' : 'light');
	};
	return (
		<div className="transition duration-1000 h-screen snap-y snap-proximity overflow-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#AE561C]/80 z-0 dark:bg-[rgb(36,36,36)] dark:text-white">
			<Head>
				<title>Okafor JerryMark</title>
				<meta name="description" content="Okafor JerryMark" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header socials={socials} />
			<section id="hero" className="snap-start">
				<Hero pageInfo={pageInfo} />
			</section>
			{/* About Section */}
			<section id="about" className="snap-center">
				<About pageInfo={pageInfo} />
			</section>
			{/* Experience */}
			<section id="experience" className="snap-start">
				<WorkExperience experiences={experiences} />
			</section>
			{/* Skills */}
			<section id="skills" className="snap-center">
				<Skills skills={skills} />
			</section>
			{/* Projects */}
			<section id="projects" className="snap-start">
				<Projects projects={projects} />
			</section>
			{/* Contact */}
			<section id="contact" className="snap-start">
				<ContactMe pageInfo={pageInfo} />
			</section>

			<Link href="#hero">
				<footer className="sticky bottom-5 w-full cursor-pointer">
					<div className="flex items-center justify-center">
						<div className="h-10 w-10 bg-darkGreen/80 rounded-full flex items-center justify-center">
							<HomeIcon className="h-7 w-17 pb-0.5 hover:grayscale-100 text-black animate-pulse dark:text-white" />
						</div>
					</div>
				</footer>
			</Link>
			{/* Floating button */}
			<>
				<motion.div
					initial={{
						x: 700,
						opacity: 0,
						scale: 0.5,
					}}
					animate={{
						x: 0,
						opacity: 1,
						scale: 1,
					}}
					transition={{
						duration: 1.6,
					}}
					onClick={handleToggle}
					className="fixed bottom-10 right-5  p-3 rounded-full flex items-center justify-center h-14 w-14 shadow-2xl cursor-pointer xl:right-10"
				>
					{theme === 'light' ? (
						<BsMoonStars fontSize="1.7em" color="grey" />
					) : (
						<FiSun fontSize="1.7em" color="grey" />
					)}
				</motion.div>
			</>
		</div>
	);
}

export const getStaticProps: GetStaticProps<Props> = async () => {
	const pageInfo = await fetchPageInfo();
	const experiences = await fetchExperiences();
	const skills = await fetchSkills();
	const projects = await fetchProjects();
	const socials = await fetchSocial();
	return {
		props: {
			pageInfo,
			experiences,
			skills,
			projects,
			socials,
		},
		revalidate: 360,
	};
};
