import Image from "next/image";

const testimonials = [
	{
		body: "Alexandre a une bonne vision d'ensemble des solutions IoT basées sur AWS, ainsi que des bonnes pratiques d'architecte. Superbe expérience, à renouveler !",
		author: {
			name: "Sandro",
			handle: "MarveLock SAS",
			imageUrl:
				"https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "J'ai eu à travailler avec Sébastien dans mes précédents postes et je ne peux que le recommander: sérieux, force de proposition, compétent et bienveillant! Merci pour ce beau travail.",
		author: {
			name: "Pierre Dillac",
			handle: "DAF groupe SIROB",
			imageUrl:
				"/images/pierre_profil.jpeg",
		},
	},
	{
		body: "Alexandre est un collaborateur d'exception. Vous pouvez lui confier votre projet les yeux fermés.",
		author: {
			name: "Ama",
			handle: "Read-ing",
			imageUrl:
				"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
	{
		body: "Merci Sébastien pour la qualité de l'application livrée pour notre société, en respectant les délais, le cahier des charges, la charte graphique, et toutes les fonctionnalités spécifiées ! Au delà du professionnalisme apprécié lors de nos échanges, ces derniers ont été fort conviviaux et constructifs. Bonne continuation.",
		author: {
			name: "Amine Ayadi",
			handle: "manager Ayteams",
			imageUrl:
				"/images/amine_profil.jpeg",
		},
	},
    {
		body: "Collaborer avec Alexandre sur un projet complexe de contrôle de Saunas à distance a été une expérience très positive. Il a su prendre en charge tous les aspects techniques, de la conception initiale à la mise en œuvre finale, démontrant une communication claire, des choix techniques judicieux et une exécution efficace. Il maîtrise parfaitement l'anglais et le français, ce qui a facilité les interactions avec les autres collaborateurs du projet. Ses compétences techniques, sa curiosité et son pragmatisme font de lui un développeur que je recommande chaleureusement et avec qui j'aurais plaisir à travailler sur d'autres projets.",
		author: {
			name: "Guillaume Hammadi",
			handle: "Cedar Leaf Technology Limited",
			imageUrl:
				"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
		},
	},
    {
		body: "J'apprécie chez Sébastien la juste analyse des besoins, les propositions pertinentes et créatives et la qualité des livrables. Le tout dans le cadre d'échanges créateurs de valeur pour l'un et l'autre. Merci Sébastien.",
		author: {
			name: "Boris Benet",
			handle: "Coach Holistis",
			imageUrl:
				"/images/boris-profil-787x787.jpg",
		},
	},
    {
		body: "Sébastien is an outstanding and compassionate professional, with strong core values and a powerful work ethic. He is very passionate and highly skilled, thanks to his team mind set.",
		author: {
			name: "Rodolphe Sinimale",
			handle: "Metta Bhavana",
			imageUrl:
				"/images/rodolphe_profil.jpeg",
		},
	},

	// More testimonials...
];

export default function Testimonials() {
	return (
		<div id="clients" className="py-24 sm:py-32">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<div className="mx-auto max-w-xl text-center">
					<h2 className="text-lg font-semibold leading-8 tracking-tight text-cyan-800">
						Nos clients nous recommandent
					</h2>
					<p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
						Nous avons eu la chance de travailler avec une multitude de
						personnes extraordinaires
					</p>
				</div>
				<div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
					<div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
						{testimonials.map((testimonial) => (
							<div
								key={testimonial.author.handle}
								className="pt-8 sm:inline-block sm:w-full sm:px-4"
							>
								<figure className="rounded-2xl bg-gray-50 p-8 text-sm leading-6">
									<blockquote className="text-gray-900">
										<p>{`“${testimonial.body}”`}</p>
									</blockquote>
									<figcaption className="mt-6 flex items-center gap-x-4">
										<Image
											className="h-10 w-10 rounded-full bg-gray-50"
											src={testimonial.author.imageUrl}
                                            width={256}
                                            height={250}
											alt=""
										/>
										<div>
											<div className="font-semibold text-gray-900">
												{testimonial.author.name}
											</div>
											<div className="text-gray-600">{`@${testimonial.author.handle}`}</div>
										</div>
									</figcaption>
								</figure>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
