import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'project',
	title: 'Project',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			description: 'title of the project',
			type: 'string',
		}),
		defineField({
			name: 'image',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'summary',
			title: 'Summary',
			type: 'text',
		}),
		defineField({
			name: 'technologies',
			title: 'Technologies',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'skill' } }],
		}),
		defineField({
			name: 'linkToBuild',
			title: 'LinkToBild',
			type: 'url',
		}),
		defineField({
			name: 'linkToGithub',
			title: 'LinkToGithub',
			type: 'url',
		}),
	],
});
