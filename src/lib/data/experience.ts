import Assets from './assets';
import { getSkills } from './skills';
import { ContractType, type Experience } from '../types';

export const items: Array<Experience> = [
	{
		slug: 'freelancer',
		company: 'Self-employed',
		description: 'Creating applications and solutions for companies.',
		contract: ContractType.Freelance,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2022, 3, 17), to: new Date() },
		skills: getSkills('js', 'ts', 'flutter', 'postgres'),
		name: 'Freelancer',
		color: 'green',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Creating applications and solutions for companies.'
	},
	{
		slug: 'it-lead',
		company: 'Inosys',
		description: 'Developed a cash-register software application.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'On Site',
		period: { from: new Date(2023, 3, 1), to: new Date(2023, 7, 31) },
		skills: getSkills('flutter', 'dart'),
		name: 'IT Lead',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'Developed a cash-register software application.'
	},
	{
		slug: 'developer',
		company: 'Inosys',
		description: 'My first experience as a developer. I implemented some processes to keep track of technician\'s activity and to easier the leads creations.',
		contract: ContractType.Internship,
		type: 'Software Development',
		location: 'Home',
		period: { from: new Date(2021, 7, 1), to: new Date(2021, 12, 31) },
		skills: getSkills('js', 'html', 'css', 'kotlin', 'android'),
		name: 'Junior Developer',
		color: 'blue',
		links: [],
		logo: Assets.Unknown,
		shortDescription: 'My first experience as a developer.'
	},
];

export const title = 'Experience';
