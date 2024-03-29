import type { NextApiRequest, NextApiResponse } from 'next';
import { groq } from 'next-sanity';
import { sanityClient } from '../../sanity';
import { Project } from '../../typings';

type Data = {
	projects: Project[];
};

const query = groq`*[_type== 'project'] {
	...,
	technologies[]->
}`;

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	const projects: Project[] = await sanityClient.fetch(query);
	res.status(200).json({ projects });
}
