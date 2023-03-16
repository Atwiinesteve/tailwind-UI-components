import React from "react";

export default function SigninForm() {
	return (
		<div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 min-h-full">
			<div className="w-full max-w-md space-y-8">
				<div>
					<img
						className="mx-auto h-12 w-auto"
						src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
						alt="your company"
					/>
					<h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
						Sign in to your account
					</h2>
					<p className="mt-2 text-center text-sm text-gray-900">
						Or{" "}
						<a
							className="font-medium text-indigo-600 hover:text-indigo-500"
							href="/free-trial">
							start your 14-day free trial
						</a>
					</p>
				</div>

				<form className="mt-8 space-y-6" action="#" method="POST">
					<input name="remember" defaultValue="true" type="hidden" />
					<div className="space-y-2 rounded-md shadow-sm">
						<div>
							<label htmlFor="" className="sr-only">
								Email Address
							</label>
							<input
								type="email"
								autoComplete="email"
								className="relative block w-full rounded-sm border-0 py-1.3 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								placeholder="Email Address"
							/>
						</div>
						<div>
							<label htmlFor="" className="sr-only">
								Password
							</label>
							<input
								className="relative block w-full rounded-sm border-0 py-1.3 px-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:z-10 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
								autoComplete="password"
								type="password"
							/>
						</div>
					</div>
					<div className="flex items-center justify-center space-x-4">
						<div className="flex items-center">
							<input
								type="checkbox"
								name="remember-me"
								className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
							/>
							<label htmlFor="" className="ml-2 block text-sm text-gray-900">
								Remember me
							</label>
						</div>
						<div className="text-sm">
							<a
								href="/forgot-password"
								className="font-medium text-indigo-600 hover:text-indigo-500">
								Forgot Password?
							</a>
						</div>
					</div>

					<div>
						<button
							className="group relative flex w-full justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
							type="submit">
							<span className="absolute inset-y-0 left-0 flex items-center pl-3">
								<svg
									class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
									viewBox="0 0 20 20"
									fill="currentColor"
									aria-hidden="true">
									<path
										fill-rule="evenodd"
										d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
										clip-rule="evenodd"
									/>
								</svg>
							</span>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
