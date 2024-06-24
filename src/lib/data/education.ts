import Assets from './assets';
import type { Education } from '../types';

export const items: Array<Education> = [
	{
		degree: 'Expert in Information Technology Title',
		description: 'Expert in Information Technology Title',
		location: 'France',
		logo: Assets.Unknown,
		name: 'Expert in Information Technology',
		organization: 'EPITECH',
		period: { from: new Date(2020, 0, 1), to: new Date(2025, 5, 1) },
		shortDescription: '',
		slug: 'master-epitech',
		subjects: ['C', 'Algorithm', 'Python', 'C++', 'JavaScript', 'English', 'System Administration', 'DevOps', 'Flutter']
	},
	{
		degree: 'DHBW International Student Program - Business',
		description: 'DHBW ISP in Business',
		location: 'Germany',
		logo: Assets.Unknown,
		name: 'DHBW ISP',
		organization: 'Duale Hochschule Baden-Württemberg',
		period: { from: new Date(2023, 9, 1), to: new Date(2024, 7, 1) },
		shortDescription: '',
		slug: 'dhbw-business',
		subjects: ['Marketing', 'Digital Communication', 'ITSM', 'International Marketing', 'Team Leading', 'Human Resources Management']
	}
];

export const title = 'Education';
