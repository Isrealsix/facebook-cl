import Image from 'next/image';
import { useSession } from 'next-auth/client';
import {
	CameraIcon,
	EmojiHappyIcon,
	VideoCameraIcon,
} from '@heroicons/react/solid';
import { useRef } from 'react';
import { db } from '../firebase';
import firebase from 'firebase';

const InputBox = () => {
	const inputRef = useRef();

	const [session] = useSession();

	const post = ev => {
		ev.preventDefault();
		if (!inputRef.current.value) return;

		db.collection('posts').add({
			message: inputRef.current.value,
			name: session.user.name,
			email: session.user.email,
			image: session.user.image,
			timestamps: firebase.firestore.FieldValue.serverTimestamp(),
		});

		inputRef.current.value = '';
		console.log('submitted post');
	};

	return (
		<div className="bg-white p-2 rounded-2xl shadow-md font-medium mt-6">
			<div className="flex space-x-4 p-4 items-center">
				<Image
					className="rounded-full"
					src={session.user.image}
					width={40}
					height={40}
					layout="fixed"
					alt="Profile pic"
				/>
				<form className="flex flex-1">
					<input
						ref={inputRef}
						className="rounded-full h-12 bg-gray-100 flex-grow px-5 focus:outline-none"
						type="text"
						placeholder={`${session.user.name} what' on your mind?`}
					/>
					<button type="submit" onClick={post} className="hidden">
						Submit
					</button>
				</form>
			</div>
			<div className="flex justify-evenly p-3 border-t">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="text-xs sm:text-sm">Live Video</p>
				</div>

				<div className="inputIcon">
					<CameraIcon className="h-7 text-green-400" />
					<p className="text-xs sm:text-sm">Photo/Video</p>
				</div>
				<div className="inputIcon">
					<EmojiHappyIcon className="h-7 text-yellow-300" />
					<p className="text-xs sm:text-sm">Feeling Activity</p>
				</div>
			</div>
		</div>
	);
};

export default InputBox;
