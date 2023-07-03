import {
	ChatBubbleOvalLeftEllipsisIcon,
	HeartIcon,
  HandThumbUpIcon,
	UsersIcon,
	RocketLaunchIcon,
  TrophyIcon
} from "@heroicons/react/24/outline";

const features = [
	{
		name: "Expertise technique",
		description:
			"Nous nous engageons à apporter notre expertise de pointe, toujours actualisée avec les technologies les plus récentes.",
		icon: RocketLaunchIcon,
	},
	{
		name: "Écoute et compréhension",
		description:
			"Nous nous engageons à comprendre votre vision et vos objectifs, et à travailler en étroite collaboration avec vous pour les réaliser.",
		icon: UsersIcon,
	},
	{
		name: "Transparence",
		description:
			"Nous nous engageons à maintenir une communication ouverte et transparente tout au long du projet.",
		icon: ChatBubbleOvalLeftEllipsisIcon,
	},
	{
		name: "Qualité",
		description:
			"Nous nous engageons à livrer un travail de haute qualité, en veillant à ce que chaque aspect de votre projet soit testé, stable et performant.",
		icon: HandThumbUpIcon,
	},
	{
		name: "Éthique",
		description:
			"Nous nous engageons à adopter une approche éthique dans tout ce que nous faisons. Cela signifie respecter les délais, les budgets et les attentes de nos clients, tout en gardant un comportement responsable et respectueux.",
		icon: HeartIcon,
	},
	{
		name: "Innovation",
		description:
			"Nous nous engageons à vous aider à rester à la pointe de votre secteur. Nous explorons continuellement de nouvelles méthodes et technologies pour transformer vos idées en réalités novatrices.",
		icon: TrophyIcon,
	},
];

export default function Engagement() {
	return (
		<div id="engagement" className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
					<h2 className="text-3xl font-bold tracking-tight text-cyan-800 sm:text-4xl">
						Nos Engagements
					</h2>
					<dl className="col-span-2 grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2">
						{features.map((feature) => (
							<div key={feature.name}>
								<dt className="text-base font-semibold leading-7 text-gray-900">
									<div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-700">
										<feature.icon
											className="h-6 w-6 text-white"
											aria-hidden="true"
										/>
									</div>
									{feature.name}
								</dt>
								<dd className="mt-1 text-base leading-7 text-gray-600">
									{feature.description}
								</dd>
							</div>
						))}
					</dl>
				</div>
			</div>
		</div>
	);
}
