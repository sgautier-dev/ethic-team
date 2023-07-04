import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Inter, Exo_2 } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const exo = Exo_2({
	subsets: ["latin"],
	variable: "--font-exo",
	display: "swap",
});

export const metadata = {
	title: "Ethic Team - Développement Web et Mobile",
	description:
		"Ethic Team est une équipe dédiée de développeurs Full-Stack experts. Spécialisés dans le développement de projets web et mobile innovants, nous fournissons des solutions sur-mesure pour startups et entreprises. Notre approche éthique et consciente vous assure un service professionnel et durable.",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr" className={exo.variable}>
			<body className={`bg-slate-50 ${inter.className}`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
