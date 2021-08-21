import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';

export default function Home({ session }) {
	if (!session) return <Login />;
	return (
		<div>
			<Head>
				<title>Facebook</title>
				<meta name="description" content="Facebook" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<main>facebook App</main>
		</div>
	);
}

export async function getServerSideProps(context) {
	// Get the current user session
	const session = await getSession(context);
	return {
		props: {
			session,
		},
	};
}
