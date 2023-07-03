import Image from "next/image";
import Hero from "./components/Hero";
import Team from "./components/Team";

export default function Home() {
	return (
		<main className="px-6 lg:px-8 py-20 sm:py-24 mx-auto max-w-7xl min-h-screen bg-slate-50">
			<Hero />
      <Team/>
		</main>
	);
}
