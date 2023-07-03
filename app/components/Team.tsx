import Image from "next/image";

const people = [
	{
		name: "Sébastien Gautier",
		role: "Ingénieur FullStack Next.js",
		imageUrl: "/images/profil_seb_pro.jpg",
		bio: "Sébastien, ingénieur INSA basé sur l'île de la Réunion, est spécialisé en développement de plateformes web avec Next.js. Autonome, créatif et rigoureux, il est capable de gérer tous les aspects de votre projet. De la proposition de designs à la création de code performant, en passant par les tests jusqu'au déploiement et à la livraison, Sébastien assure un suivi complet et personnalisé. Attentif aux problématiques métiers et soucieux d'établir des relations de confiance avec nos clients, il est en charge du suivi de mission et se positionne comme votre interlocuteur privilégié tout au long de votre projet.",
		linkedinUrl: "https://www.linkedin.com/in/sebastien-gautier-55b38382",
	},
	{
		name: "Alexandre Desbiez",
		role: "Ingénieur FullStack IOT React Native",
		imageUrl: "/images/AlexProfil.jpg",
		bio: "Alexandre, ingénieur SUPAERO et expert en développement Full-Stack Backend/Mobile, est notre Tech Leader au sein de l'Ethic Team. Son expertise dans la conception d'infrastructures solides, le développement de bases de données performantes et la réalisation d'interfaces utilisateur intuitives est renforcée par une attention particulière portée à la qualité, la performance et la sécurité. Avec une méthode de travail efficace et une riche expérience entrepreneuriale, Alexandre comprend et répond à vos besoins de manière unique. Il vise à surmonter vos défis techniques et à propulser votre vision vers le succès.",
		linkedinUrl: "https://www.linkedin.com/in/alex-desbiez-7b017589",
	},
];

export default function Team() {
	return (
		<div id="team" className="py-24 md:py-32 lg:py-40">
			<div className="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
				<div className="mx-auto max-w-2xl lg:mx-0">
					<h2 className="text-3xl font-bold tracking-tight text-cyan-800 sm:text-4xl">
						La Team
					</h2>
					<p className="mt-6 text-lg leading-8 text-gray-600">
						Nous sommes une équipe d&apos;ingénieurs dynamique et engagée, unissant passion et
						expertise pour concevoir des expériences digitales impactantes. En
						harmonisant compétences techniques et relations humaines, nous
						concrétisons votre vision.
					</p>
				</div>
				<ul
					role="list"
					className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-20 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 xl:col-span-2"
				>
					{people.map((person) => (
						<li key={person.name}>
							<Image
								className="aspect-[3/2] w-full rounded-2xl object-cover"
								src={person.imageUrl}
								width={1024}
								height={1000}
								alt=""
							/>
							<h3 className="mt-6 text-lg font-semibold leading-8 text-gray-900">
								{person.name}
							</h3>
							<p className="text-base leading-7 text-gray-600">{person.role}</p>
							<p className="mt-4 text-base leading-7 text-gray-600">
								{person.bio}
							</p>
							<ul role="list" className="mt-6 flex gap-x-6">
								<li>
									<a
										href={person.linkedinUrl}
                                        target="no_blank"
										className="text-gray-400 hover:text-gray-500"
									>
										<span className="sr-only">LinkedIn</span>
										<svg
											className="h-5 w-5"
											aria-hidden="true"
											fill="currentColor"
											viewBox="0 0 20 20"
										>
											<path
												fillRule="evenodd"
												d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
												clipRule="evenodd"
											/>
										</svg>
									</a>
								</li>
							</ul>
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
