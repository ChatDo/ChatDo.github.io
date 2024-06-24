import Assets from './assets';
import { getSkills } from './skills';
import type { Project } from '../types';

export const items: Array<Project> = [
	{
		slug: 'Prod-Manager',
		color: '#5e95e3',
		description: 'Service to manage inventory and stocks',
		shortDescription:
			'Rest',
		links: [{ to: 'https://github.com/ChatDo', label: 'GitHub' }],
		logo: Assets.Flutter,
		name: 'Prod-Manager',
		period: {
			from: new Date(2022, 12, 18),
			to: new Date(2023, 6, 11)
		},
		skills: getSkills('flutter', 'js', 'postgres'),
		type: 'Service',
	},
	{
		name: 'Article-Scanner',
		slug: 'article-scanner',
		color: '#ff3e00',
		description: 'Application that get the price of an article from a server',
		shortDescription:
			'Application that get the price of an article from a server',
		links: [{ to: 'https://github.com/ChatDo', label: 'GitHub' }],
		logo: Assets.Flutter,
		period: {
			from: new Date(2024, 3, 20),
			to: new Date(2024, 5, 30),
		},
		skills: getSkills('flutter'),
		type: 'Application'
	},
	{
		name: 'SatisfactionZ',
		slug: 'satisfactionz',
		color: '#ff3e00',
		description:
		'Service to measure client\'s satisfaction',
		shortDescription:
			'Service to measure client\'s satisfaction',
		links: [{ to: 'https://github.com/ChatDo', label: 'GitHub' }],
		logo: Assets.Flutter,
		period: {
			from: new Date(2023, 8, 15),
			to: new Date()
		},
		skills: getSkills('flutter', 'ts', 'postgres'),
		type: 'Service',
	},
	{
		name: 'EnVRonment',
		slug: 'environement',
		color: '#ff3e00',
		description: 'Solution to create and simulate virtual environments. Made with Svelte and Tauri.',
		shortDescription:
			'Solution to create and simulate virtual environments',
		links: [{ to: 'https://github.com/ChatDo', label: 'GitHub' }],
		logo: Assets.Svelte,
		period: {
			from: new Date(2023, 8, 1),
			to: new Date()
		},
		skills: getSkills('svelte', 'ts'),
		type: 'Master Project',
	}
	// {
	// 	slug: 'slick-portfolio-svelte',
	// 	color: '#ff3e00',
	// 	description:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	shortDescription:
	// 		'A Vercel-like developer portfolio website template made with Typescript and SvelteKit.',
	// 	links: [{ to: 'https://github.com/RiadhAdrani/slick-portfolio-svelte', label: 'GitHub' }],
	// 	logo: Assets.Svelte,
	// 	name: 'Slick Portfolio',
	// 	period: {
	// 		from: new Date()
	// 	},
	// 	skills: getSkills('svelte', 'ts', 'tailwind', 'sass'),
	// 	type: 'Website Template',
	// 	screenshots: [
	// 		{
	// 			label: 'screen 1',
	// 			src: 'https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '2',
	// 			src: 'https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZ3JhbW1pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '3',
	// 			src: 'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '4',
	// 			src: 'https://images.unsplash.com/photo-1542903660-eedba2cda473?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '5',
	// 			src: 'https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		},
	// 		{
	// 			label: '6',
	// 			src: 'https://images.unsplash.com/photo-1585079542156-2755d9c8a094?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHByb2dyYW1taW5nfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60'
	// 		}
	// 	]
	// }
];

export const title = 'Projects';
