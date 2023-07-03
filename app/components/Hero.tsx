"use client";
import { useState } from "react";
import Image from "next/image";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Team", href: "#team" },
	{ name: "Engagements", href: "#" },
	{ name: "Clients", href: "#" },
	{ name: "Contact", href: "#" },
];

export default function Hero() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	return (
		<div className="">
			<header className="absolute inset-x-0 top-0 z-50">
				<div className="mx-auto max-w-7xl">
					<div className="px-6 pt-6 lg:max-w-2xl lg:pl-8 lg:pr-0">
						<nav
							className="flex items-center justify-between lg:justify-start"
							aria-label="Global"
						>
							<a
								href="#"
								className="-m-1.5 p-1.5 font-exo font-black text-2xl text-cyan-800"
							>
								<span className="sr-only">Ethic Team</span>
								<p>Ethic Team</p>
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700 lg:hidden"
								onClick={() => setMobileMenuOpen(true)}
							>
								<span className="sr-only">Open main menu</span>
								<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							</button>
							<div className="hidden lg:ml-12 lg:flex lg:gap-x-14">
								{navigation.map((item) => (
									<a
										key={item.name}
										href={item.href}
										className="text-sm font-semibold leading-6 text-gray-900"
									>
										{item.name}
									</a>
								))}
							</div>
						</nav>
					</div>
				</div>
				<Dialog
					as="div"
					className="lg:hidden"
					open={mobileMenuOpen}
					onClose={setMobileMenuOpen}
				>
					<div className="fixed inset-0 z-50" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-slate-50 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a
								href="#"
								className="-m-1.5 p-1.5 font-exo font-black text-2xl text-cyan-800"
							>
								<span className="sr-only">Ethic Team</span>
								<p>Ethic Team</p>
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									{navigation.map((item) => (
										<a
											key={item.name}
											href={item.href}
											className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
										>
											{item.name}
										</a>
									))}
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</header>

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
										href="#"
										className="rounded-md bg-amber-700 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-amber500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
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
		</div>
	);
}
