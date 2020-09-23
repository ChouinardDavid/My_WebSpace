import Head from 'next/head';
import App from '../components/app';

export default function Home() {
	return (
		<>
			<Head>
				<title>My Web Space</title>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<App />
		</>
	);
}
