import { Platform } from '$lib/types';
import { getSkills } from './skills';

export const title = 'Home';

export const name = 'Nicolas';

export const lastName = 'Julie';

export const nickname = 'ChatDo';

export const description =
	'Lorem ipsum dolor sit, amet consectetur adipisicing elit.' +
	'Corrupti, rerum. Debitis accusantium deleniti enim iste dignissimos?' +
	'Similique, exercitationem! Odit vero, numquam quae ratione maxime sunt reiciendis laudantium quaerat iure ipsum!';

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
