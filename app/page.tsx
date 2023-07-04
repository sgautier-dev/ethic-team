import Image from "next/image";
import Hero from "./components/Hero";
import Team from "./components/Team";
import Engagement from "./components/Engagement";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Tech from "./components/Tech";

export default function Home() {
	return (
		<main className="px-6 lg:px-8 py-20 sm:py-24 mx-auto max-w-7xl min-h-screen">
			<Hero />
			<Team />
			<Tech />
			<Engagement />
			<Testimonials />
			<Contact />
		</main>
	);
}
