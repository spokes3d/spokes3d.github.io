// @ts-check
// The shared max-models setup (@max-models/starlight-theme), adapted to an organisation site: served
// at the root of spokes3d.github.io instead of under /<repo>/, from main, with edit links to the
// repository root (the theme assumes a docs/ folder).
import { defineDocs } from '@max-models/starlight-theme';

const github = 'https://github.com/spokes3d';

export default defineDocs({
	owner: 'spokes3d',
	repo: 'spokes3d.github.io',
	branch: 'main',
	title: 'spokes3d',
	description:
		'Research notes on spoke formation in magnetron discharges: experiments, simulations, open questions and resources.',
	nav: [
		{ label: 'Summaries', link: '/summaries/' },
		{ label: 'Experiments', link: '/experiments/' },
		{ label: 'Simulations', link: '/simulations/' },
		{ label: 'Open questions', link: '/questions/' },
		{ label: 'Resources', link: '/resources/' },
		{ label: 'Log', link: '/log/' },
	],
	sidebar: [
		{
			label: 'Start here',
			items: [
				{ label: 'Overview', link: '/' },
				{ label: 'About these notes', slug: 'about' },
			],
		},
		{ label: 'Summaries', items: [{ autogenerate: { directory: 'summaries' } }] },
		{ label: 'Experiments', items: [{ autogenerate: { directory: 'experiments' } }] },
		{ label: 'Simulations', items: [{ autogenerate: { directory: 'simulations' } }] },
		{ label: 'Open questions', items: [{ autogenerate: { directory: 'questions' } }] },
		{ label: 'Resources', items: [{ autogenerate: { directory: 'resources' } }] },
		{ label: 'Log', items: [{ autogenerate: { directory: 'log' } }] },
	],
	starlight: {
		social: [{ icon: 'github', label: 'GitHub', href: github }],
		editLink: { baseUrl: `${github}/spokes3d.github.io/edit/main/` },
	},
	astro: {
		base: '/',
	},
});
