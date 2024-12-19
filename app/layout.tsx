import { Nunito } from 'next/font/google';
import './globals.css';

const nunito = Nunito({
	subsets: ['cyrillic'],
	variable: '--font-nunito',
	weight: ['400', '500', '600', '700', '800', '900']
});

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="ru">
			<head>
				<link data-rh="true" rel="icon" href="/logo.png" />
			</head>
			<body className={nunito.variable}>{children}</body>
		</html>
	);
}

export default RootLayout;
