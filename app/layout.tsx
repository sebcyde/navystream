import { SignedOutNavbar } from './components/SignedOutNavbar';
import { SignedInNavbar } from './components/SignedInNavbar';
import { Inter } from 'next/font/google';
import '../styles/global.scss';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'NavyStream',
	description: 'Endless, Forever',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<SignedOutNavbar />
				<SignedInNavbar />
				{children}
			</body>
		</html>
	);
}
