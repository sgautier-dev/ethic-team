import Image from "next/image";

export default function Hero() {
	return (
		<>
			<div className="relative">
				<div className="mx-auto max-w-7xl">
					<div className="relative z-10 pt-14 lg:w-full lg:max-w-2xl">
						<svg
							className="absolute inset-y-0 right-8 hidden h-full w-80 translate-x-1/2 transform fill-slate-50 lg:block"
							viewBox="0 0 100 100"
							preserveAspectRatio="none"
							aria-hidden="true"
						>
							<polygon points="0,0 90,0 50,100 0,100" />
						</svg>

						<div className="relative px-6 py-24 sm:py-32 lg:px-8 lg:py-40 lg:pr-0">
							<div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl">
								<h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
									Déployez vos projets Web en toute Conscience
								</h1>
								<p className="mt-6 text-lg leading-8 text-gray-600">
									Chez Ethic Team, nous transformons vos idées en réalité
									digitale grâce à notre expertise technique et notre approche
									consciente. Spécialisés dans les projets de startups
									ambitieuses, nous privilégions les initiatives innovantes et
									socialement positives. Notre mission : créer avec vous une
									technologie qui a du sens.
								</p>
								<div className="mt-10 flex items-center gap-x-6">
									<a
										href="#contact"
										className="rounded-md bg-amber-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
									>
										Nous contacter
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="bg-gray-50 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
					<Image
						className="aspect-[3/2] object-cover lg:aspect-auto lg:h-full lg:w-full"
						src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1587&q=80"
						width={1587}
						height={2379}
						alt=""
					/>
				</div>
			</div>
		</>
	);
}
