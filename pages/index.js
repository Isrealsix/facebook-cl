import Head from 'next/head';
import Header from '../components/Header';

export default function Home() {
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
