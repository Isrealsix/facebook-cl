import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon } from '@heroicons/react/outline';
import contacts from './contacts';
import { VideoCameraIcon } from '@heroicons/react/solid';
import { Contact } from './Contact';

const Widgets = () => {
	return (
		<div className="hidden lg:flex flex-col w-60 mt-5">
			<div className="flex justify-between items-center text-gray-500 mb-5">
				<h2 className="text-xl">Contacts</h2>
				<div className="flex space-x-2">
					<VideoCameraIcon className="h-6" />
					<SearchIcon className="h-6" />
					<DotsHorizontalIcon className="h-6" />
				</div>
			</div>
			{contacts.map(contact => (
				<Contact key={contact.id} src={contact.src} name={contact.name} />
			))}
		</div>
	);
};

export default Widgets;
