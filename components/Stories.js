import StoryCard from './StoryCard';

const storyData = [
	{
		name: 'Israel Ojeifo',
		src: 'https://links.papareact.com/zof',
		profile: 'https://links.papareact.com/l4v',
		id: 'fb-z-0',
	},
	{
		name: 'Elon Musk',
		src: 'https://links.papareact.com/4zn',
		profile: 'https://links.papareact.com/kxk',
		id: 'fb-z-11',
	},
	{
		name: 'Jeff Bezos',
		src: 'https://links.papareact.com/k2j',
		profile: 'https://links.papareact.com/f0p',
		id: 'fb-z-012',
	},
	{
		name: 'Mark Zucherberg',
		src: 'https://links.papareact.com/xql',
		profile: 'https://links.papareact.com/snf',
		id: 'fb-z-091',
	},
	{
		name: 'Bill Gates',
		src: 'https://links.papareact.com/4u4',
		profile: 'https://links.papareact.com/zvy',
		id: 'fb-z-222',
	},
];
const Stories = () => {
	return (
		<div className="flex justify-center space-x-3 mx-auto">
			{storyData.map(story => (
				<StoryCard
					key={story.id}
					name={story.name}
					src={story.src}
					profile={story.profile}
				/>
			))}
		</div>
	);
};

export default Stories;
