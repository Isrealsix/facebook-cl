import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';

export default function Home({ session }) {
	if (!session) return <Login />;
	return (
		<div className="h-screen bg-gray-100 overflow-hidden">
			<Head>
				<title>Facebook</title>
				<meta name="description" content="Facebook" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Header />
			<div className="flex">
				<Sidebar />
				<main>
					<Feed />
				</main>
			</div>
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
