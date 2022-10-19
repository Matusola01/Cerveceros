import connectDB from '../../lib/mongodb';
import User from '../../Models/User';

export default function Credential(user) {
	return (
		<div className=" bg-[url(../Images/Credencial.jpeg)] bg-no-repeat bg-cover bg-center w-auto h-screen">
			{/* {user.map(userDb => ( */}
			<div className="justify-center text-center indent-px p-6 pt-24">
				<h2 className="text-4xl font-semibold leading-normal text-black">Nombre y apellido: {user.name}</h2>
				<h2 className="text-4xl font-semibold leading-normal text-black">DNI: {user.dni}</h2>
				<h2 className="text-4xl font-semibold leading-normal text-black">Parentesco: {user.relationship}</h2>
				<h2 className="text-4xl font-semibold leading-normal text-black">Género: {user.gender}</h2>
			</div>
			{/* ))} */}
		</div>
	);
}
