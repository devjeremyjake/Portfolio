import { defineField, defineType } from 'sanity';

export default defineType({
	name: 'pageInfo',
	title: 'PageInfo',
	type: 'document',
	fields: [
		defineField({
			name: 'title',
			title: 'Title',
			type: 'string',
		}),
		defineField({
			name: 'role',
			title: 'role',
			type: 'string',
		}),
		defineField({
			name: 'heroImage',
			title: 'Image',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'backgroundInformation',
			title: 'BackgroundInformation',
			type: 'string',
		}),
		defineField({
			name: 'profilePic',
			title: 'ProfilePic',
			type: 'image',
			options: {
				hotspot: true,
			},
		}),
		defineField({
			name: 'phoneNumber',
			title: 'PhoneNumber',
			type: 'string',
		}),
		defineField({
			name: 'email',
			title: 'email',
			type: 'string',
		}),
		defineField({
			name: 'socials',
			title: 'Socials',
			type: 'array',
			of: [{ type: 'reference', to: { type: 'social' } }],
		}),
	],
});
