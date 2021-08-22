import Image from 'next/image';
import { useSession } from 'next-auth/client';
import {
	CameraIcon,
	EmojiHappyIcon,
	VideoCameraIcon,
} from '@heroicons/react/solid';
import { useState, useRef } from 'react';
import { db, storage } from '../firebase';
import firebase from 'firebase';

const InputBox = () => {
	const inputRef = useRef(null);
	const filePickerRef = useRef(null);
	const [imageToPost, setImageToPost] = useState(null);

	const [session] = useSession();

	const post = ev => {
		ev.preventDefault();
		if (!inputRef.current.value) return;

		db.collection('posts')
			.add({
				message: inputRef.current.value,
				name: session.user.name,
				email: session.user.email,
				image: session.user.image,
				timestamps: firebase.firestore.FieldValue.serverTimestamp(),
			})
			.then(doc => {
				if (imageToPost) {
					const uploadTask = storage
						.ref(`posts/${doc.id}`)
						.putString(imageToPost, 'data_url');

					detachImage();

					uploadTask.on(
						'state_change',
						null,
						error => console.error(error),
						() => {
							{
								/* Uploaded
								Saving the image to the specific user's post in the DB
								*/
							}
							storage
								.ref('posts')
								.child(doc.id)
								.getDownloadURL()
								.then(url => {
									db.collection('posts').doc(doc.id).set(
										{
											postImage: url,
										},
										{ merge: true }
									);
								});
						}
					);
				}
			});

		inputRef.current.value = '';
		console.log('submitted post');
	};

	const addImageToPost = ev => {
		{
			/* Reading user file */
		}
		const reader = new FileReader();
		if (ev.target.files[0]) {
			reader.readAsDataURL(ev.target.files[0]);
		}

		{
			/* Async call on when the file loads */
		}
		reader.onload = readerEv => {
			setImageToPost(readerEv.target.result);
		};
	};

	const detachImage = () => setImageToPost(null);

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
				{imageToPost && (
					<div
						className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer"
						onClick={detachImage}
					>
						<img
							className="h-10 object-contain"
							src={imageToPost}
							alt="uploaded Image"
						/>
						<p className="text-xs text-red-500 text-center">Remove</p>
					</div>
				)}
			</div>
			<div className="flex justify-evenly p-3 border-t">
				<div className="inputIcon">
					<VideoCameraIcon className="h-7 text-red-500" />
					<p className="text-xs sm:text-sm">Live Video</p>
				</div>

				<div
					className="inputIcon"
					onClick={() => filePickerRef.current.click()}
				>
					<CameraIcon className="h-7 text-green-400" />
					<p className="text-xs sm:text-sm">Photo/Video</p>
					<input
						ref={filePickerRef}
						onChange={addImageToPost}
						type="file"
						hidden
					/>
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
