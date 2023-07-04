"use client";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
	{ name: "Team", href: "#team" },
	{ name: "Stack", href: "#stack" },
	{ name: "Engagements", href: "#engagement" },
	{ name: "Clients", href: "#clients" },
	{ name: "Contact", href: "#contact" },
];

export default function Header() {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	return (
		<header className="sticky inset-x-0 top-0 z-50 bg-slate-50">
			<div className="mx-auto max-w-7xl">
				<div className="p-3 lg:max-w-2xl lg:pl-8 lg:pr-0">
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
							onClick={() => setMobileMenuOpen(false)}
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
										onClick={() => setMobileMenuOpen(false)}
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
	);
}
