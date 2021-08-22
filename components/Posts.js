import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './Post';

const Posts = () => {
	const [realtimePosts] = useCollection(
		db.collection('posts').orderBy('timestamps', 'desc')
	);

	console.log(realtimePosts);
	return (
		<div>
			{realtimePosts?.docs.map(post => (
				<Post
					key={post.id}
					name={post.data().name}
					email={post.data().email}
					timestamp={post.data().timestamps}
					message={post.data().message}
					image={post.data().image}
					postImage={post.data().postImage}
				/>
			))}
		</div>
	);
};

export default Posts;
