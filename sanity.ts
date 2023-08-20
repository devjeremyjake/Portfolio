import { createClient } from '@sanity/client';
import createImageUrlBuilder from '@sanity/image-url';

export const config = {
	projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
	dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
	useCdn: process.env.NODE_ENV === 'production',
	apiVersion: '2023-08-15',
};

export const sanityClient = createClient(config);

export const urlFor = (source: any) =>
	createImageUrlBuilder(config).image(source);
