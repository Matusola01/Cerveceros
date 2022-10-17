export default function Navbar() {
	return (
		<nav class="p-3 bg-gray-50 rounded border-gray-200 dark:bg-gray-800 dark:border-gray-700">
			<div class="container flex flex-wrap justify-between items-center mx-auto">
				<a href="http://localhost:3000/" class="flex items-center">
					<img
						src="https://www.cervezasalta.com.ar/img/logo-salta.png"
						class="mr-3 h-6 sm:h-10"
						alt="Cerveza Salta Logo"
					/>
					<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
						Sindicato de Cerveceros de Salta
					</span>
				</a>

				<div class="hidden w-full md:block md:w-auto" id="navbar-solid-bg">
					<ul class="flex flex-col mt-4 bg-gray-50 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
						<li>
							<a
								href="http://localhost:3000/"
								class="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
								aria-current="page"
							>
								Home
							</a>
						</li>
						<li>
							<a
								href="http://localhost:3000/profile/123"
								class="block py-2 pr-4 pl-3 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
							>
								Perfil
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
}
