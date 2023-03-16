import React from 'react'

export default function SigninForm() {
  return (
		<div>
			<div>
				<div>
					<img src="" alt="" />
					<h2>Sign in to your account</h2>
					<p>
						or
						<a href="/free-trial">start your 14-day free trial</a>
					</p>
				</div>
				<form>
					<input type="hidden" />
					<div>
						<div>
							<label htmlFor="">Email Address</label>
							<input type="email" />
						</div>
						<div>
							<label htmlFor="">Password</label>
							<input type="password" />
						</div>
					</div>
					<div>
						<div>
							<input type="checkbox" />
							<label htmlFor="">Remember me</label>
						</div>
						<div>
							<a href="/forgot-password">Forgot Password?</a>
						</div>
					</div>
					<button>
						<span>
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
				</form>
			</div>
		</div>
	);
};