import Navbar from '../components/navbar';
import connectDB from '../../lib/mongodb';
import User from '../../Models/User';

export default function Profile({ users }) {
	return (
		<div>
			<Navbar />

			<div>
				<section className="pt-16 bg-blueGray-50">
					<div className="w-full lg:w-4/12 px-4 mx-auto">
						<div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
							<div className="px-6">
								<div className="flex flex-wrap justify-center">
									<div className="w-full px-4 flex justify-center">
										<div className="relative">
											<img
												alt="Imagen de perfil"
												src="https://demos.creative-tim.com/notus-js/assets/img/team-2-800x800.jpg"
												className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
											/>
										</div>
									</div>
								</div>
								<div className="text-center mt-12">
									<h3 className="text-xl font-semibold leading-normal mb-2 text-black mb-2">
										{users.map(user => (
											<div>
												<h1>{user.name}</h1>
											</div>
										))}
									</h3>
									<div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
										<i className="fas fa-map-marker-alt mr-2 text-lg text-black"></i>
										{users.map(user => (
											<div>
												<h1>{user.dni}</h1>
											</div>
										))}
									</div>
									<div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
										<i className="fas fa-map-marker-alt mr-2 text-lg text-black"></i>
										{users.map(user => (
											<div>
												<h1>{user.relationship}</h1>
											</div>
										))}
									</div>
									<div className="text-sm leading-normal mt-0 mb-2 text-black font-bold uppercase">
										<i className="fas fa-map-marker-alt mr-2 text-lg text-black"></i>
										{users.map(user => (
											<div>
												<h1>{user.gender}</h1>
											</div>
										))}
									</div>
								</div>
								<div className="mt-10 py-10 border-t border-blueGray-200 text-center">
									<div className="flex flex-wrap justify-center">
										<a href="http://localhost:3000/" class="flex items-center">
											<img
												src="https://mir-s3-cdn-cf.behance.net/projects/404/20681065.54468ea62dc38.jpg"
												class="mr-3 h-6 sm:h-10"
												alt="Cerveza Salta Logo"
											/>
											<span class="self-center text-xl font-semibold whitespace-nowrap dark:text-black">
												Sindicato de Cerveceros de Salta
											</span>
										</a>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <footer className="relative  pt-8 pb-6 mt-8">
				<div className="container mx-auto px-4">
					<div className="flex flex-wrap items-center md:justify-between justify-center">
						<div className="w-full md:w-6/12 px-4 mx-auto text-center">
							<div className="text-sm text-blueGray-500 font-semibold py-1">
								Made with{' '}
								<a
									href="https://www.creative-tim.com/product/notus-js"
									className="text-blueGray-500 hover:text-gray-800"
									target="_blank"
								>
									Notus JS
								</a>{' '}
								by{' '}
								<a
									href="https://www.creative-tim.com"
									className="text-blueGray-500 hover:text-blueGray-800"
									target="_blank"
								>
									{' '}
									Creative Tim
								</a>
								.
							</div>
						</div>
					</div>
				</div>
			</footer> */}
				</section>
			</div>
		</div>
	);
}

export async function getServerSideProps() {
	try {
		await connectDB();

		const res = await User.find({});
		const users = res.map(e => {
			const user = e.toObject();
			user._id = user._id.toString();
			return user;
		});
		return { props: { users: users } };
	} catch (error) {
		console.log(error);
	}
}
