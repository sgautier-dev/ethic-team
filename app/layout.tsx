import "./globals.css";
import { Inter, Exo_2 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const exo = Exo_2({
	subsets: ["latin"],
	variable: "--font-exo",
	display: "swap",
});

export const metadata = {
	title: "Ethic Team",
	description: "développeurs web fullstack, déployez vos projets en toute conscience",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className={exo.variable}>
			<body className={`bg-slate-50 ${inter.className}`}>{children}</body>
		</html>
	);
}
