import StoryCard from './StoryCard';

const storyData = [
	{
		name: 'Israel Ojeifo',
		src: 'https://i.ibb.co/KwHPHhw/IMG-20210815-162534.jpg',
		profile: 'https://i.ibb.co/tshYhsd/download.jpg',
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
