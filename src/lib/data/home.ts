import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Nicolas';

export const lastName = 'Julie';

export const nickname = 'ChatDo';

export const description =
	'Actually doing my last year at EPITECH, I\'m a Tech enthousiast who enjoys coding and gaming !';

export const links: Array<{ platform: Platform; link: string }> = [
	{ platform: Platform.GitHub, link: 'https://github.com/ChatDo' },
	{
		platform: Platform.Linkedin,
		link: 'https://www.linkedin.com/in/nicolas-julie/'
	},
	{
		platform: Platform.Email,
		link: 'nicolas.julie38@gmail.com'
	},
	{
		platform: Platform.Youtube,
		link: 'https://www.youtube.com/@chatdo974'
	}
];

export const skills = getSkills('js', 'css', 'html', 'flutter', 'kotlin', 'dart', 'svelte', 'ts');
