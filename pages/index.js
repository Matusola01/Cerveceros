import Head from 'next/head';
import connectDB from '../lib/mongodb';
import User from '../Models/User';

export default function Home({ users }) {
	console.log(users);
	return (
		<>
			{users.map(user => (
				<div>
					<h1>Nombre y apellido: {user.name}</h1>
					<h2>DNI: {user.dni}</h2>
					<h2>Parentesco: {user.relationship}</h2>
					<h2>Género: {user.gender}</h2>
				</div>
			))}
		</>
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
