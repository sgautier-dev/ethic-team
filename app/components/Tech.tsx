import Image from "next/image";

const tech = [
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
		alt: "Javascript",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
		alt: "Typescript",
	},
  {
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
		alt: "React",
	},
  {
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg",
		alt: "Next",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
		alt: "TailwindCSS",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original-wordmark.svg",
		alt: "Java",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
		alt: "C++",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
		alt: "Go",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
		alt: "Redux",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-plain-wordmark.svg",
		alt: "Node",
	},
  {
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain-wordmark.svg",
		alt: "Graphql",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg",
		alt: "Postgres",
	},
	{
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg",
		alt: "Mongodb",
	},
  {
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original-wordmark.svg",
		alt: "Docker",
	},
  {
		src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg",
		alt: "Git",
	},
];

export default function Tech() {
	return (
		<div id="stack" className=" py-24 sm:py-32 border-2 border-gray-900 rounded-lg shadow-lg">
			<div className="mx-auto max-w-7xl px-6 lg:px-8">
				<h2 className="text-center text-lg font-semibold leading-8 text-cyan-800">
					Des idées innovantes méritent des outils à la pointe.
				</h2>
				<div className="mx-auto mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
					{tech.map((item) => (
						<Image
							key={item.alt}
							className="max-h-20 w-full object-contain"
							src={item.src}
							alt={item.alt}
							width={158}
							height={48}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
