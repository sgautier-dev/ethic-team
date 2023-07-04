"use client";
import { useState, useEffect, FormEvent } from "react";
import Script from "next/script";
import { ExclamationTriangleIcon } from "@heroicons/react/24/solid";

export default function Contact() {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitMessage, setSubmitMessage] = useState<string>("Envoyer");
	const [submitError, setSubmitError] = useState<string>("");

	//hidding Google reCaptcha badge from page
	useEffect(() => {
		const style = document.createElement("style");
		style.innerHTML = `
		  .grecaptcha-badge {
			visibility: hidden !important;
		  }
		`;
		document.head.appendChild(style);
	}, []);

	const getRecaptchaToken = async () => {
		try {
			const token = await window.grecaptcha.execute(
				process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY,
				{ action: "contact_form" }
			);
			return token;
		} catch (error) {
			console.error(error);
			return null;
		}
	};

	const validateEmail = (email: string) => {
		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
		return emailRegex.test(email);
	};

	const resetForm = () => {
		setFirstName("");
		setLastName("");
		setEmail("");
		setMessage("");
		setSubmitError("");
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();

		setSubmitError("");
		setIsSubmitting(true);
		setSubmitMessage("Envoi en cours...");

		const token = await getRecaptchaToken();

		if (!token) {
			setSubmitError(
				"Erreur lors de la vérification de sécurité. Veuillez réessayer."
			);
			setSubmitMessage("Envoyer");
			setIsSubmitting(false);
			return;
		}

		if (!validateEmail(email)) {
			setSubmitError("Veuillez entrer une adresse e-mail valide.");
			return;
		}

		try {
			// sending email
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify({ email, firstName, lastName, message, token }),
			});

			const data = await response.json();

			if (response.ok) {
				setSubmitMessage(data.message);
				resetForm();
			} else {
				throw new Error(
					data.message || "Une erreur est survenue. Veuillez réessayer."
				);
			}

			// throw new Error('test erreur')
		} catch (error: any) {
			console.error(error);
			setSubmitError(error.message);
		} finally {
			setTimeout(() => {
				setSubmitMessage("Envoyer");
			}, 3000); // delay before resetting the submission message
			setIsSubmitting(false);
		}
	};

	return (
		<div id="contact" className="relative isolate bg-gray-900 rounded-lg">
			<div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
				<div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-48">
					<div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
						<div className="absolute inset-y-0 left-0 -z-10 w-full overflow-hidden ring-1 ring-white/5 lg:w-1/2">
							<svg
								className="absolute inset-0 h-full w-full stroke-gray-700 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
								aria-hidden="true"
							>
								<defs>
									<pattern
										id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2"
										width={200}
										height={200}
										x="100%"
										y={-1}
										patternUnits="userSpaceOnUse"
									>
										<path d="M130 200V.5M.5 .5H200" fill="none" />
									</pattern>
								</defs>
								<svg
									x="100%"
									y={-1}
									className="overflow-visible fill-gray-800/20"
								>
									<path d="M-470.5 0h201v201h-201Z" strokeWidth={0} />
								</svg>
								<rect
									width="100%"
									height="100%"
									strokeWidth={0}
									fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)"
								/>
							</svg>
							<div
								className="absolute -left-56 top-[calc(100%-13rem)] transform-gpu blur-3xl lg:left-[max(-14rem,calc(100%-59rem))] lg:top-[calc(50%-7rem)]"
								aria-hidden="true"
							>
								<div
									className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-br from-[#80caff] to-[#4f46e5] opacity-20"
									style={{
										clipPath:
											"polygon(74.1% 56.1%, 100% 38.6%, 97.5% 73.3%, 85.5% 100%, 80.7% 98.2%, 72.5% 67.7%, 60.2% 37.8%, 52.4% 32.2%, 47.5% 41.9%, 45.2% 65.8%, 27.5% 23.5%, 0.1% 35.4%, 17.9% 0.1%, 27.6% 23.5%, 76.1% 2.6%, 74.1% 56.1%)",
									}}
								/>
							</div>
						</div>
						<h2 className="text-3xl font-bold tracking-tight text-white">
							Travaillons ensemble !
						</h2>
						<p className="mt-6 text-lg leading-8 text-gray-300">
							Votre projet mérite une expertise de pointe et une approche axée
							sur l&apos;humain. Partagez vos idées avec nous et découvrez
							comment Ethic Team peut transformer votre vision en réalité.
						</p>
					</div>
				</div>
				<form
					onSubmit={handleSubmit}
					className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-48"
				>
					<div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
						<div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
							<div>
								<label
									htmlFor="first-name"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Prénom
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="first-name"
										id="first-name"
										autoComplete="given-name"
										value={firstName}
										onChange={(e) => setFirstName(e.target.value)}
										required
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div>
								<label
									htmlFor="last-name"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Nom
								</label>
								<div className="mt-2.5">
									<input
										type="text"
										name="last-name"
										id="last-name"
										autoComplete="family-name"
										value={lastName}
										onChange={(e) => setLastName(e.target.value)}
										required
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							<div className="sm:col-span-2">
								<label
									htmlFor="email"
									className="block text-sm font-semibold leading-6 text-white"
								>
									E-mail
								</label>
								<div className="mt-2.5">
									<input
										type="email"
										name="email"
										id="email"
										autoComplete="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										required
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
							{/* <div className="sm:col-span-2">
								<label
									htmlFor="phone-number"
									className="block text-sm font-semibold leading-6 text-white"
								>
									N° de téléphone
								</label>
								<div className="mt-2.5">
									<input
										type="tel"
										name="phone-number"
										id="phone-number"
										autoComplete="tel"
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div> */}
							<div className="sm:col-span-2">
								<label
									htmlFor="message"
									className="block text-sm font-semibold leading-6 text-white"
								>
									Message
								</label>
								<div className="mt-2.5">
									<textarea
										name="message"
										id="message"
										rows={4}
										value={message}
										onChange={(e) => setMessage(e.target.value)}
										required
										className="block w-full rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-amber-500 sm:text-sm sm:leading-6"
									/>
								</div>
							</div>
						</div>
						<div className="mt-8 flex justify-end">
							<button
								type="submit"
								disabled={isSubmitting}
								className="rounded-md bg-amber-700 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-amber-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700"
							>
								{submitMessage}
							</button>
							{submitError && (
								<div className="mt-2 text-sm sm:text-base flex items-center text-amber-300">
									<ExclamationTriangleIcon
										className="h-5 w-5"
										aria-hidden="true"
									/>
									<p className="ml-2">{submitError}</p>
								</div>
							)}
						</div>
					</div>
				</form>
			</div>
			<Script
				src={`https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`}
			/>
		</div>
	);
}
